<template>
  <div>
    <header class="navbar">
      <div class="navbar-container">
        <NuxtLink to="/" class="logo">
          NuxtApp
        </NuxtLink>

        <nav>
          <NuxtLink to="/">
            Início
          </NuxtLink>

          <NuxtLink to="/cadastro">
            Cadastro
          </NuxtLink>
        </nav>
      </div>
    </header>

    <NuxtPage />
  </div>
</template>