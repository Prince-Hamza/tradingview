import React, { useState, useContext, useEffect } from 'react'
import { Col, Image } from 'react-bootstrap'
import Auth from './Auth'
import Menu from './Menu'
import ChatHistory from './ChatHistory'
import Chat from './Chat'
import { AppContext } from '../Context/Context'
import MessengerIcon from '../../assets/images/messenger.png'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'

export default function Messenger({ adminUser }) {

    const { appData, setAppData } = useContext(AppContext)
    const [Icon, setIcon] = useState(false)
    const [userInfo, setUserInfo] = useState(appData.userInfo)

    return (
        <Col lg={2}>
            {Icon && <Image style={Styles.icon} src={MessengerIcon} onMouseOver={() => { setIcon(false) }} />}
            {!Icon &&
                <Col lg={3} style={Styles.messenger} onMouseLeave={(e) => { }} >
                    {userInfo && <Menu email={userInfo.email} />}
                    {userInfo && userInfo.email === 'admin@gmail.com' && <ChatHistory />}
                    {userInfo && adminUser && <Chat userInfo={userInfo} adminInfo={adminUser} />}
                </Col>
            }
        </Col>
    )
}

const Styles = ({
    icon: {
        position: 'fixed',
        bottom: '15px',
        right: '15px',
        width: '80px',
        height: '85px',
        borderRadius: '50px',
        cursor: 'pointer'
    },
    messenger: {
        position: 'fixed',
        bottom: '10px',
        right: '15px',
        height: '600px',
        backgroundColor: 'white',
        boxShadow: '0px 0px 18px 1px whitesmoke',
        border: 'dashed 1px'
    }
})
