import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { AppContext } from '../Context/Context'
import { Content } from '../../styles/styles'
import Menubar from '../Menubar/Menubar'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'

export default function TradingView() {

    const { appData, setAppData } = useContext(AppContext)
    const folders = ['Documents', 'Pictures', 'Music', 'Videos']

    const effect = () => {
        var time = new Date(Date.now()).toDateString()
        firebase.database().ref(`/folders/Pictures`).update({ timestamp: time })
    }

    useEffect(effect, [])

    return (
        <Row lg={12} style={{ ...Content.rowLeftStart, ...Styles.dashboard }}>
            <Menubar />
            <Col lg={11} style={Styles.TradingView}>
                <div>  Trading View </div>
            </Col>
        </Row>
    )
}

const Styles = ({
    dashboard: {
        backgroundColor: 'rgb(50,50,50)',
        marginLeft: '0.1px'
    },
    TradingView: {
        padding: '15px',
        color: 'white',
        font: '2.5rem poppins'
    }
})
