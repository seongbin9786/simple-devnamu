import {Avatar, AvatarFallback, AvatarImage} from "@/registry/default/ui/avatar.tsx";


const  AvatarDemo = ()=>  {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export default AvatarDemo
