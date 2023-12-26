import { Textarea } from "@/registry/default/ui/textarea.tsx";

const CommentInputAreaDemo = () => {
    return (
        <div className="relative">
            <Textarea placeholder="댓글을 작성해주세요." />
            <button className="bg-black rounded-xl absolute bottom-2 right-2 text-white px-2">
                send
            </button>
        </div>
    );
};

export default CommentInputAreaDemo;
