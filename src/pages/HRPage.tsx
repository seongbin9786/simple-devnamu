import { DayDivider } from "@/components/DayDivider";

export default function HRPage() {
    return (
        <div className="relative w-full h-screen overflow-auto">
            <div className="h-[1200px] bg-slate-500">hi</div>
            <DayDivider text="어제" />
            <div className="h-[1200px] bg-slate-500">hi</div>
            <DayDivider text="오늘" />
            <div className="h-[1200px] bg-slate-500">hi</div>
        </div>
    );
}
