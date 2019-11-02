<template>
	<div>
		<v-app-bar app clipped-left color="white darken-1">
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-toolbar-title>
				<v-img
					contain
					height="40"
					src="@/assets/images/athena.png"
					width="150"
				></v-img>
			</v-toolbar-title>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	name: "topBar"
};
</script>

<style lang="scss" scoped>
</style>
