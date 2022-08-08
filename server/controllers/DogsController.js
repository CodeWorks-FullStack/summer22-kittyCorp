import { dogsService } from '../services/DogsService.js';
import BaseController from '../utils/BaseController.js';
export class DogsController extends BaseController {

  constructor() {
    super('/api/dogs')

    this.router
      .get('', this.getDogs)
      .post('', this.createDog)
      // get one by ID
      .get('/:dogId', this.getDogById)
      // Allows a single dog to be edited
      .put('/:dogId', this.editDog)
      // delete one by ID
      .delete('/:dogId', this.deleteDog)

  }

  // [HTTPGET]
  async getDogs(req, res, next) {
    try {
      let dogs = await dogsService.getDogs()
      res.send(dogs)
    } catch (error) {
      next(error)
    }
  }

  // GET ONE BY ID
  async getDogById(req, res, next) {
    try {
      //                                         vvv Short for URL parameters
      let dog = await dogsService.getDogById(req.params.dogId)
      res.send(dog)
    } catch (error) {
      next(error)
    }
  }

  // CREATE
  async createDog(req, res, next) {
    try {
      // how do I get the data from the client?
      let dogData = req.body
      // today only we blindly trust that thing is a dog
      let dog = await dogsService.createDog(dogData)

      res.send(dog)

    } catch (error) {
      next(error)
    }
  }



  // EDIT BY ID
  async editDog(req, res, next) {
    try {
      let dog = await dogsService.editDog(req.params.dogId, req.body)
      res.send(dog)
    } catch (error) {
      next(error)
    }
  }


  // DELETE BY ID

  async deleteDog(req, res, next) {
    try {
      let dog = await dogsService.deleteDog(req.params.dogId)
      res.send(dog)
    } catch (error) {
      next(error)
    }
  }


  // TODO npm i, postman, gitignore

}
