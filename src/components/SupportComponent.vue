<template>  

<table border="1">
  <thead>
    <tr>
      <th>Solicitant Name</th>
      <th>Date</th>
      <th>Request Them</th>
      <th>Request Description</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="solicitud in solicitudes" :key="solicitud.id">
      <td>{{ solicitud.solicitantName }}</td>
      <td>{{ formatDate(solicitud.requestDate) }}</td>
      <td>{{ solicitud.subjectConsult }}</td>
      <td>{{ solicitud.descriptionConsult }}</td>
    </tr>
  </tbody>
</table>
  </template>