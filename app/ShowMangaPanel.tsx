export function ShowMangaPanel({ image }: { image: string }) {
    return (
      <img src={image} alt="No image" width="100%" height="100%" style={{objectFit:'contain'}}/>
    )
  }