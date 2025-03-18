import s from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={s.message}>Something went wrong... Try again later!</div>
  );
}
