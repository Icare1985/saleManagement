package cn.kgc.demo.service.impl;

import cn.kgc.demo.dao.BaseMapper;
import cn.kgc.demo.service.BaseService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BaseServiceImpl<T> implements BaseService<T> {

    @Autowired
    private BaseMapper<T> baseMapper;


    //查询所有数据
    @Override
    public List<T> findAll() {
        return baseMapper.selTAll();
    }

    //根据条件查询单个数据
    @Override
    public T findTByParams(T t) {
        return baseMapper.selTByParams(t);
    }

    @Override
    public String addT(T t) {
        if(baseMapper.insertSelective(t)>0){
            return "success";
        }else{
            return "fail";
        }
    }

    //根据条件分页查询数据
    @Override
    public Map<String, Object> findTByPageAndParams(Integer page, Integer limit, T t) {
        Map<String, Object> map = new HashMap<>();
        //1.开启分页查询
        PageHelper.startPage(page, limit);
        //2.查询数据
        // 嵌套查询 - 懒加载
        List<T> list = baseMapper.selAllTByPageParams(t);
        //3.封装数据
        PageInfo pageInfo = new PageInfo(list);
        //注意：count的名称必须跟前端layui要求的返回格式完全一致
        map.put("count", pageInfo.getTotal());
        map.put("data", pageInfo.getList());
        return map;
    }
}
