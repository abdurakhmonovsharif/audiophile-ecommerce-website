import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../redux/api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { toast } from 'react-toastify';

function SignUp() {
    const {handleSubmit,register}=useForm();
    const [signUp]=useRegisterMutation();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user =useSelector((state)=>state.user);
    const handleSignUp=async(data)=>{
     const userData =await signUp(data);
     if("error" in userData){
        return notify(userData.error,"error")
     }else if("data" in userData){
       dispatch(setUser(userData.data));
       console.log(user);
       localStorage.setItem("user",JSON.stringify(userData.data))
       navigate("/");
       return notify("Account successfully created!","success")
    }
    }
 const notify = (message,type) => toast[type](message);

    return (
        <div className='h-screen flex justify-center items-center' style={{ backgroundColor: '#D87D4A' }}>
            <div className='bg-white rounded-md p-8 max-w-md w-full'>
                <h1 className='text-3xl text-black text-center mb-4'>Sign Up</h1>
                <form className='flex flex-col gap-3' onSubmit={handleSubmit(handleSignUp)}>
                    <label className='form-label'>
                        <span>Name:</span>
                        <input {...register("name")} type="text" placeholder='Enter your name' className='input-field' />
                    </label>
                    <label className='form-label'>
                        <span>Email:</span>
                        <input  {...register("email")} type="email" placeholder='Enter your email address' className='input-field' />
                    </label>
                    <label className='form-label'>
                        <span>Password:</span>
                        <input  {...register("password")} type="password" placeholder='Your password' className='input-field' />
                    </label>
                    <button className='btn bg-black text-white'>Submit</button>
                    <Link to="/" className="btn bg-black text-white text-center">
                        If you already have an account click here to login
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp;