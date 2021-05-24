layui.use('form',function (){
    var $=layui.jquery;//引入jquery模块
    var form=layui.form;
    var layer=layui.layer;


    //加载商品名称下拉列表
    loadProductName();


    /************功能实现*****************/
    //添加表单提交
    form.on('submit(formAdd)',function (data){
        console.log(data.field);//当前容器的全部表单字段，名值对形式：{name:value}
        var saveJsonSale=data.field;
        saveJsonSale['totalprice']=data.field.price * data.field.quantity;
        saveJsonSale['saledate']=getNowDate(new Date());
        console.log(saveJsonSale);
        //添加的函数
        addSale(saveJsonSale);
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    })

    //添加函数，存入数据库并更新商品库存
    function addSale(saveJsonSale){
        var updateJsonQuantity={};
        console.log(saveJsonSale.productid);
        console.log(saveJsonSale.quantity)
        updateJsonQuantity["quantity"]=saveJsonSale.quantity;
        updateJsonQuantity['id']=saveJsonSale.productid;
        $.post(
            "sale/saveT",
            saveJsonSale,
            function (data){
                if(data==="success"){
                    layer.msg("订单添加成功！",{icon: 1,time:2000,anim: 1,shade:0.5});
                    modifyProductQuantity(updateJsonQuantity);
                }else{
                    layer.msg("订单添加失败！",{icon: 2,time:2000,anim: 3,shade:0.5});
                }
            },'text'
        ).error(function (){
            layer.msg("数据请求异常！",{icon: 7,time:2000,anim: 3,shade:0.5});
        })
    }

    //更新product表格中的库存函数
    function modifyProductQuantity(updateJsonQuantity){
        $.post(
            "product/modifyProductQuantity",
            updateJsonQuantity
        )
    }

    /****************自定义函数*******************/
    /*加载商品名称的下拉列表*/
    function loadProductName(){
        $.post(
            "product/loadAll",
            function (productList){
                var optionStr="<option value=''>--请选择商品--</option>";
                $(productList).each(function (){
                    optionStr+="<option value='"+this.id+"'>"+this.productname+"</option>"
                })
                //把生成好的选项加载到下拉列表中
                $("#selProductId").append(optionStr);
                form.render('select')//刷新下拉列表
            },"json"
        ).error(function (){
            layer.msg("请求数据异常！")
        })
    }

    //获取当前时间字符串     Date()   ---->  yyyy/MM/dd HH:mm:ss 格式的字符串
    function getNowDate(date) {
        var sign1 = "/";
        var sign2 = ":";
        var year = date.getFullYear() // 年
        var month = date.getMonth() + 1; // 月
        var day  = date.getDate(); // 日
        var hour = date.getHours(); // 时
        var minutes = date.getMinutes(); // 分
        var seconds = date.getSeconds() //秒
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (day >= 0 && day <= 9) {
            day = "0" + day;
        }
        if (hour >= 0 && hour <= 9) {
            hour = "0" + hour;
        }
        if (minutes >= 0 && minutes <= 9) {
            minutes = "0" + minutes;
        }
        if (seconds >= 0 && seconds <= 9) {
            seconds = "0" + seconds;
        }
        var currentdate = year + sign1 + month + sign1 + day + " " + hour + sign2 + minutes + sign2 + seconds ;
        return currentdate;
    }

})