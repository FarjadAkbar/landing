import { ILead } from '@/types/lead';
import {
    Html,
    Body,
    Container,
    Heading,
    Text,
    Section,
    Row,
    Column,
    Link,
  } from '@react-email/components';
  import * as React from 'react';
  
  export const LeadEmailTemplate: React.FC<ILead> = ({
    name,
    fatherName,
    age,
    email,
    phoneNumber,
    whatsappNumber,
    courses,
  }) => {
    return (
      <Html>
        <Body style={main}>
          <Container style={container}>
            <Heading>Form Submission Details</Heading>
            <Text style={text}>Hello {name},</Text>
            <Text style={text}>
              Thank you for submitting your form. Below are the details you provided:
            </Text>
            <Section>
                <Row>
                  <Column>Name</Column>
                  <Column>{name}</Column>
                </Row>
                <Row>
                  <Column>Father's Name</Column>
                  <Column>{fatherName}</Column>
                </Row>
                <Row>
                  <Column>Age</Column>
                  <Column>{age}</Column>
                </Row>
                <Row>
                  <Column>Email</Column>
                  <Column>{email}</Column>
                </Row>
                <Row>
                  <Column>Phone Number</Column>
                  <Column>{phoneNumber}</Column>
                </Row>
                <Row>
                  <Column>WhatsApp Number</Column>
                  <Column>{whatsappNumber}</Column>
                </Row>
                <Row>
                  <Column>Selected Course</Column>
                  <Column>{courses}</Column>
                </Row>
            </Section>
            <Text style={footerText}>
              If any of the above details are incorrect, please contact us at{' '}
              <Link href={`mailto:${process.env.MAIL_EMAIL as string}`}>{process.env.MAIL_EMAIL as string}</Link>.
            </Text>
            <Text style={footerText}>Best regards, {process.env.NEXT_PUBLIC_APP_NAME as string}</Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  const main = {
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
  };
  
  const container = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
  };
  
  const heading = {
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: '20px',
  };
  
  const text = {
    fontSize: '16px',
    color: '#333333',
    marginBottom: '20px',
  };
  
  const table = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginBottom: '20px',
  };
  
  const footerText = {
    fontSize: '14px',
    color: '#777777',
    marginBottom: '10px',
  };
  