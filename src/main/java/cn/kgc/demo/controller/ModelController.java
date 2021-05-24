package cn.kgc.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("model")
public class ModelController {

    //跳转到home.jsp 主页面
    @RequestMapping("toHome")
    public String toHome(){
        return "home";
    }

    //跳转到saveSale.jsp 添加页面
    @RequestMapping("toSaveSale")
    public String toSaveSale(){
        return "saveSale";
    }

    //跳转到登陆界面
    @RequestMapping("loginUI")
    public String toLoginUI(){
        return "login";
    }

    //跳转到查询页面
    @RequestMapping("toShowSale")
    public String toShowSale(){
        return "showSale";
    }

    //跳转到库存页面
    @RequestMapping("toShowInventory")
    public String toShowInventory(){
        return "showInventory";
    }
}
