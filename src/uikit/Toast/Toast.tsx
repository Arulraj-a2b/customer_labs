import { isEmpty } from "../helpers";

type DurationTypes = "SHORT" | "LONG";

const handleSetDuration = (duration: DurationTypes) => {
  switch (duration) {
    case "LONG":
      return 4000;
    default:
      return 2500;
  }
};

const Toast = (message: string, duration: DurationTypes = "SHORT") => {
  const choosenDuration = handleSetDuration(duration);

  if (!isEmpty(message)) {
    const toastText = document.getElementById("toastbar-text");
    if (toastText && "innerText" in toastText) {
      toastText.innerText = message;
    }

    const toastBar = document.getElementById("toastbar");
    if (toastBar) {
      toastBar.setAttribute("class", "show-tost-anim");
    }

    window.setTimeout(() => {
      if (toastBar) {
        toastBar.removeAttribute("class");
      }
    }, choosenDuration);
  }
};
export default Toast;
