# 每日优鲜 B 端项目

Vue2 Ant-design-vue
Vuex VueRouter Axios
eslint less
v-charts js-cookie

## 整体布局

两列布局左侧固宽右侧自适应
左侧菜单栏:根据用户类别路由拦截动态获取菜单栏显示路由
右侧上吊顶固定 (面包屑,用户信息移入退出)
右下侧路由渲染 router-view

### 登入和注册界面

前置路由守卫判断 vuex 中是否有存储的 cookie 来跳转页面
Form 表单创建校验后调用登入接口返回
成功就把接口数据 vuex 异步存储到 user，存到 cookie。路由跳转到 home 首页
失败就弹框提示错误

axios 接口 request 请求拦截判断是否需要带上 appkey

> 判断权限获取菜单结构

- 根据权限 map 映射把 ayncRouterMap 筛选成对应角色菜单路由//注意子类筛选
- 把路由拼接新的菜单路由存储到 vuex
- 异步完成后菜单路由 addRoute 方法添加到 router 中报备//router.addroutes 废弃

对于不想显示的菜单路由 meta 中加上 hidden:true 属性，在 menu 组件中判断渲染(注意两次 template 的书写)

### 统计界面(默认跳转)

1. 卡片展示
2. 图表 vcharts

### 商品列表界面

筛选 form 表单(商品类目读取，input 下拉列表) 新增商品按钮
渲染 v-for 商品信息，map 替换类名和上架状态
父组件获取商品类目，向两个组件 prop 传递，
分页组件
编辑和删除方法写入跳转

附加功能：批量处理

### 新增/编辑商品界面

新增：商品录入，销售信息录入(流程化表单)
两个子组件，共用父组件数据 data
表单校验，商品类目子列表获取

销售组件图片信息上传

新增和编辑的区分，created 父组件跳入判断 roue 是否有 id 为编辑(接口不同)
编辑读取数据，创建空数据
