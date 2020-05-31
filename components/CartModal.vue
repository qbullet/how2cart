<template>
  <div class="text-center">
    <v-dialog
      v-model="show"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Cart
        </v-card-title>
        <v-card-text>
          <v-list three-line>
            <v-list-item
              v-for="(product, index) in list"
              :key="index"
            >
              <v-list-item-avatar>
                <v-img :src="product.item.imgUrl" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  {{ product.item.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ `QTY: ${product.qty}, Total: ${product.qty * product.item.price}` }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="red lighten-1">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="$emit('close', false)"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
