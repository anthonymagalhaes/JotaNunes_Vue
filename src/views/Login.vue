<script setup>
    import Card from '../components/Card.vue';
    import http from '../services/http.js';
    import { reactive } from 'vue';
    import { useAuth } from '../services/auth.js';
    const auth = useAuth();
    const user = reactive({
        email: '',
        password: ''
    });
    
    async function login(){
        try {
            const {data} = await http.post('/auth', user);
            console.log(data);
            auth.setToken(data.token);
            auth.setUser(data.user);
        } catch (error) {
            console.log(error?.response?.data);
        }
    }
</script>
<template>
    <form @submit.prevent="login" class="flex flex-col gap-4 bg-white p-20 rounded shadow-md w-30">
        <input type="email" placeholder="Seu email" v-model="user.email" />
        <input type="password" placeholder="Password" v-model="user.password"/>
        <button type="submit">Login</button>
    </form>
</template>