interface iCoords {
  lat: number
  lon: number
}

export interface ICity {
  name: string
  slug: string
  coords: iCoords
}
