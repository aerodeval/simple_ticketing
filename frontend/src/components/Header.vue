<template>
	<header class="bg-gray-200 p-6 border-b-2 ">
		<div class="flex justify-between items-end mt-0">
			<img alt="Vue logo" class="logo" src="../assets/icon.svg" width="60" height="25 " />

			<div class="cursor-pointer">
				<Dropdown :options="actions">
					<Avatar
						:shape="'circle'"
						:ref_for="true"
						image="https://avatars.githubusercontent.com/u/499550?s=60&v=4"
						label="EY"
						size="2xl"
					/>
				</Dropdown>
			</div>
		</div>
	</header>
</template>

<script setup>
import { Avatar, Dropdown } from "frappe-ui";


const actions = [
	{
		label: "Switch to Desk",
		onClick: () => (window.location.href = "http://ticketing.localhost:8000/desk/"),
	},
];
</script>
