import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, Dashboard } from "./components/pages";
import 'antd/dist/reset.css';

function App() {
  let sesionValue : any = {sesion: false};
 
  if( localStorage.getItem('sesion') ){
    sesionValue = JSON.parse(localStorage.getItem('sesion') ?? '{sesion: false}');
  }

  const [ sesion, setSesion ] = useState<any>(sesionValue);
  
	useEffect( () => {
		localStorage.setItem('sesion', JSON.stringify(sesion));
	}, [sesion]);

  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          { !sesion.sesion && (
            <Route 
              path = '/auth'
              element = { <Login /> }
            />
          )}
          { sesion.sesion && (
            <>
              <Route 
                path = '/home'
                element = { <Dashboard /> }
              />
            </>	
          )}
          <Route 
            path = '*'
            element = { <Navigate to={ sesion.sesion ? '/home' : '/auth' } /> }
          />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
