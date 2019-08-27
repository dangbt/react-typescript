import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
const App = () => {
  return (
    <Switch>
      {
        routes && routes.map(route => <Route key={route.key} exact={route.exact} path={route.path} component={route.component}/>)
      }
    </Switch>
  )
}
export default App
