<template>
	<div>
		<div class="columns header">
			<!-- header -->
			<div class="column is-full">Header</div>
		</div>
		<div class="columns content">
			<!-- main -->
			<div class="column is-full main">
				<p>Main Content</p>

				<div class="columns">
					<b-field label="Username">
						<b-input v-model="usernameOrEmail" value="johnsilver" maxlength="30"></b-input>
					</b-field>
				</div>
				<div class="columns">
					<b-field label="Password">
						<b-input v-model="password" value="" type="password" maxlength="30" password-reveal></b-input>
					</b-field>
				</div>
				<div class="columns">
					<div class="column">
						<b-button @click="onClickLogin" type="is-primary">Primary</b-button>
					</div>
					<p class="column">isLogged: {{ login.isLogged }}</p>
					<p class="column" v-if="login.isLogged">token: {{ login.token }}</p>
				</div>

			</div>
			<!-- sidebar -->
			<div class="column sidebar">Sidebar</div>
		</div>
	</div>
</template>



<script>
import { ref, onMounted } from '@vue/composition-api';

import useLogin from '@/features/useLogin';


export default {
	name: 'MainLayout',

	setup() {

		const { login, doLogin } = useLogin();

		const usernameOrEmail = ref("");
		const password = ref("");

		function onClickLogin() {
			doLogin({
				usernameOrEmail: usernameOrEmail.value,
				password: password.value
			});
		}

		onMounted(() => {
			console.log("VUE_APP_API_URL:", process.env);
		});

		return {
			usernameOrEmail,
			password,
			login,
			onClickLogin
		}

	}

}
</script>



<!-- <style lang="scss" src="./layout.scss"></style> -->