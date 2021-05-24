package cn.kgc.demo.service;

import cn.kgc.demo.pojo.Users;

import java.util.List;
import java.util.Map;

public interface BaseService <T>{
    //查询所有数据
    List<T> findAll();

    //根据条件查询单个数据
    T findTByParams(T t);

    //添加单条数据
    String addT(T t);


    ////根据条件进行分页查询数据
    Map<String, Object> findTByPageAndParams(Integer page, Integer limit, T t);
}
