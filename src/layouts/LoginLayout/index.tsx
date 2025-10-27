'use client';

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
    <section className="w-screen h-screen flex flex-col bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden transition-all duration-300">
      {/* Header */}
      <header className="w-full py-4 md:py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          {isLogin ? "Login" : "Register"}
        </h1>
      </header>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full h-[calc(100%-4rem)] md:h-[calc(100%-3rem)]">
        {isLogin ? (
          <>
            <div className="w-full md:w-1/2 h-[70%] md:h-full flex items-center justify-center p-4 sm:p-6">
              <LoginForm toggleForm={toggleForm} />
            </div>
            <div className="hidden w-full md:inline md:w-1/2 h-[30%] md:h-full relative ">
              <Image
                src="/login_onestep.svg"
                alt="Login illustration"
                fill
                className="object-contain p-4 sm:p-6 opacity-80 md:opacity-100"
                priority
              />
            </div>
          </>
        ) : (
          <>
            <div className="hidden w-full md:inline md:w-1/2 h-[30%] md:h-full relative">
              <Image
                src="/signup_onestep.svg"
                alt="Signup illustration"
                fill
                className="object-contain p-4 sm:p-6 opacity-80 md:opacity-100"
                priority
              />
            </div>
            <div className="w-full md:w-1/2 h-[70%] md:h-full flex items-center justify-center p-4 sm:p-6">
              <SignupForm toggleForm={toggleForm} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LoginLayout;