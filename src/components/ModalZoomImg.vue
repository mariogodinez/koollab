<script>

	export default{
		data(){
			return {
        contact: 'whatsapp'

			}
		},
    watch:{
     
    },
    props:['url'],
    components:{
    },
    methods:{
      changeContact(value){
        this.contact = value
      }
      
    }
	}
</script>
<style scoped>
  .modal-mask {
  position: fixed;
  z-index: 999543657658;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .9);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 600px;
  margin: 0px auto;
  max-height:80vh;
  padding:10px;
  overflow:inherit;
  position: relative;
  top:1vh;
  background-color: white;
  border-radius: 5px;
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin:0;
}

.modal-default-button {
  text-align:center;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <article class="modal-body margin-bottom0 relative" style="padding-top:10px;">
            <div class="margin-bottom20 padding5 flex flex-middle flex-between" style="position:absolute; top:-60px; right:0px;">
              <div class="back-white square30 pointer rounded flex flex-center flex-middle" style="box-shadow:0 0 20px #777;" @click="$parent.$emit('closeModalRegister')">
                <p class="ion-close-round color-gray font1-3em"></p>
              </div>
            </div>
            <figure class=" width100">
              <img :src="url" class="width100">
            </figure>
          </article>
          
        </div>
      </div>
    </div>
  </transition>
</template>
