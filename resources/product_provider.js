import HttpRequest from './http_request'

class ProductProvider extends HttpRequest {
  getAllProducts () {
    return this.fetch('/products')
  }

  getProductByID (payload) {
    return this.fetch(`/products/${payload}`)
  }
}

export default ProductProvider
