package cn.kgc.demo.dao;

import cn.kgc.demo.pojo.Product;

import java.util.List;

public interface BaseMapper <T>{

    int deleteTByPrimaryKey(Integer id);

    int insert(T t);

    int insertSelective(T t);

    T selectByPrimaryKey(Integer id);

    int updateTByPrimaryKeySelective(T t);

    int updateTByPrimaryKey(T t);

    //查询所有数据
    List<T> selTAll();

    //根据条件查询单个数据
    T selTByParams(T t);

    //嵌套查询 - 根据条件分页查询数据
    List<T> selAllTByPageParams(T t);
}
