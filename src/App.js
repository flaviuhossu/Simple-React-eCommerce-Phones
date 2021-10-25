import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import ProductList from './components/ProductList'
import Modal from './components/Modal'

function App() {
  return (
    <>
      <Navbar />
      {/* NAVBAR IS ALWAYS VISIBLE. The switch component is after the Navbar */}
      <Switch>
        <Route path='/' exact>
          <ProductList />
        </Route>

        <Route path='/details'>
          <Details />
        </Route>

        <Route path='/cart'>
          <Cart />
        </Route>

        <Route>
          <Default />
        </Route>

        {/* ↓↓ OR Redirect to homepage  */}
        {/* <Route>
          <Redirect to='/' />
        </Route> */}
      </Switch>
      <Modal />
    </>
  )
}

export default App
