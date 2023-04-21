interface IPlaceImage {
  image: string
  source: {
    name: string
    link: string
  }
}

export interface IPlace {
  id: number
  title: string
  slug: string
  images: IPlaceImage[]
}
