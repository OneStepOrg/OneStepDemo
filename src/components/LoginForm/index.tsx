import Image from "next/image";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleFormPageChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
}

const LoginForm: React.FC<FormProps> = ({
  handleSubmit,
  handleFormPageChange,
  onChangeEmail,
  onChangePassword,
  email,
  password,
}) => {
  return (
    <div className="page-container gap-8">
      {/* Left: Illustration */}
      <div className="illustration-container">
        <Image
          src="/login_onestep.svg"
          alt="website login"
          width={500}
          height={500}
          className="illustration-image"
        />
      </div>

      {/* Right: Login Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="logo-container">
            <Image
              src="/next.svg"
              alt="login website logo"
              width={100}
              height={100}
              className="logo-image"
            />
          </div>

          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password" className="form-label">
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
              className="form-input"
            />
          </div>

          {/* Error message placeholder */}
          {/* <p className="text-sm text-red-600 dark:text-red-400">{errorMsg}</p> */}

          <button type="submit" className="submit-button">
            Login
          </button>
        </form>

        <p className="footer-text">
          New to OneStep?{" "}
          <button onClick={handleFormPageChange} className="footer-link">
            Click here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;