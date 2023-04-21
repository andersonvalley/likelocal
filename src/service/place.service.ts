import { instance } from '../API/instance'

export class placeService {
  static async getPlaces(location: string, page_size: number, categories: string, fields: string) {
    return instance('/places', {
      params: {
        location,
        categories,
        page_size,
        fields,
      },
    })
  }
}
