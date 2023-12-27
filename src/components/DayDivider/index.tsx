import { ChevronDown } from "lucide-react";
import { useCallback, useState } from "react";

import { cn } from "@/lib";

import { SeparatorWithChildren } from "./separator";
import { useDayDividerVisibility } from "./useDayDividerVisibility";

interface Props {
    text: string;
}

export const DayDivider = ({ text }: Props) => {
    const [separatorPositioning, setSeparatorPositioning] = useState("relative");
    const [textPositioning, setTextPositioning] = useState("absolute");

    const onInvisibleScrollDown = useCallback(() => {
        setSeparatorPositioning("relative");
        setTextPositioning("absolute");
    }, []);

    const onVisibleScrollUp = useCallback(() => {
        setSeparatorPositioning("static");
        setTextPositioning("fixed");
    }, []);

    const [separatorRef, textRef] = useDayDividerVisibility({
        onInvisibleScrollDown,
        onVisibleScrollUp,
    });

    const topPos = textPositioning === "fixed" ? "top-2" : "-top-3";
    return (
        <SeparatorWithChildren ref={separatorRef} className={separatorPositioning}>
            <div
                ref={textRef}
                className={cn("left-1/2 cursor-pointer select-none", textPositioning, topPos)}
            >
                <div className="flex flex-row items-center gap-[2px] rounded-2xl border-[1px] border-stone-500 bg-white px-[10px] py-1 text-stone-700">
                    <span className="font text-xs font-bold tracking-tighter">{text}</span>
                    <ChevronDown size={12} />
                </div>
            </div>
        </SeparatorWithChildren>
    );
};
