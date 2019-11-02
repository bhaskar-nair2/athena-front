<template>
	<div>
		<v-navigation-drawer app class="accent" clipped dark>
			<v-list>
				<v-list-item
					:key="item.title"
					:to="item.path"
					link
					v-for="item in items"
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<template v-slot:append>
				<div class="pa-2">
					<v-btn block>Logout</v-btn>
				</div>
			</template>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	name: "sideBar",
	data: () => ({
		drawer: true,
		items: [
			{ title: "My Apps", icon: "fas fa-th", path: "/" },
			{ title: "App Page", icon: "fas fa-user", path: "/appPage" },
			{ title: "Admin", icon: "fas fa-user-shield", path: "/settings" }
		]
	})
};
</script>

<style lang="scss" scoped>
</style>
