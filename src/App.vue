<template>
	<v-app id="keep">
		<topBar></topBar>
		<sideBar></sideBar>
		<v-content>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: "App",
	components: {
		topBar: () => import("@/components/topBar.vue"),
		sideBar: () => import("@/components/sideBar.vue")
	}
};
</script>

<style lang="scss">
@import "@/theme.scss";
@import url("https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/style.css");
</style>
