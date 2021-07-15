import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "557a6032-de76-4337-91d9-fa17e45e618d"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    getCurrentUser() {
        return instance.get(`auth/me`).then(response => {
                return response.data
            }
        )
    },
    login(loginData){
        return instance.post('auth/login', {email: loginData.login, password: loginData.password, captcha: loginData.captcha}).then(response => {
            return response.data
        })
    },
    logout(){
        return instance.delete('auth/login').then(response => {
            return response.data
        })
    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status}).then(response => {
            return response.data
        })
    }
}

export const securityApi = {
    getCaptcha(){
        return instance.get('/security/get-captcha-url').then(response => {
            return response.data
        })
    }
}