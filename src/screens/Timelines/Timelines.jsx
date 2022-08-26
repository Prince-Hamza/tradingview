import React from 'react'
import Table from '../Table/Table'
import { Col, Row } from 'react-bootstrap'
import Menubar from '../Menubar/Menubar'
import { Content } from '../../styles/styles'
import Cover from './Cover'
import Posts from './Posts'
import CreatePost from './CreatePost'
import Strip from './Strip'
import List from './List'

export default function Timelines() {
    return (
        <Row lg={12} style={Styles.AppWrapper}>
            <Menubar />

            <Col lg={12} style={Styles.column2}>

                <Row lg={12} >
                    <Col lg={1} style={{ padding: '8px' }} >   <List />   </Col>
                    <Col lg={11} style={{ padding: '5px' }} >  <Cover />  </Col>
                </Row>

                <Row lg={12}>
                    <Col lg={11} >
                        <Strip />
                        <CreatePost />
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
        width: '96.5%',
        height: 'auto',
        backgroundColor: 'rgb(50,50,50)'
    }
})
