"use client"

import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import Image from "next/image";
import { useState } from "react";

const LoginLayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleChange = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <section>
      {isLogin ? (
        <section className="flex flex-row flex-wrap items-center gap-10 justify-center">
          <div className="relative w-80 h-80 sm:w-80 sm:h-80">
            <Image 
                src="login_onestep.svg" 
                alt="login" 
                layout="responsive" 
                width={400} 
                height={400} 
                objectFit="contain" 
            />
          </div>
          <LoginForm />
        </section>
      ) : (
        <section className="flex flex-row flex-wrap items-center gap-10 justify-center">
          <div className="relative w-70 h-70 sm:w-80 sm:h-80"> 
            <Image
              src="signup_onestep.svg"
              alt="signup"
              layout="responsive"
              width={400}
              height={400}
              objectFit="contain"
            />
          </div>
          <SignupForm />
        </section>
      )}
      <button type="button" onClick={handleChange}>
        change
      </button>
    </section>
  );
};

export default LoginLayout;