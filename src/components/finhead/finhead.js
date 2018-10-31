import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);

export default {
  name: 'finhead',
  components: {},
  props: [],
  data () {
    return {
      str: this.$route.path,
      energyBool: false,
      oilBool: false,
      crudeBool:false,
      gasBool: false,
      coalBool: false,
      electricityBool: false,
      renewablesBool: false,
      CO2Bool: false,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  },
  created(){
    if(this.str.search("total-energy")!=-1)
    {
      this.energyBool=true;
    }
    else if(this.str.search("/#/crude-oil")!=-1)
    {
      this.crudeBool=true;
    }
    if(this.str.search("oil-products")!=-1)
    {
      this.oilBool=true;
    }
    if(this.str.search("natural-gas")!=-1)
    {
      this.gasBool=true;
    } 
    if(this.str.search("coal")!=-1)
    {
      this.coalBool=true;
    }
    if(this.str.search("electricity")!=-1)
    {
      this.electricityBool=true;
    }
    if(this.str.search("renewables")!=-1)
    {
      this.renewablesBool=true;
    }
    if(this.str.search("CO2")!=-1)
    {
      this.CO2Bool=true;
    }
  }
}
