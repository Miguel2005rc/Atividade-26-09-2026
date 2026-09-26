<script setup lang="ts">
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const curso = ref('')
const semestre = ref('')
const interesses = ref<string[]>([])
const bio = ref('')

const erro = ref('')
const sucesso = ref(false)

const interessesDisponiveis = [
  'Front-end',
  'Back-end',
  'Mobile',
  'UI/UX',
  'Banco de Dados',
  'DevOps',
  'Inteligência Artificial'
]

function enviarFormulario() {
  erro.value = ''
  sucesso.value = false

  if (!nome.value.trim()) {
    erro.value = 'O nome completo é obrigatório.'
    return
  }
  if (!email.value.trim()) {
    erro.value = 'O e-mail é obrigatório.'
    return
  }
  const formatoEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!formatoEmail.test(email.value)) {
    erro.value = 'Digite um e-mail válido.'
    return
  }
  if (!curso.value) {
    erro.value = 'Selecione o curso ou área de atuação.'
    return
  }
  if (!semestre.value) {
    erro.value = 'Selecione o semestre ou período.'
    return
  }
  if (interesses.value.length === 0) {
    erro.value = 'Selecione pelo menos um interesse ou habilidade.'
    return
  }
  if (!bio.value.trim()) {
    erro.value = 'Digite uma mensagem ou bio curta.'
    return
  }
  const cadastro = {
    nome: nome.value,
    email: email.value,
    curso: curso.value,
    semestre: semestre.value,
    interesses: interesses.value,
    bio: bio.value
  }
  console.log('===== NOVO CADASTRO =====')
  console.log(cadastro)
  console.log('=========================')

  sucesso.value = true
  nome.value = ''
  email.value = ''
  curso.value = ''
  semestre.value = ''
  interesses.value = []
  bio.value = ''
}
</script>
<template>
  <main class="cadastro-paginas">
    <section class="form-container">
      <span class="badge">
        Novo cadastro
      </span>
      <h1>
        Cadastro de Membro
      </h1>
      <p class="descricao">
        Preencha os dados abaixo para realizar seu cadastro.
      </p>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label for="nome">
            Nome completo
          </label>
          <input
            id="nome"
            v-model="nome"
            type="text"
            placeholder="Digite seu nome completo"
          />
        </div>
        <div class="form-group">
          <label for="email">
            E-mail
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="exemplo@email.com"
          />
        </div>
        <div class="form-group">

          <label for="curso">
            Curso / Área de atuação
          </label>

          <select
            id="curso"
            v-model="curso"
          >
            <option value="">
              Selecione uma opção
            </option>
            <option value="Engenharia de Software">
              Engenharia de Software
            </option>
            <option value="Ciência da Computação">
              Ciência da Computação
            </option>
            <option value="Sistemas de Informação">
              Sistemas de Informação
            </option>
            <option value="Análise e Desenvolvimento de Sistemas">
              Análise e Desenvolvimento de Sistemas
            </option>
            <option value="Design">
              Design
            </option>
            <option value="Outra área">
              Outra área
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="semestre">
            Semestre / Período
          </label>
          <select
            id="semestre"
            v-model="semestre"
          >
            <option value="">
              Selecione o semestre
            </option>
            <option value="1º semestre">
              1º semestre
            </option>
            <option value="2º semestre">
              2º semestre
            </option>
            <option value="3º semestre">
              3º semestre
            </option>
            <option value="4º semestre">
              4º semestre
            </option>
            <option value="5º semestre">
              5º semestre
            </option>
            <option value="6º semestre">
              6º semestre
            </option>

            <option value="7º semestre">
              7º semestre
            </option>

            <option value="8º semestre">
              8º semestre
            </option>

            <option value="9º semestre">
              9º semestre
            </option>
            <option value="10º semestre">
              10º semestre
            </option>

          </select>
        </div>

        <div class="form-group">
          <label>
            Interesses / Habilidades
          </label>

          <div class="checkbox-grid">
            <label
              v-for="interesse in interessesDisponiveis"
              :key="interesse"
              class="checkbox-item"
            >

              <input
                v-model="interesses"
                type="checkbox"
                :value="interesse"
              />

              <span>
                {{ interesse }}
              </span>

            </label>

          </div>

        </div>

        <div class="form-group">

          <label for="bio">
            Mensagem / Bio curta
          </label>

          <textarea
            id="bio"
            v-model="bio"
            maxlength="300"
            rows="5"
            placeholder="Conte brevemente sobre você..."
          ></textarea>

          <small>
            {{ bio.length }}/300 caracteres
          </small>

        </div>
        <div
          v-if="erro"
          class="message error"
        >
          {{ erro }}
        </div>

        <div
          v-if="sucesso"
          class="message success"
        >
          Cadastro realizado com sucesso!
        </div>

        <button
          type="submit"
          class="submit-button"
        >
          Cadastrar
        </button>

      </form>

    </section>

  </main>
</template>