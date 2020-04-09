<template>

	<view class="content ">
		<!-- 音频 -->
		<view class="music-right">
			<image class="music" made="widthFix" @tap="clickPic" v-if="status" src="/static/picture/lb.png"></image>
			<image class="music" made="widthFix" @tap="clickPic" v-else src="/static/picture/lb.png"></image>
		</view>

		<view class="page-1 " :class="index==0? 'show': fadeOut">
			<!-- 上部分文字 -->
			<image class="msg animated fadeInUp " made="aspectFill" src="/static/picture/dialog.png" mode=""></image>
			<image class="msg-unlock animated fadeIn" made="aspectFill" src="../../static/picture/unlock.png" mode=""></image>
			<image class="msg-text animated fadeIn" made="aspectFill" src="../../static/picture/character.png" mode=""></image>
			<image class="msg-line animated fadeIn" made="aspectFill" src="../../static/picture/wenzistyle.png" mode=""></image>
			<!-- 底部边框 -->
			<image class="frame" made="aspectFill" src="/static/picture/broder.png" mode=""></image>
			<!-- 云朵 -->
			<image class="clound-1" src="../../static/picture/clound.png" mode="aspectFill"></image>
			<image class="clound-2" src="../../static/picture/p1_1.png" mode="aspectFill"></image>
			<!-- 建筑 -->
			<image class="room animated fadeInUp" src="../../static/picture/buliding.png" mode="aspectFill"></image>
			<!-- 人 -->
			<image class="person-1 animated fadeInRight" src="../../static/picture/person.png" mode="aspectFill"></image>
			<image class="person-2" src="../../static/picture/p1_0.png" mode="aspectFill"></image>
			<!-- 手机 -->
			<image class="phone-1 animated fadeInRight" src="../../static/picture/phone.png" mode="aspectFill"></image>
			<image class="phone-2 animated fadeInRight" src="../../static/picture/phone_weibu.png" mode="aspectFill"></image>
			<!-- 垃圾 -->
			<image class="trash animated fadeInLeft" src="../../static/picture/weiqi.png" mode="aspectFill"></image>
			<image class="banana animated fadeInLeft" src="../../static/picture/banana.png" mode="aspectFill"></image>
			<!-- 按钮 -->
			<image class="down" @tap="clickPage('page1')" src="../../static/picture/down.png" mode="aspectFill"></image>
		</view>

		<view class="page-2 " :class=" [index==1? fadeIn:'' || index== 2? fadeOut:'hipe']">
			<image class="page-2-bg" src="../../static/picture/paperbg.png" mode=""></image>
			<image class="page-2-text1 animated fadeIn" src="../../static/picture/paperword.png" mode=""></image>
			<image class="page-2-text2 animated fadeIn" src="../../static/picture/paperword1.png" mode=""></image>
			<view class="page-2-name animated fadeIn">
				<input type="text" value="" placeholder-style="color: #a89b9b;" placeholder="输入姓名" />
				<image @tap="clickPage('page2')" src="../../static/picture/start.png" mode=""></image>
			</view>
		</view>

		<view class="page-3  " :class="[index==2 ? fadeIn:'' || index==3? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a1title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/bg_2.png" class="page3_bg" mode=""></image>
			<image src="../../static/picture/bigclound.png" class="page3_bigclound" mode=""></image>
			<image src="../../static/picture/smallclound.png" class="page3_smallclound" mode=""></image>
			<image src="../../static/picture/bg2_man.png" class="page3_person1" mode=""></image>
			<image src="../../static/picture/person_2.png" class="page3_person2 animated fadeInLeft" mode=""></image>
			<image src="../../static/picture/b1_0.png" class="page3_shan" mode=""></image>

			<!-- 选择题 -->
			<view class="page3_select  ">
				<view class="select_item " @tap="clickPage('page3')">
					<image class="item_select" src="../../static/images/a1.png" mode=""></image>
					<image class="item_content" src="../../static/picture/1a.png" mode=""></image>
				</view>
				<view class="select_item" @tap="clickPage('page3')">
					<image class="item_select" src="../../static/images/b1.png" mode=""></image>
					<image class="item_content" src="../../static/picture/1b.png" mode=""></image>
				</view>
				<view class="select_item" @tap="clickPage('page3')">
					<image class="item_select" src="../../static/images/c1.png" mode=""></image>
					<image class="item_content" src="../../static/picture/1c.png" mode=""></image>
				</view>
				<view class="select_item" @tap="clickPage('page3')">
					<image class="item_select" src="../../static/images/d1.png" mode=""></image>
					<image class="item_content" src="../../static/picture/1d.png" mode=""></image>
				</view>
			</view>


		</view>

		<view class="page-4 " :class="[index==3? fadeIn: ''|| index==4? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a2title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/b2_03.png" class="bg03" mode=""></image>
			<image src="../../static/picture/b2_0.png" class="girl animated fadeInLeft" mode=""></image>
			<image src="../../static/picture/b2_2.png" class="man animated fadeInRight" mode=""></image>
			<image src="../../static/picture/b2_3.png" class="shan" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing2" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing3" mode=""></image>
			<!-- 选择题 -->
			<view class="pag4-list animated fadeInUp">
				<view class="item" >
					<image src="../../static/images/a1.png"  mode=""  @tap.stop="clickPage('page4')"></image>
					<image src="../../static/picture/2a.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/b1.png" @tap.stop="clickPage('page4')" mode=""></image>
					<image src="../../static/picture/2b.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/c1.png" @tap.stop="clickPage('page4')" mode=""></image>
					<image src="../../static/picture/2c.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/d1.png" @tap.stop="clickPage('page4')" mode=""></image>
					<image src="../../static/picture/2d.png" mode=""></image>
				</view>
			</view>


		</view>

		<view class="page-4 page3" :class="[index==4? fadeIn: ''|| index==5? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a3title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/b3_03.png" class="bg03" mode=""></image>
			<image src="../../static/picture/b3_2-1.png" class="word animated fadeIn" mode=""></image>
			<image src="../../static/picture/b3_3-1.png" class="word word1 animated fadeIn" mode=""></image>
			<image src="../../static/picture/b3_4-1.png" class="word word2 animated fadeIn" mode=""></image>
			<image src="../../static/picture/b3_5-1.png" class="word word3 animated fadeIn" mode=""></image>
			<!-- 选择题 -->
			<view class="pag4-list animated fadeInUp">
				<view class="item">
					<image src="../../static/images/a1.png" @tap="clickPage('page5')" mode=""></image>
					<image src="../../static/picture/3a.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/b1.png" @tap="clickPage('page5')" mode=""></image>
					<image src="../../static/picture/3b.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/c1.png" @tap="clickPage('page5')" mode=""></image>
					<image src="../../static/picture/3c.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/d1.png" @tap="clickPage('page5')" mode=""></image>
					<image src="../../static/picture/3d.png" mode=""></image>
				</view>
			</view>


		</view>

		<view class="page-4 page4" :class="[index==5? fadeIn: ''|| index==6? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a4title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/b4_03.png" class="bg03" mode=""></image>
			<image src="../../static/picture/b4_2.png" class="persons animated swing" mode=""></image>
			<image src="../../static/picture/b4_1.png" class="person1 " mode=""></image>
			<image src="../../static/picture/b4_3.png" class="shan" mode=""></image>
			<!-- 选择题 -->
			<view class="pag4-list animated fadeInUp">
				<view class="item">
					<image src="../../static/images/a1.png" @tap="clickPage('page6')" mode=""></image>
					<image src="../../static/picture/4a.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/b1.png" @tap="clickPage('page6')" mode=""></image>
					<image src="../../static/picture/4b.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/c1.png" @tap="clickPage('page6')" mode=""></image>
					<image src="../../static/picture/4c.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/d1.png" @tap="clickPage('page6')" mode=""></image>
					<image src="../../static/picture/4d.png" mode=""></image>
				</view>
			</view>


		</view>

		<view class="page-4 page5" :class="[index==6? fadeIn: ''|| index==7? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a5title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/b5_03.png" class="bg03" mode=""></image>
			<image src="../../static/picture/b5_0.png" class="text" mode=""></image>
			<image src="../../static/picture/b5_1.png" class="shan" mode=""></image>
			
			<!-- 选择题 -->
			<view class="pag4-list animated fadeInUp">
				<view class="item">
					<image src="../../static/images/a1.png" @tap="clickPage('page7')" mode=""></image>
					<image src="../../static/picture/5a.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/b1.png" @tap="clickPage('page7')" mode=""></image>
					<image src="../../static/picture/5b.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/c1.png" @tap="clickPage('page7')" mode=""></image>
					<image src="../../static/picture/5c.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/d1.png" @tap="clickPage('page7')" mode=""></image>
					<image src="../../static/picture/5d.png" mode=""></image>
				</view>
			</view>


		</view>

		<view class="page-4 page6" :class="[index==7? fadeIn: ''|| index==8? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a6title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/b6_03.png" class="bg03" mode=""></image>
			<image src="../../static/picture/b6_0.png" class="cat" mode=""></image>
			<image src="../../static/picture/b6_1.png" class="shan" mode=""></image>
			<!-- 选择题 -->
			<view class="pag4-list animated fadeInUp">
				<view class="item">
					<image src="../../static/images/a1.png" @tap="clickPage('page8')" mode=""></image>
					<image src="../../static/picture/6a.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/b1.png" @tap="clickPage('page8')" mode=""></image>
					<image src="../../static/picture/6b.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/c1.png" @tap="clickPage('page8')" mode=""></image>
					<image src="../../static/picture/6c.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/d1.png" @tap="clickPage('page8')" mode=""></image>
					<image src="../../static/picture/6d.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="page-4 page7" :class="[index==8? fadeIn: ''|| index==9? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a7title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/b7_03.png" class="bg03" mode=""></image>
			<image src="../../static/picture/b7_0.png" class="girl animated fadeInLeft" mode=""></image>
			
			<image src="../../static/picture/b7_3.png" class="shan" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing2" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing3" mode=""></image>
			<!-- 选择题 -->
			<view class="pag4-list animated fadeInUp">
				<view class="item">
					<image src="../../static/images/a1.png" @tap="clickPage('page9')" mode=""></image>
					<image src="../../static/picture/7a.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/b1.png" @tap="clickPage('page9')" mode=""></image>
					<image src="../../static/picture/7b.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/c1.png" @tap="clickPage('page9')" mode=""></image>
					<image src="../../static/picture/7c.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/d1.png" @tap="clickPage('page9')" mode=""></image>
					<image src="../../static/picture/7d.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="page-4 " :class="[index==9? fadeIn: ''|| index==10? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a8title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/b8_03.png" class="bg03" mode=""></image>
			<image src="../../static/picture/b2_0.png" class="girl animated fadeInLeft" mode=""></image>
			<image src="../../static/picture/b2_2.png" class="man animated fadeInRight" mode=""></image>
			<image src="../../static/picture/b2_3.png" class="shan" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing2" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing3" mode=""></image>
			<!-- 选择题 -->
			<view class="pag4-list animated fadeInUp">
				<view class="item">
					<image src="../../static/images/a1.png" @tap="clickPage('page10')" mode=""></image>
					<image src="../../static/picture/8a.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/b1.png" @tap="clickPage('page10')" mode=""></image>
					<image src="../../static/picture/8b.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/c1.png" @tap="clickPage('page10')" mode=""></image>
					<image src="../../static/picture/8c.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/d1.png" @tap="clickPage('page10')" mode=""></image>
					<image src="../../static/picture/8d.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="page-4 " :class="[index==10? fadeIn: ''|| index==11? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a9title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/b9_03.png" class="bg03" mode=""></image>
			<image src="../../static/picture/b2_0.png" class="girl animated fadeInLeft" mode=""></image>
			<image src="../../static/picture/b2_2.png" class="man animated fadeInRight" mode=""></image>
			<image src="../../static/picture/b2_3.png" class="shan" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing2" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing3" mode=""></image>
			<!-- 选择题 -->
			<view class="pag4-list animated fadeInUp">
				<view class="item">
					<image src="../../static/images/a1.png" @tap="clickPage('page11')" mode=""></image>
					<image src="../../static/picture/9a.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/b1.png" @tap="clickPage('page11')" mode=""></image>
					<image src="../../static/picture/9b.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/c1.png" @tap="clickPage('page11')" mode=""></image>
					<image src="../../static/picture/9c.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/d1.png" @tap="clickPage('page11')" mode=""></image>
					<image src="../../static/picture/9d.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="page-4 " :class="[index==11? fadeIn: ''|| index==12? fadeOut: 'hipe']">
			<!-- 图内信息 -->
			<image src="../../static/picture/a10title.png" class="title animated fadeInUp" mode=""></image>
			<image src="../../static/picture/b10_03.png" class="bg03" mode=""></image>
			<image src="../../static/picture/b2_0.png" class="girl animated fadeInLeft" mode=""></image>
			<image src="../../static/picture/b2_2.png" class="man animated fadeInRight" mode=""></image>
			<image src="../../static/picture/b2_3.png" class="shan" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing2" mode=""></image>
			<image src="../../static/picture/b7_6.png" class="xing xing3" mode=""></image>
			<!-- 选择题 -->
			<view class="pag4-list animated fadeInUp">
				<view class="item">
					<image src="../../static/images/a1.png" @tap="clickPage('page12')" mode=""></image>
					<image src="../../static/picture/10a.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/b1.png" @tap="clickPage('page12')" mode=""></image>
					<image src="../../static/picture/10b.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/c1.png" @tap="clickPage('page12')" mode=""></image>
					<image src="../../static/picture/10c.png" mode=""></image>
				</view>
				<view class="item">
					<image src="../../static/images/d1.png" @tap="clickPage('page12')" mode=""></image>
					<image src="../../static/picture/10d.png" mode=""></image>
				</view>
			</view>
		</view>


	</view>

</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				status: true,
				isShow: false,
				index: 0,
				fadeOut: "animated fadeOutUp ",
				fadeIn: 'animated fadeInUp'
			}
		},
		onLoad() {
			// this.clickPic();

		},
		mounted() { //加载完成后执行

		},

		methods: { //事件方法执行。
			demoClick(){
				console.log("demo1")
			},
			demoClick2(){
				console.log("demo2")
			},



			/* 点击切换下一页 */
			clickPage(type) {

 				if(type=='page1'){return this.index = 1};
 				if(type=='page2'){return this.index = 2};
 				if(type=='page3'){return this.index = 3};
 				if(type=='page4'){return this.index = 4;};
 				if(type=='page5'){return this.index = 5};
 				if(type=='page6'){return this.index = 6};
 				if(type=='page7'){return this.index = 7};
 				if(type=='page8'){return this.index = 8};
 				/* if(type=='page9'){return this.index = 9};
 				if(type=='page10'){return this.index = 10};
 				if(type=='page11'){return this.index = 11};
 				if(type=='page12'){return console.log("aa")}; */
				
			/* if (type == 'page1') {
					this.index = 1;
				} else if (type == 'page2') {
					this.index = 2;
				} else if (type == 'page3') {
					this.index = 3;
				} else if (type == 'page4') {
					this.index = 4;
				} else if (type == 'page5') {
					this.index = 5;
				} else if (type == 'page6') {
					this.index = 6;
				} else if (type === 'page7') {
					this.index = 7;
				} else if (type == 'page8') {
					this.index = 8;
				} else if (type == 'page9') {
					this.index = 9;
				} else if (type == 'page10') {
					this.index = 10;
				} else if (type == 'page11') {
					this.index = 11;
				} else if (type == 'page12') {
					// this.index = 12;
					console.log("aa");
				} */


			},
			/* 点击停止音乐 */

			clickPic() {
				this.status = !this.status;
				/* 工厂模式获取对象 */
				/* 	function Auduio() {
						var innerAudioContext = uni.createInnerAudioContext();
						return innerAudioContext;
					} */

				if (this.status == false) {
					innerAudioContext.autoplay = true;
					innerAudioContext.loop = true;
					innerAudioContext.play();
					innerAudioContext.src = 'http://mingsichen.top/book/auto/getvoice.mp3';
				} else {
					innerAudioContext.pause();
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.hipe {
		display: none;
	}

	.show {
		display: block;
	}

	page,
	body {
		position: relative;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background: #f6f6f6;
		box-sizing: border-box;
	}

	.content {
		width: 100%;
		height: 100%;
		background: #f6f6f6;
		overflow: hidden;
		-webkik-overflow: hidden;
	}

	.music-right {
		width: 100%;
		height: 100rpx;
		position: absolute;
		z-index: 999;

		.music {
			width: 60rpx;
			height: 40rpx;
			position: absolute;
			display: block;
			right: 30rpx;
			top: 30rpx;
		}
	}

	/* 第一页 */
	.page-1 {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		background: #f6f6f6;
	}

	.msg {
		width: 680upx;
		height: 280upx;
		position: absolute;
		display: block;

		top: 80upx;
		left: 50%;
		margin-left: -340rpx;
		transform: translateX(-50%);
		overflow: hidden;
		animation-delay: 2s;
		opacity: 0;
		// animation-fill-mode: both;
	}

	.msg-text {
		width: 580rpx;
		height: 136rpx;
		position: absolute;
		top: 126rpx;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		animation-delay: 2.8s;
		opacity: 0;
	}

	.msg-unlock {
		width: 104rpx;
		height: 60rpx;
		position: absolute;
		top: 90rpx;
		left: 50%;
		transform: translateX(-50%);
		animation-delay: 2.8s;
		opacity: 0;
	}

	.msg-line {
		width: 580rpx;
		height: 50rpx;
		margin-top: 90rpx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		animation-delay: 2.8s;
		opacity: 0;
	}

	.frame {
		width: 680rpx;
		height: 630rpx;
		position: absolute;
		top: 360rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.clound-1 {
		width: 140rpx;
		height: 90rpx;
		position: absolute;
		top: 400rpx;
		right: 60rpx;
		animation: clound-1 1.5s linear -2s infinite alternate;
	}

	@keyframes clound-1 {
		0% {
			transform: translate(8rpx, 0);
		}

		100% {
			transform: translate(-8rpx, 0);
		}
	}

	.clound-2 {
		width: 80rpx;
		height: 50rpx;
		position: absolute;
		top: 400rpx;
		left: 100rpx;
		animation: clound-2 1s linear infinite alternate;
	}

	@keyframes clound-2 {
		0% {
			transform: translate(9rpx, 0);
		}

		100% {
			transform: translate(-10rpx, 0);
		}
	}

	.room {
		width: 376rpx;
		height: 160rpx;
		position: absolute;
		left: 52rpx;
		top: 510rpx;
		opacity: 0;
		animation-delay: 1s;
		-webkid-animation-delay: 1s;
		// animation-fill-mode: both;
	}

	.person-1 {
		width: 260rpx;
		height: 220rpx;
		position: absolute;
		top: 510rpx;
		right: 44rpx;
		opacity: 0;
		animation: person-1 .2s linear 1.5s infinite alternate;
		// animation-fill-mode: both;
	}

	@keyframes person-1 {
		0% {
			opacity: 1;
			transform: translate(6rpx, 0);
		}

		100% {
			opacity: 1;
			transform: translate(-6rpx, 0);
		}
	}

	.person-2 {
		width: 260rpx;
		height: 540rpx;
		position: absolute;
		// opacity: 0;
		top: 400rpx;
		left: 140rpx;
		opacity: 0;
		animation: person-2 1.5s linear 1s 1;
		animation-fill-mode: both;
	}

	@keyframes person-2 {
		0% {
			opacity: 0;
			transform: scale(0.5);
		}

		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	.phone-1 {
		width: 86rpx;
		height: 76rpx;
		position: absolute;
		left: 16rpx;
		top: 840rpx;
		opacity: 0;
		animation-delay: 2s;
	}

	.phone-2 {
		width: 70rpx;
		height: 30rpx;
		position: absolute;
		left: 120rpx;
		top: 540rpx;
		opacity: 0;
		animation-delay: 2s;
	}

	.trash {
		width: 110rpx;
		height: 90rpx;
		position: absolute;
		right: 260rpx;
		top: 840rpx;
		opacity: 0;
		animation-delay: 2.2s;
	}

	.banana {
		width: 70rpx;
		height: 50rpx;
		position: absolute;
		right: 120rpx;
		top: 840rpx;
		opacity: 0;
		animation-delay: 2.5s;
	}

	.down {
		width: 129rpx;
		height: 90rpx;
		position: absolute;
		left: 50%;
		margin-left: -65rpx;
		transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		bottom: 50rpx;
		opacity: 0;
		animation: btn 1s ease 2s infinite alternate;
		/* 动画名  完成动画时间  运动曲线 开始前延迟 播放次数  是否轮反 */
		-webkit-animation: btn 1s ease 2s infinite alternate;

	}

	@keyframes btn {
		0% {
			opacity: 1;
			transform: translate(0, 0)
		}

		100% {
			opacity: 1;
			transform: translate(0, -10rpx);
		}
	}

	/*第二页  */

	.page-2 {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #f6f6f6;
		overflow: hidden;
	}

	.page-2-bg {
		width: 600rpx;
		height: 800rpx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 80rpx;
	}

	.page-2-text1 {
		width: 480rpx;
		height: 110rpx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 300rpx;
		animation-delay: 0.5s;
	}

	.page-2-text2 {
		width: 480rpx;
		height: 260rpx;
		margin-top: 480rpx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		animation-delay: 1s;
	}

	.page-2-name {
		width: 100%;
		bottom: 8%;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		animation-delay: 1.5s;
	}

	.page-2-name input {
		width: 200rpx;
		height: 40rpx;
		margin-bottom: 30rpx;
		text-align: center;
		font-size: 34rpx;
	}

	.page-2-name image {
		width: 280rpx;
		height: 110rpx;
	}

	.page-3 {
		width: 100%;
		height: 100%;
		position: absolute;
		overflow: hidden;

		.title {
			width: 620rpx;
			height: 274rpx;
			position: absolute;
			left: 50%;
			margin-left: -310rpx;
			transform: translateX(-50%);
			margin-top: 80rpx;

		}

		.page3_bg {
			width: 680rpx;
			height: 660rpx;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			margin-top: 250rpx;
		}

		.page3_bigclound {
			width: 80rpx;
			height: 50rpx;
			position: absolute;
			margin-left: 200rpx;
			margin-top: 278rpx;
			animation: bigclound 5s linear -2s infinite alternate;

			@keyframes bigclound {
				0% {
					transform: translate(30rpx, 0);
				}

				100% {
					transform: translate(-30rpx, 0);
				}
			}
		}

		.page3_smallclound {
			width: 50rpx;
			height: 32rpx;
			position: absolute;
			margin-left: 300rpx;
			margin-top: 350rpx;
			animation: smallclound 5.5s linear -2s infinite alternate;

			@keyframes smallclound {
				0% {
					transform: translate(20rpx, 0);
				}

				100% {
					transform: translate(-25rpx, 0);
				}
			}
		}

		.page3_person1 {
			width: 360rpx;
			height: 300rpx;
			position: absolute;
			right: 60rpx;
			top: 330rpx;
			opacity: 0;
			animation: page3_person1 1s linear 1;
			animation-fill-mode: both;

		}

		@keyframes page3_person1 {
			0% {
				opacity: 0;
				transform: scale(0.5);
			}

			100% {
				opacity: 1;
				transform: scale(1);
			}
		}

		.page3_person2 {
			width: 160rpx;
			height: 340rpx;
			position: absolute;
			margin-top: 564rpx;
			margin-left: 70rpx;


		}

		.page3_shan {
			width: 80rpx;
			height: 100rpx;
			position: absolute;
			top: 564rpx;
			left: 230rpx;
			animation: shan .5s linear -2s infinite alternate;

			@keyframes shan {
				0% {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}
		}

		.page3_select {
			width: 100%;
			position: absolute;
			bottom: 2%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.select_item {
				width: 50%;
				position: relative;

				.item_select {
					width: 108rpx;
					height: 108rpx;
					position: absolute;
					margin-left: 20rpx;
				}

				.item_content {
					width: 340rpx;
					height: 108rpx;
					margin-left: 20rpx;
				}
			}
		}

	}

	.page-4 {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #f6f6f6;

		.title {
			position: absolute;
			width: 620upx;
			height: 260upx;
			margin-left: -310upx;
			top: 100upx;
			left: 50%;
		}

		.bg03 {
			width: 680upx;
			height: 630upx;
			position: absolute;
			top: 250upx;
			left: 50%;
			transform: translateX(-50%);
		}

		.girl {
			width: 260upx;
			height: 400upx;
			position: absolute;
			top: 300upx;
			left: 240upx;

		}

		.man {
			width: 160upx;
			height: 300upx;
			position: absolute;
			top: 570rpx;
			right: 60rpx;
		}

		.shan {
			width: 50rpx;
			height: 80rpx;
			position: absolute;
			top: 560rpx;
			right: 210rpx;
			// opacity: 1;
			animation: san 0.5s linear 1s infinite;

			@keyframes san {
				0% {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}

		}

		.xing {
			width: 30rpx;
			height: 30rpx;
			position: absolute;
			top: 380rpx;
			left: 280rpx;
			animation: xing 0.8s linear 1s infinite;

			@keyframes xing {
				0% {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}

		}

		.xing2 {
			width: 20rpx;
			hight: 20rpx;
			top: 440rpx;
			left: 250rpx;
			animation: xing2 1s linear 1s infinite;

			@keyframes xing2 {
				0% {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}
		}

		.xing3 {
			width: 16rpx;
			hight: 16rpx;
			top: 430rpx;
			left: 340rpx;
			animation: xing3 1.2s linear 1s infinite;

			@keyframes xing3 {
				0% {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}
		}

		.pag4-list {
			position: absolute;
			width: 100%;
			bottom: 4%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.item {
				width: 48%;
				height: 100rpx;
				display: flex;

				image:first-child {
					display: block;
					width: 100rpx;
					height: 100rpx;
					z-index: 99;
					position: absolute;
					margin-left: 20rpx;
				}

				image:last-child {
					display: block;
					width: 100%;
					height: 100%;
					margin-left: 10rpx;
				}
			}
			
		
		}

	}
		.page3{
			height: 100%;
			width: 100%;
			.word{
				width: 160rpx;
				height: 60rpx;
				position: absolute;
				left: 160rpx;
				top: 340rpx;
				z-index: 99;
				animation-delay: 1.5s;
			}
			.word1{
				top: 420rpx ;
				animation-delay: 2s;
			}
			.word2{
				top: 500rpx;
				animation-delay: 2.5s;
			}
			.word3{
				top: 580rpx;
				animation-delay: 3s;
			}
		}
		
		.page4{
			.persons{
				width: 340rpx;
				height: 400rpx;
				position: absolute;
				top: 300rpx;
				left: 180rpx;
				    animation-delay: 1.5s;
				    animation-iteration-count: infinite;
				    transform-origin: center center;
			}
			.person1{
				width: 200rpx;
				height: 300rpx;
				position: absolute;
				top: 570rpx;
				right: 80rpx;

			}
			.shan{
				width: 210rpx;
				height: 400rpx;
				position: absolute;
				top: 480rpx;
				right: 80rpx;

			}
		}
	
	.page5{
		.text{
			position: absolute;
			width: 200rpx;
			height: 200rpx;
			top: 350rpx;
			right: 100rpx;
		}
		.shan{
		position: absolute;
		width: 80rpx;
		height: 80rpx;
		top: 580rpx;
		left: 180rpx;

		}
	}
	
	.page6{
		.cat{
			position: absolute;
			width: 120rpx;
			height: 140rpx;
			top: 680rpx;
			left: 140rpx;

		}
		.shan{
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: 540rpx;
		left: 150rpx;

		}
	}
	
	.page7 {
		.girl{
			width: 660rpx;
			height: 500rpx;
			position: absolute;
			top: 390rpx;
			left: 50rpx;

		}
		.shan{
			width: 350rpx;
			height: 350rpx;
			position: absolute;
			top: 500rpx;
			right: 20rpx;

		}
		.xing{
			width: 40rpx;
			hight: 200rpx;
			top: 440rpx;
			left: 100rpx;

		}
		.xing1 {
			width: 40rpx;
			hight: 40rpx;
			top: 400rpx;
			left: 140rpx;
		}
		.xing2{
			width: 30rpx;
			height: 30rpx;
			top: 380rpx;
			left: 160rpx;
			}
			.xing3{
				width: 30rpx;
				height: 30rpx;
				top: 380rpx;
				left: 240rpx;
				}
		}
	
</style>
