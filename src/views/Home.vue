<template>
  <div class="home">

    <button @click="goToDayBook" class="btn btn-primary">Primary</button>
    <button @click="goToDayBook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDayBook" class="btn btn-success">Success</button>

  </div>
</template>

<script>
export default {
 methods:{
   goToDayBook(){
     this.$router.push({name:'daybook'});
   }
 }
}
</script>