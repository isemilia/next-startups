import React, {ReactNode} from "react";
import Navbar from "@/app/components/navbar";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <main className={'font-work-sans'}>
            <Navbar/>
            
            {children}
        </main>
    )
}