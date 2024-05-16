import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function YourComponent() {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (btnType) => {
        setActiveButton(btnType);
    };

    return (
        <div className="rounded-full bg-richblack-800 w-[220px] h-[50px]">
            <button
                className={`text-richblack-25 text-lg rounded-full ml-2 mt-2  ${
                    activeButton === 'student' ? 'bg-black' : 'bg-richblack-800'
                } w-24 h-[40px] text-center`}
                onClick={() => handleButtonClick('student')}
            >
                <p className="font-bold leading-[1.375rem]">Student</p>
            </button>
            <button
                className={`text-richblack-25 text-lg rounded-full ml-2 mr-2 ${
                    activeButton === 'instructor' ? 'bg-black' : 'bg-richblack-800'
                } w-24 h-[40px] text-center`}
                onClick={() => handleButtonClick('instructor')}
            >
                <p className="font-bold leading-[1.375rem]">Instructor</p>
            </button>
        </div>
    );
}

function Signform({ setsignedup }) {
    const navigate = useNavigate();

    const [formData, setFormdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPass1, setshowPass1] = useState(false);
    const [showPass2, setshowPass2] = useState(false);

    const inputChange = (event) => {
        setFormdata((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setshowPass1(!showPass1);
        } else if (field === 'confirmPassword') {
            setshowPass2(!showPass2);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        setsignedup(true);
        toast.success('Yippee Signed In');
        navigate('/dashboard');
    };

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-3 mt-3">
            <YourComponent />

            <div className="flex gap-6">
                <label className="w-full text-[0.875rem] text-richblack-5  leading-[1.375rem]">
                    First Name<sup className="text-pink-400">*</sup>
                    <input
                        type="text"
                        required
                        name="firstName"
                        onChange={inputChange}
                        placeholder="Enter First Name"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        value={formData.firstName}
                    />
                </label>

                <label className="w-full text-[0.875rem] text-richblack-5  leading-[1.375rem] ">
                    Last Name<sup className="text-pink-400">*</sup>
                    <input
                        type="text"
                        required
                        name="lastName"
                        onChange={inputChange}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                    />
                </label>
            </div>

            <label className="w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                Email Address<sup className="text-pink-400">*</sup>
                <input
                    type="email"
                    required
                    name="email"
                    onChange={inputChange}
                    placeholder="Enter Email Address"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    value={formData.email}
                />
            </label>

            <div className="flex gap-2 ">
                <label className="w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] relative ">
                    Create Password<sup className="text-pink-400">*</sup>
                    <input
                        type={showPass1 ? 'text' : 'password'}
                        required
                        name="password"
                        onChange={inputChange}
                        placeholder="Enter Password"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        value={formData.password}
                    />
                    <span
                        className="absolute right-3 top-8 cursor-pointer text-white"
                        onClick={() => togglePasswordVisibility('password')}
                    >
                        {showPass1 ? (
                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        )}
                    </span>
                </label>

                <label className="w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] relative">
                    Confirm Password<sup className="text-pink-400">*</sup>
                    <input
                        type={showPass2 ? 'text' : 'password'}
                        required
                        name="confirmPassword"
                        onChange={inputChange}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                    />
                    <span
                        className="absolute right-3 top-8 cursor-pointer text-white"
                        onClick={() => togglePasswordVisibility('confirmPassword')}
                    >
                        {showPass2 ? (
                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        )}
                    </span>
                </label>
            </div>

            <button className="flex justify-center items-center border border-richblack-700 px-[12px] rounded-[8px] font-medium text-black py-[8px] gap-x-2 bg-yellow-50" type="submit">
                Create Account
            </button>
        </form>
    );
}

export default Signform;
