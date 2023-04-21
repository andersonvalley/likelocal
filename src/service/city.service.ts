import { instance } from '../API/instance'

export class cityService {
  static async getAll() {
    return instance('/locations', { params: { fields: 'slug,name,coords' } })
  }
}
