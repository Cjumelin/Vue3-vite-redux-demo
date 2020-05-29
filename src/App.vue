<template>
  <div>
    <thing-list/>
  </div>
</template>

<script>
  import thingList from "./uiComponent/thingList/thingList.vue";
  import {storeProvider} from "./store/vue3-redux/storeGateway";
  import {initStore} from "./store/initStore";

  export default {
    components: {
      thingList
    },
    setup() {
      console.log(storeProvider)
      storeProvider(initStore())
    },
  }
</script>