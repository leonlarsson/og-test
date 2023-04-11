import { Metadata } from "next";

export const metadata: Metadata = {
    openGraph: {
        title: "OG Test",
        description: "Just a test."
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};