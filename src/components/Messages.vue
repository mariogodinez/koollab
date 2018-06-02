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
</style>

<template class="padding0">
	<section class="padding0" style="padding-top: 0px !important;">
	<Spiner v-if="spiner"></Spiner>
		<article>

			<section class="my-container padding-top10 flex flex-between flex-middle">
                

            </section>

            <article class="home-list my-container flex">
                <section class="padding-top20" style="width:60%;">
                    

                    <div class=" flex flex-between flex-middle">
                       <h3 class="margin-left10 color-blue padding-left10" style=" border-left:5px solid;">
                            <span class="color-black font-normal font1-3em">Mensajes</span>
                        </h3> 
                        <p class="margin-right10">
                            <span class="ion-compose pointer" style="font-size:1.8em;"></span>
                        </p>
                    </div>

                    <div class="box" style="max-height:400px; overflow-y:auto;">
                        <section class="padding10 flex flex-middle" style="border-bottom:1px solid #ddd;" v-for="i in 7">
                            <figure class="width100 rounded flex" style="width:60px; height:60px;">
                                <img src="https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/416x416.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044" class="width100 rounded">
                            </figure>

                            <div class="margin-left10" style="width:80%;">
                                <div class="flex flex-between margin-bottom10 flex-middle">
                                    <h4>Mark Suzxker</h4>
                                    <p>Mayo 14</p>
                                </div>
                                <p style="font-size:.9em;">
                                    Hola Mario, te he enviado unos cuantos bitcoins para que te tomes una chelas, Disfruta!
                                </p>
                            </div>
                        </section>
                    </div>

                </section>

                <div class="box width100">
                    <div class="margin-bottom20">
                        <section class="padding10 flex flex-middle" style="border-bottom:1px solid #ddd;">
                            <figure class="width100 rounded flex" style="width:60px; height:60px;">
                                <img src="https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/416x416.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044" class="width100 rounded">
                            </figure>

                            <div class="margin-left10 flex flex-middle flex-between width100">
                                <article class="">
                                   <div class="margin-bottom5 flex flex-middle">
                                        <h4>Mark Suzxker</h4>
                                    </div>
                                    <p style="font-size:.9em;">
                                       Última visita: 12:43 hrs.
                                    </p>
                                </article>

                                <div class="flex padding-right10">
                                    <p class="ion-gear-a font1-5em margin-right20"></p>
                                    <p class="ion-videocamera font1-5em margin-right20"></p>
                                    <p class="ion-link font1-5em"></p>
                                </div>
                                
                            </div>
                        </section>
                    </div>

                    <div class="margin-bottom20" style="max-height:280px; overflow-y:auto;">
                        <div class="padding20" v-for="i in 20">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div class="flex relative flex-between flex-middle" style="border-top:1px solid #aaa; top:-10px">
                        <div class="flex width100" >
                            <textarea type="text" class="flex padding10 color-blue" style="width:100%; height:50px; overflow-y:auto; border:0; font-size:1.1em;"></textarea>
                        </div>
                        <div class="flex padding-right10">
                            <p class="ion-navigate color-blue font1-5em margin-right20"></p>
                            <p class="ion-upload font1-5em margin-right20"></p>
                            <p class="ion-android-microphone font1-5em"></p>
                        </div>
            </div>

                    
                </div>


                

            </article>
		</article>
	</section>
</template>

