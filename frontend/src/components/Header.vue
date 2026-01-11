<template>
	<header class="bg-gray-200 p-6 border-b-2">
		<div class="flex justify-between items-end mt-0">
			<img alt="Vue logo" class="logo" src="../assets/icon.svg" width="60" height="25 " />

			<div class="cursor-pointer">
				<Dropdown :options="actions">
					<Avatar
						:shape="'circle'"
						:ref_for="true"
						label="EY"
						size="2xl"
						v-if="userResource.data"
						:image="userResource.data.user_image"
					/>
				</Dropdown>
			</div>
		</div>
	</header>
</template>

<script setup>
import { Avatar, Dropdown } from "frappe-ui";
import { inject } from "vue";
const userResource = inject("userResource");

const actions = [
	{
		label: "Switch to Desk",
		onClick: () => (window.location.href = "http://ticketing.localhost:8000/desk/"),
	},
];
</script>
