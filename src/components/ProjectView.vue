<script>
	import Spiner from './Spinner.vue'
    import ModalAddTask from './ModalAddTask.vue'


	export default {
		components:{
			Spiner,
            ModalAddTask
		},
		data(){
			return {
                projectId: null,
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
                
            }
		},

		created(){
            let self = this
            this.projectId = self.$route.params.projectId
            let id = self.$route.params.projectId || 'lm'
			axios.get('/projects/' + id)
                .then(res =>{
                    console.log(res)
                    self.allProjects = res.data
                })
                .catch(err =>{
                    console.log(err)
                })
		},
        mounted(){
            let self = this
            this.$on('closeModal', function(){
                self.addTask = false
            })

            this.$on('addedTask', function(obj){
                self.addTask = false
                self.allMyTaks.push(obj)
            })
        },
		methods: {
			addNewTask(){
                this.addTask = true
            }
		}
	}
</script>

<style type="text/css">
    .textOver{
        text-decoration: line-through;
    }
</style>


<template class="padding0">
    <section class="padding0" style="padding-top: 0px !important;">
    <Spiner v-if="spin"></Spiner>
    <ModalAddTask v-if="addTask" :projectId="projectId"></ModalAddTask>
        <article>

            <section class="my-container padding-top10 flex flex-between flex-middle">
                <h3 class="margin-left10 color-blue padding-left10" style=" border-left:5px solid;">
                    <span class="color-black font-normal font1-3em">Project View</span>
                </h3>


            </section>
            <article class="my-container flex padding0-10">
               <div class="box width100 flex-between flex" style="min-height:100px !important; margin:0;">
                    <div></div>
                    <div class=" flex flex-middle flex-center">
                        <h2>My awesome Project <span class="ion-arrow-down-b color-blue margin-left10 relative font1-3em" style="top:5px"></span></h2>
                    </div>
                    <div class="padding20 relative" style="right:20px;">
                        <article class=" flex flex-column flex-middle">

                            <div @click="addNewTask" class="rounded color-green back-green pointer flex flex-middle flex-center" style="border:2px solid; width:50px; height:50px;">
                                <span class="ion-plus-round font1-5em color-white"></span>
                            </div>
                            <h3 class="" style="font-size:.9em; margin-top:5px;">Add Task</h3>
                            
                        </article>
                    </div>
                    
                </div> 
            </article>
            

            <article class="home-list my-container flex">
                

                <div class="box width100 padding10">
                     
                     <article class="padding20">
                         <h3>All My To-Do List</h3>

                         <article class="margin10">
                            <div v-for="i in allMyTaks" class="flex flex-middle">
                                <vs-checkbox v-model="i.value"></vs-checkbox>
                                <p class="color-black font1em " :class="{textOver : i.value}">{{i.text}}.</p>
                            </div>
                         </article>
                     </article>
                     <div class=" margin10-0 flex flex-middle" style="border-radius:10px; padding:0 8px; width:98%;">
                        <div class=" width100" v-tooltip="'My personal progress'" style="padding:4px; border-radius:10px; background:#ddd;">
                            <div class="padding5 back-blue" style="border-radius:10px;" :style="{width: per + '%'}">
                                
                            </div>
                        </div>
                    
                    <span class="margin-left5 font-bold font1-3em"> {{ per }}% </span>
                </div>
                    
                </div>


                <div class="box padding10" style="width:45%;">
                    <h3>Collaborators Taks</h3>

                    <article class="margin-top20">
                        <p class="margin-bottom5"><em>@gabs</em> </p>
                        <div v-for="(i, index) in 4">
                            <p class="margin-left15 flex flex-middle"><span class="ion-ios-play"></span> Get all ddesign finished <vs-switch v-model="added" vs-type="#16d247"></vs-switch> <span v-if="index == 0" class="ion-information-circled font1-5em pointer" v-tooltip="'Enable to suscribe'"></span></p>
                        </div>
                    </article>
                    <article class="margin-top20">
                        <p class="margin-bottom5"><em>@toto</em> </p>
                        <div v-for="(i, index) in 4">
                            <p class="margin-left15 flex flex-middle"><span class="ion-ios-play"></span> Design all web pages <vs-switch v-model="added" vs-type="#16d247"></vs-switch> <span v-if="index == 0" class="ion-information-circled font1-5em pointer" v-tooltip="'Enable to suscribe'"></span></p>
                        </div>
                    </article>
                </div>

            </article>
        </article>
    </section>
</template>

