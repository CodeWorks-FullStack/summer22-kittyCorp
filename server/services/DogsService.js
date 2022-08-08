import { FAKE_DB } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class DogsService {

  async editDog(dogId, dogData) {
    let dog = await this.getDogById(dogId)

    // take the update or leave it what it was
    dog.name = dogData.name || dog.name
    dog.color = dogData.color || dog.color

    // tomorrow don't forget to call save

    return dog
  }

  async getDogById(dogId) {
    let dog = FAKE_DB.dogs.find(c => c.id == dogId) // this will change tomorrow

    if (!dog) {
      throw new BadRequest("Invalid ID")
    }

    return dog
  }


  async createDog(dogData) {
    dogData.id = FAKE_DB.dogs.length // super cheat
    FAKE_DB.dogs.push(dogData)
    return dogData // this will change tomorrow
  }


  async getDogs() {
    return FAKE_DB.dogs // this will change tomorrow
  }


  async deleteDog(dogId) {
    let dog = await this.getDogById(dogId)
    // @ts-ignore
    let dogIndex = FAKE_DB.dogs.indexOf(dog) // this will change tomorrow
    FAKE_DB.dogs.splice(dogIndex, 1)

    return dog
  }
 }

 export const dogsService = new DogsService()
