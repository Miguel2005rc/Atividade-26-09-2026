<template>
  <main class="home">
    <section class="hero">
      <span class="badge">Nuxt + Vue + Node.js</span>

      <h1>Desenvolvimento Web Moderno</h1>

      <p>
        Aplicação desenvolvida com Nuxt, Vue.js e Node.js.
      </p>

      <NuxtLink to="/cadastro" class="button">
        Ir para Cadastro
      </NuxtLink>
    </section>

    <section class="features">
      <article class="feature-card">
        <h2>Node.js</h2>
        <p>
          Ambiente de execução JavaScript utilizado no desenvolvimento
          moderno e no gerenciamento de dependências.
        </p>
      </article>

      <article class="feature-card">
        <h2>Vue.js</h2>
        <p>
          Framework utilizado para criar interfaces reativas e
          componentizadas.
        </p>
      </article>

      <article class="feature-card">
        <h2>Nuxt</h2>
        <p>
          Framework baseado em Vue que oferece roteamento e
          estrutura para aplicações web modernas.
        </p>
      </article>
    </section>
  </main>
</template>