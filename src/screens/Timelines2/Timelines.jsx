import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import Cover from './Cover'
import Posts from './Posts'
import CreatePost from './CreatePost'
import Strip from './Strip'
import List from './List'
import { useState } from 'react'
import Auth from '../Auth/Auth'
import firebase from 'firebase/compat/app'
import { AppContext } from '../Context/Context'
import { useEffect, useContext } from 'react'
import Menubar from '../Menubar/Menubar'

export default function Timelines() {

    return (
        <Row lg={12} style={Styles.AppWrapper}>
            <Col lg={12} style={Styles.column2}>
                <Row lg={12} >
                    <Col lg={12} style={{ padding: '5px' }} >  <Cover />  </Col>
                </Row>
                <Row lg={12}>
                    <Col lg={11} >
                        <Strip />
                        <CreatePost />
                        <br />
                        <br />
                        <br />
                        <Posts />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const Styles = ({
    AppWrapper: {
        ...Content.rowLeftStart,
        marginLeft: '0.1px'
    },
    column2: {
        position: 'relative',
        height: 'auto',
        backgroundColor: 'rgb(50,50,50)'
    }
})
