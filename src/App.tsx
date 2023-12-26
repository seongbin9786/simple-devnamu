import { MailDisplay } from "./example/components/mail-display";
import { MailList } from "./example/components/mail-list";
import { useMail } from "./example/use-mail";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "./registry/new-york/ui/resizable";
import { TooltipProvider } from "./registry/new-york/ui/tooltip";

const defaultLayout = [265, 440, 655];

function App() {
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

export default App;
