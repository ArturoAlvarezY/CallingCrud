<template>
<div class="container mt-5">
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="submitRequest">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter your name" required />
        </div>
        <div class="form-group">
          <label for="date">Request Date</label>
          <input type="date" class="form-control" id="date" v-model="date" required />
        </div>
        <div class="form-group">
          <label for="topic">Request Topic</label>
          <select class="form-control" id="topic" v-model="topic" required>
            <option value="" disabled>Select a topic</option>
            <option>Software Development</option>
            <option>Graphic Design</option>
            <option>Technological Innovation</option>
            <option>Cultural Events</option>
            <option>Sports and Recreation</option>
            <option>Environment</option>
            <option>Education</option>
          </select>
        </div>
        <div class="form-group">
          <label for="description">Request Description</label>
          <textarea class="form-control" id="description" rows="4" v-model="description" placeholder="Describe your request here" required></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Submit Request</button>
        </div>
      </form>
      <div v-if="message" class="alert mt-3" :class="{'alert-success': message.includes('success'), 'alert-danger': message.includes('Error')}">
        {{ message }}
      </div>
    </div>
  </div>
</div>
  </template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const date = ref('');
const topic = ref('');
const description = ref('');
const message = ref('');

const submitRequest = async () => {
  if (!name.value || !date.value || !topic.value || !description.value) {
    message.value = 'Please fill out all fields.';
    return;
  }

  try {
    const dateTime = new Date(date.value);
    const formattedDateTime = dateTime.toISOString(); 

    const response = await fetch('http://localhost:8080/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        solicitantName: name.value,
        requestDate: formattedDateTime,
        subjectConsult: topic.value,
        descriptionConsult: description.value
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
    }

    const data = await response.json();
    message.value = `Request submitted successfully! ID: ${data.id}`;
    
    name.value = '';
    date.value = '';
    topic.value = '';
    description.value = '';
  } 
  catch (error) {
    message.value = `Error submitting request: ${error.message}`;
    console.error('Fetch error:', error);
  }
};
</script>
  <style scoped>
  .card {
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-control {
    border-radius: 0.25rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .btn-primary {
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
  }
  
  .alert {
    border-radius: 0.25rem;
    padding: 1rem;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  