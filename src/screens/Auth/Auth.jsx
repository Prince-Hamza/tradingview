import React from 'react'
import { Col } from 'react-bootstrap'
import AuthCard from './AuthCard'
import { Content } from '../../styles/styles'

export default function Auth() {
    return (
        <Col lg={12} style={{...Styles.Theme , ...Content.colCentrify}}>
            <AuthCard />
        </Col>
    )
}

const Styles = ({
    Theme: {
        backgroundImage: `url(https://cdn.wallpapersafari.com/48/74/JDcahO.jpg)`,
        height: window.screen.height + 'px',
        backgroundSize: 'cover'
    }
})