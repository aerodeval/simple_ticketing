<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">Ticket Details</h1>
    <p class="mt-2">
      Ticket Name: <span class="font-bold">{{ ticketName }}</span>
      Ticket Raised on: <span class="font-bold">{{dayjs(tickets.doc.purchase).format('DD/MM/YYYY')  }}</span>
    <div v-html="tickets.doc.description" class="prose">
    </div>
    </p>
  </div>

      <Button 
  @click="tickets.setValue.submit({ status: 'Closed' })">
        Mark as Closed
    </Button>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { createDocumentResource, Button } from 'frappe-ui'
import dayjs from 'dayjs'


const route = useRoute()
const ticketName = route.params.name
let tickets = createDocumentResource({
  doctype: 'Support Tickets',
  name: ticketName,
   whitelistedMethods: {
    markAsResolved: 'mark_as_resolved',},
})



</script>
