import Image from "next/image";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleFormPageChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password: string;
  username: string;
}

const SignupForm: React.FC<FormProps> = ({
  handleSubmit,
  handleFormPageChange,
  onChangeEmail,
  onChangePassword,
  onChangeUsername,
  username,
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

      {/* Right: Signup Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="logo-container">
            <Image
              src="/next.svg"
              alt="signup website logo"
              width={100}
              height={100}
              className="logo-image"
            />
          </div>

          <div className="form-field">
            <label htmlFor="username" className="form-label">
              Username*
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={onChangeUsername}
              className="form-input"
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
              placeholder="name@example.com"
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

          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>

        <p className="footer-text">
          Already have an account?{" "}
          <button onClick={handleFormPageChange} className="footer-link">
            Click here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;