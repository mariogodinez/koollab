 <template>
  <div >
<!--     <router-link to="/app">Router App</router-link>
    <router-link to="/login">Login</router-link> -->
	
	   <HeaderComponent v-if="logged"></HeaderComponent>

    <router-view ></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'


export default {
  name: 'appHome',
  components: {
    HeaderComponent
  },
  computed:{
    logged(){
      return this.$store.getters.logged
    }
  }
}
</script>
