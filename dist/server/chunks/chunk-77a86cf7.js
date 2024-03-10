import { jsx } from "react/jsx-runtime";
import { b as usePageContext } from "./chunk-ad4fb382.js";
function VikeLink(props) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("a", { ...props, className });
}
function validateEmail(value) {
  let error;
  if (!value) {
    error = "Email is required";
  }
  return error;
}
function validatePassword(value) {
  let error;
  if (!value) {
    error = "Password is required";
  }
  return error;
}
function validateName(value) {
  let error;
  if (!value) {
    error = "Name is required";
  }
  return error;
}
export {
  VikeLink as V,
  validatePassword as a,
  validateName as b,
  validateEmail as v
};
