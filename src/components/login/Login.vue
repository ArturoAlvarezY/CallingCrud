<template>
  <div id="myLog"> 
    <h1 id="welcome">Welcome to my first Api Rest</h1>
    <section class="form-login">
      <h5>Login</h5>
      <input class="controls" type="text" name="usuario" value="" placeholder="Usuario">
      <input class="controls" type="password" name="contrasena" value="" placeholder="Contraseña">
      <input class="buttons" type="submit" name="" value="Ingresar">
      <p><a href="#">¿Olvidastes tu Contraseña?</a></p>
    </section>
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
  

#welcome {
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  margin: 50px 0 60px 0;
  }


    
.form-login {
  width: 400px;
  height: 340px;
  background: #4e4d4d;
  margin: auto;
  box-shadow: 7px 13px 37px #000;
  padding: 20px 30px;
  border-top: 4px solid #017bab;
  color: white;
}

.form-login h5 {
  margin: 0;
  text-align: center;
  height: 40px;
  margin-bottom: 30px;
  border-bottom: 1px solid;
  font-size: 20px;
}

.controls {
  width: 100%;
  border: 1px solid #017bab;
  margin-bottom: 15px;
  padding: 11px 10px;
  background: #252323;
  font-size: 14px;
  font-weight: bold;
}

.buttons {
  width: 100%;
  height: 40px;
  background: #017bab;
  border: none;
  color: white;
  margin-bottom: 16px;
}

.form-login p{
  height: 40px;
  text-align: center;
  border-bottom: 1px solid;
}

.form-login a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.form-login a:hover {
  text-decoration: underline;
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