<script>
    import DatePicker from 'vuejs-datepicker'
	import Spiner from './Spinner.vue'


	export default{
		name: 'AddTask',
		data(){
			return {
				spin: false,
				task:{
					title: '',
					dueto: null,
					description: '',
					urgent: false
					
				},
				
				
			}
		},
    watch:{
     
    },
    props:['projectId'],
    components:{
    	DatePicker,
    	Spiner
    },
    methods:{
      cancel(){
        this.$parent.$emit('closeModal')
      },
      addProjectTask(){
      	let self = this
      	let obj = this.task

      	let date = 1530466812
      	obj.dueto = date
      	obj.projectId = this.projectId

      	if(this.task.urgent){
      		obj.urgent = 'true'
      	} else {
      		obj.urgent = 'false'
      	}

      	this.spin = true
        axios.post('/project/tasks', obj)   
            .then(res =>{
                console.log(res)
                self.spin = false
                self.$parent.$emit('addedTask', obj)
            })
            .catch(err =>{
                console.log(err)
                self.spin = false
            })

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
  overflow:auto;
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
        <Spiner v-if="spin"></Spiner>
          <article class="modal-body margin-bottom0 relative" style="padding-top:10px;">
            <div class="margin-bottom20 text-center">
                        <h3>Add Task to project</h3>
                    </div>

                    <div class="margin-bottom20">
                        <h3 class="margin5">Title</h3>
                        <div class="padding5">
                            
                            <vs-input v-model="task.title" style="margin:0;"></vs-input>
                        </div>
                    </div>


                    <div class="margin-bottom20">
                        <h3 class="margin5">Description</h3>
                        <div class="padding5">
                            <textarea class="vs-textarea" v-model='task.description' rows="3"></textarea>
                        </div>
                    </div>


                    <div class="margin-bottom20">
                        <h3 class="margin5">Due to</h3>
                        <div class="padding5">
                            
                            <DatePicker  language="es" v-model="task.dueto" class="width100 back-white pointer" placeholder="--/---/--"></DatePicker>
                        </div>
                    </div>

                    <div class="margin-bottom20 flex flex-middle">
                        <h3 class="margin5">Priority</h3>
                        <div class="padding5">
                            <div  class="flex flex-middle">
                                <vs-checkbox v-model="task.urgent" vs-color="danger"></vs-checkbox>
                                <p class="color-black font1em ">Need to add priority this task?.</p>
                            </div>
                        </div>
                    </div>

          </article>
          <div>
          <div class="margin-top20 flex flex-center">
            <vs-button vs-radius="2px" @click="addProjectTask" vs-type="primary-border"><span class="text-uppercase">Save Task</span></vs-button>
        </div>
        	<p class="padding20 color-black anchor text-center font1-3em" @click="cancel">Cancel</p>
        </div>
        </div>

        
      </div>
    </div>
  </transition>
</template>
