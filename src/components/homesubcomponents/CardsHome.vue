<template>
    <h2 id="instruction">What would you find in this Work?</h2>
    <div class="thirdContainer">
      <div class="card">
        <img src="" alt="RequestList">
        <div class="content" @click="redirectRequirementList">
          <h3>Request List</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div class="card">
        <img src="" alt="Support Form">
        <div class="content" @click="redirectSupport">
          <h3>Support Form</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div class="card">
        <img src="" alt="Edit Request">
        <div class="content" @click="redirectEditRequest">
          <h3>Edit Request</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    </template>
    
    
    <script setup> 
    import {ref} from "vue"
    import {useRouter} from "vue-router"
    
    const redirect = useRouter();
    
    const redirectRequirementList = ( ) => {
    redirect.push("/request")
    }
    
    const redirectSupport = ()=>{
      redirect.push("/support")
    }
    
    const redirectEditRequest =()=>{
      redirect.push("/edit")
    }
    
    </script>
    
    <style>
    
    #welcome {
      text-align: center;
      padding: 5%;
      font-family: "Bebas Neue", sans-serif;
      font-style: normal;}
    
    #instruction{
      display: flex;
      justify-content: center;
    }
    
    .thirdContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: rgb(64,182,130);
    padding: 20px;
    }
    
    .card {
    flex: 1 1 300px;
    margin: 10px;
    background-color: black;
    color: #FFF;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    }
    
    .card img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px 8px 0 0;
    }
    
    .content h3 {
    text-align: center;
    }
    
    .content p {
    padding: 10px;
    }
    
    @media (max-width: 768px) {
    #welcome {
      padding: 10%;
    }
    
    .thirdContainer {
      flex-direction: column;
    }
    
    .card {
      flex: 1 1 100%;
    }
    }
    </style>
    