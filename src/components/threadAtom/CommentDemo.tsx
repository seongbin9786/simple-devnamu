import PostTItleDemo from "@/components/threadAtom/PostTitleDemo.tsx";

const CommentDemo = ({ user, content }: { user: string; content: string }) => {
    return (
        <div className="flex flex-col gap-5">
            <PostTItleDemo title={user} />
            <div>{content}</div>

            <hr />
        </div>
    );
};

export default CommentDemo;
