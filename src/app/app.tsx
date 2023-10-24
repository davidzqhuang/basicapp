'use client'

import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'

import { Button } from '@/components/ui/button'

export default function App() {
  const { data: session } = useSession()
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {!session ? (
        <div className="text-center">
          <Button onClick={() => signIn()} variant="outline">Sign in with Password</Button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="p-4">
            <p>Welcome, {(session as Session)?.user?.name}!</p>
            <button onClick={() => signOut()}>Logout</button>
          </div>
          <div className="flex flex-col py-2 text-blue-500 hover:underline">
            <a href="/applet1">Applet 1</a>
          </div>
          <div className="flex flex-col py-2 text-blue-500 hover:underline">
            <a href="/applet2">Applet 2</a>
          </div>
        </div>
      )}
    </div>
  )
}
