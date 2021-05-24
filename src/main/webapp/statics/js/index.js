// 配置
layui.config({
	base: './static/hpModules/' // 扩展模块目录
}).extend({ // 模块别名 ，引入自定义模块
	hpTab: 'hpTab/hpTab',
	hpRightMenu: 'hpRightMenu/hpRightMenu',
	hpFormAll: 'hpFormAll/hpFormAll',
});

//JavaScript代码区域
layui.use(['element', 'carousel','hpTheme', 'hpTab', 'hpLayedit', 'hpRightMenu'], function() {
	
	var element = layui.element;
	var carousel = layui.carousel; //轮播
	var hpTab = layui.hpTab;
	var hpRightMenu = layui.hpRightMenu;
	var hpTheme=layui.hpTheme;
	var layer=layui.layer;
	var $ = layui.$;
	
    // 初始化主题
	hpTheme.init();
	 //初始化轮播
	carousel.render({
		elem: '#test1',
		width: '100%', //设置容器宽度
		interval: 1500,
		height: '500px',
		arrow: 'none', //不显示箭头
		anim: 'fade', //切换动画方式
	});

    // 初始化 动态tab
    hpTab.init();
    // 右键tab菜单
    hpRightMenu.init();

    /*******************自定义绑定事件****************/
    //退出
	$("#exit").click(function (){
		layer.confirm('真的要退出系统吗',function (index){
			//向服务端发送指令，从session中删除用户
			exitUser();
			layer.close(index);
		});
	});

	function exitUser(){
		$.post(
			"users/exitUser",
			function (data){
				if(data==="success"){
					layer.msg("退出成功",{icon: 1,time:2000,anim: 3,shade:0.5})
					setTimeout("window.location.href='model/loginUI'",2000);
				}else{
					layer.msg("退出失败",{icon: 2,time:2000,anim: 3,shade:0.5})
				}
			},'text'
		).error(function (){
			layer.msg("数据请求异常！",{icon: 7,time:2000,anim: 3,shade:0.5});
		})
	}
});