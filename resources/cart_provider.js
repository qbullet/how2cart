import HttpRequest from './http_request'

class CartProvider extends HttpRequest {
  getCartByUID (payload) {
    return this.fetch(`/carts/${payload}`)
  }

  add2cart (payload) {
    return this.create('/carts', payload)
  }
}

export default CartProvider
