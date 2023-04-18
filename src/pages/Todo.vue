<template>
  <q-page class="todo-box">
    <div class="container">
      <q-input bottom-slots v-model="text" label="Label" dense>
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="onAdd" />
        </template>
      </q-input>

      <q-list separator>
        <q-item :class="{ 'done bg-blue-1': item.isChecked }" clickable v-ripple v-for="(item, index) of todoList"
          :key="index">
          <q-item-section avatar>
            <q-checkbox v-model="item.isChecked" color="primary" />
          </q-item-section>

          <q-item-section>
            {{ item.label }}
          </q-item-section>

          <q-item-section v-if="item.isChecked" side @click="onDelete(index)">
            <q-btn flat round dense color="primary" icon="delete" />
          </q-item-section>
        </q-item>
      </q-list>

      <div v-if="todoList.length == 0">啥也没有~</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from 'quasar';

const $q = useQuasar();
const text = ref<string>('');
const todoList = ref([
  {
    label: '吃饭',
    isChecked: false
  },
  {
    label: '睡觉',
    isChecked: false
  },
  {
    label: '看电影',
    isChecked: false
  }
])

const onAdd = () => {
  let data = {
    label: text.value,
    isChecked: false
  }
  todoList.value.unshift(data);
  text.value = '';
}

const onDelete = (index) => {
  $q.dialog({
    title: '提示',
    message: '确定要删除吗？',
    cancel: true,
  }).onOk(() => {
    todoList.value.splice(index, 1);
    $q.notify({
      position: 'top',
      message: '删除成功'
    })
  })
}
</script>

<style scoped lang="scss">
.todo-box {
  overflow: hidden;

  .container {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;

    .done {
      text-decoration: line-through;
    }

  }
}
</style>
