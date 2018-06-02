<script>
	export default {
		props: ['msg']
	}
</script>
<template>
	<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
		<section class="flex flex-right width100">
			<div class="tagError flex flex-middle back-red width100">
				<div class="square25 rounded margin-right10 flex flex-middle flex-center">
					<span class="ion-close-circled color-white font1-5em"></span>
				</div>
				<h4 class="color-white margin0 font16 font-normal">{{msg || 'Usuario no encontrado'}}</h4>
			</div>
		</section>
	</transition>
</template>
