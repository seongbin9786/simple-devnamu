import { useState } from "react";

import { DayDivider } from "@/components/DayDivider";
import ThreadDemo from "@/components/ThreadDemo";
import { Button } from "@/registry/default/ui/button";
import { Textarea } from "@/registry/default/ui/textarea";

import {
    Menubar,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "../registry/default/ui/menubar";

export default function MainPage() {
    const [toggleThread, setToggleThread] = useState(false);

    return (
        <div className="flex">
            <div className="relative w-full h-screen p-4 overflow-hidden">
                <div className="flex flex-col justify-center ">
                    <Menubar className="border-none ">
                        <MenubarMenu>
                            <MenubarTrigger>무능 게시판</MenubarTrigger>
                            <MenubarSeparator />
                            <MenubarTrigger>응원 게시판</MenubarTrigger>
                            <MenubarSeparator />
                            <MenubarTrigger>칭찬 게시판</MenubarTrigger>
                            <MenubarSeparator />
                        </MenubarMenu>
                    </Menubar>
                    <div className="h-[40rem] w-full overflow-y-auto rounded-t-md border border-[#CBD5E1] shadow">
                        <ul className="mt-10">
                            {Array.from({ length: 15 }).map((_, index) => (
                                <>
                                    <li
                                        onClick={() => setToggleThread(!toggleThread)}
                                        className="flex flex-col items-start justify-between py-2 m-4 cursor-pointer"
                                    >
                                        <DayDivider text={`${15 - index}일 전`} />
                                        <div className="flex flex-col pt-4">
                                            <h1 className="text-lg font-semibold">
                                                익명의 프롱이1
                                            </h1>
                                            <p className="text-sm text-[#64748B]">
                                                오늘 하루 날렸습니다. 이렇게 된 이상 롤 하실 분?
                                            </p>
                                        </div>
                                        <span>오후 12:33</span>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                    <form className="flex h-[10rem] w-full flex-col justify-between">
                        <Textarea
                            className="h-full rounded-b-md"
                            placeholder="생각처럼 잘 이루어지지 않는 것들이 있나요? 모두와 공유해보아요"
                        />
                        <div className="flex justify-end">
                            <Button type="submit" className="mt-2">
                                보내기
                            </Button>
                        </div>
                    </form>
                </div>
                {toggleThread && (
                    <div className="fixed top-0 right-0 z-10 h-screen">
                        <ThreadDemo
                            hashTagName="응원 게시판"
                            className="h-full w-[40rem] bg-white"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
