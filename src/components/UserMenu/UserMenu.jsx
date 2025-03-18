import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <p className={s.text}>Welcome, {user.name}</p>
      <button className={s.button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
