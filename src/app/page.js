'use client ';
import Sidebar from '@/components/sidebar/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';
import Content from '@/components/content/Content';
import Skills from '@/components/Skills/Skills';
// import { useState } from 'react';

export default function Home() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main>
      {/* <Container> */}
      <Row>
        <Col lg={3} className="fixed-sidebar">
          <Sidebar />
        </Col>
        <Col lg={9} className="scrollable-content">
          <Content />
          <div className="line"></div>
          <Skills />
        </Col>
      </Row>
      {/* </Container> */}
    </main>
  );
}
