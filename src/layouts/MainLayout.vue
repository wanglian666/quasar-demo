<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <div class="q-px-lg q-pt-xl q-mb-md">
          <div class="text-h3">Todo</div>
          <div class="text-subtitle1">{{ todaysDate }}</div>
        </div>
      </q-toolbar>
      <q-img class="header-image absolute-top" src="../assets/img/mountain.jpg" />
    </q-header>

    <!-- 左边 -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-img class="absolute-top" src="../assets/img/mountain.jpg" style="height: 165.85px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">{{ store.username }}</div>
          <div>{{ store.email }}</div>
        </div>
      </q-img>

      <q-list style="margin-top: 170px;">
        <EssentialLink v-for="item in essentialLinks" :key="item.title" :data="item" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { date } from 'quasar'
import {userStore} from "src/store/modules/user";
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const store = userStore()
const todaysDate = computed(() => {
  const timeStamp = Date.now()
  const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss')
  return formattedString
})

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Todo',
    icon: 'add',
    link:'/Todo'
  },
  {
    title: '帮助',
    icon: 'help',
    link:'/help'
  },
  {
    title: '地图',
    icon: 'map',
    link:'/map'
  },
  {
    title: '图表',
    icon: 'bar_chart',
    link:'/chart',
  },
  {
    title: '百度',
    icon: 'search',
    link:'https://www.baidu.com/',
    external:true
  },
];

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

onMounted(() => {
  console.log('store111111',store);

})
</script>


<style lang="scss" scoped>
.q-toolbar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header-image {
  height: 100%;
  z-index: -1;
}

</style>
