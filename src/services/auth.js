import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useAuth = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'));
    const user = ref(JSON.parse(localStorage.getItem('user')));
    function setToken(tokenValue) {
        localStorage.setItem('token', tokenValue);
        token.value = tokenValue;
    }
    function setUser(userValue) {
        localStorage.setItem('user', JSON.stringify(userValue));
        user.value = userValue;
    }
    function isAuthenticated() {
        return token.value && user.value;
    }

    function clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        token.value = '';
        user.value = ''    
    }
    
    async function checkToken(){
        try {
            const tokenAuth = 'Bearer '+ token
            const {data} = await http.get('/auth/check-token',{
                headers: {
                    Authorization: tokenAuth
                }
            })
            return data
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return{
        setToken,
        setUser,
        token,
        user,
        checkToken,
        isAuthenticated,
        clear
    }
})
