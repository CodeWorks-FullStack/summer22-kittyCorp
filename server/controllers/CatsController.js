import { catsService } from '../services/CatsService.js';
import BaseController from '../utils/BaseController.js';
export class CatsController extends BaseController {

  constructor() {
    super('/api/cats')

    this.router
      .get('', this.getCats)
      .post('', this.createCat)
      // get one by ID
      .get('/:catId', this.getCatById)
      // Allows a single cat to be edited
      .put('/:catId', this.editCat)
      // delete one by ID
      .delete('/:catId', this.deleteCat)

  }

  // [HTTPGET]
  async getCats(req, res, next) {
    try {
      let cats = await catsService.getCats()
      res.send(cats)
    } catch (error) {
      next(error)
    }
  }

  // GET ONE BY ID
  async getCatById(req, res, next) {
    try {
      //                                         vvv Short for URL parameters
      let cat = await catsService.getCatById(req.params.catId)
      res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  // CREATE
  async createCat(req, res, next) {
    try {
      // how do I get the data from the client?
      let catData = req.body
      // today only we blindly trust that thing is a cat
      let cat = await catsService.createCat(catData)

      res.send(cat)

    } catch (error) {
      next(error)
    }
  }



  // EDIT BY ID
  async editCat(req, res, next) {
    try {
      let cat = await catsService.editCat(req.params.catId, req.body)
      res.send(cat)
    } catch (error) {
      next(error)
    }
  }


  // DELETE BY ID

  async deleteCat(req, res, next) {
    try {
      let cat = await catsService.deleteCat(req.params.catId)
      res.send(cat)
    } catch (error) {
      next(error)
    }
  }


  // TODO npm i, postman, gitignore

}
