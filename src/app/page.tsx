'use client'
import { SessionProvider } from "next-auth/react";
import App from "./app";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-4xl font-bold text-center lg:text-left">App Tree</h1>
        <SessionProvider>
            <App />
        </SessionProvider>
      </div>
    </main>
  )
}
