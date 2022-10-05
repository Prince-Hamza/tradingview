import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import axios from 'axios'

export default function Overlayer() {

    const payStack = () => {
     //axios   
    }

    return (
        <Col lg={12} style={Styles.Overlayer}>
            <Col lg={4} style={{ ...Styles.card, ...Content.colCentrify }}>

                <Card style={{ ...Content.colTopLeft, backgroundColor: 'black' }}>

                    <h5 style={Styles.text}> Premium Plan </h5>
                    <h6 style={Styles.text} > only from $10 </h6>

                    <br />


                    <ul style={Styles.bulletPoints} >
                        <li>   use Groups to post content for all users   </li>
                        <li>   see trading view and charts for curency pairs   </li>
                        <li>   chat with users to dicuss ideas   </li>
                    </ul>
                    <br />
                    <Button onClick={() => { window.location.replace('https://paystack.com/pay/yzx3sqkcr9') }}>
                        Subscribe
                    </Button>
                </Card>

            </Col>
        </Col>
    )
}


const Styles = ({
    Overlayer: {
        position: 'absolute',
        //left:'0px',
        top:'0px',
        marginRight: '15px',
        width: '100%',
        height: window.screen.height,
        backgroundColor: 'rgba(20,20,20,0.7)',
        zIndex: 1,
        ...Content.colCentrify
    },
    card: {
        height: '500px',
        backgroundColor: 'black',
        padding: '0px'
    },
    text: {
        color: 'white'
    },
    bulletPoints: {
        color: 'white'
    }
})