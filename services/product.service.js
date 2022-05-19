const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')
class ProductsServices {

  constructor() {
    this.products = []
    this.generate()
  }

  generate() {
    let limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 300);
    })
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id)
    if (!product) {
      throw boom.notFound('Product not found')
    }

    if (product.isBlock) {
      throw boom.conflict('Product is block')
    }

    return product

  }

  async create(body) {
    const product = {
      id: faker.database.mongodbObjectId(),
      ...body
    }
    this.products.push(product)
    return product
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('Product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    const borrado = this.products[index]
    if (index >= 0) {
      this.products.splice(index, 1)
      return borrado
    } else {
      throw boom.notFound('Product not found')
    }
  }

}

module.exports = ProductsServices
