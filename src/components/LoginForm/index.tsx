interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    email: string;
    password: string;
}

const LoginForm: React.FC<FormProps> = ({
    handleSubmit,
    onChangeEmail,
    onChangePassword,
    email,
    password,
}) => {
    return (
        <form onSubmit={handleSubmit}>
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

export default LoginForm