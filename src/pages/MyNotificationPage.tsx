import NotificationItemDemo from "@/components/NotificationItemDemo";
import HeaderDemo from "@/components/threadAtom/HeaderDemo";
import ThreadDemo from "@/components/ThreadDemo";
import { ScrollArea } from "@/registry/default/ui/scroll-area";
import { Separator } from "@/registry/default/ui/separator";

const tags = Array.from({ length: 20 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function MyNotificationPage() {
    return (
        <div className="flex items-center justify-between">
            <div className="p-5 h-screen w-screen">
                <HeaderDemo threadName="내 알림" />
                <ScrollArea className="p-4 h-5/6 w-100 rounded-md border">
                    {tags.map((_) => (
                        <>
                            <NotificationItemDemo channel="응원" type="mention" />
                            <Separator />
                            <NotificationItemDemo channel="칭찬" type="like" />
                            <Separator />
                            <NotificationItemDemo
                                channel="무능"
                                type="comment"
                                content="게시글 내용 게시글 내용"
                            />
                            <Separator />
                        </>
                    ))}
                </ScrollArea>
            </div>
            <ThreadDemo hashTagName="스레드" />
        </div>
    );
}
