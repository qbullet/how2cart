<template>
  <div>
    <v-alert
      :value="alertHandle.show"
      :type="alertHandle.style"
      style="position: fixed;z-index: 999;margin-left: 60%"
    >
      {{ alertHandle.text }}
    </v-alert>
    <v-card
      v-for="(item,index) in allProducts"
      :key="index"
      class="d-inline-block ma-1"
      style="width: 280px;"
      raised
    >
      <v-container>
        <v-row justify="space-between">
          <v-col
            cols="auto"
            style="width: 224px; height: 280px;"
          >
            <div class="title mb-auto ml-2 font-weight-bold">
              {{ item.name }}
            </div>
            <v-img
              height="200"
              width="200"
              :src="item.imgUrl"
            />
          </v-col>

          <v-col
            cols="auto"
            class="text-center pl-0"
          >
            <v-row
              class="flex-column ma-0 fill-height"
              justify="center"
            >
              <v-col class="px-0">
                <v-btn
                  icon
                  @click="add2Cart(item.code)"
                >
                  <v-icon>mdi-cart-arrow-down</v-icon>
                </v-btn>
              </v-col>

              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductProvider from '@/resources/product_provider'
import CartProvider from '@/resources/cart_provider'

const productService = new ProductProvider()
const cartService = new CartProvider()
export default {
  data () {
    return {
      allProducts: null,
      cart: null,
      uid: null,
      alertHandle: {
        show: false,
        style: 'info',
        text: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      storeCart: 'Cart/cart'
    })
  },
  async created () {
    this.allProducts = await productService.getAllProducts()
    const cart = await cartService.getCartByUID(this.storeCart.uid)
    this.setCart(cart[0])
    this.cart = this.storeCart
    this.uid = this.cart.uid
  },
  methods: {
    ...mapActions({
      setCart: 'Cart/setCart',
      resetCartState: 'Cart/resetCartState'
    }),
    async add2Cart (code) {
      await cartService.add2cart({ uid: this.uid, item: code })
      const cart = await cartService.getCartByUID(this.storeCart.uid)
      this.setCart(cart[0])
      this.setAlert('success', `has been add 'item: ${code}' to cart`)
      setTimeout(this.closeAlert, 3000)
    },
    setAlert (style, text) {
      this.alertHandle = {
        show: true,
        style,
        text
      }
    },
    closeAlert () {
      this.alertHandle = {
        show: false,
        style: 'info',
        text: ''
      }
    }
  }
}
</script>
