<template>
  <div class="main-login">
    <Login @login="login" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Login from '@/components/Login.vue'

export default {
  components: {
    Login
  },
  methods: {
    ...mapActions({
      setCart: 'Cart/setCart',
      resetCartState: 'Cart/resetCartState'
    }),
    login (uid) {
      this.resetCartState()
      this.setCart({ uid })
      this.$router.push('/Shop')
    }
  }
}
</script>

<style scoped>
  .main-login {
    margin-top: 20% !important;
  }
</style>
