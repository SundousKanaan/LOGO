import Input from "../../components/min-components/Input/Input";
import "./Login.css";

export default function Login() {
  return (
    <section className="loginContainer">
      <h1 className="loginTitle">Login</h1>
      <form className="loginForm">
        <Input type="text" placeholder="Username" required />
        <Input type="password" placeholder="Password" required />

        {/* !TODO: change this button to component button */}
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
