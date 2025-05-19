"use client";

import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import Image from "next/image";
import { useState } from "react";

const LoginLayout = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <section className="w-screen h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden transition-all duration-300">
      {isLogin ? (
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:bg-transparent">
            <LoginForm toggleForm={toggleForm} />
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <Image
              src="/login_onestep.svg"
              alt="Login illustration"
              fill
              className="object-contain p-6"
              priority
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <Image
              src="/signup_onestep.svg"
              alt="Signup illustration"
              fill
              className="object-contain p-6"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:bg-transparent">
            <SignupForm toggleForm={toggleForm} />
          </div>
        </div>
      )}
    </section>
  );
};

export default LoginLayout;