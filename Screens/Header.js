import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container style={{ marginTop: 30 }}>
        {/* <Header style={{ backgroundColor: 'white'}} /> */}
        <Text>Welcome to Home page</Text>
        <Content />
        <Footer>
          <FooterTab style={{ backgroundColor: 'white' }}>
            <Button vertical>
              <Icon name="chat" />
              <Text>All Chat</Text>
            </Button>
            <Button vertical>
              <Icon name="people" />
              <Text>All Chat</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>All User</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}