import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "gen.wtf",
  description: "A visualisation of generations",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-white">
        <div className="mx-auto h-full max-w-screen overflow-auto pt-8 text-center lg:pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
