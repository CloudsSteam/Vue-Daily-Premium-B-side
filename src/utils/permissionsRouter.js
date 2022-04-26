const roleToRoute = {
  coustomer: [
    { name: 'Product' },
    { name: 'ProductList' },
    { name: 'ProductAdd' },
    { name: 'ProductEdit' },
  ],
  admin: [
    { name: 'Product' },
    { name: 'ProductList' },
    { name: 'ProductAdd' },
    { name: 'ProductEdit' },
    { name: 'Category' },
  ],
};

export default function getMenuRoute(role, routes) { // role身份routes所有待添加路由
  // console.log(role, routes);
  const allowRoutesName = roleToRoute[role].map((item) => item.name);// map映射筛路由名字
  // console.log(allowRoutesName);//['Product', 'ProductList', 'ProductAdd', 'ProductEdit']
  const resultRoutes = routes.filter((r) => {
    const obj = r;
    if (allowRoutesName.indexOf(r.name) !== -1) { // 在待添加路由中把没有权限名字的去除(-1表示选不中)
      const { children } = obj;
      obj.children = children.filter((c) => allowRoutesName.indexOf(c.name) !== -1); // 对子代进行遍历去除
      return true; // 需要返回
    }
    return false;// 丢弃
  });
  return resultRoutes;
}
