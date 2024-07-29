<template>
    <nav class="navbar">
     <div class="container">
       <ul class="navbar-nav">
         <li class="nav-item">
           <RouterLink to="/" class="nav-link">Home</RouterLink>
         </li>
         <li class="nav-item">
           <RouterLink to="/support" class="nav-link">Support</RouterLink>
         </li>
         <li class="nav-item">
           <RouterLink to="/request" class="nav-link">Request</RouterLink>
         </li>
         <li class="nav-item">
           <RouterLink to="/edit" class="nav-link">Edit</RouterLink>
         </li>
       </ul>
     </div>
   </nav>
   </template>
   
   <style setup>
   .navbar {
     background-color: #FF8C00; 
     padding: 10px 20px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   }
   
   .container {
     display: flex;
     justify-content: flex-end;
   }
   
   .navbar-nav {
     list-style: none;
     display: flex;
     flex-direction: row;
     padding: 0;
     margin: 0;
   }
   
   .nav-item {
     margin: 0 10px;
   }
   
   .nav-link {
     text-decoration: none;
     color: #000;
     padding: 5px 10px;
     border-radius: 4px;
     transition: background-color 0.3s;
   }
   
   .nav-link:hover,
   .nav-link.active {
     background-color: #dcdcdc; 
   }

   li{
    color: white;
   }
   
   @media (max-width: 768px) {
     .navbar {
       padding: 10px;
     }
   
     .navbar-nav {
       flex-direction: column;
       width: 100%;
     }
   
     .nav-item {
       margin: 5px 0;
       text-align: center;
     }
   }
   
   </style>