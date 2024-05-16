import Template from "../components/Template";
import loginImg from "../assets/login.png"

export default function Login({setsignedup}){
    

    return(
       
            <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={loginImg}
            formtype="login"
            setsignedup = {setsignedup}
            
            />
    );
}