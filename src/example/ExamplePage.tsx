import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/registry/new-york/ui/resizable";
import { TooltipProvider } from "@/registry/new-york/ui/tooltip";

import { MailDisplay } from "./components/mail-display";
import { MailList } from "./components/mail-list";
import { useMail } from "./use-mail";

const defaultLayout = [265, 440, 655];

export default function ExamplePage() {
    const [{ mails, selected }] = useMail();
    const selectedMail = mails.find((mail) => mail.id === selected) ?? null;

    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
                }}
                className="h-full items-stretch"
            >
                <ResizablePanel defaultSize={defaultLayout[2]}>
                    <MailList items={mails} />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[2]}>
                    <MailDisplay mail={selectedMail} />
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    );
}
