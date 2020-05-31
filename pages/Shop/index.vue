<template>
  <div>
    <router-view v-if="ready" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartProvider from '@/resources/cart_provider'

const cartService = new CartProvider()
export default {
  data () {
    return {
      ready: false
    }
  },
  computed: {
    ...mapGetters({
      storeCart: 'Cart/cart'
    })
  },
  async mounted () {
    const cart = await cartService.getCartByUID(this.storeCart.uid)
    this.setCart(cart[0])
    if (this.storeCart.uid !== '') {
      this.setCart(cart[0])
      this.ready = true
      this.$router.push('/Shop/views')
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions({
      setCart: 'Cart/setCart'
    })
  }
}
</script>
