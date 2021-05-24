package cn.kgc.demo.controller;

import cn.kgc.demo.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

public class BaseController <T>{
    @Autowired
    private BaseService<T> baseService;

    //查询全部数据
    @RequestMapping("loadAll")
    @ResponseBody
    public List<T> loadAll(){
        try {
            return baseService.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    //添加单条数据
    @RequestMapping("saveT")
    @ResponseBody
    public String saveT(T t){
        try {
            return baseService.addT(t);
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }


    @RequestMapping("loadDataByParams")
    @ResponseBody  //只返回数据JSON格式
    public Map<String,Object> loadDataByParams(Integer page, Integer limit, T t){
        System.out.println("page = " + page);
        System.out.println("limit = " + limit);
        Map<String,Object> map = null;
        try{
            //分页查询数据
            map = baseService.findTByPageAndParams(page, limit, t);
            map.put("code", 0); //设置状态码：0 表示请求返回成功
        }catch (Exception e){
            e.printStackTrace();
            map.put("code", 200); //设置状态码：200 表示请求返回失败
            map.put("msg","数据访问失败！");
        }
        return map;
    }
}
