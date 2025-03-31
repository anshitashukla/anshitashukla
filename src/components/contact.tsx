// src/components/Contact.tsx
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #d3d3d3;
  margin-bottom: 40px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 16px;
  &::placeholder {
    color: #d3d3d3;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 16px;
  resize: none;
  height: 150px;
  &::placeholder {
    color: #d3d3d3;
  }
`;

const Button = styled.button`
  background: #ff00ff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: #e600e6;
  }
`;

const Footer = styled.footer`
  margin-top: 50px;
  padding: 20px;
  text-align: center;
`;

const FooterName = styled.p`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: white;
  font-size: 24px;
  text-decoration: none;
  &:hover {
    color: #ff00ff;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #d3d3d3;
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      <Subtitle>
        Feel free to reach out to me for any questions or opportunities!
      </Subtitle>
      <Form>
        <Input type="email" placeholder="Your Email*" required />
        <Input type="text" placeholder="Your Name*" required />
        <Input type="text" placeholder="Subject*" required />
        <Textarea placeholder="Message*" required />
        <Button type="submit">Send</Button>
      </Form>
      <Footer>
        <FooterName>Anshita Shukla</FooterName>
        <FooterLinks>
          <FooterLink href="https://linkedin.com/in/anshita-shukla">
            L
          </FooterLink>
          <FooterLink href="https://anshitashukla.netlify.app">W</FooterLink>
        </FooterLinks>
        <FooterText>© 2025 Anshita Shukla. All rights reserved.</FooterText>
      </Footer>
    </ContactContainer>
  );
};

export default Contact;
