/**
 * NOTE
 * THIS IS FOR DEMO PURPOSES ONLY IT WILL CHANGE
 */

import { FAKE_DB } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"


class CatsService {
  async editCat(catId, catData) {
    let cat = await this.getCatById(catId)

    // take the update or leave it what it was
    cat.name = catData.name || cat.name
    cat.color = catData.color || cat.color

    // tomorrow don't forget to call save

    return cat
  }

  async getCatById(catId) {
    let cat = FAKE_DB.cats.find(c => c.id == catId) // this will change tomorrow

    if (!cat) {
      throw new BadRequest("Invalid ID")
    }

    return cat
  }


  async createCat(catData) {
    catData.id = FAKE_DB.cats.length // super cheat
    FAKE_DB.cats.push(catData)
    return catData // this will change tomorrow
  }


  async getCats() {
    return FAKE_DB.cats // this will change tomorrow
  }


  async deleteCat(catId) {
    let cat = await this.getCatById(catId)
    // @ts-ignore
    let catIndex = FAKE_DB.cats.indexOf(cat) // this will change tomorrow
    FAKE_DB.cats.splice(catIndex, 1)

    return cat
  }





}

export const catsService = new CatsService()
