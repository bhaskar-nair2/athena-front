<template>
	<div>
		<v-card class="vid-card" flat>
			<v-card-title primary-title>Live View</v-card-title>
			<v-card-text>
				<i class="vid-player" ref="video"></i>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import rrwebPlayer from "rrweb-player";

export default {
	name: "VideoPlay",
	mounted() {
		this.events.forEach(x => {
			x.timestamp = new Date(x.timestamp).getTime();
		});
		new rrwebPlayer({
			target: this.$refs.video, // customizable root element
			data: { events: this.events, autoPlay: true, showDebug: true }
		});
	},
	props: {
		api: {
			type: String
		}
	},
	data: () => ({
		events: []
	})
};
</script>

<style lang="scss" scoped>
.vid-card {
	height: 80vh;
}
.vid-player {
	position: relative;
}
</style>
