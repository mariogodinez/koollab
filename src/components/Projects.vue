<script>
	import Spiner from './Spinner.vue'

	export default {
		components:{
			Spiner,
		},
		data(){
			return {
				spiner: false,
				error: false,
                allProjects: null
			}
		},
		computed:{
			logged(){
				return this.$store.getters.logged
			}
		},

		created(){
            let self = this
			axios.get('/projects')
                .then(res =>{
                    console.log(res)
                    self.allProjects = res.data

                })
                .catch(err =>{
                    console.log(err)
                })
		},
		methods: {
			goAddProject(){
				this.$router.push('/agregar-proyecto')
			},
            goProject(idProject){
                let self = this
                this.$router.push({ name: 'projectView', params:{projectId: idProject}})
            }
		}
	}
</script>

<template class="padding0">
	<section class="padding0" style="padding-top: 0px !important;">
	<Spiner v-if="spin"></Spiner>
		<article>

			<section class="my-container padding-top10 flex flex-between flex-middle">
                <h3 class="margin-left10 color-blue padding-left10" style=" border-left:5px solid;">
                    <span class="color-black font-normal font1-3em">My assigned projects</span>
                </h3>


                <h3 class="flex flex-middle pointer font-normal" @click="goAddProject">
                    <span class="margin-right10">Add Project </span>
                    <div class="rounded hvr-pop flex flex-middle flex-center back-green color-white" style="width:50px; height:50px;">
                    	<span class="ion-plus-round font1-5em"></span>
                    </div>
                </h3>
            </section>

            <article class="home-list my-container flex  flex-wrap">
                <div class="box project-card width100" v-for="i in allProjects">
                    <div class="back-blue padding15 flex project-card-header">
                        
                        <div class="padding-left10">
                            <h2 class="project-card-header-title relative"> 
                                <div class="absolute" style="left:-22px;" v-if="i.status">
                                    <span v-tooltip="'Work in progress'" v-if="i.status.onTrack" class="square20 flex rounded back-yellow"></span>
                                    <span v-tooltip="'Stucked'" v-if="i.status.stuck" class="square20 flex rounded back-red"></span>
                                    <span v-tooltip="'Finished'" v-if="i.status.done" class="square20 flex rounded back-green"></span>
                                </div> 
                                {{i.title}}
                            </h2>
                            <div class="back-white margin10-0 flex flex-middle" style="border-radius:10px; padding:0 8px; width:98%;">
                                <vs-progress :vs-percent="90" vs-color="#ca0000"></vs-progress>
                                
                                <span class="margin-left5"> 90% </span>
                            </div>
                            <p class="project-card-header-text">We need to develop a website to help people getting things done . . .</p>
                        </div>
                        <p class="project-card-header-icon color-white">
                            <span class="ion-aperture"></span>
                        </p>
                    </div>

                    <div class="flex flex-between flex-middle">
                        <article>
                            <ul class="padding20 margin-left10">
                                <li class="font1-3em">3 pending stuff</li>
                                <li class="font1-3em">2 issues</li>
                            </ul>
                        </article>
                        <article class="margin-right20 flex flex-column flex-middle">

                            <div class="rounded hvr-forward color-blue pointer flex flex-middle flex-center" @click="goProject(i.id)" style="border:2px solid; width:40px; height:40px;">
                                <span class="ion-arrow-right-c font1-5em"></span>
                            </div>
                            <h3 class="" style="font-size:.9em; margin-top:5px;">Go to project</h3>
                            
                        </article>
                    </div>
                </div>

            </article>
		</article>
	</section>
</template>

