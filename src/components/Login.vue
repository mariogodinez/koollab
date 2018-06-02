<script>
	import Spiner from './Spinner.vue'

	export default {
		components:{
			Spiner,
		},
		data(){
			return {
				spiner: false,
				userInfo: {
					user: 'mariogodinezmedina@gmail.com',
					password: 'loudwhale46'
				},
				userInfo: {
					user: 'mariogodinezmedina@gmail.com',
					password: 'loudwhale46'
				},
				errorMessage: 'Las credenciales no coinciden.',
				error: false

			}
		},
		computed:{
			logged(){
				return this.$store.getters.logged
			}
		},
		created(){
			localStorage.removeItem('tokenKK')
			localStorage.removeItem('userId')
			localStorage.removeItem('rol')
			this.$store.dispatch('setLogged', false)
		},
		methods: {
			
			login(){
				let self = this
				
				this.$store.dispatch('logIn', {email:self.userInfo.user, pass: self.userInfo.password})
				

			}
		}
	}
</script>

<template class="padding0 ">
	<section class="height100vh padding0" style="padding-top: 0px !important;">
	<Spiner v-if="spiner"></Spiner>
		<article class="font1-3em back-black flex flex-center relative flex-middle height100vh">
			<transition appear name="custom-classes-transition" appear-active-class="animated flipInY" enter-active-class="animated flipInY" leave-active-class="">
				<article class="relative login" style="top:-20px;">
					<div class="margin-bottom10 text-center color-blue">
						<span style="font-size:4em;">K</span>
					</div>
					<div id="login-form" class="flex flex-column flex-middle flex-center">
						<div class="flex width100 margin-bottom10">
							<h3 class="color-white font-normal font1em">Usuario</h3>
						</div>
						<div class="relative center-block margin-bottom15">
							<span>
								<span class="ion-person color-darkgray font20 margin10" style="position:absolute; margin: 14px;  left:-5px;"></span>
							</span>
							<input type="text"
							class=" my-input back-white margin-bottom25 color-black"
							  v-model="userInfo.user" style="width: 380px; padding-left:27px;">
						</div>
						<div class="flex width100 margin-bottom10">
							<h3 class="color-white font-normal font1em">Contraseña</h3>
						</div>
						<div class="relative center-block margin-bottom30">
							<span>
								<span class="ion-locked color-darkgray font20" style="position:absolute; margin: 14px; left:-5px;"></span>
							</span>
							<input type="password"
							class=" my-input back-white  color-black"
							 v-model="userInfo.password" style="width: 380px; padding-left:27px;">
						</div>
						<button class="my-btn pointer back-blue text-uppercase color-black font-bold"
						 style="width:200px;" @click="login">
							Ingresar
						</button>

					</div>

				</article>
			</transition>
		</article>
	</section>
</template>

