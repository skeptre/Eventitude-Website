<template>
  <div class="login-container">
    <header class="header">
      <h1>Eventitude</h1>
    </header>
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" required />
        </div>
        <button class="btn-primary">Login</button>
      </form>
      <p class="register-link">
        Don't have an account?
        <router-link to="/register">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/login.css'; // Import external styles

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      alert('Login successful!');
      this.$router.push('/events');
    },
  },
};
</script>