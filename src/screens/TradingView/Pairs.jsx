import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { pairsList } from './pairsInfo'

export default function Pairs({ updatePair }) {
    return (
        <Col lg={1} style={Styles.theme}>
            <br />
            {pairsList.map((pair) => {
                return (
                    <div style={{ marginBottom: '20px', marginRight: '20px', color: 'white', cursor: 'pointer' }} onClick={() => { updatePair(pair) }} >
                        {pair}
                    </div>
                )
            })}

        </Col>
    )
}


const Styles = ({
    theme: {
        backgroundColor: 'rgb(50,50,50)',
        width: '90%',
        height: '100px',
        overflow: 'auto',
        display: 'flex',
        justifyContet: 'center',
        alignItems: 'center'
    }
})

