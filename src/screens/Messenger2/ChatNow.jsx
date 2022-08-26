import React, { useEffect, useState } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'

export default function ChatNow({ info }) {
  
  //alert(info)
  const [messages, setMessages] = useState({})
  // chat Events

  // useEffect(() => {
  //   //alert(JSON.stringify(info))
  //   alert(`chatNow : effect`)
  // }, [])

  

  return (
    <Col lg={12}>

      {messages.length > 0 && messages.map((item) => {
        /// alert(JSON.stringify(item))
        return (
          <Col lg={12} style={Styles.container}>
            <Row lg={12} style={{ width: '100%' }}>
              <Image roundedCircle style={{ width: '47px', height: '40px', marginRight: '20px', marginLeft: '15px', backgroundColor: 'white' }} src={item.image} />
              <div style={{ color: 'white', width: '80%', marginTop: '5px' }} > {item.text} </div>
            </Row>
          </Col>
        )
      })}
    </Col>
  )
}



const Styles = ({
  container: {
    ...Content.colTopSpaceBetween,
    padding: '0px',
    height: 'auto',
  },
  empty: {
    padding: '0px'
  },
  text: {
    font: 'bold 26px times new roman',
    color: 'white'
  }
})