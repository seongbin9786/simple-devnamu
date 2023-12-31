import HeaderDemo from "@/components/threadAtom/HeaderDemo.tsx";
import PostDemo from "@/components/threadAtom/PostDemo.tsx";
import CommentDemo from "@/components/threadAtom/CommentDemo.tsx";
import CommentInputAreaDemo from "@/components/threadAtom/CommentInputAreaDemo.tsx";
import { cn } from "@/lib/utils.ts";

const ThreadDemo = ({
    hashTagName,
    className,
    commentNum = 3,
}: {
    hashTagName: string;
    className?: string;
    commentNum?: number;
}) => {
    const commentArr = Array.from({ length: commentNum }, (_, i) => i + 1);

    return (
        <div className={cn("flex w-full flex-col gap-4", className)}>
            <HeaderDemo threadName="스레드" tagContent={hashTagName} />

            <PostDemo commentNum={commentNum} />

            {commentArr.map((id) => (
                <CommentDemo user={`익명${id}`} content={`어쩌구 저쩌구${id}`} />
            ))}

            <CommentInputAreaDemo />
        </div>
    );
};

export default ThreadDemo;
