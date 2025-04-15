"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProjectsPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/#portfolio")
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
    </div>
  )
}
