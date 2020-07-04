<template name="myinput">
	<view>
	    <input type="text" value="" :placeholder="placeholder" class="myinput"/>
		<button type="primary" @click="submit">提交</button>
	</view>
</template>

<script>
	export default{
		name:"myinput",
		//属性
		props:{
			placeholder:{
				type :String,
				value:"请输入……"
			}
		},
		//组件生命周期
		created:function(e){
			
		},
		methods:{
			submit:function(){
				console.log('submit');
				this.$emit("mytest","此值已改变");
			}
		}
	}
</script>

<style>
</style>
