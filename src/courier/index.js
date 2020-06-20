import axios from 'axios';

import authEndpoints from './endpoints/auth';




export const courier = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json'
	}
});



function performRequest({ method, fullPath }, body) {
	
	return courier[method](fullPath, body)
	
	.then((response) => {
		console.log("response:", response);
		return response.data;
	})

	.catch((error) => {
		console.log(error);
	})
}



function buildEndpoints(endpoints, route) {

	let controller = {};

	Object.keys(endpoints).forEach((endpoint) => {
		const fullPath = route + endpoints[endpoint].path;
		const method = endpoints[endpoint].method;

		controller[endpoint] = function(body) {
			return performRequest({ method, fullPath }, body);
		}
	});

	return controller;
}


export const authController = buildEndpoints(authEndpoints, 'auth/');
