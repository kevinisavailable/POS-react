import HomePage from "./pages/HomePage"
import POSPage from "./pages/POSPage"
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pos" element={<POSPage />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
