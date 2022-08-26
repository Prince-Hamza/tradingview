import React, { useEffect, useContext, useState } from 'react'
import { AppContext } from '../Context/Context'
import { ChatSystem } from '../../backend/chat/Chat'

export default function ChatHistory() {
  const [chatList, setChatList] = useState()
  const { appData, setAppData } = useContext(AppContext)

  const Effect = () => {

    const init = async () => {
      var chats = new ChatSystem()
      var cl = await chats.getChatList(appData.userInfo.uid)

      alert(`chatList : ${JSON.stringify(cl)}`)
      setChatList(cl)

    }

    if (!chatList) init()


  }

  useEffect(Effect, [])

  return (
    <div>

    </div>
  )
}
