<template>
    <div>
        <Loader v-if="things.fetching"/>
        <div v-else>
            {{
            things.data
            }}
        </div>
    </div>
</template>

<script lang="ts">
  import Loader from "../Loader.vue";
  import {fetchThingsList} from "./thingList";

  export default {
      components: {
          Loader,
      },
      setup() {
          const things = fetchThingsList();
          return {
              things
          }
      },
}
</script>