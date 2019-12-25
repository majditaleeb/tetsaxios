<template>
    <div>
      <button @click="getData">getData</button>
      <TestAx v-for="data in infos" v-bind:key ="data.id" :description="data.description" :rate_float="data.rate_float" />  
    </div>  
</template>

<script>
import axios from "axios";
import TestAx from "@/components/TestAx.vue";
export default {
   name  : "test",
   data () {
    return {
      infos: null
    }
  },
   components:{
       TestAx
   },
   methods:{
         getData: function(){
           axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.infos = response.data.bpi))
  
  }

   }
}
</script>