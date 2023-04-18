<template>
  <q-item clickable exact v-ripple :to="data.link" target="data.external && _blank" :href="data.external && data.link">
    <q-item-section v-if="data.icon" avatar>
      <q-icon :name="data.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ data.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

export interface EssentialLinkProps {
  title: string;
  icon?: string;
  link?: string
  external?: boolean
}

const props = defineProps({
  data: {
    type: Object,
    default: {}
  }
})
</script>
