# node-elm 接口文档

## 目录

[01、登录](#1获取城市列表)<br/>
[02、注册](#2获取所选城市信息)<br/>
[03、退出](#2获取所选城市信息)<br/>
[04、修改密码](#2获取所选城市信息)<br/>

## 接口列表

### 01.登录

#### 请求URL：
```
http://127.0.0.1:8001/login
```

#### 示例：

#### 请求方式：
```
POST
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|loginName      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |
|captcha_code      |Y       |string   | 验证码 |

#### 返回示例：
```JavaScript
{
  status: 1,
  success: '登录成功',
}
```

### 02.注册

#### 请求URL：
```
http://127.0.0.1:8001/reg
```

#### 示例：

#### 请求方式：
```
POST
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|loginName      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |
|captcha_code      |Y       |string   | 验证码 |
|displayName      |Y       |string  | 显示名称 |
|phoneNumber      |Y       |string  | 手机号码 |

#### 返回示例：
```JavaScript
{
  status: 1,
  success: '注册成功',
}
```

### 03、退出

#### 请求URL：
```
http:/127.0.0.1:8001/signout
```

#### 示例：

#### 请求方式：
```
GET
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|


#### 返回示例：

```javascript

{
  status: 1,
  message: '退出成功'
}
```

### 04、修改密码

#### 请求URL：
```
http://127.0.0.1:8001/changepassword
```

#### 示例：

#### 请求方式：
```
POST
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|loginName      |Y       |string   | 用户名 |
|oldpassWord      |Y       |string  | 旧密码 |
|newpassword      |Y       |string   | 新密码 |
|confirmpassword      |Y       |string   | 确认密码 |
|captcha_code      |Y       |string   | 验证码 |

#### 返回示例：

```javascript
{
  status: 1,
  success: '密码修改成功',
}
```
