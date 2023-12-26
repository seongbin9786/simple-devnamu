import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ko from "date-fns/locale/ko";
import { ComponentProps } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york/ui/avatar";
import { Badge } from "@/registry/new-york/ui/badge";
import { Button } from "@/registry/new-york/ui/button";
import { ScrollArea } from "@/registry/new-york/ui/scroll-area";
import { Separator } from "@/registry/new-york/ui/separator";
import { Textarea } from "@/registry/new-york/ui/textarea";

import { comments, MailObject } from "../data";

interface MailDisplayProps {
    mail: MailObject | null;
}

export function MailDisplay({ mail }: MailDisplayProps) {
    const randomComments = comments.filter(() => Math.random() > 0.7);

    return (
        <>
            <ScrollArea className="h-[calc(100vh-160px)]">
                <div className="flex flex-col">
                    {mail ? (
                        <div className="flex flex-1 flex-col">
                            <div className="flex items-start p-4">
                                <div className="flex items-start gap-4 text-sm">
                                    <Avatar>
                                        <AvatarImage alt={mail.name} />
                                        <AvatarFallback>
                                            {/* 익명의 프롱이 => 익프 생성 */}
                                            {mail.name
                                                .split(" ")
                                                .map((chunk) => chunk[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <div className="font-semibold">{mail.name}</div>
                                        <div className="flex-1 whitespace-pre-wrap text-sm">
                                            {mail.text}
                                        </div>
                                    </div>
                                </div>
                                {mail.date && (
                                    <div className="ml-auto text-xs text-muted-foreground text-nowrap">
                                        {formatDistanceToNow(new Date(mail.date), {
                                            addSuffix: true, // '전' 을 추가할지 여부
                                            locale: ko,
                                        })}
                                    </div>
                                )}
                            </div>
                            {mail.labels.length ? (
                                <div className="flex items-center gap-2 m-4 mt-0">
                                    {mail.labels.map((label) => (
                                        <Badge
                                            key={label}
                                            variant={getBadgeVariantFromLabel(label)}
                                        >
                                            {label}
                                        </Badge>
                                    ))}
                                </div>
                            ) : null}
                            <Separator className="mt-auto" />
                            {randomComments.map((comment) => (
                                <>
                                    <div className="flex items-start p-4">
                                        <div className="flex items-start gap-4 text-sm">
                                            <Avatar>
                                                <AvatarImage alt={comment.name} />
                                                <AvatarFallback>
                                                    {/* 익명의 프롱이 => 익프 생성 */}
                                                    {comment.name
                                                        .split(" ")
                                                        .map((chunk) => chunk[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="grid gap-1">
                                                <div className="font-semibold">{comment.name}</div>
                                                {comment.text}
                                            </div>
                                        </div>
                                        {comment.date && (
                                            <div className="ml-auto text-xs text-muted-foreground text-nowrap">
                                                {formatDistanceToNow(new Date(comment.date), {
                                                    addSuffix: true, // '전' 을 추가할지 여부
                                                    locale: ko,
                                                })}
                                            </div>
                                        )}
                                    </div>
                                    <Separator className="mt-auto" />
                                </>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center text-muted-foreground">
                            선택된 메시지가 없습니다.
                        </div>
                    )}
                </div>
            </ScrollArea>
            <Separator />
            <div className="p-4">
                <form>
                    <div className="grid gap-4">
                        <Textarea
                            className="p-4"
                            placeholder={`${mail.name}님께 답글을 작성해보세요...`}
                        />
                        <div className="flex items-center">
                            <Button size="sm" className="ml-auto">
                                Send
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

// mail-list와 중복
function getBadgeVariantFromLabel(label: string): ComponentProps<typeof Badge>["variant"] {
    if (["work"].includes(label.toLowerCase())) {
        return "default";
    }

    if (["personal"].includes(label.toLowerCase())) {
        return "outline";
    }

    return "secondary";
}
