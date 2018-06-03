<script>
	import Spiner from './Spinner.vue'
    import DatePicker from 'vuejs-datepicker'


	export default {
		components:{
			Spiner,
            DatePicker
		},
		data(){
			return {
				spin: false,
				error: false,
                project:{
                    title: '',
                    description: '',
                    owner: null,
                    dueto: null,
                    collaborators: 'mariogodinezmedina@gmail.com gabsrens@gmail.com'
                }
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
			addProject(){
                let self = this
                let obj = self.project
                //1st july 2018
                let time = 1530466812

                obj.owner = localStorage.user
                obj.dueto = time
                obj.collaborators=self.project.collaborators.split(' ')


                this.spin = true
                axios.post('/projects', obj)   
                    .then(res =>{
                        console.log(res)
                        self.spin = false
                    })
                    .catch(err =>{
                        console.log(err)
                        self.spin = false
                    })

            }
		}
	}
</script>

<style type="text/css">
.vs-textarea{
    width: 100%;
    display: flex;
    padding:10px;
    border:1px solid #ccc;
    transition: .5s;
    border-radius: 6px;
    font-size: 1.1em;
    color: rgba(0,0,0,.7);
}

.vs-textarea:focus{
    box-shadow: 0 3px 10px 0 rgba(0,0,0,.15);
    border:1px solid #2586E4;
}

.vdp-datepicker {
    z-index: 100000000 !important;
}

.vdp-datepicker input{
    width: 100% !important;
    display: flex !important;
    padding:10px !important;
    border:1px solid #ccc !important;
    transition: .5s !important;
    border-radius: 6px !important;
    font-size: 1.1em !important;
    color: rgba(0,0,0,.7) !important;
    background: white !important;

}
</style>

<template class="padding0">
	<section class="padding0" style="padding-top: 0px !important;">
	<Spiner v-if="spin"></Spiner>
		<article>

			<section class="my-container padding-top10 flex flex-between flex-middle">
                <h3 class="margin-left10 color-blue padding-left10" style=" border-left:5px solid;">
                    <span class="color-black font-normal font1-3em">Add new project</span>
                </h3>


            </section>

            <article class="home-list my-container flex">
                

                <div class="box width100 padding20">
                    <div class="margin-bottom20 text-center">
                        <h3>Add project</h3>
                    </div>

                    <div class="margin-bottom20">
                        <h3 class="margin5">Title</h3>
                        <div class="padding5">
                            
                            <vs-input v-model="project.title" style="margin:0;"></vs-input>
                        </div>
                    </div>


                    <div class="margin-bottom20">
                        <h3 class="margin5">Description</h3>
                        <div class="padding5">
                            <textarea class="vs-textarea" rows="9"></textarea>
                        </div>
                    </div>


                    <div class="margin-bottom20">
                        <h3 class="margin5">Due to</h3>
                        <div class="padding5">
                            
                            <DatePicker  :disabled="disabledDates" language="es" v-model="project.dueto" class="width100 back-white pointer" placeholder="--/---/--"></DatePicker>
                        </div>
                    </div>

                    <div class="margin-bottom20">
                        <h3 class="margin5">Colllaborators</h3>
                        <div class="padding5">
                            
                            <vs-input v-model="project.collaborators" style="margin:0;"></vs-input>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="margin-bottom20">
                            <h3 class="margin5">Upload file</h3>
                            <div class="padding5">
                                
                                <vs-upload style="margin:0;"></vs-upload>
                            </div>
                        </div>
                        <div class="margin-top20 relative" style="top:15px; left:30px;">
                            <vs-button vs-radius="2px" vs-type="primary-border"><span class="text-uppercase">Save project</span></vs-button>
                        </div>
                    </div>
                    
                </div>


                <div class="box padding20" style="width:45%;">
                    
                </div>

            </article>
		</article>
	</section>
</template>

