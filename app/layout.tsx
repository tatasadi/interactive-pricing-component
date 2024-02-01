import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"], weight: ["600", "800"] })

export const metadata: Metadata = {
  title: "Frontend Mentor Challenge",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${manrope.className} text-neutral-grayish-blue flex min-h-screen flex-col items-center justify-center`}
      >
        <div className="absolute top-0 z-0 h-1/2 w-full bg-[url('/images/bg-pattern.svg')] bg-cover bg-no-repeat"></div>
        <div className="absolute top-[3.56rem] z-0 h-[9rem] w-[9rem] bg-[url('/images/pattern-circles.svg')] bg-contain bg-no-repeat lg:top-[4.19rem]"></div>
        {children}
      </body>
    </html>
  )
}
