import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa6";
import AuthLeft from "../components/AuthLeft";
import { useNavigate } from "react-router-dom";

const LoginPage = ({user,setUser}) => {
    const baseURL=import.meta.env.VITE_BACKEND_URL;
    const navigate=useNavigate();
    const [passVisible,setPassVisible]=useState(false);
    const [loginInfo,setLoginInfo]=useState({Email:"",Password:""});
    const [loginError,setLoginError]=useState({Email:'',Password:''});
    async function handleLoginSubmit(e) {
        e.preventDefault();
        const isValid = validateLogin();
        if (!isValid) return;
        try {
            const res = await fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: loginInfo.Email,
                password: loginInfo.Password,
            }),
            });

            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('token', data.token); 
                localStorage.setItem('user', JSON.stringify(data.user));
                setUser(data.user);
                alert("Login Successful!");
                const from = location.state?.from;
                if (from && from.pathname.includes('/viewmore/')) {
                    navigate(from.pathname, { state: from.state });
                } else {
                    if(data.user?.role==='Admin'){
                        navigate('/admin/home');
                    }
                    else{
                        navigate('/');
                    }
                }
            } 
            else {
                alert(data.message || "Login failed");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
        }

        function validateLogin() {
        const newErrors = {};
        if (loginInfo.Email.trim() === "") {
            newErrors.Email = "No Email Address Entered";
        } else if (!loginInfo.Email.endsWith('@gmail.com')) {
            newErrors.Email = "Invalid Email (must end with @gmail.com)";
        }
        if (loginInfo.Password.trim() === "") {
            newErrors.Password = "No Password Entered";
        }

        setLoginError(newErrors);
        return Object.keys(newErrors).length === 0;
    }

  return (
    <>
      <div className="flex min-h-screen w-[100%]" style={{ fontFamily: "Poppins" }}>
        <AuthLeft />
        <div className="w-[50%] flex flex-col items-center gap-10 justify-center">
          <div className="font-semibold text-2xl flex items-center justify-center flex-col">
            <p>Welcome back to the</p>
            <p>Ugyan Tech Community</p>
          </div>
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-3 w-[50%]">
            <div className="flex flex-col">
                <div className="w-full relative">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="peer w-full border-b p-2 border-gray-400 focus:border-gray-700 cursor-pointer focus:outline-none pt-6 pb-1 bg-transparent"
                        onChange={(e)=>setLoginInfo({...loginInfo,Email:e.target.value})}
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-0 top-5 text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-valid:-translate-y-4 peer-valid:scale-90 peer-focus:-translate-y-4 peer-focus:scale-90"
                    >
                        Email
                    </label>
                </div>
                <div className="text-sm text-red-500 ">{loginError.Email}</div>
            </div>
            <div className="flex flex-col">
                <div className="w-full flex relative">
                <input
                    type={`${passVisible?"text":"password"}`} 
                    id="password"
                    name="password"
                    required
                    className="peer w-full border-b p-2 border-gray-400 focus:border-gray-700 cursor-pointer focus:outline-none pt-6 pb-1 bg-transparent"
                    
                    onChange={(e)=>setLoginInfo({...loginInfo,Password:e.target.value})}
                />
                <label
                    htmlFor="password"
                    className="absolute left-0 top-5 text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-valid:-translate-y-4 peer-valid:scale-90 peer-focus:-translate-y-4 peer-focus:scale-90"
                >
                    Password
                </label>
                <div className="absolute right-0 text-xl h-full px-3 flex justify-end items-end pb-2" onClick={()=>setPassVisible(!passVisible)}>
                        {passVisible?<FaEyeSlash color="gray" size={15} className="cursor-pointer"/>:<FaEye color="gray" size={15} className="cursor-pointer"/>}
                    </div>
                </div>
                <div className="text-sm text-red-500">{loginError.Password}</div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="cursor-pointer bg-black"
                />
                <label htmlFor="remember-me" className="cursor-pointer">
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                className="whitespace-nowrap bg-[#7B76F1] text-white text-sm px-10 py-4 rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-[#7B76F1] transition-all duration-200"
              >
                LOG IN
              </button>
            </div>
          </form>
          <div className="">
            <span className="text-sm text-gray-400">
              No Account yet?{" "}
              <span className="font-semibold underline text-gray-700 cursor-pointer">
                SIGN UP
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
