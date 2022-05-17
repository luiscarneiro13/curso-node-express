const { faker } = require('@faker-js/faker')

class ProductsServices {

  constructor() {
    this.products = []
    this.generate()
  }

  generate() {
    let limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl()
      })
    }
  }

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find((item) => item.id === id)
  }

  create(body) {
    const product = {
      id: faker.database.mongodbObjectId(),
      ...body
    }
    this.products.push(product)
    return product
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('Producto no encontrado')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    const borrado = this.products[index]
    if (index >= 0) {
      this.products.splice(index, 1)
      return borrado
    } else {
      throw new Error('Producto no encontrado')
    }
  }

}

module.exports = ProductsServices
