import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function ContactPage() {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
        return (
            <div className='w-100 mx-auto border'>
                <h1>hello</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3 mx-auto justify-content-center">
                        <Form.Group as={Col} md="9" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Your Name*"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Row className="mb-3 mx-auto justify-content-center">
                        <Form.Group as={Col} md="9" controlId="validationCustom02">
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter Your Email*"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                             <Form.Control.Feedback type="invalid">
                                Please enter a valid email.
                             </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3  mx-auto justify-content-center">
                        <Form.Group as={Col} md="9" controlId="validationCustom02">
                            <Form.Control
                                type="number"
                                placeholder="Enter Your Phone Number"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                     <Row className="mb-3  mx-auto justify-content-center">
                        <Col md={9}>
                        <Form.Control required as="textarea" placeholder="Leave a comment here" className='mw-100'/>
                        </Col>
                     </Row>
                          <Button type="submit">Submit form</Button>
                </Form>
            </div>
        );
    }


export default ContactPage;