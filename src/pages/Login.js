import { LoginForm } from "../components/LoginFrom/LoginForm";
import { Title } from "../components/Title/Title";

export default function LoginPage() {
    return (
        <>
        <Title title={"Fill in your credentials"} />
        <LoginForm />
        </>    
    )
}