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
			axios.get('/projects')
                .then(res =>{
                    console.log(res)

                })
                .catch(err =>{
                    console.log(err)
                })
		},
		methods: {
			goAddProject(){
				this.$router.push('/agregar-proyecto')
			}
		}
	}
</script>

<template class="padding0">
	<section class="padding0" style="padding-top: 0px !important;">
	<Spiner v-if="spiner"></Spiner>
		<article>

			<section class="my-container padding-top10 flex flex-between flex-middle">
                <h3 class="margin-left10 color-blue padding-left10" style=" border-left:5px solid;">
                    <span class="color-black font-normal font1-3em">Mis proyectos asignados</span>
                </h3>


                <h3 class="flex flex-middle pointer font-normal" @click="goAddProject">
                    <span class="margin-right10">Agregar Proyecto </span>
                    <div class="rounded flex flex-middle flex-center back-green color-white" style="width:50px; height:50px;">
                    	<span class="ion-plus-round font1-5em"></span>
                    </div>
                </h3>
            </section>

            <article class="home-list my-container flex flex-between">
                <div class="box project-card width100">
                    <div class="back-blue padding15 flex project-card-header">
                        <p class="project-card-header-icon color-white">
                            <span class="ion-aperture"></span>
                        </p>
                        <div>
                            <h2 class="project-card-header-title">Project Title</h2>
                            <p class="project-card-header-text">Lorem ipsum dolor sit amet, consectetur  qui officia deserunt mollit anim id est laborum...</p>
                        </div>
                    </div>
                </div>


                <div class="box project-card width100">
                    <div class="back-blue padding15 flex project-card-header">
                        <p class="project-card-header-icon color-white">
                            <span class="ion-flash-off color-yellow"></span>
                        </p>
                        <div>
                            <h2 class="project-card-header-title">Project Title</h2>
                            <p class="project-card-header-text">Lorem ipsum dolor sit amet, consectetur  qui officia deserunt mollit anim id est laborum...</p>
                        </div>
                    </div>
                </div>

                <div class="box width100">
                    
                </div>
            </article>
		</article>
	</section>
</template>

