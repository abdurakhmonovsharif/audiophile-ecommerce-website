import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { toast } from "react-toastify";

function Login() {
  const { register, handleSubmit } = useForm();
  const [loginUser] = useLoginMutation();
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const handleLogin = async (data) => {
      const userData = await loginUser(data);
      if("error" in userData){
        if(userData.error.code==="auth/invalid-credential"){
            return notify("Invalid credential","error")
        }else{
            return notify(userData.error,"error")
        }
      }else if("data" in userData){
        dispatch(setUser(userData.data));
       localStorage.setItem("user",JSON.stringify(userData.data))
          notify("Login successfully!", "success");
          navigate("/");
      }
  
  };
  
 const notify = (message,type) => toast[type](message);
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ backgroundColor: "#D87D4A" }}
    >
      <div className="bg-white rounded-md p-8 max-w-md w-full">
        <h1 className="text-3xl text-black text-center mb-4">Login</h1>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleLogin)}
        >
          <label className="form-label">
            <span>Email:</span>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className="input-field"
            />
          </label>
          <label className="form-label">
            <span>Password:</span>
            <input
              type="password"
              {...register("password")}
              placeholder="Your password"
              className="input-field"
            />
          </label>
          <button className="btn bg-black text-white">Submit</button>
          <Link to="/sign_up" className="btn bg-black text-white text-center">
            If you don't have an account click here
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
