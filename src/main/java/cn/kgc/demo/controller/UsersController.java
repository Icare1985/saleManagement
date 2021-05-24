package cn.kgc.demo.controller;

import cn.kgc.demo.pojo.Users;
import cn.kgc.demo.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("users")
public class UsersController extends BaseController<Users>{

    @Autowired
    private UsersService usersService;

    @RequestMapping("checkLogin")
    @ResponseBody
    public String checkLogin(Users users, HttpSession session){
        Users loginUsers = usersService.findTByParams(users);
        if(loginUsers!=null){
            //把用户信息放入到session中
            session.setAttribute("loginUsers",loginUsers);
            return "success";//查询成功
        }else{
            return "fail";//查询失败
        }
    }

    @RequestMapping("exitUser")
    @ResponseBody
    public String exitUser(HttpSession session){
        //从session中删除用户数据
        try {
            session.removeAttribute("loginUsers");
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "fail";
        }
    }
}
