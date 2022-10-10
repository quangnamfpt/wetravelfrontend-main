import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment, useState } from 'react';
import { publicRoute } from './routes'
import { DefaultLayout } from './components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {


  let cokkieArr = document.cookie;

 
  console.log(cokkieArr.split("languageSelected=")[1])

  const [languageSelected, setLanguageSelected] = useState((cokkieArr.split("languageSelected=")[1]?cokkieArr.split("languageSelected=")[1]: 'EN'))

  return (
    <Router>
      <ParallaxProvider>
        <div className="App">
          <Routes>
            {publicRoute.map((route, index) => {
              let Layout = DefaultLayout;
              let image;
              let role;
              let changePassword = false;

              if (route.layout) { Layout = route.layout }
              else if (route.layout === null) { Layout = Fragment }

              if (route.image !== null) { image = route.image }

              if (route.role !== null) { role = route.role }

              if(route.changePassword) { changePassword = true }

              const Page = route.component
              return <Route key={index}
                path={route.path}
                element={<Layout changePassword={changePassword} languageSelected={languageSelected} setLanguageSelected={setLanguageSelected} image={image}>
                  <Page languageSelected={languageSelected} role={role} />
                </Layout>} />
            })}
          </Routes>
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
