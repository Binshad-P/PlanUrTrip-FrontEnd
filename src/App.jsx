
import './App.css'
import LayoutRoutes from './Routes/LayoutRoutes'
import { Provider } from 'react-redux';
import store from './Redux/Store'
function App() {
 

  return (
    <>
      <Provider store={store}>
       <LayoutRoutes/>
      </Provider>
    </>
  )
}

export default App
