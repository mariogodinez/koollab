<script>
	import Spiner from './Spinner.vue'

	export default {
		components:{
			Spiner,
		},
		data(){
			return {
				spiner: false,
				error: false
			}
		},
		computed:{
			logged(){
				return this.$store.getters.logged
			}
		},
		created(){
			
		},
		methods: {
			
		}
	}
</script>

<template class="padding0">
	<section class="padding0" style="padding-top: 0px !important;">
	<Spiner v-if="spiner"></Spiner>
		<article>
			<section class="my-container padding20">
                <h3 class="margin-left10 color-blue padding-left10" style=" border-left:5px solid;">
                    <span class="color-black font-normal font1-3em">Hello Mario, Welcome again!</span>
                </h3>
            </section>


            <section class="home-list my-container flex flex-between">
                <div class="box width100">
                    
                </div>

                <div class="box width100">
                    
                </div>

                <div class="box width100">
                    
                </div>
            </section>
		</article>
	</section>
</template>

