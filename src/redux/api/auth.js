import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { auth, db } from "../../configs/firebase.config";
import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          if (!email || !password) return {error:"Invalid credentials!"};
          const user = await checkUserExists(email);
          if (user.empty) return {error:"Error login user: User not found!"};
          const authResponse = await signInWithEmailAndPassword(auth, email, password);
          if (!authResponse) return {error:"Invalid credentials"};
          return { data: user.docs[0].data(), id: user.docs[0].id };
        } catch (error) {
        return {error}
        }
      },
    }),
    register: builder.mutation({
      queryFn: async ({ name, email, password }) => {
        try {
          if (password.length < 7) return {error:"Password minimum length is 8 characters!"};
          if (!email || !password || !name) return {error:"Invalid credentials!"};
          const userExists = await checkUserExists(email);
          if (!userExists.empty) return {error:"Error creating user: User already exists!"}
          const newUser = await createUserToFirestore(name, email);
          const { user } = await createUserWithEmailAndPassword(auth, newUser.email, password);
          if (!user) return {error:"Error creating user: User data not received!"}
          return { data: newUser };
        } catch (error) {
            return {error:error}
        }
      },
    }),
  }),
});

const checkUserExists = async (email) => {
  let ref = collection(db, "users");
  let q = query(ref, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

const createUserToFirestore = async (name, email) => {
  var timestamp = new Date().toString();
  const userRef = await addDoc(collection(db, "users"), { name, email, createdAt: timestamp });
  const postedUser = await getDoc(userRef);
  if (!postedUser.exists()) throw new Error("Error creating user: User data not received!");
  const newUser = { ...postedUser.data(), id: postedUser.id };
  return newUser;
};

export const { useLoginMutation, useRegisterMutation } = authApi;
