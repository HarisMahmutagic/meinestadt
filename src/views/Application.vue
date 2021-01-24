<template>
  <div class="application">
    <MyCourses />
  </div>
</template>

<script>
// @ is an alias to /src
import MyCourses from "../components/MyCourses";

export default {
  name: "Application",
  components: {
    MyCourses,
  },
};
</script>

<style scoped></style>
