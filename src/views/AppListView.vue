<template>
	<div>
		<v-container fluid grid-list-xl>
			<v-row>
				<v-col cols="12 my-4">
					<h2 class="display-3">My Apps</h2>
				</v-col>
			</v-row>
			<v-row>
				<v-col :key="index" cols="3" v-for="(app,index) in apps">
					<v-card class="mt-4 mx-auto">
						<v-card @click="openApp(app._id)">
							<v-sheet
								class="v-sheet--offset mx-auto"
								color="accent"
								dark
								elevation="12"
								max-width="calc(100% - 32px)"
							>
								<v-container grid-list-lg>
									<v-row>
										<v-col class="text-center">
											<span class="body-1">Active Sessions</span>
											<h3 class="headline">3</h3>
										</v-col>
										<v-divider vertical></v-divider>
										<v-col class="text-center">
											<span class="body-1">Notifications</span>
											<h3 class="headline">0</h3>
										</v-col>
									</v-row>
								</v-container>
							</v-sheet>
							<v-card-title class="primary--text" primary-title>{{app.name}}</v-card-title>
							<v-card-text>{{app.url}}</v-card-text>
						</v-card>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { apiClient } from "@/helpers/axiosGlobal.js";

export default {
	name: "AppList",
	async created() {
		var { data } = await apiClient.get("app/list");
		this.apps = data;
	},
	data: () => ({
		apps: [],
		labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
		value: [200, 675, 410, 390, 310, 460, 250, 240]
	}),
	methods: {
		openApp(id) {
			this.$router.push({ name: "appPage", params: { appId: id } });
		}
	}
};
</script>

<style lang="scss" scoped>
.v-sheet--offset {
	top: -24px;
	position: relative;
}
</style>
