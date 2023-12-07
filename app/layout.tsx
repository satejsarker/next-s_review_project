import type {ReactNode}  from "react";
interface LayoutProps{
    children: ReactNode;
}
export default function RootLayout({ children}: LayoutProps){
    return (
        <html lang="en">

            <body >
                <header style={{border: "solid indigo 2px"}}>
                    [Header]
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    [Footer]
                </footer>
            </body>
        </html>
    )
}