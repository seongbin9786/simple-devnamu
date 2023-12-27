import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface Props extends PropsWithChildren {
    className?: string;
}

export const SeparatorWithChildren = forwardRef<
    ElementRef<typeof SeparatorPrimitive.Root>,
    ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, children }: Props, ref) => (
    <SeparatorPrimitive.Root
        ref={ref}
        decorative={true}
        orientation="horizontal"
        className={cn("shrink-0 bg-border h-[1px] w-full relative", className)}
    >
        {children}
    </SeparatorPrimitive.Root>
));

SeparatorWithChildren.displayName = SeparatorWithChildren.name;
