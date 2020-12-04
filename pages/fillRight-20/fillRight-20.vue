<template>
	<view class="content">
		<view class="buttonWrap">
			<button type="primary" @click="calculate">重算</button>
		</view>		
		<view class="subjectWrap">
			<view class="subject" v-for="(item, index) in subjectArr" :key="index">
				{{item.result}} = {{item.fill === "num1" ? "( )" : item.num1}} {{item.operator}} {{item.fill === "num2" ? "( )" : item.num2}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				subjectArr: []
			}
		},
		onLoad() {
			this.calculate()
		},
		methods: {
			calculate() {
				this.subjectArr = []
				let count = 0
				while(count < 20) {
					let flag = false
					let num1 = this.createNum()
					let num2 = this.createNum()
					let operator = this.createOperator()
					let fill = this.createFill()
					
					let result
					
					if(operator === '-') {
						result = num1 - num2
						if(num1 > 10 && num1 <=20 && result >= 0) {
							flag = true
						}
					}else if(operator === '+') {
						result = num1 + num2
						if(result > 10 && result <= 20) {
							flag = true
						}
					}					
					
					if(flag) {
						count++
						this.subjectArr.push({
							result,
							num1,
							num2,
							operator,
							fill
						})						
					}					
				}
			},
			createNum() {
				return Math.floor(Math.random()*21)
			},
			createOperator() {
				return Math.random() > 0.7 ? "+" : "-"
			},
			createFill() {
				return Math.random() > 0.5 ? "num1" : "num2"
			}
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
		padding: 32rpx;
		box-sizing: border-box;
	}
	.buttonWrap {
		text-align: center;
	}
	.subjectWrap {
		padding-top: 40rpx;
		display: flex;	
		flex-wrap: wrap;
	}
	.subject {
		width: 50%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 48rpx;
	}
</style>
