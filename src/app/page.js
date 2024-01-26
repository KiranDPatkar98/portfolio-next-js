'use client ';
import Sidebar from '@/components/sidebar/Sidebar';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import { useState } from 'react';

export default function Home() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main>
      <Container>
        <Row>
          <Col lg={3}>
            <Sidebar />
          </Col>
          <Col lg={9}>
            <h1>React Bootstrap NextJS Tutorial</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquid quia optio odit nihil voluptatibus soluta
              labore earum nostrum doloremque. Sequi laboriosam dicta
              praesentium, sit aspernatur non molestiae voluptates beatae.
            </p>
            <Button>My Button</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
