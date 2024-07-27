import { useContext } from "react";
import { AuthContext } from "../helpers/authContext";

export default function Header() {
  const { isAuth, setIsAuth } = useContext(AuthContext)!;
  return (
    <header>
      <h2>
        React-Base
      </h2>
      {isAuth
        ? <button className="post__form__button" onClick={() => setIsAuth(false)}>Log out</button>
        : null
      
      }
      
    </header>
  )
}
