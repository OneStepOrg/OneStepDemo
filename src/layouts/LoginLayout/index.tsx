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