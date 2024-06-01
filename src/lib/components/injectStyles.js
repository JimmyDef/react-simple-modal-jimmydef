import style from "./modal.module.css";

const injectStyles = () => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = style.toString();
  document.head.appendChild(styleElement);
};

export default injectStyles;
