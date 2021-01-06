import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './component/home'
import List from './component/list'
import New from './component/new'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">首页</Link>
          <Link to="/new">新闻</Link>
          <Link to="/list">列表</Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/new" component={New} />
      </Router>
    </div>
  )
}

export default App
