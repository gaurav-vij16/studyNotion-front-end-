import Signform from "./Signform";
import Loginform from "./Loginform";
import frame from "../assets/frame.png";

import { FcGoogle } from "react-icons/fc";


export default function Template({ title, desc1, desc2, image, setsignedup , formtype}) {
    return (
        <div className=" flex w-[11/12] max-w-[1160px] py-12 mx-auto gap-x-12 justify-between gap-y-0">

            <div className="flex flex-col w-[11/12] max-w-[450px]">
                
            <h1
                className="  text-richblack-5 font-semibold text-[1.875rem] leading-[2.75rem]"
            >{title}</h1>

            <p className=" text-[1.125rem] leading-[1.625rem] mt-4">
            <span className=" text-richblack-100">{desc1}</span>
            <br></br>
            <span className=" text-blue-100 italic">{desc2}</span>
            </p>

            {formtype==="signup" ?
            (<Signform setsignedup={setsignedup}/>) :
            (<Loginform setsignedup={setsignedup}/>)       
            }

            <div className="flex w-full items-center my-4  gap-x-2">
                <div className="w-full h-[1px] bg-richblack-700"></div>
                <span className=" text-richblack-700" >OR</span>
                <div className="w-full h-[1px] bg-richblack-700"></div>
            </div>

            {/* Placeholder for sign up with Google button */}
            <button className="flex justify-center items-center border border-richblack-700 px-[12px] rounded-[8px]
             font-medium text-richblack-5 py-[8px] gap-x-2 mt-3">
               <FcGoogle /> 
                <p>Sign Up with Google</p>
            </button>
            </div>

            <div className="relative w-[11/12] max-w-[450px]  ml-28">
                <img src={frame} alt="Frame"
                width={558}
                height={504}
                loading="lazy"
                 />
                <img src={image} alt="Image"
                 width={558}
                 height={504}
                 loading="lazy"
                 className=" absolute -top-4 right-4 "
                />
            </div>
        </div>
    );
}
