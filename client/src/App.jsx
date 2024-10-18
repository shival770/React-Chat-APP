import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Home from './pages/Home.jsx'
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  
  const {authUser} = useAuthContext();
  return (
   <div className="p-4 h-screen flex items-center justify-center">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={'login'} />} />
        <Route path="/sign-up" element={authUser ? <Navigate to={'/'} /> : <SignUp />}  />
        <Route path="/Login" element={authUser ? <Home /> : <Login />} />

      </Routes>
     </BrowserRouter>
     <Toaster />
   </div>
  )
}

export default App
