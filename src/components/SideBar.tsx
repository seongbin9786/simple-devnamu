import { Switch } from "@/registry/default/ui/switch";
import AvatarDemo from "@/components/threadAtom/AvatarDemo.tsx";
import Home from "@/registry/svg/home.svg";
import Message from "@/registry/svg/message.svg";
import Write from "@/registry/svg/write.svg";
const SideBar = () => {
    return (
        <div className="flex w-48 flex-col justify-center rounded-md border border-[#CBD5E1] p-2 shadow ">
            <div className="mb-2 flex px-1">
                <Switch className="mr-1" />
                <div className="grow text-sm text-[#64748B]">다크모드</div>
                <AvatarDemo />
            </div>

            <div className="flex flex-col justify-center ">
                <div className="mb-1 flex cursor-pointer items-center text-sm text-[#64748B]">
                    <img src={Home} className="mr-2 h-[24px] w-[24px] " /> 홈
                </div>
                <div className="mb-1 flex cursor-pointer items-center text-sm text-[#64748B]">
                    <img src={Message} className="mr-2 h-[24px] w-[24px]" /> 내게 온 글
                </div>
                <div className="flex cursor-pointer items-center text-sm text-[#64748B] ">
                    <img src={Write} className="mr-2 h-[24px] w-[24px]" /> 내가 쓴 글
                </div>
            </div>
        </div>
    );
};

export default SideBar;
