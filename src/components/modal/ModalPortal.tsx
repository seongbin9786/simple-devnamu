import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: PropsWithChildren) => {
    const element = document.getElementById("modal");
    return createPortal(children, element!);
};
export default ModalPortal;
