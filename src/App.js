import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './screens/Auth/Auth'
import Dashboard from './screens/Dashboard/Dashboard'
import firebase from 'firebase/compat/app'
import { firebaseConfig } from './backend/config'
import Timelines from './screens/Timelines2/Timelines'
import Create from './screens/Create/Create'
import CreateMessengerGroup from './screens/CreateGroup/CreateGroup'
import { AppContext } from './screens/Context/Context'
import { useState, useContext } from 'react'
import Community from './screens/Community/Community'
import TradingView from './screens/TradingView/TradingView'
import Messenger from './screens/Messenger2/Messenger'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
  const [appData, setAppData] = useState({ userInfo: {}, chatPartner: {}, messengerType: 'group', Groups: [], Topics: [], SelectedGroup: {}, SelectedTopic: {} })

  return (
    <AppContext.Provider value={{ appData: appData, setAppData: setAppData }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/trading" element={<TradingView />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/community/:id" element={<Timelines />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/create-messenger-group" element={<CreateMessengerGroup />} />
          <Route exact path="/messenger" element={<Messenger userInfo1={appData.userInfo} messengerType={appData.messengerType} />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
