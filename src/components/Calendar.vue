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


		<section class="my-container padding20">
            <h3 class="margin-left10 color-blue padding-left10" style=" border-left:5px solid;">
                <span class="color-black font-normal font1-3em">Calendar </span>
            </h3>
        </section>
		<article class="home-list my-container">
			
            <div class="box padding20 width100">
                <section class="flex flex-middle flex-between">
                    <div class="back-lightgray pointer padding15 flex flex-middle flex-center" style="width:50px;">
                        <span class="ion-chevron-left color-white"></span>
                    </div>

                    <h3>July 2018</h3>
                    <div class=" flex flex-middle">
                        <div class="back-lightgray pointer padding15 margin-right10 flex flex-middle flex-center" style="width:90px;">
                            <span class="color-white text-uppercase">Today</span>
                        </div>

                        <div class="back-lightgray pointer padding15 flex flex-middle flex-center" style="width:50px;">
                            <span class="ion-chevron-right color-white"></span>
                        </div>
                    </div>
                    
                </section>

                <section class="calendar margin-top20 flex">
                    <article class="width100">
                        <div class="back-blue calendar-day-name">Sunday</div>
                        <div class="calendar-day" style="border-left: 1px solid #ccc;">
                            <h3 class="calendar-day-number">1</h3>
                        </div>

                        <div class="calendar-day" style="border-left: 1px solid #ccc;">
                            <h3 class="calendar-day-number">8</h3>
                        </div>

                        <div class="calendar-day" style="border-left: 1px solid #ccc;">
                            <h3 class="calendar-day-number">15</h3>
                        </div>

                         <div class="calendar-day" style="border-left: 1px solid #ccc;">
                            <h3 class="calendar-day-number">22</h3>
                        </div>

                        <div class="calendar-day" style="border-left: 1px solid #ccc;">
                            <h3 class="calendar-day-number">29</h3>
                        </div>
                    </article>

                    <article class="width100">
                        <div class="back-blue calendar-day-name">Monday</div>
                        <div class="calendar-day">
                            <h3 class="calendar-day-number">2</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">9</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">16</h3>
                        </div>

                         <div class="calendar-day relative">
                            <h3 class="calendar-day-number">23</h3>
                            <article class="calendar-tasks">
                                <div class="flex" style="border-bottom:1px solid gray;" >
                                    <div class="square60 padding10 relative"  style="border-right:1px solid gray; top:7px;">
                                        <span v-tooltip="'Mettings'" class="relative ion-ios-people color-black font2em" >
                                            <span class="my-badge back-blue absolute flex flex-center flex-middle" style="top:-6px;left:14px;">1</span>
                                        </span>
                                    </div>

                                    <div class="square60 padding10 relative" style=" top:7px;">
                                        <span v-tooltip="'Checks'" class="relative ion-ios-compose-outline color-black font2em" >
                                            <span class="my-badge back-green absolute flex flex-center flex-middle" style="top:-6px;left:14px;">2</span>
                                        </span>
                                    </div>
                                </div>

                                <div class="flex">
                                    <div class="square60 padding10" style="border-right:1px solid gray; top:0;">
                                        <span v-tooltip="'Deadlines'" class="relative ion-clock color-black font2em" >
                                            <span class="my-badge back-red absolute flex flex-center flex-middle" style="top:-6px;left:14px;">6</span>
                                        </span>
                                    </div>

                                    <div class="square60 padding10" style=" top:0;">
                                        <span v-tooltip="'Tasks to get done'" class="relative ion-ios-list-outline color-black font2em" >
                                            <span class="my-badge back-yellow absolute flex flex-center flex-middle" style="top:-6px;left:14px;">3</span>
                                        </span>
                                    </div>
                                </div>
                               
                            </article>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">30</h3>
                        </div>
                    </article>

                    <article class="width100">
                        <div class="back-blue calendar-day-name">Tuesday</div>
                        <div class="calendar-day">
                            <h3 class="calendar-day-number">3</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">10</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">17</h3>
                        </div>

                         <div class="calendar-day">
                            <h3 class="calendar-day-number">24</h3>

                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">31</h3>
                        </div>
                    </article>


                    <article class="width100">
                        <div class="back-blue calendar-day-name">Wednesday</div>
                        <div class="calendar-day relative">
                            <h3 class="calendar-day-number">4</h3>
                            <article class="calendar-tasks">
                                <div class="flex" style="border-bottom:1px solid gray;" >
                                    <div class="square60 padding10 relative"  style="border-right:1px solid gray; top:7px;">
                                        <span v-tooltip="'Mettings'" class="relative ion-ios-people color-black font2em" >
                                            <span class="my-badge back-blue absolute flex flex-center flex-middle" style="top:-6px;left:14px;">2</span>
                                        </span>
                                    </div>

                                    <div class="square60 padding10 relative" style=" top:7px;">
                                        <span v-tooltip="'Checks'" class="relative ion-ios-compose-outline color-black font2em" >
                                            <span class="my-badge back-green absolute flex flex-center flex-middle" style="top:-6px;left:14px;">8</span>
                                        </span>
                                    </div>
                                </div>

                                <div class="flex">
                                    <div class="square60 padding10" style="border-right:1px solid gray; top:0;">
                                        <span v-tooltip="'Deadlines'" class="relative ion-clock color-black font2em" >
                                            <span class="my-badge back-red absolute flex flex-center flex-middle" style="top:-6px;left:14px;">1</span>
                                        </span>
                                    </div>

                                    <div class="square60 padding10" style=" top:0;">
                                        <span v-tooltip="'Tasks to get done'" class="relative ion-ios-list-outline color-black font2em" >
                                            <span class="my-badge back-yellow absolute flex flex-center flex-middle" style="top:-6px;left:14px;">6</span>
                                        </span>
                                    </div>
                                </div>
                               
                            </article>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">11</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">18</h3>
                        </div>

                         <div class="calendar-day">
                            <h3 class="calendar-day-number">25</h3>
                        </div>

                        
                    </article>


                    <article class="width100">
                        <div class="back-blue calendar-day-name">Thursday</div>
                        <div class="calendar-day">
                            <h3 class="calendar-day-number">5</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">12</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">19</h3>
                        </div>

                         <div class="calendar-day">
                            <h3 class="calendar-day-number">26</h3>
                        </div>

                        
                    </article>

                     <article class="width100">
                        <div class="back-blue calendar-day-name">Friday</div>
                        <div class="calendar-day">
                            <h3 class="calendar-day-number">6</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">13</h3>
                        </div>

                        <div class="calendar-day relative">
                            <h3 class="calendar-day-number">20</h3>
                            <article class="calendar-tasks">
                                <div class="flex" style="border-bottom:1px solid gray;" >
                                    <div class="square60 padding10 relative"  style="border-right:1px solid gray; top:7px;">
                                        <span v-tooltip="'Mettings'" class="relative ion-ios-people color-black font2em" >
                                            <span class="my-badge back-blue absolute flex flex-center flex-middle" style="top:-6px;left:14px;">3</span>
                                        </span>
                                    </div>

                                    <div class="square60 padding10 relative" style=" top:7px;">
                                        <span v-tooltip="'Checks'" class="relative ion-ios-compose-outline color-black font2em" >
                                            <span class="my-badge back-green absolute flex flex-center flex-middle" style="top:-6px;left:14px;">1</span>
                                        </span>
                                    </div>
                                </div>

                                <div class="flex">
                                    <div class="square60 padding10" style="border-right:1px solid gray; top:0;">
                                        <span v-tooltip="'Deadlines'" class="relative ion-clock color-black font2em" >
                                            <span class="my-badge back-red absolute flex flex-center flex-middle" style="top:-6px;left:14px;">2</span>
                                        </span>
                                    </div>

                                    <div class="square60 padding10" style=" top:0;">
                                        <span v-tooltip="'Tasks to get done'" class="relative ion-ios-list-outline color-black font2em" >
                                            <span class="my-badge back-yellow absolute flex flex-center flex-middle" style="top:-6px;left:14px;">4</span>
                                        </span>
                                    </div>
                                </div>
                               
                            </article>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">27</h3>
                        </div>

                        
                    </article>

                     <article class="width100">
                        <div class="back-blue calendar-day-name">Saturday</div>
                        <div class="calendar-day">
                            <h3 class="calendar-day-number">7</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">14</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">21</h3>
                        </div>

                        <div class="calendar-day">
                            <h3 class="calendar-day-number">28</h3>
                        </div>

                    </article>


                </section>
            </div>

            

        </article>
	</section>
</template>

