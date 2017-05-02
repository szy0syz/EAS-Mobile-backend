# 项目开发日志

## 设计想法

- userPermissions中间件：查询mongodb用户的权限表，把权限结果放入req；
- queryTranslate中间件：根据req里的用户权限，生成sql查询条件语句；
- 后期用redis缓存数据。

## 项目日记

2017-05-02:

- 决定了，前端所有查询提交方式限定POST！
- 决定了，明天把Sequelize实现单例！

