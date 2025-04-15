interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onChangeUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    email: string;
    username: string;
    password: string;
}

const SignupForm: React.FC<FormProps> = ({
    handleSubmit,
    onChangeUsername,
    onChangeEmail,
    onChangePassword,
    email,
    username,
    password,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="username"
                value={username}
                onChange={onChangeUsername}
                placeholder="Username"
            />
            <input
                type="email"
                value={email}
                onChange={onChangeEmail}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={onChangePassword}
                placeholder="Password"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm