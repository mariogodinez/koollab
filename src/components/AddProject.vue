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
                <h3 class="margin-left10 color-blue padding-left10" style=" border-left:5px solid;">
                    <span class="color-black font-normal font1-3em">Agregar proyecto nuevo</span>
                </h3>


            </section>

            <article class="home-list my-container flex">
                

                <div class="box width100 padding20">
                    <div class="margin-bottom20 text-center">
                        <h3>Agregar proyecto</h3>
                    </div>

                    <div class="margin-bottom20">
                        <h3 class="margin5">Título</h3>
                        <div class="padding5">
                            
                            <vs-input style="margin:0;"></vs-input>
                        </div>
                    </div>


                    <div class="margin-bottom20">
                        <h3 class="margin5">Descripción</h3>
                        <div class="padding5">
                            <textarea class="vs-textarea" rows="9"></textarea>
                        </div>
                    </div>


                    <div class="margin-bottom20">
                        <h3 class="margin5">Fecha de entrega</h3>
                        <div class="padding5">
                            
                            <vs-input style="margin:0;"></vs-input>
                        </div>
                    </div>

                    <div class="margin-bottom20">
                        <h3 class="margin5">Colaboradores</h3>
                        <div class="padding5">
                            
                            <vs-input style="margin:0;"></vs-input>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="margin-bottom20">
                            <h3 class="margin5">Adjuntar archivo</h3>
                            <div class="padding5">
                                
                                <vs-upload style="margin:0;"></vs-upload>
                            </div>
                        </div>
                        <div class="margin-top20 relative" style="top:15px; left:30px;">
                            <vs-button vs-radius="2px" vs-type="primary-border"><span class="text-uppercase">guardar</span></vs-button>
                        </div>
                    </div>
                    
                </div>


                <div class="box padding20" style="width:45%;">
                    
                </div>

            </article>
		</article>
	</section>
</template>

