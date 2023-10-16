"use client"
import { useEffect, useState } from "react"
import ShowChapter from "./ShowChapter"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import { Button } from "@nextui-org/react"

export default function Home() {
  const [images, setImages] = useState<string[]>([])
  const handle = useFullScreenHandle()

  useEffect(() => {
    (async () => {
      const res = await fetch("/api", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      setImages(data.images)
    })()
  }, [])
  
  return (
    <div style={{height: '100vh'}}>
      <Button onClick={handle.enter}>
        Pantalla Completa
      </Button>

      <FullScreen handle={handle} >
        <ShowChapter images={images} />
      </FullScreen>
    </div>
  )
}
