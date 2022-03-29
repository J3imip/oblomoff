<template>
  <div>
    <Main/>
    <Info/>
    <Contacts/>
  </div>
</template>

<script>
import Main from '@/views/Home/Main.vue';
import Info from '@/views/Home/Info.vue';
import Contacts from '@/views/Home/Contacts.vue';

export default {
  name: 'home',
  components: {
    Main,
    Info,
    Contacts
  }
}
</script>

<style>

</style>