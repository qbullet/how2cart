<template>
  <v-app>
    <TitleBar
      :title="$route.name"
      @cart-clicked="cartClicked"
      @logout-clicked="logout"
    />
    <v-container>
      <CartModal
        :show="cartShow"
        :list="itemInCart"
        @close="cartClicked"
      />
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TitleBar from '@/components/TitleBar'
import CartModal from '@/components/CartModal'
import ProductProvider from '@/resources/product_provider'

const productService = new ProductProvider()
export default {
  components: {
    CartModal,
    TitleBar
  },
  data () {
    return {
      cartShow: false,
      itemInCart: []
    }
  },
  computed: {
    ...mapGetters({
      storeCart: 'Cart/cart'
    })
  },
  methods: {
    ...mapActions({
      resetCartState: 'Cart/resetCartState'
    }),
    async cartClicked (show) {
      this.itemInCart = await this.fetchCart()
      this.cartShow = show
    },
    async fetchCart () {
      const cartOnlyID = this.storeCart.items
      const cartTemp = []
      for (const detail of cartOnlyID) {
        const temp = await productService.getProductByID(detail.code)
        cartTemp.push({ item: temp[0], qty: detail.qty })
      }
      return cartTemp
    },
    logout () {
      this.resetCartState()
      this.$router.push('/')
    }
  }
}
</script>
