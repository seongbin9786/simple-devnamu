import PostTItleDemo from "@/components/threadAtom/PostTitleDemo.tsx";
import LikeDemo from "@/components/threadAtom/LikeDemo.tsx";

const PostDemo = ({
    content = "어쩌구 저쩌구",
    commentNum,
}: {
    content?: string;
    commentNum: number;
}) => {
    return (
        <div className="flex flex-col gap-5">
            <PostTItleDemo title="포스트1" />
            <div>{content}</div>
            <LikeDemo />
            <div className="flex items-center gap-3 w-full">
                <p>{commentNum}개의 댓글</p>
                <div className="flex-grow border-t-[1.5px] " />
            </div>
        </div>
    );
};

export default PostDemo;
