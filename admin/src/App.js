import Frame from './components/Frame'
import Login from './pages/Login'
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Frame}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
