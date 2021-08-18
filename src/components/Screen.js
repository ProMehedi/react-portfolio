import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Screen = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col lg={10} xl={8}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default Screen
