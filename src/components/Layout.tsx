import { PropsWithChildren } from "react";

export default function MyArticlePage(props: PropsWithChildren) {
    return (
        <div>
            <div>This is layout. I render my children:</div>
            <div>{props.children}</div>
        </div>
    );
}
