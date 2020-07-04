<template>
	<view style="flex-wrap: wrap;">
		<view style="flex-wrap: wrap;">
			{{news.title}}
		</view>
		<view style="flex-wrap: wrap;">
			<image v-if="news.imgsrc" :src="news.imgsrc" style="width: 100%;" mode="widthFix"></image>   <!-- v-if="news.hasImg" -->
			<text v-if="news.digest">
				{{news.digest}}
			</text>
		</view>
		<myinput placeholder="请输入姓名……" v-on:mytest="testParent"> </myinput>
		<myinput placeholder="请输入电话……"> </myinput>
		{{test}}
	</view>
</template>

<script>
	import myinput from "../../components/components.vue";
	var _self,index;
	export default {
		data () {
		    return {
		      news: [],
			  index: 0,
			  test:"改变这个值"
		    }
		  },
		onLoad:function(e){
			_self=this;
			_self.index = e.newsid;
			uni.request({
				//可以在把newid和URL地址拼接成一个请求详情的地址
				url : this.apiurl,
				success:function(res){
					_self.news = res.data.T1348649580692[_self.index];
					console.log(_self.news);
				}
			});
		},
		components:{
			myinput
		},
		methods:{
			//自定义组件改变父组件的值
			testParent:function(text){
				this.test = text;
			}
		}
	}
</script>

<style>

</style>
