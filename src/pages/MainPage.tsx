import ThreadDemo from "@/components/ThreadDemo.tsx";

export interface Props {}

export default function MainPage(props: Props) {
    return (
        <div>
            <div className="flex justify-center items-center w-full h-screen">
                <ThreadDemo hashTagName="응원 게시판" className="w-[400px]" />
            </div>
        </div>
    );
}
