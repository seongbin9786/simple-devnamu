import { Label } from "@radix-ui/react-menubar";

import { Button } from "@/registry/new-york/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/registry/new-york/ui/card";
import { Input } from "@/registry/new-york/ui/input";

interface Props {
    show: boolean;
    onClose: () => void;
}

const Modal = ({ show, onClose }: Props) => {
    if (!show) return null;

    return (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50">
            <div className="fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
                <div>
                    <Card className="w-[550px]">
                        <CardHeader>
                            <CardTitle>로로로그인</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label>아아아이디</Label>
                                        <Input id="name" placeholder="아이디 입력하쎄용" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label>비비비번</Label>
                                        <Input id="name" placeholder="비번" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" onClick={onClose}>
                                다다다닫기
                            </Button>
                            <Button>로그인</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Modal;
