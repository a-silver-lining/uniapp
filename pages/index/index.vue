<template>
	<view>
		<view style="flex-wrap: wrap;">
		<navigator class="news-list" :url="'../Info/Info?newsid='+index" v-for ="(items, index) in news"  :key="index"> <!-- url="../Info/Info" -->
			<image v-if="items.imgsrc" :src="items.imgsrc" mode="widthFix"></image>
			<image v-else="" src="../../static/logo.png" mode="widthFix"></image>   
			<!--  错误原因：由于这是因为初始化的时候,变量还没渲染进去导致的。  没图片加载这个"../../static/logo.png"   -->
			<!-- 加一个v-if可以判断在items初始化渲染之后，再加载 -->
			<view class="news-title">
				{{items.title}}
			</view>
		</navigator>
	</view>
	</view>
	
</template>
<!--页面之间传递数据 url=" 页面地址 ?变量名=值 &变量=值 " -->
<script>
	var _self;
	
	//公共模块：common是获取common.js文件中元素的对象，common.log执行common.js中的方法
	import common from "../../common/common.js";  
	export default {
		//data后面一定要加括号，里面一定要加return
		data () {
		    return {
		      news: []
		    }
		  },
		onLoad:function() {
			_self = this;
			this.getNews();
		},
		
		methods: {
			getNews : function(){
				uni.request({
					url: common.apiUri,
				success:function(res){
					_self.news = res.data.T1348649580692;
					console.log(res.data.T1348649580692);
				},
				fail:function(e){
					console.log(e);
				}
				});
			}
		}
	}
</script>

<style>
	view{width: 100%;}
	.news-list{
		display: flex; width:94%; padding:10upx 3%; flex-wrap: nowrap; margin: 12upx 0;
	}
	.news-list image{width:200upx; margin-right:12upx; flex-shrink:0;}
	.news-title{width:100%; height:auto; font-size:28upx;}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
