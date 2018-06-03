
// Se importa vue
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex)

let config = {
	apiKey: "AIzaSyAoYwe_LX2Q2I-eMK-iZItbepu4gG6VVo4",
	authDomain: "kollab-dac69.firebaseapp.com",
	databaseURL: "https://kollab-dac69.firebaseio.com",
	projectId: "kollab-dac69",
	storageBucket: "kollab-dac69.appspot.com",
	messagingSenderId: "895621610780"
};

firebase.initializeApp(config);

const state = {
	logged: true,
	user: null,
	token: localStorage.tokenKK,
	spin: false,
	goTo: false,
	per: 20
}

const mutations = {
	SET_LOGGED(state, value){
		state.logged = value
	},
	SET_TOKEN(state, value){
		state.token = value
	},
	SET_SPIN(state, value){
		state.spin = value
	},
	SET_GOTO(state, value){
		state.goto = value
	},
	SET_USER(state, value){
		state.user = value
	},
	SET_PER(state, value){
		state.per = value
	}
	 
}

const getters = {
	user(state){
		return state.user
	},
	logged(state){
		return state.logged
	},
	spin(state){
		return state.spin
	},
	goto(state){
		return state.goto
	},
	per(state){
		return state.per
	}
}


const actions = {
	setPer({commit}, value){
	 	commit('SET_PER', value)
	 },
	 setLogged({commit}, value){
	 	commit('SET_LOGGED', value)
	 },
	 logIn({commit}, payload){
	 	let self = this
	 	commit('SET_SPIN', true)
	 	setTimeout(function(){
	 		firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
		 		.then(user =>{
		 			localStorage.tokenKK = user.user.refreshToken
		 			localStorage.uid = user.user.uid

		 			axios.post('/authenticate', {email: payload.email, uid: user.user.uid})
		 				.then(res =>{
						 	commit('SET_SPIN', false)
						 	commit('SET_GOTO', true)
						 	commit('SET_USER', user.user.displayName)
						 	window.location.href = '#/proyectos'
		 					localStorage.tokenKK = res.data.token
		 					localStorage.user = res.data.user

		 					commit('SET_TOKEN', res.data.token)
		 					window.location.reload()

		 				})
		 				.catch(err =>{
						 	commit('SET_SPIN', false)

		 					console.log(err)
		 				})
		 		}, err=>{
		 			console.log(err)
		 		})
		 	}, 2000)
	 	
	 }
}



export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});
