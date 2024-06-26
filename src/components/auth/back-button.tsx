"use client"

import Link from "next/dist/client/link";
import { Button } from "../ui/button";

interface BackButtonProps {
    label : string;
    href: string;
}
export const BackButton = ({label,href} : BackButtonProps) => {
    return (
        <Button className="font-normal w-full" variant='link' size='sm' asChild>
            <Link href={href} >
                {label}
            </Link>
        </Button>
    )
}