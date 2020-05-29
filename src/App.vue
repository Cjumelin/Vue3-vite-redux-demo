<template>
  <div>
    <thing-list/>
  </div>
</template>

<script>
  import thingList from "./uiComponent/thingList/thingList.vue";
  import {storeProvider} from 'vue-redux-tools';
  import {initStore} from "./store/initStore";

  export default {
    components: {
      thingList
    },
    setup() {
      storeProvider(initStore())
    },
  }
</script>