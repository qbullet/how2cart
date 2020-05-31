<template>
  <v-card
    class="mx-auto"
    max-width="344"
    raised
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Login
        </div>
        <v-list-item-title class="headline mb-1">
          ENTER UR UID
        </v-list-item-title>
        <v-text-field
          v-model="uid"
          class="pt-3"
          label="UID"
          dense
          maxlength="4"
          @keydown="input($event)"
        />
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
        style="border-radius: 50%;"
      >
        <img src="~/assets/img/vpr.jpg">
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        text
        block
        @click="$emit('login', uid)"
      >
        LOGIN
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      uid: ''
    }
  },
  methods: {
    input (event) {
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode !== 8) {
        event.preventDefault()
      }
    }
  }
}
</script>
