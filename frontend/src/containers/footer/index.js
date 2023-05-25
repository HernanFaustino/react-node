/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Footer } from '../../components';

export function FooterContainer(props) {
  return (
    <Footer>
      <Footer.Title>Question? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Links</Footer.Link>
          <Footer.Link href="#">More projects</Footer.Link>
          <Footer.Link href="#">Source</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Github</Footer.Link>
          <Footer.Link href="#">Linkedin</Footer.Link>
          <Footer.Link href="#">Twiter</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Settings</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>By Hernan F</Footer.Text>
    </Footer>
  );
}
