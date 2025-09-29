<script setup>
import NavBar from '../components/NavBar.vue'; // Ajuste o caminho se necessário
import { RouterView } from 'vue-router';
</script>

<template>
 <div class="h-[100dvh] w-screen flex justify-center items-center bg-[var(--fundo-pagina)]">
    <section class="h-[90dvh] max-w-[1280px] w-full bg-[var(--fundo-card)] relative rounded-t-lg overflow-hidden shadow-[0px_9px_10.9px_rgba(0,0,0,0.05)]">
      <NavBar />
      <RouterView />
    </section>
  </div>
</template>