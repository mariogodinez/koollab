<script>

	export default {
		data(){
			return {
				showMiniMenu: false
			}
		},
		components:{
		},
		computed:{
			logged(){
				return this.$store.getters.logged
			},
			
			rol(){
				return this.$store.getters.rol
			}
		},
		methods:{
			toggleMini(){
				this.showMiniMenu = !this.showMiniMenu
			},
			goTo(route){
				this.$router.push(route)
			}
		},
		created(){
		}
	}
</script>



<template>

	<section  v-if="logged">
		
		<header class=" my-header back-white flex flex-middle">
            <section class="flex flex-middle padding10 flex-between my-container">
                <div class="">
                    <h2 class="text-logo">Koollab</h2>
                </div>
                <div class="flex flex-middle">
                    <p class="margin-right20 padding-right5 hvr-wobble-to-top-right font1-5em relative" style="top:2px;">
                        <span class="ion-ios-bolt-outline font1-3em"></span>
                    </p>
                    <p class="margin-right20 padding-right5 hvr-wobble-bottom font1-5em relative" style="top:2px;">
                        <span class="ion-ios-bell-outline font1-3em"></span>
                    </p>

                    <div class="square40 flex rounded relative avatar" style="border:1px solid #aaa; padding: 3px;">
                        <figure class="width100">
                            <img src="http://www.gravatar.com/avatar/3522c813e704febf05ffe47237a3062c?s=50&r=g&d=http%3A%2F%2Fbuscatucarga.com%2Fwp-content%2Fthemes%2Fbuscatucarga%2Fimg%2Favatar-blanco.png" class="width100">
                        </figure>
                        

                        <div class="avatar-menu absolute">
                        	<ul class="avatar-menu-list">
                        		<li class="avatar-menu-list-item">
                        			Profile
                        		</li>

                        		<li class="avatar-menu-list-item" @click="goTo('/horarios')">
                        			AvTime
                        		</li>

                        		<li class="avatar-menu-list-item">
                        			Profile
                        		</li>
                        	</ul>
                        </div>

                    </div>
                </div>
            </section>
        </header>

        <article class=" back-white flex flex-middle padding15">
            <section class="flex flex-middle  my-container menu-list">
                <div class="menu-list-item width100">
                    <router-link to="/inicio" class="flex width100 flex-center"><span class="ion-home margin-right5" ></span>Home</router-link>
                </div>

                <div class="menu-list-item width100">
                    <router-link to="/proyectos" class="flex width100 flex-center"><span class="margin-right5 ion-grid"></span>Projects</router-link>
                </div>

                <div class="menu-list-item width100">
                    <router-link to="/agenda"class="flex width100 flex-center"><span class="ion-calendar margin-right5"></span>Calendar</router-link>
                </div>

                <div class="menu-list-item width100">
                    <router-link to="/mensajes" class="flex width100 flex-center flex-middle"><span class="ion-chatbox-working margin-right5" ></span>Menssages <span class="rounded margin-left5" style="background: #205FCF; width:10px; height: 10px;"></span></router-link>
                </div>

                <div class="menu-list-item width100">
                    <router-link to="/to-dos" class="flex width100 flex-center"><span class="ion-document-text margin-right5"></span>To-dos</router-link>
                </div>
            </section>
        </article>

	</section>
</template>