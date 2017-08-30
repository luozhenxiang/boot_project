(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{ //引导页
		 			name: 'lead',
		 			files: [
		 				'./controller/leadController.js'
		 				
		 			]
		 		},

		 		{	//登陆
		 			name: 'login',
		 			files: [
		 				'./controller/loginController.js'		 				
		 			]
		 		},
		 		{	//个人中心
		 			name: 'user',
		 			files: [
		 				'./controller/userController.js'
	
		 			]
		 		},
		 		{	//修改个人信息
		 			name: 'data',
		 			files:[
		 				'./controller/dataController.js'
		 			]

		 		},
		 		{	//注册
		 			name: 'register',
		 			files:[
		 				'./controller/registerController.js'
		 			]

		 		},
		 		{	//购物车
		 			name:'Shopping',
		 			files:[
		 				'./controller/ShoppingController.js'
		 			]
		 		},
				{	//待收货
		 			name:'Greceipt',
		 			files:[
		 				'./controller/GreceiptController.js'
		 			]
		 		},
		 		{	//待收货
		 			name:'payment',
		 			files:[
		 				'./controller/paymentController.js'
		 			]
		 		},
		 		{	//待评价
		 			name:'evaluate',
		 			files:[
		 				'./controller/evaluateController.js'
		 			]
		 		},
		 		{	//我的订单
		 			name:'yishouh',
		 			files:[
		 				'./controller/yishouhController.js'
		 			]
		 		},
		 		{	//我的收藏
		 			name:'Collection',
		 			files:[
		 				'./controller/CollectionController.js'
		 			]
		 		},
		 		{	//购买记录
		 			name:'record',
		 			files:[
		 				'./controller/recordController.js'
		 			]
		 		},
		 		{	//我的评论
		 			name:'comments',
		 			files:[
		 				'./controller/commentsController.js'
		 			]
		 		},
		 		{	//我的收货地址
		 			name:'address',
		 			files:[
		 				'./controller/addressController.js'
		 			]
		 		},
		 		{	//我的余额
		 			name:'balance',
		 			files:[
		 				'./controller/balanceController.js'
		 			]
		 		},
		 		{	//我的银行卡
		 			name:'bank',
		 			files:[
		 				'./controller/bankController.js'
		 			]
		 		},
		 		{	//充值
		 			name:'Recharge',
		 			files:[
		 				'./controller/RechargeController.js'
		 			]
		 		},
		 		{	//提现
		 			name:'withd',
		 			files:[
		 				'./controller/withdController.js'
		 			]
		 		},
		 		{	//个人中心菜单栏
		 			name:'menu4',
		 			files:[
		 				'./controller/UmenuController.js',
		 				// './service/urlserive.js'
		 			]
		 		},
		 		{	//购物车菜单栏
		 			name:'menu3',
		 			files:[
		 				'./controller/SmenuController.js',
		 				// './service/urlserive.js'
		 			]
		 		},
		 		//主页
		 		{
		 			name:'home',
		 			files:[
		 			'./controller/homeController.js',
		 			'./directive/head.js'
		 			]
		 		},
		 		//主页菜单栏
		 		{
		 			name:'menu1',
		 			files:[
		 			'./controller/HmenuController.js',
		 			// './service/urlserive.js'
		 			]
		 		},
		 		//商品分类
		 		{
		 			name:'classify',
		 			files:[
		 			'./controller/classifyController.js',
		 			'./directive/head.js'		 			
		 			]
		 		},
		 		//商品分类菜单栏
		 		{
		 			name:'menu2',
		 			files:[
		 			'./controller/CmenuController.js',
		 			// './service/urlserive.js'
		 			]
		 		},
		 		{	//商品详情
		 			name:'details',
		 			files:[
		 			'./controller/detailsController.js'
		 			]
		 		},

		 		{	//确认订单
		 			name:'Order',
		 			files:[
		 			'./controller/OrderController.js'
		 			]
		 		},
		 		{	//茶具系列
		 			name:'series',
		 			files:[
		 			'./controller/seriesController.js'
		 			]
		 		},
		 		{	//搜索
		 			name:'search',
		 			files:[
		 			'./controller/searchController.js'
		 			]
		 		}
	 		]
 		});
	}]);
	
})();