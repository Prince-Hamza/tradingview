import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { AppContext } from '../Context/Context'
import { Content } from '../../styles/styles'
import Menubar from '../Menubar/Menubar'
import TradingViewWidget from 'react-tradingview-widget';
import Pairs from './Pairs'
import Messenger from '../Messenger2/Messenger'
import Overlayer from './Overlayer'
import { webAuth } from '../../backend/firebaseAuth'
const auth = new webAuth()

export default function TradingView() {

    const { appData, setAppData } = useContext(AppContext)
    const [activePair, setActivePair] = useState('BTCUSD')


    const init = async () => {
        var userData = await auth.getLoginSession()
        appData.userInfo = userData.user.providerData[0]
        setAppData(appData)
    }

    const effect = () => {
        if (!appData.userInfo.uid) init()
    }

    useEffect(effect, [])

    const updatePair = (p) => { setActivePair(p) }

    return (
        <Row lg={12} style={{ ...Content.rowLeftStart, ...Styles.dashboard }}>

            <Menubar />

            <Row lg={12} style={Styles.container}>
                <Pairs updatePair={updatePair} />
                <Col lg={11} style={Styles.TradingView}>
                    <TradingViewWidget
                        autosize={true}
                        symbol={`FX:${activePair}`}
                        timezone="Etc/UTC"
                        theme="dark"
                        style="1"
                        locale="en"
                        toolbar_bg="#f1f3f6"
                        enable_publishing={false}
                        withdateranges={true}
                        range="YTD"
                        hide_side_toolbar={false}
                        allow_symbol_change={true}
                        details={true}
                        hotlist={true}
                        calendar={true}
                        container_id="tradingview_74bc0"
                    />
                </Col>
                <Overlayer />
            </Row>

        </Row>
    )
}

const Styles = ({
    container: {
        width: '91%',
        height: 'auto',
        marginLeft: '1px'
    },
    dashboard: {
        backgroundColor: 'rgb(50,50,50)',
        marginLeft: '0.1px',
        position: 'relative',
        padding: '0px'
    },
    TradingView: {
        color: 'white',
        font: '2.5rem poppins',
        height: '800px',
        padding: '0px',
    }
})
