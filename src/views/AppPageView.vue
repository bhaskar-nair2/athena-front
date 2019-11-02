<template>
	<div>
		<v-container class="grey lighten-4 fill-height" fluid>
			<v-row>
				<v-col>
					<h1 class="display-1">{{app.name}}</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-tabs color="primary" slider-color="primary" v-model="value">
					<v-tab :key="sess" ripple v-for="sess in app.session">{{sess}}</v-tab>
				</v-tabs>
			</v-row>
			<v-row align="center">
				<v-col class="shrink">
					<videoPlayer :api="app.api"></videoPlayer>
				</v-col>
				<v-col>
					<dataCard></dataCard>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { apiClient } from "@/helpers/axiosGlobal.js";

export default {
	name: "AppPage",
	async created() {
		var id = this.$route.params.appId;
		var { data } = await apiClient.get(`app/${id}`);
		this.app = data;
	},
	data: () => ({
		app: {},
		value: ""
	}),
	components: {
		videoPlayer: () => import("@/components/videoPlay.vue"),
		dataCard: () => import("@/components/dataDisp.vue")
	}
};
</script>

<style lang="scss" scoped>
</style>
