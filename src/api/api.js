import * as axios from 'axios';


let instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY':'50ede1d2-d14d-4ecc-8173-5f0dc164e53f'
	}
});

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
			return response.data;
		});
	},
	
	changeState(userId) {
		return instance.post(`follow/${userId}`).then(response=> {
			return response.data;
		});
	},
	
	getProfile(userId) {
		return profileAPI.getProfile(userId);
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get('profile/' + userId).then(response => {
			return response.data;
		});
	},
	
	getStatus(userId) {
		return instance.get('profile/status/' + userId);
	},
	
	updateStatus(status) {
		return instance.put('profile/status', {status:status});
	}
}


export const authAPI = {
	me() {
		return instance.get(`auth/me`).then(response=> {
			return response;
		});
	},
	
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, {email, password, rememberMe});
	},
	
	logout() {
		return instance.delete(`auth/login`);
	}
}