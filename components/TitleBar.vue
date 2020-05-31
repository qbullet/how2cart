<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon />

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />

      <v-btn
        v-if="title !== 'index'"
        icon
        @click="$emit('cart-clicked', true)"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn
        v-if="title !== 'index'"
        icon
        @click="$emit('logout-clicked')"
      >
        <v-icon>mdi-account-details</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'PAGE'
    }
  }
}
</script>
