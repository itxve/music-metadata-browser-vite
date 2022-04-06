<script setup lang="ts">
import { onMounted } from "vue";
import { parseBlob } from "music-metadata-browser";

onMounted(() => {
  const fileInput = document.querySelector("#fe");
  fileInput?.addEventListener("change", function (e) {
    const feDom = e.target as any;
    console.log(" e.files[0];", feDom.files?.[0]);
    parseBlob(feDom.files?.[0]).then((res) => {
      console.log(res);
    });
  });
});
</script>

<template>
  <input id="fe" type="file" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
