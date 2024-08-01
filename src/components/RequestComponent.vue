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

  <h2>List of Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Request Date</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.solicitantName }}</td>
            <td>{{ new Date(user.requestDate).toLocaleDateString() }}</td>
            <td>{{ user.subjectConsult }}</td>
            <td>{{ user.descriptionConsult }}</td>
          </tr>
        </tbody>
      </table>
</template>

<script setup>
import { ref, computed } from 'vue';

const name = ref('');
const date = ref('');
const subject = ref('');
const messageText = ref('');
const message = ref('');
const messageType = ref('');
const users = ref([]); // List to store user data

const showMessage = computed(() => {
  return message.value && messageType.value;
});

// Update the URL here
const uri = 'http://localhost:8080/api/requests';

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

    const response = await fetch(uri, {
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
      const errorData = await response.text(); // Changed to text() for error handling
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData}`);
    }

    // Check if the response is empty
    const responseText = await response.text(); // Read the response as text first
    const data = responseText ? JSON.parse(responseText) : {}; // Parse if not empty

    console.log('Response data:', data);

    // Add new user to the list
    users.value.push({
      id: data.id || Date.now(), // Use Date.now() as fallback ID if none provided
      solicitantName: name.value,
      requestDate: dateTime,
      subjectConsult: subject.value,
      descriptionConsult: messageText.value
    });

    messageType.value = 'success';
    message.value = `Request submitted successfully! ID: ${data.id || 'N/A'}`;

    // Clear the form fields
    name.value = '';
    date.value = '';
    subject.value = '';
    messageText.value = '';
  } catch (error) {
    messageType.value = 'failure';
    message.value = `Error submitting request: ${error.message}`;
    console.error('Fetch error:', error);
  }
};
</script>

<style>
* {
   box-sizing: border-box;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
   -moz-font-smoothing: antialiased;
   -o-font-smoothing: antialiased;
   text-rendering: optimizeLegibility;
}
body {
   color: #C0C0C0;
   font-family: Arial, sans-serif;
}
h1 {
   margin: 10px 0 0 0;
}
h4 {
   margin: 0 0 20px 0;
}
#contact-form {
   background-color: rgba(72, 72, 72, 0.9);
   padding: 10px 20px 30px 20px;
   max-width: 100%;
   float: left;
   left: 50%;
   position: absolute;
   margin-top: 30px;
   margin-left: -260px;
   border-radius: 7px;
   -webkit-border-radius: 7px;
   -moz-border-radius: 7px;
}
#contact-form input,
#contact-form select,
#contact-form textarea,
#contact-form label {
   font-size: 15px;
   margin-bottom: 2px;
   font-family: Arial, sans-serif;
}
#contact-form input,
#contact-form select,
#contact-form textarea {
   width: 100%;
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
   width: 100%;
   height: 150px;
}
#contact-form button[type="submit"] {
   cursor: pointer;
   width: 100%;
   border: none;
   background: #0056b3;
   background-image: linear-gradient(bottom, #004494 0%, #0056b3 52%);
   background-image: -moz-linear-gradient(bottom, #004494 0%, #0056b3 52%);
   background-image: -webkit-linear-gradient(bottom, #004494 0%, #0056b3 52%);
   color: #FFF;
   margin: 0 0 5px;
   padding: 10px;
   border-radius: 5px;
}
#contact-form button[type="submit"]:hover {
   background-image: linear-gradient(bottom, #0062cc 0%, #004bb5 52%);
   background-image: -moz-linear-gradient(bottom, #0062cc 0%, #004bb5 52%);
   background-image: -webkit-linear-gradient(bottom, #0062cc 0%, #004bb5 52%);
   -webkit-transition: background 0.3s ease-in-out;
   -moz-transition: background 0.3s ease-in-out;
   transition: background-color 0.3s ease-in-out;
}
#contact-form button[type="submit"]:active {
   box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}
input:required, textarea:required {
   box-shadow: none;
   -moz-box-shadow: none;
   -webkit-box-shadow: none;
   -o-box-shadow: none;
}
#contact-form .required {
   font-weight: bold;
   color: #E5E6E7;
}
#failure, #success {
   color: #6EA070;
   display: none;
}
#user-list {
   margin-top: 20px;
}
table {
   width: 100%;
   border-collapse: collapse;
   margin-top: 650px;
}
table, th, td {
   border: 1px solid #0056b3;
}
td {
  background-color: #FF6F61;
  color: #000;
   padding: 8px;
   text-align: center;
}
th {
   background-color: #0056b3;
   color: #fff;
}
tr:nth-child(even) {
   background-color: #f2f2f2;
}
tr:hover {
   background-color: #ddd;
}
@media only screen and (max-width: 580px) {
   #contact-form {
      left: 3%;
      margin-right: 3%;
      width: 88%;
      margin-left: 0;
      padding-left: 3%;
      padding-right: 3%;
   }
   table, th, td {
      font-size: 14px;
   }
  }

  </style>