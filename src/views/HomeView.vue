<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <HelloWorld />
  </div>
</template>

<script>
import { defineComponent, ref, defineAsyncComponent } from 'vue';

const HelloWorld = defineAsyncComponent(() => import('@/components/HelloWorld.vue'));
export default defineComponent({
  name: 'HomeView',
  components: { HelloWorld },
  setup() {
    const message = ref('Welcome to Vue Js');

    return {
      message
    };
  }
});
</script>
