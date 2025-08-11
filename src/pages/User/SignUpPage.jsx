import AuthLeft from "../../components/AuthLeft";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
    const navigate=useNavigate();
    const baseURL=import.meta.env.VITE_BACKEND_URL;
  const [passVisible, setPassVisible] = useState(false);
  const [signupErr,setsignupErr]=useState('');
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Password: "",
    confirmPass: "",
    mobileNumber: "",
  });

  const [signUpError, setSignUpError] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Password: "",
    confirmPass: "",
    mobileNumber: "",
  });

  async function handleSignupSubmit(e) {
    e.preventDefault();
    const isValid = validateSignup();
    if (!isValid) return;

    try {
      const res = await fetch(`${baseURL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: signUpInfo.firstName,
          lastName: signUpInfo.lastName,
          email: signUpInfo.Email,
          password: signUpInfo.Password,
          mobileNumber: signUpInfo.mobileNumber,
        }),
      });

      const data = await res.json();
      console.log(data)
      console.log(res);
      if (res.ok) {
        alert("Signup Successful!");
        navigate('/login');

      } else {
        setsignupErr(data.error||"SignUp Failed");
      }
    } catch (err) {
      console.error(err);
      setsignupErr(data.error||"Something went wrong!Try after some time.");
    }
  }

  function validateSignup() {
    const newErrors = {};
    if (signUpInfo.firstName.trim() === "") {
      newErrors.firstName = "First Name not entered";
    }
    if (signUpInfo.lastName.trim() === "") {
      newErrors.lastName = "Last Name not entered";
    }
    if (signUpInfo.Email.trim() === "") {
      newErrors.Email = "No Mail Address Entered!";
    } else if (!signUpInfo.Email.endsWith("@gmail.com")) {
      newErrors.Email = "Only Gmail addresses allowed";
    }
    if (!signUpInfo.Password) {
      newErrors.Password = "No Password Entered!";
    } else {
      if (signUpInfo.Password.length < 8) {
        newErrors.Password = "Password must be at least 8 characters long";
      } else if (!/[A-Z]/.test(signUpInfo.Password)) {
        newErrors.Password = "Must include at least one uppercase letter";
      } else if (!/[a-z]/.test(signUpInfo.Password)) {
        newErrors.Password = "Must include at least one lowercase letter";
      } else if (!/[0-9]/.test(signUpInfo.Password)) {
        newErrors.Password = "Must include at least one number";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(signUpInfo.Password)) {
        newErrors.Password = "Must include at least one special character";
      }
    }
    if (signUpInfo.Password && signUpInfo.confirmPass !== signUpInfo.Password) {
      newErrors.confirmPass = "Passwords do not match";
    }
    if (signUpInfo.mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile Number not entered";
    }
    setSignUpError(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  return (
    <>
      <div className="flex w-[100%] min-h-screen">
        <AuthLeft />
        <div className="w-full lg:w-[50%] flex flex-col items-center gap-4 justify-center">
          <div className="font-semibold text-2xl flex items-center justify-center flex-col">
            <p>Join & Connect the Fastest</p>
            <p>Growing Online Community</p>
          </div>
          <form
            onSubmit={(e)=>handleSignupSubmit(e)}
            method="POST"
            className="flex flex-col gap-3 lg:w-[60%] w-full md:w-[70%] px-8"
          >
            <div className="flex justify-between gap-7">
              <div className="flex flex-col">
                <div className="relative">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    required
                    className="peer w-full border-b p-2 border-gray-400 focus:border-gray-700 cursor-pointer focus:outline-none pt-6 pb-1 bg-transparent"
                    onChange={(e) =>
                      setSignUpInfo({
                        ...signUpInfo,
                        firstName: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor="fname"
                    className="absolute left-0 top-5 text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-valid:-translate-y-4 peer-valid:scale-90 peer-focus:-translate-y-4 peer-focus:scale-90"
                  >
                    First Name
                  </label>
                </div>
                <div className="text-sm text-red-500 ">
                  {signUpError.firstName}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    required
                    className="peer w-full border-b p-2 border-gray-400 focus:border-gray-700 cursor-pointer focus:outline-none pt-6 pb-1 bg-transparent"
                    onChange={(e) =>
                      setSignUpInfo({ ...signUpInfo, lastName: e.target.value })
                    }
                  />
                  <label
                    htmlFor="lname"
                    className="absolute left-0 top-5 text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-valid:-translate-y-4 peer-valid:scale-90 peer-focus:-translate-y-4 peer-focus:scale-90"
                  >
                    Last Name
                  </label>
                </div>
                <div className="text-sm text-red-500 ">
                  {signUpError.lastName}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-full relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="peer w-full border-b p-2 border-gray-400 focus:border-gray-700 cursor-pointer focus:outline-none pt-6 pb-1 bg-transparent"
                  onChange={(e) =>
                    setSignUpInfo({ ...signUpInfo, Email: e.target.value })
                  }
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-5 text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-valid:-translate-y-4 peer-valid:scale-90 peer-focus:-translate-y-4 peer-focus:scale-90"
                >
                  Email
                </label>
              </div>
              <div className="text-sm text-red-500 ">{signUpError.Email}</div>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex relative">
                <input
                  type={`${passVisible ? "text" : "password"}`}
                  id="password"
                  name="password"
                  required
                  className="peer w-full border-b p-2 border-gray-400 focus:border-gray-700 cursor-pointer focus:outline-none pt-6 pb-1 bg-transparent"
                  onChange={(e) =>
                    setSignUpInfo({ ...signUpInfo, Password: e.target.value })
                  }
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 top-5 text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-valid:-translate-y-4 peer-valid:scale-90 peer-focus:-translate-y-4 peer-focus:scale-90"
                >
                  Password
                </label>
                <div
                  className="absolute right-0 text-xl h-full px-3 flex justify-end items-end pb-2"
                  onClick={() => setPassVisible(!passVisible)}
                >
                  {passVisible ? (
                    <FaEyeSlash
                      color="gray"
                      size={15}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaEye color="gray" size={15} className="cursor-pointer" />
                  )}
                </div>
              </div>
              <div className="text-sm text-red-500">{signUpError.Password}</div>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex relative">
                <input
                  type="password"
                  id="confirmpass"
                  name="confirmpass"
                  required
                  className="peer w-full border-b p-2 border-gray-400 focus:border-gray-700 cursor-pointer focus:outline-none pt-6 pb-1 bg-transparent"
                  onChange={(e) =>
                    setSignUpInfo({ ...signUpInfo, confirmPass: e.target.value })
                  }
                />
                <label
                  htmlFor="confirmpass"
                  className="absolute left-0 top-5 text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-valid:-translate-y-4 peer-valid:scale-90 peer-focus:-translate-y-4 peer-focus:scale-90"
                >
                  Confirm Password
                </label>
              </div>
              <div className="text-sm text-red-500">{signUpError.confirmPass}</div>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex relative">
                <input
                  type="text"
                  id="mbnum"
                  name="mbnum"
                  required
                  className="peer w-full border-b p-2 border-gray-400 focus:border-gray-700 cursor-pointer focus:outline-none pt-6 pb-1 bg-transparent"
                  onChange={(e) =>
                    setSignUpInfo({ ...signUpInfo, mobileNumber: e.target.value })
                  }
                />
                <label
                  htmlFor="mbnum"
                  className="absolute left-0 top-5 text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-valid:-translate-y-4 peer-valid:scale-90 peer-focus:-translate-y-4 peer-focus:scale-90"
                >
                  Mobile Number
                </label>
              </div>
              <div className="text-sm text-red-500">{signUpError.mobileNumber}</div>
            </div>
            <div className="relative flex w-full justify-end items-center">
              <span className="absolute left-0 text-red-500 font-semibold opacity-90">
                  {signupErr}
              </span>
              <button
                type="submit"
                className="whitespace-nowrap bg-[#7B76F1] text-white text-sm px-10 py-4 rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-[#7B76F1] transition-all duration-200"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <div className="">
            <span className="text-sm text-gray-400">
              Already a member?{" "}
              <span className="font-semibold underline text-gray-700 cursor-pointer" onClick={()=>navigate('/login')}>
                LOGIN
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupPage;
