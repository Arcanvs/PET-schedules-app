import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, Dashboard } from "./components/pages";
import 'antd/dist/reset.css';

function App() {
  let sesionValue : boolean = false;
  
  if(localStorage.getItem('sesion') == 'true'){
		sesionValue = Boolean(localStorage.getItem('sesion'));
	}

	const [ sesion, setSesion ] = useState<boolean>(sesionValue);
	
	useEffect( () => {
		localStorage.setItem('sesion', sesion.toString());
	}, [sesion]);


  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          { !sesion && (
            <Route 
              path = '/auth'
              element = { <Login /> }
            />
          )}
          { sesion && (
            <>
              <Route 
                path = '/home'
                element = { <Dashboard /> }
              />
            </>	
          )}
          <Route 
            path = '*'
            element = { <Navigate to={ sesion ? '/home' : '/auth' } /> }
          />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
