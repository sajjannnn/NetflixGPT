import { useRef, useState } from "react";
import Header from "./Header";
import validator from "../utilis/validator";
// import type { emailValid } from "../utilis/mockData";

const Login = () => {
  const [isSignin,setIsSignIn] = useState(false);
  const [result,setResult] = useState<string | null>("")

  const LoginType= () =>{
    setIsSignIn(!isSignin);
  }
  const email = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null);

  const checkValidator = (e: React.FormEvent) =>{
    e.preventDefault();
    const para1 =email?.current?.value ?? '';
    const para2 =password.current?.value ?? '';
    setResult(validator(para1,para2));

    // console.log(email.current?.value);
    // console.log(password.current?.value);
  }
 return (
    <div>
      <div>
        <Header />
        <img className="absolute h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_medium.jpg" alt="" />
      </div>
      <div className="h-full w-full text-white absolute z-5 flex  justify-center items-center">
        <form className="z-6 flex h-2/4 w-1/4 flex-col items-center justify-center gap-10 bg-black/70">
          <h1 className="font-bold text-5xl"> {isSignin ? "Sign In" : "Sign Up"} </h1>
          <div className="w-3/5 flex flex-col gap-7">
            <input className="p-3 px-4 bg-black border" ref={email} type="text" placeholder="Email Address" />
            <input className="p-3 px-4 bg-black border" ref={password} type="password" placeholder="Password" />
            <p className="cursor-pointer" onClick={LoginType}> {isSignin ? "New To Netflix? Sign Up Now" : "Already have an account? Sign In"}</p>
          </div>

          <button onClick={(e)=>checkValidator(e)} className="bg-red-700 rounded px-8 py-2 w-3/5 text-2xl font-bold">{isSignin ? "Sign In" : "Sign Up"}</button>
            <p>{result}</p>


        </form>
      </div>
    </div>
  );
};

export default Login;
