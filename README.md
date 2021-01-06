### 框架运行方式

##### 功能 react 路由

### npm|cnpm|yarn install

### 第一步 使用脚手架

`npx create-react-app xxx项目名`

### 第二步 创建 component 和下面的文件

home.js list.js new.js

### 第三步 终端安装路由

`npm install react-router-dom`

### 第四步 在 App 这么写

上方引入

```
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './component/home'
import List from './component/list'
import New from './component/new'
```

````<Router>
        <div>
          <Link to="/">首页</Link>
          <Link to="/new">新闻</Link>
          <Link to="/list">列表</Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/new" component={New} />
</Router>```
````

### 第五步 终端 yarn start ok
