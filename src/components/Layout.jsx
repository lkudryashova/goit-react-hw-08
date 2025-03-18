import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../redux/contacts/selectors";
import AppBar from "./AppBar/AppBar";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";

export default function Layout() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (
    <div>
      <AppBar />
      {error ? <ErrorMessage /> : <Outlet />}
      <Loader isLoading={loading} />
    </div>
  );
}
