import type {ReactNode}  from "react";
interface LayoutProps{
    children: ReactNode;
}
export default function RootLayout({ children}: LayoutProps){
    return (
        <html lang="en">

            <body>
                <header>
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