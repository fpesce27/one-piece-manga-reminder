"use client"
import { useEffect, useState } from "react"
import ShowChapter from "./ShowChapter"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import { Button } from "@nextui-org/button"

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

  function handleForceUpdate() {
    (async () => {
      const res = await fetch("/api/forceUpdate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()

      setImages(data.images)
    })()
  }
  
  return (
    <div className="h-screen">
      <div className="buttonsContainer">
        <Button onClick={handle.enter} className="button">
          Pantalla Completa
        </Button>

        <Button onClick={handleForceUpdate} className="button">
          Forzar Actualización
        </Button>

      </div>

      <FullScreen handle={handle} >
        <ShowChapter images={images} />
      </FullScreen>
    </div>
  )
}
