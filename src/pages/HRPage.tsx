import { DayDivider } from "@/components/DayDivider";

export default function HRPage() {
    return (
        // 항상 relative여도 됨
        <div id="target" className="relative flex w-full flex-col">
            <div className="h-[1200px] bg-slate-500">hi</div>
            <DayDivider text="어제" />
            <div className="h-[1200px] bg-slate-500">hi</div>
            <DayDivider text="오늘" />
            <div className="h-[1200px] bg-slate-500">hi</div>
        </div>
    );
}
