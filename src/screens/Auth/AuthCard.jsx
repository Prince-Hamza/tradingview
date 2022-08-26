import React from 'react'
import { useState, useContext } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { webAuth } from '../../backend/firebaseAuth'
import { AppContext } from '../Context/Context'
import { setScheme } from '../../backend/scheme/scheme'
import 'react-toastify/dist/ReactToastify.css'
import './mobile.css'

const auth = new webAuth()

export default function AuthCard() {

    const { appData, setAppData } = useContext(AppContext)

    const [authMode, setAuthMode] = useState('Login')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

    const postLogin = async (resp) => {        
        toast(`${authMode === 'Login' ? 'Successfully Logged In' : 'Successfully signed up'}`)
        await auth.setLoginSession(email , pass)
        await setScheme()

        appData.userInfo = resp.user.providerData[0]
        setAppData(appData)
        navigate('/trading')
    }

    const handleAuth = async () => {
        const method = authMode === 'Login' ? auth.EmailLogin : auth.EmailSignUp
        const resp = await method(email, pass)

        setTimeout(() => { if (resp.user) { postLogin(resp) } }, 1000)

        if (!resp.user) toast(resp.error.toString())
    }

    return (
        <Row className={'PrimaryCard'} lg={6} xs={12} style={{ ...Styles.Card }}>
            <Col lg={4} xs={12} style={{ ...Content.colCentrify, ...Styles.leftCol }}>
                <Image src={'https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg'} style={{ width: '120px', height: '120px' }} />
            </Col>
            <Col className='leftCol' lg={8} style={{ ...Styles.rightCol, ...Content.colCentrify }}>

                <h4> Dashboard App </h4>
                <br />
                <br />

                <Col>

                    <h6> Username </h6>
                    <input type="text" style={Styles.input} onChange={(e) => { setEmail(e.target.value) }} />

                    <br />
                    <br />

                    <h6> Pasword </h6>
                    <input type="password" style={Styles.input} onChange={(e) => { setPass(e.target.value) }} />

                    <br />
                    <br />
                    <br />

                </Col>

                <button style={Styles.button} onClick={() => { handleAuth() }}>
                    {authMode}
                </button>
                <ToastContainer position='bottom-center' />

                <br />
                <p style={Styles.bottomLine}> do not have an account <a href="js:void" onClick={() => { setAuthMode('Sign Up') }} style={Styles.signup}> Sign Up </a>  </p>
            </Col>
        </Row>
    )


}


const Styles = ({
    Card: {
        height: 'auto'
    },
    leftCol: {
        backgroundColor: '#222',
    },
    rightCol: {
        backgroundColor: 'rgb(26,26,26)',
        color: 'white',
        height: '100%',
        padding: '10px'
    },
    input: {
        outline: 'none',
        color: 'white',
        backgroundColor: 'rgb(26,26,26)',
        borderBottomColor: 'white',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderTopWidth: '0px'
    },
    button: {
        width: '200px',
        height: '50px',
        border: 'none',
        outline: 'none',
        backgroundColor: 'cyan',
        marginBottom: '5px'
    },
    signup: {
        color: 'cyan'
    },
    bottomLine: {
        marginBottom: '60px'
    }
})
