<script>
	import Spiner from './Spinner.vue'
	import ModalSelectHourZone from './ModalSelectHourZone.vue'

	export default {
		components:{
			Spiner,
			ModalSelectHourZone
		},
		data(){
			return {
				spiner: false,
				error: false,
				one: false,
				sunday:[
					{
						value: false,
						text: '0 - 1'
					},
					{
						value: false,
						text: '1 - 2'
					},
					{
						value: false,
						text: '2 - 3'
					},
					{
						value: false,
						text: '3 - 4'
					},
					{
						value: false,
						text: '4 - 5'
					},
					{
						value: false,
						text: '5 - 6'
					},
					{
						value: false,
						text: '6 - 7'
					},
					{
						value: false,
						text: '7 - 8'
					},
					{
						value: false,
						text: '8 - 9'
					},
					{
						value: false,
						text: '9 - 10'
					},
					{
						value: false,
						text: '10 - 11'
					},
					{
						value: false,
						text: '11 - 12'
					},
					{
						value: false,
						text: '12 - 13'
					},
					{
						value: false,
						text: '13 - 14'
					},
					{
						value: false,
						text: '14 - 15'
					},
					{
						value: false,
						text: '15 - 16'
					},
					{
						value: false,
						text: '16 - 17'
					},
					{
						value: false,
						text: '17 - 18'
					},
					{
						value: false,
						text: '18 - 19'
					},
					{
						value: false,
						text: '19 - 20'
					},
					{
						value: false,
						text: '20 - 21'
					},
					{
						value: false,
						text: '21 - 22'
					},
					{
						value: false,
						text: '22 - 23'
					},
					{
						value: false,
						text: '23 - 24'
					}
				],
				monday:[
					{
						value: false,
						text: '0 - 1'
					},
					{
						value: false,
						text: '1 - 2'
					},
					{
						value: false,
						text: '2 - 3'
					},
					{
						value: false,
						text: '3 - 4'
					},
					{
						value: false,
						text: '4 - 5'
					},
					{
						value: false,
						text: '5 - 6'
					},
					{
						value: false,
						text: '6 - 7'
					},
					{
						value: false,
						text: '7 - 8'
					},
					{
						value: false,
						text: '8 - 9'
					},
					{
						value: false,
						text: '9 - 10'
					},
					{
						value: false,
						text: '10 - 11'
					},
					{
						value: false,
						text: '11 - 12'
					},
					{
						value: false,
						text: '12 - 13'
					},
					{
						value: false,
						text: '13 - 14'
					},
					{
						value: false,
						text: '14 - 15'
					},
					{
						value: false,
						text: '15 - 16'
					},
					{
						value: false,
						text: '16 - 17'
					},
					{
						value: false,
						text: '17 - 18'
					},
					{
						value: false,
						text: '18 - 19'
					},
					{
						value: false,
						text: '19 - 20'
					},
					{
						value: false,
						text: '20 - 21'
					},
					{
						value: false,
						text: '21 - 22'
					},
					{
						value: false,
						text: '22 - 23'
					},
					{
						value: false,
						text: '23 - 24'
					}
				],
				thursday:[
					{
						value: false,
						text: '0 - 1'
					},
					{
						value: false,
						text: '1 - 2'
					},
					{
						value: false,
						text: '2 - 3'
					},
					{
						value: false,
						text: '3 - 4'
					},
					{
						value: false,
						text: '4 - 5'
					},
					{
						value: false,
						text: '5 - 6'
					},
					{
						value: false,
						text: '6 - 7'
					},
					{
						value: false,
						text: '7 - 8'
					},
					{
						value: false,
						text: '8 - 9'
					},
					{
						value: false,
						text: '9 - 10'
					},
					{
						value: false,
						text: '10 - 11'
					},
					{
						value: false,
						text: '11 - 12'
					},
					{
						value: false,
						text: '12 - 13'
					},
					{
						value: false,
						text: '13 - 14'
					},
					{
						value: false,
						text: '14 - 15'
					},
					{
						value: false,
						text: '15 - 16'
					},
					{
						value: false,
						text: '16 - 17'
					},
					{
						value: false,
						text: '17 - 18'
					},
					{
						value: false,
						text: '18 - 19'
					},
					{
						value: false,
						text: '19 - 20'
					},
					{
						value: false,
						text: '20 - 21'
					},
					{
						value: false,
						text: '21 - 22'
					},
					{
						value: false,
						text: '22 - 23'
					},
					{
						value: false,
						text: '23 - 24'
					}
				]
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
	.con-check{
		margin:5px 0 !important;
	}
</style>

<template class="padding0">
	<section class="padding0" style="padding-top: 0px !important;">
	<Spiner v-if="spiner"></Spiner>


		<section class="my-container padding20">
            <h3 class="margin-left10 color-blue padding-left10" style=" border-left:5px solid;">
                <span class="color-black font-normal font1-3em">Horarios disponibles a trabajar</span>
            </h3>
        </section>
		<article class="home-list  my-container">
			<section class="box padding20 relative">
				<div class=" absolute flex flex-middle" style="top:10px; right:30px;">
					<p v-tooltip="'Ver mas horarios'">
						<span class="ion-eye font1-5em pointer"></span>
					</p>

					<p class="margin-left20" v-tooltip="'Configuracion de horas'">
						<span class="ion-gear-b font1-5em pointer"></span>
					</p>
						
				</div>
				<div>
					<p class="font1-3em">Selecciona las casillas de las horas que estas disponible.</p>
				</div>
				<section class="calendar margin-top20 flex">
	                <article class="width100">
	                    <div class="back-blue calendar-day-name">Domingo</div>
	                        <div class="calendar-day"  style="border-left: 1px solid #ccc; overflow-y:auto;">
	                        	<div v-for="i in sunday" class="flex flex-middle">
	                        		<vs-checkbox v-model="i.value"></vs-checkbox>
		                            <p class="color-black">{{i.text}} hrs.</p>
	                        	</div>
	                        </div>
	                    </article>

	                    <article class="width100">
	                        <div class="back-blue calendar-day-name">Lunes</div>
	                        <div class="calendar-day"  style="border-left: 1px solid #ccc; overflow-y:auto;">
	                        	<div v-for="i in monday" class="flex flex-middle">
	                        		<vs-checkbox v-model="i.value"></vs-checkbox>
		                            <p class="color-black">{{i.text}} hrs.</p>
	                        	</div>
	                        </div>

	                    </article>

	                    <article class="width100">
	                        <div class="back-blue calendar-day-name">Martes</div>
	                        <div class="calendar-day"  style="border-left: 1px solid #ccc; overflow-y:auto;">
	                        	<div v-for="i in thursday" class="flex flex-middle">
	                        		<vs-checkbox v-model="i.value"></vs-checkbox>
		                            <p class="color-black">{{i.text}} hrs.</p>
	                        	</div>
	                        </div>
	                        

	                        
	                    </article>


	                    <article class="width100">
	                        <div class="back-blue calendar-day-name">Miércoles</div>
	                        <div class="calendar-day">
	                            <h3 class="calendar-day-number">1</h3>
	                        </div>

	                        
	                    </article>


	                    <article class="width100">
	                        <div class="back-blue calendar-day-name">Jueves</div>
	                        <div class="calendar-day">
	                            <h3 class="calendar-day-number">1</h3>
	                        </div>

	                        
	                    </article>

	                     <article class="width100">
	                        <div class="back-blue calendar-day-name">Viernes</div>
	                        <div class="calendar-day">
	                            <h3 class="calendar-day-number">1</h3>
	                        </div>

	                        
	                    </article>

	                     <article class="width100">
	                        <div class="back-blue calendar-day-name">Sábado</div>
	                        <div class="calendar-day">
	                            <h3 class="calendar-day-number">1</h3>
	                        </div>

	                       
	                    </article>


	                </section>

	                <div class="margin-top20 text-center flex flex-center">
                            <vs-button vs-radius="2px" vs-type="primary-border"><span class="text-uppercase font1-3em">guardar Horarios</span></vs-button>
                        </div>
				</section>
				<div class="flex">
					<div class="box padding20 width100">
						<h3 class=" text-center">Ver AvTime de otros</h3>
					</div>
					<div class="box padding20 width100">
						<h3 class=" text-center">Mas acciones</h3>
					</div>
				</div>
        </article>
	</section>
</template>

