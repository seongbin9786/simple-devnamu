import { HeartFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
const LikeDemo = ({ color = "rgba(255, 0, 0, 0.7)" }: { color?: string }) => {
    const [cnt, setCnt] = useState(0);
    return (
        <div className="flex items-center gap-2">
            <div onClick={() => setCnt(cnt + 1)}>
                <HeartFilledIcon color={color} />
            </div>
            {cnt}
        </div>
    );
};
export default LikeDemo;
