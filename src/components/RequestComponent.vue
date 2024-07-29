<template>
  <div id="contact-form">
    <div>
      <h1>Tell us about you!</h1> 
      <h4>Have a question or just want to get in touch? Let's chat.</h4> 
    </div>
    <form @submit.prevent="submitRequest">
      <div>
        <label for="name">
          <span class="required">Name: *</span> 
          <input type="text" id="name" v-model="name" placeholder="Your Name" required />
        </label> 
      </div>
      <div>
        <label for="date">
          <span class="required">Request Date: *</span>
          <input type="date" id="date" v-model="date" required />
        </label>  
      </div>
      <div>             
        <label for="subject">
          <span>Subject: </span>
          <select id="subject" v-model="subject" required>   
            <option value="" disabled>Select a topic</option>
            <option>Software Development</option>
            <option>Graphic Design</option>
            <option>Technological Innovation</option>
            <option>Cultural Events</option>
            <option>Sports and Recreation</option>
            <option>Environment</option>
            <option>Education</option>
          </select>
        </label>
      </div>
      <div>             
        <label for="message">
          <span class="required">Message: *</span> 
          <textarea id="message" v-model="messageText" placeholder="Please write your message here." required></textarea> 
        </label>  
      </div>
      <div>              
        <button type="submit" id="submit">SEND</button> 
      </div>
    </form>
  </div>
  <p v-if="message && messageType === 'failure'" id="failure">{{ message }}</p>  
  <p v-if="message && messageType === 'success'" id="success">{{ message }}</p>

</template>

<script setup>
import { ref, computed } from 'vue';
import { defineProps } from 'vue';

const name = ref('');
const date = ref('');
const subject = ref('');
const messageText = ref('');
const message = ref('');
const messageType = ref('');

const showMessage = computed(() => {
  return message.value && messageType.value;
});

const submitRequest = async () => {
  console.log('submitRequest called');
  try {
    const dateTime = new Date(date.value).toISOString(); 
    console.log('Submitting data:', {
      solicitantName: name.value,
      requestDate: dateTime,
      subjectConsult: subject.value,
      descriptionConsult: messageText.value
    });

    const response = await fetch('http://localhost:8080/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        solicitantName: name.value,
        requestDate: dateTime,
        subjectConsult: subject.value,
        descriptionConsult: messageText.value
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
    }

    const data = await response.json();
    console.log('Response data:', data);
    
    messageType.value = 'success';
    message.value = `Request submitted successfully! ID: ${data.id}`;

    name.value = '';
    date.value = '';
    subject.value = '';
    messageText.value = '';
  } 
  catch (error) {
    messageType.value = 'failure';
    message.value = `Error submitting request: ${error.message}`;
    console.error('Fetch error:', error); 
  }
};
</script>

<style>
* {
   box-sizing:border-box;
   -webkit-box-sizing:border-box;
   -moz-box-sizing:border-box;
   -webkit-font-smoothing:antialiased;
   -moz-font-smoothing:antialiased;
   -o-font-smoothing:antialiased;
   text-rendering:optimizeLegibility;
}
body {
   color: #C0C0C0;
   font-family: Arial, san-serif;
}


h1 {
   margin: 10px 0 0 0;
}
h4{
   margin: 0 0 20px 0;
}
#contact-form {
   background-color:rgba(72,72,72,0.9);
   padding: 10px 20px 30px 20px;
   max-width:100%;
   float: left;
   left: 50%;
   position: absolute;
   margin-top:30px;
   margin-left: -260px;
   border-radius:7px;
   -webkit-border-radius:7px;
   -moz-border-radius:7px;
}
#contact-form input,   
#contact-form select,   
#contact-form textarea,   
#contact-form label { 
   font-size: 15px;  
   margin-bottom: 2px;
   font-family: Arial, san-serif;
} 
#contact-form input,   
#contact-form select,   
#contact-form textarea { 
   width:100%;
   background: #fff;
   border: 0; 
   -moz-border-radius: 4px;  
   -webkit-border-radius: 4px;  
   border-radius: 4px;
   margin-bottom: 25px;  
   padding: 5px;  
}  
#contact-form input:focus,   
#contact-form select:focus,   
#contact-form textarea:focus {  
   background-color: #E5E6E7; 
}  
#contact-form textarea {
   width:100%;
   height: 150px;
}
#contact-form button[type="submit"] {
   cursor:pointer;
   width:100%;
   border:none;
   background:#991D57;
   background-image:linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
   background-image:-moz-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
   background-image:-webkit-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
   color:#FFF;
   margin:0 0 5px;
   padding:10px;
   border-radius:5px;
}
#contact-form button[type="submit"]:hover {
   background-image:linear-gradient(bottom, #9C215A 0%, #A82767 52%);
   background-image:-moz-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
   background-image:-webkit-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
   -webkit-transition:background 0.3s ease-in-out;
   -moz-transition:background 0.3s ease-in-out;
   transition:background-color 0.3s ease-in-out;
}
#contact-form button[type="submit"]:active {
   box-shadow:inset 0 1px 3px rgba(0,0,0,0.5);
}
input:required, textarea:required {  
   box-shadow: none;
   -moz-box-shadow: none;  
   -webkit-box-shadow: none;  
   -o-box-shadow: none;  
} 
#contact-form .required {  
   font-weight:bold;  
   color: #E5E6E7;      
}
#failure, #success {
   color: #6EA070; 
   display:none;  
}

@media only screen and (max-width: 580px) {
   #contact-form{
      left: 3%;
      margin-right: 3%;
      width: 88%;
      margin-left: 0;
      padding-left: 3%;
      padding-right: 3%;
   }
}
</style>