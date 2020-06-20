// import axios from 'axios';
import { ref, watchEffect } from '@vue/composition-api';

import { courier, authController } from '@/courier';



export default function() {

	const login = ref({
		isLogged: false,
		token: null,
	});

	function saveLoginToken(token) {
		login.value.isLogged = true;
		login.value.token = token;
	}

	watchEffect(() => {
		console.log(login.value);
	})


	async function doLogin(body) {
		// let data = await authController.postLogin(body);
		authController.postLogin(body).then((data) => {
			saveLoginToken(data.token);
			// courier.headers['Authorization'] = data.token;
			courier.defaults.headers.common['Authorization'] = data.token;
		});
	}


	return {
		login,
		doLogin,
	}

}