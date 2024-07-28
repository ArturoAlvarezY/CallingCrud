<template>
    <div id="formInputs">
      <form @submit.prevent="login">
        
        <label for="first">Username:</label> <br>
        <input type="text" id="first" v-model="username" placeholder="Enter your Username" required> <br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" v-model="password" placeholder="Enter your Password" required>
        <div class="wrap">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
 <!--  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const username = ref('')
  const password = ref('')
  const router = useRouter()
  
  const login = () => {
    if (username.value === 'user' && password.value === 'password') {
      localStorage.setItem('authenticated', 'true')
      router.push('/')
    } else {
      alert('Invalid credentials')
    }
  }
  </script> -->
  
  <style>
  
  #login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: #f0f0f0;
}

#formInputs {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

label {
  margin-top: 10px;
  margin-bottom: 5px;
  display: block;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.wrap {
  display: flex;
  justify-content: center;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

@media (max-width: 600px) {
  #formInputs {
    padding: 15px;
  }
  
  button {
    width: 100%;
    padding: 10px;
  }
}
</style>