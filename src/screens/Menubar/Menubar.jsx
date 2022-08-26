import React from 'react'
import { Content } from '../../styles/styles'
import { FaHome, FaAdjust, FaHighlighter, FaAccusoft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { IoIosPeople } from 'react-icons/io'
import { MdOutlineAutoGraph } from 'react-icons/md'
import { SiAndroidauto } from 'react-icons/si'
import { Col } from 'react-bootstrap'

export default function Menubar() {
    const navigate = useNavigate()
    return (
        <Col lg={1} style={{ ...Styles.menuBar, ...Content.colTopCenter }}>
            <MdOutlineAutoGraph style={Styles.icon} onClick={() => { navigate('/trading') }} />
            <IoIosPeople style={Styles.icon} onClick={() => { navigate('/community') }} />
            <SiAndroidauto style={Styles.icon} onClick={() => { navigate('/messenger') }} />
            {/* <FaHighlighter style={Styles.icon} /> */}
        </Col>
    )
}


const Styles = ({
    menuBar: {
        backgroundColor: 'rgb(40,40,40)',
        height: window.screen.height + 'px',
        padding: '20px',
    },
    icon: {
        color: 'rgb(100,200,200)',
        width: '22px',
        height: '28px',
        marginBottom: '90px',
        cursor: 'pointer'
    }
})

