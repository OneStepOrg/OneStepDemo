import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { useState } from "react";
import Image from "next/image";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      {tryToLogin ? (
        <section className="flex flex-col items-center space-y-4">
          <Image
            src="/login_onestep.svg"
            alt="Login OneStep"
            width={400}
            height={400}
          />
          <LoginForm
            handleSubmit={handleSubmit}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            email={email}
            password={password}
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            New to OneStep?{" "}
            <button
              onClick={handleFormPageChange}
              className="text-blue-500 hover:underline"
            >
              Click Here
            </button>
          </p>
        </section>
      ) : (
        <section className="flex flex-col items-center space-y-4">
          <Image
            src="/signup_onestep.svg"
            alt="Signup OneStep"
            width={400}
            height={400}
          />
          <SignupForm
            handleSubmit={handleSubmit}
            onChangeUsername={onChangeUsername}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            username={username}
            email={email}
            password={password}
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <button
              onClick={handleFormPageChange}
              className="text-blue-500 hover:underline"
            >
              Click Here
            </button>
          </p>
        </section>
      )}
    </div>
  );
}