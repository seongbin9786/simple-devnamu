import { ReactComponentElement } from "react";
import { ReactDOM } from "react-dom";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }) => {
    const element = document.getElementById("modal");
    return createPortal(children as ReactComponentElement, element as HTMLElement) as HTMLElement;
};
export default ModalPortal;
