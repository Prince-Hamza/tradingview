import React from 'react'

import Table from '../Table/Table'
import { Col, Row } from 'react-bootstrap'
import Menubar from '../Menubar/Menubar'
import { Content } from '../../styles/styles'
import Messenger from '../Messenger/Messenger'

export default function Dashboard() {

    // const adminUser = ({ uid: 'admin@gmail.com', displayName: 'admin', email: 'admin@gmail_com', photoURL: '' })

    return (
        <Row lg={6} style={{ ...Content.rowLeftStart, ...Styles.dashboard }}>
            <Menubar />
            <Col lg={10} style={Styles.column2} >
                <Table />
            </Col>
            {/* <Messenger adminUser={adminUser} /> */}
        </Row>
    )
}

const Styles = ({
    column2: {
        ...Content.colTopLeft,
        marginLeft: '1px',
    },
    dashboard: {
        backgroundColor: 'rgb(50,50,50)',
        marginLeft:'0.1px'
    }
})
