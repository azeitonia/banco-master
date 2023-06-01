import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cabecalho from './Cabecalho.jsx'
import AddVal from './AddVal.jsx'
import NotasDisp from './NotasDisp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Cabecalho />
    <AddVal />
    <NotasDisp />
  </React.StrictMode>,
)
