import { useState } from "react";

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
        <div className="relative flex justify-center items-center h-screen overflow-hidden">
            <div className="flex flex-col justify-center  w-[90rem] ">
                <Menubar className="w-auto border-none ">
                    <MenubarMenu>
                        <MenubarTrigger>무능 게시판</MenubarTrigger>
                        <MenubarSeparator />
                        <MenubarTrigger>응원 게시판</MenubarTrigger>
                        <MenubarSeparator />
                        <MenubarTrigger>칭찬 게시판</MenubarTrigger>
                        <MenubarSeparator />
                    </MenubarMenu>
                </Menubar>
                <div className="w-full h-[40rem] border border-[#CBD5E1] rounded-t-md p-6 shadow overflow-y-auto">
                    <ul>
                        {Array.from({ length: 15 }).map((_, index) => (
                            <li
                                onClick={() => setToggleThread(!toggleThread)}
                                key={index}
                                className="flex justify-between items-start mb-4 cursor-pointer"
                            >
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-semibold">익명의 프롱이1</h1>
                                    <p className="text-[#64748B] text-sm">
                                        오늘 하루 날렸습니다. 이렇게 된 이상 롤 하실 분?
                                    </p>
                                </div>
                                <span>오후 12:33</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <form className="flex flex-col justify-between h-[10rem] w-full">
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
                    <ThreadDemo hashTagName="응원 게시판" className="w-[40rem] h-full bg-white" />
                </div>
            )}
        </div>
    );
}
