import { HeartFilledIcon } from "@radix-ui/react-icons";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale/ko";
import { MessageSquareTextIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/registry/new-york/ui/badge";
import { ScrollArea } from "@/registry/new-york/ui/scroll-area";

import { MailObject } from "../data";
import { useMail } from "../use-mail";

interface MailListProps {
    items: MailObject[];
}

export function MailList({ items }: MailListProps) {
    const [mail, setMail] = useMail();

    return (
        <ScrollArea className="h-screen">
            <div className="my-4 flex flex-col gap-2 p-4 pt-0">
                {items.map((item) => (
                    <button
                        key={item.id}
                        className={cn(
                            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                            mail.selected === item.id && "bg-muted",
                        )}
                        onClick={() =>
                            setMail({
                                ...mail,
                                selected: item.id,
                            })
                        }
                    >
                        <div className="flex w-full flex-col gap-1">
                            <div className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary">{item.labels[0]}</Badge>
                                    </div>
                                    <div className="font-semibold">{item.name}</div>
                                    {!item.read && (
                                        <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                                    )}
                                </div>
                                <div
                                    className={cn(
                                        "ml-auto text-xs",
                                        mail.selected === item.id
                                            ? "text-foreground"
                                            : "text-muted-foreground",
                                    )}
                                >
                                    {formatDistanceToNow(new Date(item.date), {
                                        addSuffix: true,
                                        locale: ko,
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                            {item.text.substring(0, 300)}
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="outline">
                                <HeartFilledIcon color="rgba(255, 0, 0, 0.7)" />
                                <span className="ml-1 text-red-600">
                                    {Math.floor(Math.random() * 10)}
                                </span>
                            </Badge>
                            <Badge variant="outline">
                                <MessageSquareTextIcon size="16px" color="rgba(0, 0, 0, 0.4)" />
                                <span className="ml-1 text-gray-500">
                                    {Math.floor(Math.random() * 10)}
                                </span>
                            </Badge>
                        </div>
                    </button>
                ))}
            </div>
        </ScrollArea>
    );
}
