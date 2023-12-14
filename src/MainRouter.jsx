/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* main import */

  import Mainpage from './mainpage/Mainpage'
  import Error404 from './mainpage/Error404'
  import Aprashka from './projects/apraksindvor/Aprashka'

/*-------------------------------------Aprashka Imports-----------------------------------------*/

/* Main routes */
  import AboutProject from './projects/apraksindvor/components/AboutProject'
  import AboutSystem from './projects/apraksindvor/components/AboutSystem'

/* Accordion1 routes */
  import Formstyle from './projects/apraksindvor/components/accordion1/Formstyle'
  import Palette from './projects/apraksindvor/components/accordion1/Palette'
  import Typography from './projects/apraksindvor/components/accordion1/Typography'
  import Gridlines from './projects/apraksindvor/components/accordion1/Gridlines'
  import Graphic from './projects/apraksindvor/components/accordion1/Graphic'

/* Accordion2 routes */
  import Breadcrumbs from './projects/apraksindvor/components/accordion2/Breadcrumbs'
  import Buttons from './projects/apraksindvor/components/accordion2/Buttons'
  import Cards from './projects/apraksindvor/components/accordion2/Cards'
  import Checkbox from './projects/apraksindvor/components/accordion2/Checkbox'
  import Divider from './projects/apraksindvor/components/accordion2/Divider'
  import Loading from './projects/apraksindvor/components/accordion2/Loading'
  import Modal from './projects/apraksindvor/components/accordion2/Modal'
  import Popover from './projects/apraksindvor/components/accordion2/Popover'
  import RadioButtons from './projects/apraksindvor/components/accordion2/RadioButtons'
  import SwitchButtons from './projects/apraksindvor/components/accordion2/SwitchButtons'
  import TextInput from './projects/apraksindvor/components/accordion2/TextInput'

/*---------------------------------------------------------------------------------------------*/

/* redux - store imports */
import { selectMainClass } from './store' // selectors import
import { mainClassSwap } from './store' // reducers import

function MainRouter() {

  const location = useLocation()
  const dispatch = useDispatch()
  const mainClassState = useSelector(selectMainClass)

  useEffect(() => {

    switch (location.pathname) {

      case '/Projects-Showcase':
        document.title = 'Projects Showcase'
        document.querySelector("link[rel='icon']").href = './icons/favicon.ico'
        dispatch(mainClassSwap('mainpage'))
        break

      case '/Projects-Showcase/Aprashka':
        document.title = 'Apraksin Dvor'
        document.querySelector("link[rel='icon']").href = './icons/apraksindvor.ico'
        dispatch(mainClassSwap('aprashka-main'))
        break

      default: document.title = 'Projects Showcase'
    }

  }, [location])

  return (

    <main className={mainClassState}>

      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path="/Projects-Showcase" element={<Mainpage />} />

        <Route path="/Projects-Showcase/Aprashka"  element={<Aprashka />}> 

          <Route index element={ <AboutProject /> }/>
          <Route path="AboutSystem"   element={ <AboutSystem /> }/>

          {/* Accordion1 routes */}
          <Route path="Formstyle"     element={ <Formstyle /> }/>
          <Route path="Palette"       element={ <Palette /> }/>
          <Route path="Typography"    element={ <Typography /> }/>
          <Route path="Gridlines"     element={ <Gridlines /> }/>
          <Route path="Graphic"       element={ <Graphic /> }/>

          {/* Accordion2 routes */}
          <Route path="Breadcrumbs"   element={ <Breadcrumbs /> }/>
          <Route path="Buttons"       element={ <Buttons /> }/>
          <Route path="Cards"         element={ <Cards /> }/>
          <Route path="Checkbox"      element={ <Checkbox /> }/>
          <Route path="Divider"       element={ <Divider /> }/>
          <Route path="Loading"       element={ <Loading /> }/>
          <Route path="Modal"         element={ <Modal /> }/>
          <Route path="Popover"       element={ <Popover /> }/>
          <Route path="RadioButtons"  element={ <RadioButtons /> }/>
          <Route path="SwitchButtons" element={ <SwitchButtons /> }/>
          <Route path="TextInput"     element={ <TextInput /> }/>

        </Route>
      </Routes>

    </main>
    
  )
}

export default MainRouter