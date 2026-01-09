<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">Ticket Details</h1>
    <p class="mt-2">
      Ticket Name: <span class="font-bold">{{ ticketName }}</span>
      Ticket Description: <span class="font-bold">{{ tickets.doc.purchase }}</span>
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { createDocumentResource, Button } from 'frappe-ui'


const route = useRoute()
const ticketName = route.params.name
let tickets = createDocumentResource({
  doctype: 'Support Tickets',
  name: ticketName,
})

</script>
