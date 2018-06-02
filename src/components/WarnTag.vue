<script>
	export default {
		props: ['msg']
	}
</script>
<template>
	<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
		<section class="flex flex-right width100">
			<div class="tagWarn flex flex-middle back-orange width100">
				<div class="square25 rounded margin-right10 flex flex-middle flex-center" style="border:2px solid white;">
					<span class="ion-alert color-white"></span>
				</div>
				<h4 class="color-white margin0 font16 font-normal">{{msg || 'Campo requerido'}}</h4>
			</div>
		</section>
	</transition>
</template>

