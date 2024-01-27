import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h4>EDUCATION & SKILLS</h4>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="tile">
              <div className="time">2016-2020</div>
              <h6>Bachelor of engineering</h6>
              <div> NMAMIT Nitte, Udupi</div>
            </div>
            <div className="tile">
              <div className="time">2014-2016</div>
              <h6>Secondary education</h6>
              <div>St. Lawrence, Moodubelle</div>
            </div>
            <div className="tile">
              <div className="time">2011-2014</div>
              <h6>SSLC</h6>
              <div>GPUC, Bailore</div>
            </div>
          </Col>
          <Col lg={8}>
            <h4>My skills</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
