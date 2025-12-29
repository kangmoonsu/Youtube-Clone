"use client";

import { trpc } from "@/trpc/client";


export const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({
        text: "Moonsu"
    });
    
    return <div>Client {data.greeting}</div>;
}