
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
	token: localStorage.tokenKK
}

const mutations = {
	SET_LOGGED(state, value){
		state.logged = value
	},
	SET_TOKEN(state, value){
		state.token = value
	}
	 
}

const getters = {
	userInfo(state){
		return state.user
	},
	logged(state){
		return state.logged
	}
}


const actions = {
	 setLogged({commit}, value){
	 	commit('SET_LOGGED', value)
	 },
	 logIn({commit}, payload){
	 	firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
	 		.then(user =>{
	 			localStorage.tokenKK = user.user.refreshToken
	 			localStorage.uid = user.user.uid

	 			axios.post('/authenticate', {email: payload.email, uid: user.user.uid})
	 				.then(res =>{
	 					console.log(res)
	 					localStorage.tokenKK = res.data.token
	 					commit('SET_TOKEN', res.data.token)
	 				})
	 				.catch(err =>{
	 					console.log(err)
	 				})
	 		}, err=>{
	 			console.log(err)
	 		})
	 }
}



export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});
