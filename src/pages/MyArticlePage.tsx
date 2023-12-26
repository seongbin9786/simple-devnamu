import NotificationItemDemo from "@/components/NotificationItemDemo";
import { Separator } from "@/registry/default/ui/separator";

const Date = ({ date }: { date?: string }) => {
    return <p className="font-bold py-3 text-sm">{date ?? "12월 26일 화요일"}</p>;
};

const MyArticleTop = () => {
    return (
        <div className="mb-4 p-4 h-auto w-100 rounded-md border shadow-md">
            <p className="font-bold text-lg">내가 작성한 모든 글</p>
            <p className="font-normal text-base mt-2">
                내가 작성한 모든 글, 댓글을 여기서 확인할 수 있습니다.
            </p>
        </div>
    );
};

const MyArticlePage = () => {
    return (
        <div className="p-5 w-4/5 m-auto">
            <MyArticleTop />
            <Date />
            <div className="p-4 h-auto w-100 rounded-md border">
                <NotificationItemDemo channel="응원" type="mention" />
                <Separator />
                <NotificationItemDemo channel="무능" type="mention" />
            </div>
            <Date />
            <div className="p-4 h-auto w-100 rounded-md border">
                <NotificationItemDemo channel="응원" type="mention" />
                <Separator />
                <NotificationItemDemo channel="무능" type="mention" />
                <NotificationItemDemo channel="응원" type="mention" />
                <Separator />
                <NotificationItemDemo channel="무능" type="mention" />
                <Separator />
                <NotificationItemDemo channel="무능" type="mention" />
            </div>
            <Date />
            <div className="p-4 h-auto w-100 rounded-md border">
                <NotificationItemDemo channel="응원" type="mention" />
                <Separator />
                <NotificationItemDemo channel="무능" type="mention" />
                <Separator />
                <NotificationItemDemo channel="무능" type="mention" />
                <Separator />
                <NotificationItemDemo channel="무능" type="mention" />
            </div>
        </div>
    );
};

export default MyArticlePage;
