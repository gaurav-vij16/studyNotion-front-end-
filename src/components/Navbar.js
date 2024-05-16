import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

export default function Navbar({ signedup, setsignedup }) {
    return (
        <div className="flex  justify-evenly items-center py-4  ">
            <Link to="/">
                <img src={Logo} alt="studynotion.img" width={160} height={32} loading="lazy" />
            </Link>

            <nav className="flex gap-x-6 text-white ">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </nav>

            {/* Conditional rendering for login/signin, dashboard, and logout */}
            <div className="flex gap-x-4 items-center ">
                {signedup ? (
                    <>
                        <Link to="/dashboard">
                            <button key="dashboard" className="flex ring-richblack-900  px-[12px] rounded-[8px] border border-richblack-700
                            py-[8px] text-white">Dashboard</button>
                        </Link>
                        <button key="logout" className="flex ring-richblack-900  px-[12px] rounded-[8px] border border-richblack-700
                            py-[8px] text-white" onClick={() => {
                            setsignedup(false);
                            toast.success("Logged Out");
                        }}>Log Out</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button key="login" className="flex ring-richblack-900  px-[12px] rounded-[8px] border border-richblack-700
                            py-[8px] text-white">Log in</button>
                        </Link>
                        <Link to="/signup">
                            <button key="signup" className="flex ring-richblack-900  px-[12px] rounded-[8px] border border-richblack-700
                            py-[8px] text-white">Sign up</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
