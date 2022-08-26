import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react'
import Auth from '../Auth/Auth'
import SelectTopic from './SelectTopic'
import { AppContext } from '../Context/Context'
import { Content } from '../../styles/styles'
import Menubar from '../Menubar/Menubar'

export default function Community() {

    const { appData, setAppData } = useContext(AppContext)

    return (
        <Row lg={12} style={{ ...Content.rowLeftStart, ...Styles.dashboard }}>
            <Menubar />
            <Col lg={11}>
                {!appData.userInfo.uid && <Auth setUserInfo={setAppData} />}
                {appData.userInfo.uid && <SelectTopic />}
            </Col> 
        </Row>
    )
}

const Styles = ({
    dashboard: {
        backgroundColor: 'rgb(50,50,50)',
        marginLeft: '0.1px'
    }
})
