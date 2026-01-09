<template>
	<div class="flex items-center justify-between p-2">
		<h1>Support Tickets</h1>
		<div class="p-1">
			<Button
				:variant="'solid'"
				:ref_for="true"
				theme="gray"
				size="sm"
				label="Button"
				:loading="false"
				:loadingText="null"
				:disabled="false"
				:link="null"
				@click="dialog1 = true"
				tooltip="Add a new ticket!"
			>
				+ New Ticket
			</Button>

			<Dialog
				:options="{
					title: 'Add a ticket',
					message: 'Here you can add a ticket',
					size: '2xl',
				}"
				v-model="dialog1"
			>
				<template #body-content>
					<div class="p-2">
						<FormControl
							:type="'text'"
							:ref_for="true"
							size="sm"
							variant="subtle"
							placeholder="Title"
							:disabled="false"
							label="Title"
							v-model="inputValue"
						/>
					</div>
					<div class="p-2">
						<FormControl
							type="select"
							:options="[
								{ label: 'Paper Quality', value: 'Paper Quality' },
								{ label: 'Delivery', value: 'Delivery' },
								{ label: 'Other', value: 'Other' },
							]"
							size="sm"
							variant="subtle"
							placeholder="Ticket Category"
							:disabled="false"
							label="Category"
							v-model="selectValue"
						/>
					</div>

					<div class="p-2">
						<FormControl
							:type="'date'"
							:ref_for="true"
							size="sm"
							variant="subtle"
							placeholder="date of purchasing"
							:disabled="false"
							label="Purchase Date"
							v-model="dateValue"
						/>
					</div>
					  



			<div class="p-2">
  <TextEditor
    editor-class="prose-sm min-h-[4rem] border rounded-b-lg border-t-0 p-2"
    v-model="textEditorInput"
	
    placeholder="Type something..."
    @change="(val) => value = val"
    :bubbleMenu="true"
    :fixed-menu="true"
  />
</div>
				</template>
				<template #actions="{ close }">
					<div>
						<Button variant="solid" @click="addTicket(close)"> Add Ticket </Button>
					</div>
				</template>
			</Dialog>
		</div>
	</div>
	<ListView
		v-if="!tickets.loading"
		:columns="simple_columns"
		:rows="simple_rows"
		:options="ListOptions"
		row-key="name"
	>
		<template #cell="{ item, row, column }">
			<Badge v-if="column.key === 'status'" variant="solid" :theme="statusTheme[row.status]">
				{{ row.status }}
			</Badge>

			<span v-else class="font-bold">
				{{ item }}
			</span>
		</template>
	</ListView>
</template>

<script setup>
import { computed, ref } from "vue";
import { createListResource, ListView, Badge, Button, Dialog, FormControl, TextEditor} from "frappe-ui";
const dialog1 = ref(false);
const inputValue = ref("");
const dateValue = ref("");
const selectValue = ref(null);
const textEditorInput= ref("")
const simple_columns = [
	{ label: "Name", key: "name" },
	{ label: "Category", key: "category" },
	{ label: "Status", key: "status" },
];

const statusTheme = {
	Open: "green",
	"Waiting for Reply": "yellow",
	Resolved: "purple",
	Closed: "red",
};

const ListOptions = {
	selectable: false,
	showTooltip: false,
	resizeColumn: false,
	loadingText: "Loading tickets...",
	emptyState: {
		title: "No Support Tickets",
	},
};

const tickets = createListResource({
	doctype: "Support Tickets",
	fields: ["name", "category", "status"],
	orderBy: "creation desc",
	pageLength: 5,
	auto: true,
});

const addTicket = (close) => {
	tickets.insert.submit({
		title: inputValue.value,
		category: selectValue.value,
		purchase:dateValue.value,
		description:textEditorInput
	});

	inputValue.value = "";
	selectValue.value = null;
	dateValue.value = "";

	close();
};

const simple_rows = computed(() => {
	return tickets.data || [];
});
</script>
