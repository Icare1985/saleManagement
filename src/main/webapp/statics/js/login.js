layui.use(['jquery','layer','form'], function() {
    var $ = layui.jquery    //引入jquery模块
        , layer = layui.layer  //引用layer弹出层模块
        , form = layui.form  //引用form表单模块

    form.on('submit(login)',function (data){
        console.log(data.field);
        loginUser(data.field);//执行登陆
        return false;//阻止表单跳转提交
    })

    function loginUser(loginUserJson){
        $.post(
            "users/checkLogin",
            loginUserJson,
            function (data){
                console.log(data)
                if(data==="success"){
                    layer.msg("登陆成功！！",{icon: 1,time:2000,anim: 4,shade:0.5});
                    setTimeout("window.location.href='model/toHome'",2000);
                }else{
                    layer.msg("登陆失败！！",{icon: 2,time:2000,anim: 3,shade:0.5});
                }
            },'text'
        ).error(function (){
            layer.msg("登陆异常！！",{icon: 2,time:2000,anim: 3,shade:0.5});
        })
    }
});