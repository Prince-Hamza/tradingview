import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'
import database from 'firebase/compat/database'
import { useState } from 'react'
const defaultPhoto = 'https://freepikpsd.com/file/2019/10/human-icon-vector-png-Transparent-Images.png'

export default function Input({ info, linkInfo }) {

    const userId = firebase.auth().currentUser.uid
    const [newMessage, setNewMessage] = useState({ text: null, image: info.photoURL ? info.photoURL : defaultPhoto, userId: userId, userName: info.displayName ? info.displayName : 'Anonymous' })



    const onType = (value) => {
        newMessage.text = value
        setNewMessage(newMessage)
    }

    const onEnter = (e) => { if (e.keyCode === 13) { 
        
        firebase.database().ref(`/chats/${linkInfo.chatKey}`).push({ ...newMessage }) 
        alert('push done')
    }}

    return (
        <Col lg={12} style={Styles.container}>
            <Row lg={12} style={{ marginLeft: '2px' }}>
                <Form.Control style={Styles.input} placeholder={'Type something here'} onChange={(e) => { onType(e.target.value) }} onKeyDown={(e) => { onEnter(e) }} />
            </Row>
        </Col>
    )
}

const Styles = ({
    container: {
        position: 'absolute',
        bottom: '0px'
    },
    input: {
        width: '95%'
    }
})