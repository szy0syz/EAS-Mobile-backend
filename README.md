<div align="center">
      <img src="http://ofx24fene.bkt.clouddn.com//img/2017/Kingdee-EAS.jpg">
  <h1>EAS-Mobile-backend</h1>
  <p>  
      这是一个使用 express + sequelize + mongoose … 实现的 个人后端项目  <br/>
      它可以高效的从sqlserver和mongodb取数据后进行业务分析后返回json数据
  <p>
</div>

## 开发背景

做EAS维护那么久了，不搞点事情完全不能混饭吃，所以开发这个项目。

## 项目说明

> 由express为主构建的后台系统

> 开发环境 macOS 10.12.3 & nodeJS 7.7.4

> 技术菜，欢迎交流指点 ^_^

## 技术栈

nodejs + express + mongodb + sqlserver + mongoose + sequelize + es6/7 + mocha + bluebird...

### 项目运行

```bash
git clone https://github.com/szy0syz/EAS-Mobile-backend.git

npm install
```

### 目标功能
- [x]  采购入库单查询  -- 完成 :tada:
- [x]  销售出库单查询  -- 完成
- [ ]  登录&注册
- [ ]  权限管理（用户权限中间件）
- [ ]  查询条件（查询条件中间件）
- [ ]  及时库存查询
- [ ]  基础资料查询-物料
- [ ]  基础资料查询-客户
- [ ]  基础资料查询-供应商
- [ ]  工作流查询-付款申请单
- [ ]  自定义报表-日报
- [ ]  库存报表-物料收发事务汇总表
- [ ]  自定义查询功能
