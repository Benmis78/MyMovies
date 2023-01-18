<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>email</label>
      <input type="text" v-model="formData.email" />
      <label>Password</label>
      <input type="text" v-model="formData.pwd" />
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

console.log(axios.isCancel('something'));

export default {
  data() {
    return {
      formData: {
        email: '',
        pwd: '',
      }
    }
  },
  methods: {
    handleSubmit() {
      // Envoyer les données du formulaire à l'API pour créer un enregistrement
      axios.post('/api/utilisateurs', this.formData)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>
