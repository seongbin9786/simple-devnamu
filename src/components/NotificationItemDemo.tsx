export interface Props {
    type: "mention" | "like" | "comment";
    channel: "응원" | "칭찬" | "무능";
    time?: string;
    content?: string;
}

const title: {
    [type: string]: string;
} = {
    mention: "의 멘션",
    like: "에서 한 익명의 프롱이가 회원님이 작성한 게시글에 공감을 눌렀습니다.",
    comment: "의 게시글",
};

const NotificationItemDemo = ({ type, channel, time, content }: Props) => {
    const element: {
        [type: string]: JSX.Element;
    } = {
        mention: (
            <div className="text-lg font-semibold mb-2">
                멘션된 게시글 내용 멘션된 게시글 내용 멘션된 게시글 내용 멘션된 게시글 내용 멘션된
            </div>
        ),
        like: (
            <div className="text-lg font-normal mb-2">
                공감한 게시글 내용 공감한 게시글 내용 공감한 게시글 내용 공감한 게시글 내용 공감한
            </div>
        ),
        comment: (
            <>
                <p className="text-sm text-muted-foreground">다음에 댓글 남김: {content}</p>
                <div className="text-lg font-normal mb-2">
                    공감한 게시글 내용 공감한 게시글 내용 공감한 게시글 내용 공감한 게시글 내용
                    공감한
                </div>
            </>
        ),
    };

    return (
        <>
            <div className="flex items-center justify-between gap-6 pt-3">
                <p className="text-sm text-muted-foreground">
                    #{channel}게시판{title[type]}
                </p>
                <p className="font-extralight text-xs">{time ?? "오후 12:33"}</p>
            </div>
            {element[type]}
        </>
    );
};

export default NotificationItemDemo;
