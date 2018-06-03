ToDos.vue<script>
	import Spiner from './Spinner.vue'

	export default {
		components:{
			Spiner,
		},
		data(){
			return {

				allProjectsTasks: null,
				addTask: false,
				spiner: false,
				error: false,
                percent: 0,
                allProjects: null,
                added: false,
                allMyTaks:[
                    {
                        value: true,
                        text: 'Upload to server both files'
                    },
                    {
                        value: true,
                        text: 'Fix css padding on landing page'
                    },
                    {
                        value: false,
                        text: 'Make SocketS conection PTT'
                    },
                    {
                        value: true,
                        text: 'Fix css padding on landing page'
                    },
                    {
                        value: false,
                        text: 'Make SocketS conection PTT'
                    },
                    {
                        value: false,
                        text: 'Upload to server both files'
                    },
                    {
                        value: true,
                        text: 'Fix css padding on landing page'
                    },
                    {
                        value: false,
                        text: 'Make SocketS conection PTT'
                    }
                ],

                allMyTaks2:[
                    {
                        value: true,
                        text: 'Upload to server both files'
                    },
                    {
                        value: true,
                        text: 'Fix css padding on landing page'
                    },
                    {
                        value: false,
                        text: 'Upload to server both files'
                    },
                    {
                        value: true,
                        text: 'Fix css padding on landing page'
                    },
                    {
                        value: false,
                        text: 'Make SocketS conection PTT'
                    }
                ]
			}
		},
		computed:{
			logged(){
				return this.$store.getters.logged
			},
			per(){
                let length = this.allMyTaks.length
                let lengthDone = this.allMyTaks.filter(item => item.value).length

                if(lengthDone){
                    let result = parseInt((lengthDone / length) * 100)
                  return result
              } else {
                return 0
              }
                
            },
            per2(){
                let length = this.allMyTaks2.length
                let lengthDone = this.allMyTaks2.filter(item => item.value).length

                if(lengthDone){
                    let result = parseInt((lengthDone / length) * 100)
                  return result
              } else {
                return 0
              }
                
            }
		},
		created(){
			 let self = this
			axios.get('/project/tasks')
                .then(res =>{
                    console.log(res)
                    self.allProjectsTasks = res.data

                })
                .catch(err =>{
                    console.log(err)
                })
			
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
                    <span class="color-black font-normal font1-3em">My Projects Tasks</span>
                </h3>
            </section>


            <section class="home-list my-container flex flex-between">
                <div class="box width100 padding10">
                     
                     <article class="padding20">
                         <h3>Web app</h3>

                         <article class="margin10">
                            <div v-for="i in allMyTaks" class="flex flex-middle">
                                <vs-checkbox v-model="i.value"></vs-checkbox>
                                <p class="color-black font1em " :class="{textOver : i.value}">{{i.text}}.</p>
                            </div>
                         </article>
                     </article>
                     <div class=" margin10-0 flex flex-middle" style="border-radius:10px; padding:0 8px; width:98%;">
                        <div class=" width100" v-tooltip="'My task percent'" style="padding:4px; border-radius:10px; background:#ddd;">
                            <div class="padding5 back-blue" style="border-radius:10px;" :style="{width: per + '%'}">
                                
                            </div>
                        </div>
                    
	                    <span class="margin-left5 font-bold font1-3em"> {{ per }}% </span>
	                </div>
                    
                </div>


                <div class="box width100">

                <article class="padding20">
                         <h3>Gaby's proyect</h3>

                         <article class="margin10">
                            <div v-for="i in allMyTaks2" class="flex flex-middle">
                                <vs-checkbox v-model="i.value"></vs-checkbox>
                                <p class="color-black font1em " :class="{textOver : i.value}">{{i.text}}.</p>
                            </div>
                         </article>
                     </article>
                     <div class=" margin10-0 flex flex-middle" style="border-radius:10px; padding:0 8px; width:98%;">
                        <div class=" width100" v-tooltip="'My task percent'" style="padding:4px; border-radius:10px; background:#ddd;">
                            <div class="padding5 back-blue" style="border-radius:10px;" :style="{width: per2 + '%'}">
                                
                            </div>
                        </div>
                    
                        <span class="margin-left5 font-bold font1-3em"> {{ per2 }}% </span>
                    </div>
                    
                </div>

                <div class="box width100">
                    
                </div>
            </section>
		</article>
	</section>
</template>

