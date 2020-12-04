<template>
	<view class="content">
		<view class="buttonWrap">
			<button type="primary" @click="calculate">重算</button>
		</view>		
		<view class="subjectWrap">
			<view class="subject" v-for="(item, index) in subjectArr" :key="index">
				{{item.result}} = {{item.fill === "num1" ? "( )" : item.num1}} {{item.operator1}} {{item.fill === "num2" ? "( )" : item.num2}} {{item.operator2}} {{item.fill === "num3" ? "( )" : item.num3}}
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
					let num3 = this.createNum()
					let operator1 = this.createOperator()
					let operator2 = this.createOperator()
					let fill = this.createFill()
					
					let result1
					let result
					
					if(operator1 === '-') {
						result1 = num1 - num2						
					}else if(operator1 === '+') {
						result1 = num1 + num2						
					}
										
					if(operator2 === '-') {
						result = result1 - num3
						if(result1 > 10 && result1 <=20 && result >= 0) {
							flag = true
						}
					}else if(operator2 === '+') {
						result = result1 + num3
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
							num3,
							operator1,
							operator2,
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
				const res = Math.random()
				if(res <= 0.3) return "num1"
				if(res > 0.3 && res < 0.7) return "num2"
				return "num3"
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
		padding: 16rpx;
		box-sizing: border-box;
	}
	.buttonWrap {
		text-align: center;
	}
	.subjectWrap {
		padding-top: 20rpx;
		display: flex;	
		flex-wrap: wrap;
	}
	.subject {
		width: 50%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 40rpx;
	}
</style>
