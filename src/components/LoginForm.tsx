import { useContext } from "react";
import { AuthContext } from "../helpers/authContext";

export default function LoginForm() {
  const { setIsAuth } = useContext(AuthContext)!;
  return (
    <form className="login__form">
      <input className="login__form__input" placeholder="Login" type="text" />
      <input className="login__form__input" placeholder="Password" type="text" />
      <button className="login__form__button" onClick={() => setIsAuth(true)}>
        Log in
      </button>
    </form>
  );
}
