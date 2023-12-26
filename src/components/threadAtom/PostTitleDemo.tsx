import AvatarDemo from "@/components/threadAtom/AvatarDemo.tsx";

const PostTitleDemo = ({ title, time = "오후 12:33" }: { title: string; time?: string }) => {
    return (
        <div className="flex items-center gap-6 ">
            <AvatarDemo />
            <p>{title}</p>
            <p className="font-extralight text-xs">{time}</p>
        </div>
    );
};

export default PostTitleDemo;
