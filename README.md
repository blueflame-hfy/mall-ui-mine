# 组件库 demo

# 发布步骤
    1. npm i  // 安装依赖

    2. npm build // 编译

    3. npm publish // 发布（前提需登陆npm : npm login）

    *每次修改都需要重新 npm run-script build

# 本地项目进行引用
    在package.json中依赖修改为（原理：(软连接) cd node_modules ls -l |grep mall-ui-mine）
    # "mall-ui-mine": "file:/Users/hufayan/Documents/workspace/personal/mall-UI",

