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
        setSeparatorPositioning("sticky");
        setTextPositioning("static");
    }, []);

    const [separatorRef, textRef] = useDayDividerVisibility({
        onInvisibleScrollDown,
        onVisibleScrollUp,
    });

    const textTopPos = textPositioning === "static" ? "mt-2" : "-top-3";
    const separatorTopPos = separatorPositioning === "sticky" ? "-top-1" : "top-0";
    return (
        <SeparatorWithChildren
            ref={separatorRef}
            className={cn("d flex justify-center", separatorTopPos, separatorPositioning)}
        >
            <div ref={textRef} className={cn("transition-all", textPositioning, textTopPos)}>
                <div className="flex cursor-pointer select-none flex-row items-center gap-[2px] rounded-2xl border-[1px] border-stone-500 bg-white px-[10px] py-1 text-stone-700">
                    <span className="text-xs font-bold tracking-tighter font">{text}</span>
                    <ChevronDown size={12} />
                </div>
            </div>
        </SeparatorWithChildren>
    );
};
