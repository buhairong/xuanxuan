<template>
	<view class="content">
		<view class="wrap">
			<view class="buttonGroup">				
				<navigator url="/pages/fillRight-20/fillRight-20">
					<button type="primary">20以内右侧填空</button>
				</navigator>
				<navigator url="/pages/continuationFillRight-20/continuationFillRight-20">
					<button type="primary">20以内右侧填空(连加连减)</button>
				</navigator>
			</view>
		</view>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	page {
		height: 100%;
	}
	.content {
		width: 100%;
		height:100%;
	}
	.wrap {
		width: 100%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	navigator {
		margin-top: 40rpx;
	}
</style>
