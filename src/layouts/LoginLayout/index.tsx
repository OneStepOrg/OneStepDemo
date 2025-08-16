<<<<<<< HEAD
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { useState } from "react";
import './index.css';

export default function LoginLayout() {
  const [tryToLogin, setTryToLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password, username });
  };

  const handleFormPageChange = () => {
    setTryToLogin((prev) => !prev);
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="simple-page-container">
      {tryToLogin ? (
        <LoginForm
          handleSubmit={handleSubmit}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
          handleFormPageChange={handleFormPageChange}
          email={email}
          password={password}
        />
      ) : (
        <SignupForm
          handleSubmit={handleSubmit}
          onChangeUsername={onChangeUsername}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
          handleFormPageChange={handleFormPageChange}
          username={username}
          email={email}
          password={password}
        />
      )}
    </div>
  );
}
=======
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
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
