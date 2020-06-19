import { ref } from '@vue/composition-api';

import { courier, authController } from '@/courier';



export default function() {

	const login = ref({
		isLogged: false,
		token: null,
	});

	function saveLoginToken(token) {
		login.isLogged.value = true;
		login.token.value = token;
	}


	async function doLogin(body) {
		// let data = await authController.postLogin(body);
		authController.postLogin(body).then((data) => {
			saveLoginToken(data.token);
			courier.headers['Authorization'] = data.token;
		});
	}


	return {
		login,
		doLogin,
	}

}