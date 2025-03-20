<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100">
    <!-- Navigation Bar -->
    <nav class="navbar w-full py-3 px-8 flex justify-between items-center bg-black shadow-md">
      <div class="text-xl font-bold text-silver">Eventitude</div>
      <div class="flex gap-4">
        <router-link to="/events" class="link">Events</router-link>
        <router-link to="/search" class="link">Search</router-link>
        <button @click="signOut" class="btn btn-secondary">Sign Out</button>
      </div>
    </nav>

    <!-- Form Section -->
    <div class="form-container">
      <h1 class="form-title">Create an Account</h1>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input v-model="firstName" id="first_name" type="text" placeholder="First Name" />
        </div>
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input v-model="lastName" id="last_name" type="text" placeholder="Last Name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" id="email" type="email" placeholder="Email Address" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" id="password" type="password" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary w-full mt-4">Register</button>
      </form>
      <p class="text-center mt-3 text-light-gray">
        Already have an account?
        <router-link to="/login" class="text-gold hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');

    function handleRegister() {
      console.log('Registering:', firstName.value, lastName.value, email.value, password.value);
      router.push('/login');
    }

    function signOut() {
      console.log('Signing out...');
      router.push('/login');
    }

    return {
      firstName,
      lastName,
      email,
      password,
      handleRegister,
      signOut,
    };
  },
};
</script>

<style scoped>
/* Navigation Bar */
.navbar {
  font-family: 'Helvetica Neue', sans-serif;
  border-bottom: 1px solid #444;
}

.link {
  font-size: 0.9rem;
  color: #aaa;
  font-weight: 500;
  text-transform: uppercase;
}

.link:hover {
  color: #e63946;
}

/* Form Container */
.form-container {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  width: 400px;
  text-align: center;
  margin: 0 auto;
}

.form-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #e63946;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #ddd;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 8px;
  font-size: 1rem;
  background: #2a2a2a;
  color: #eee;
}

input::placeholder {
  color: #888;
}

input:focus {
  outline: none;
  border-color: #e63946;
  box-shadow: 0 0 4px rgba(230, 57, 70, 0.6);
}

.btn {
  font-size: 1rem;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-primary {
  background: red;
  color: white;
  font-weight: bold;
}

.btn-primary:hover {
  background: #b22222;
}

.btn-secondary {
  background: #2a2a2a;
  color: #ddd;
}

.btn-secondary:hover {
  background: #3a3a3a;
}

/* Gold Link Styling */
.text-gold {
  color: #FFD700; /* Gold */
}

.text-gold:hover {
  color: #FFC300; /* Slightly brighter gold */
}

/* Light Gray Text for Contrast */
.text-light-gray {
  color: #ccc;
}
</style>