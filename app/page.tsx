"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [images, setImages] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await fetch("/api", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
        return
      }
      setImages(data)
    })()
  }, [])
  
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl font-bold text-center">
        One piece Manga Reminder
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-wrap justify-center items-center">
        {images.map((image, index) => (
          <div key={index} className="m-2">
            <img src={image} alt="manga" width={100} height={100}/>
          </div>
        ))}
      </div>
    </div>
  )
}
