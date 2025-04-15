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
    <>
      {tryToLogin ? (
        <section className="flex flex-wrap">
            <div>
                <Image src="/login_onestep.svg" alt="Login OneStep" width={400} height={400}/>
            </div>
            <div>
                <LoginForm
                    handleSubmit={handleSubmit}
                    onChangeEmail={onChangeEmail}
                    onChangePassword={onChangePassword}
                    email={email}
                    password={password}
                />
            </div>
            <p>New to OneStep? <span><button onClick={handleFormPageChange}>Click Here</button></span></p>
        </section>
      ) : (
        <section>
            <div>
                <Image src="/signup_onestep.svg" alt="Signup OneStep" width={400} height={400}/>
            </div>
            <SignupForm
                handleSubmit={handleSubmit}
                onChangeUsername={onChangeUsername}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                username={username}
                email={email}
                password={password}
            />
            <p>Already Have an Account? <span><button onClick={handleFormPageChange}>Click Here</button></span></p>
        </section>
      )}
    </>
  );
}
