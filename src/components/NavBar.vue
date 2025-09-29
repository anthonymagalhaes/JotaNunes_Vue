<script setup>
import logo from "/src/assets/LogoPreta.png";
import testeUser from "/src/assets/perfil.jpg";
import { RouterLink,useRouter } from "vue-router";
import { useAuth } from "../services/auth.js";
const auth = useAuth();
const router = useRouter();
function logout() {
  auth.clear();
  router.push("/login");
}
</script>

<template>
  <div class="flex justify-between items-center bg-[var(--fundo2)] h-[10vh] shadow-[0px_9px_10.9px_rgba(0,0,0,0.05)]">
    <div class="h-[8dvh] pl-8 flex justify-center items-center">
      <img :src='logo' alt="" width="100%" class="h-[6dvh] p-[1.5em]" />
    </div>
    <div class="pr-8 flex items-center gap-8">
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/login">Go to Login</RouterLink>
    <div class="h-[5dvh] text-[16px] flex text-center items-center">
        <p class="pr-8">Operational</p>
        <img :src='testeUser' alt="" class="h-[6dvh] w-[6dvh] rounded-full overflow-hidden " />
        <button @click="logout">Logout</button>
    </div>
    </div>
  </div>
</template>

<style scoped></style>
