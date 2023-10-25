import React from 'react'
import { Button, Toast } from 'react-elements-library-crl'
import 'react-toastify/dist/ReactToastify.css';

import 'react-elements-library-crl/dist/index.css'
import { Button as ButtonFromTSDXLibrary }from "@muathyhkefayah/react-elements-library-tsdx";

const App = () => {
  return (
    <div>
      {/* <Button className='test' type='submit' onClick={() => alert("test")}> Save </Button> */}
      <Toast/>
      {/* <ButtonFromTSDXLibrary  className='test' type='submit' onClick={() => alert("test2")}> Submit</ButtonFromTSDXLibrary> */}
    </div>
  )
}

export default App
