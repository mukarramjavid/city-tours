import React from "react";
import { Grid, Row, Col } from "react-bootstrap";


export default function Title() {
  return (
    <Grid>
      <Row className="show-grid">
        <Col md={12}>
          <h1 className="title">Welcome To City Tour</h1>
        </Col>
      </Row>
    </Grid>
  );
}
