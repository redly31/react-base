import { useContext } from "react";
import { AuthContext } from "../helpers/authContext";

export default function LoginForm() {
  const { setIsAuth } = useContext(AuthContext)!;
  return (
    <form className="post__form">
      <input className="post__form__input" placeholder="Login" type="text" />
      <input className="post__form__input" placeholder="Password" type="text" />
      <button className="post__form__button" onClick={() => setIsAuth(true)}>
        Log in
      </button>
    </form>
  );
}
