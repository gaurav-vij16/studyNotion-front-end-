import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Loginform({setsignedup}) {
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPass, setShowPass] = useState(false);

    function togglePasswordVisibility() {
        setShowPass((prevShowPass) => !prevShowPass);
    }

   function submitHandler(event){
    event.preventDefault();
    setsignedup(true)
    toast.success("Logged In succesfully")
    navigate("/dashboard");

   }
    return (
        <form onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6">

           

            <label className="w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                Email Address
                <sup className=" text-pink-400">*</sup>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    required
                    onChange={changeHandler}
                    placeholder="Enter email Add"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
            </label>


            <label className=" w-full text-[0.875ren] text-richblack-5 mb-1 leading-[1.375rem] relative ">
                Password <sup className=" text-pink-400">*</sup>
                <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    value={formData.password}
                    required
                    placeholder="Enter password"
                    className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    onChange={changeHandler}
                />
            </label>
            <span
                type="button"
                className="absolute bottom-[394px]  left-[590px] cursor-pointer text-white"
                onClick={togglePasswordVisibility}
            >
                {showPass ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />}
            </span>

            <Link to="#" className=" cursor-pointer text-blue-100 text-xs ml-auto -mt-3">
            Forget Password
            </Link>

            <button 
            className=" flex justify-center items-center border border-richblack-700 px-[12px] rounded-[8px]
            font-medium text-black py-[8px] gap-x-2 mt-6 bg-yellow-50"
            type="submit">Sign In</button>
        </form>
    );
}

export default Loginform;
