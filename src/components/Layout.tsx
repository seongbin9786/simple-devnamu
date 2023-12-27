import { PropsWithChildren } from "react";
import SideBar from "@/components/SideBar";

export default function MyArticlePage(props: PropsWithChildren) {
    return (
        <div className="flex">
            <div>layout</div>
            <div className=" mt-64 p-2">
                <SideBar></SideBar>
            </div>
            <div>{props.children}</div>
        </div>
    );
}
