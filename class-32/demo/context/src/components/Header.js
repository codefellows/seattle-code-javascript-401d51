import React from 'react';

import { SiteContext } from '../Context/Site';

import { Group, Header, Navbar, Text } from '@mantine/core';

class AppHeader extends React.Component {

  // Must be called contextType
  static contextType = SiteContext;

  // then, you can use this.context ...
  render() {
    return (
      <Header>
        <Navbar m="lg">
          <Group align="left" position="apart" m="lg">
            <Text>{this.context.title} Home</Text>
            <Text>Some Nav Link</Text>
            <Text mr="md">Another Nav Link</Text>
          </Group>
        </Navbar>
      </Header>
    );
  }

}

export default AppHeader;
