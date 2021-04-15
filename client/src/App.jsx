import { Route, Switch } from "react-router"
import { ToastContainer } from "react-toastify"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import Home from "./pages/Home"
import { Layout } from "./templates/Layout"

const App = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route match path="/"><Home /></Route>
      </Switch>
      <ToastContainer />
    </Layout>
  )
}

export default App
