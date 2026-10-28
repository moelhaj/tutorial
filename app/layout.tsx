import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Geist_Mono, IBM_Plex_Sans, Roboto } from "next/font/google"
import "./globals.css"

const ibmPlexSansHeading = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        roboto.variable,
        ibmPlexSansHeading.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
