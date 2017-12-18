import React from 'react';
import { Flex, Box, Text } from './base-components';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import Header from './Header';

export default () => (
  <Flex flexDirection="column" css={{ minHeight: '100vh' }}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        render={() => (
          <Flex flexDirection="column" flex="auto">
            <Header />
            <Switch>
              <Route
                render={() => <Error message={'Oops, nothing here...'} />}
              />
            </Switch>
          </Flex>
        )}
      />
    </Switch>
    <Box bg="lightGray">
      <Flex mw1000 p={1} centerX justify="space-between">
        <Box>
          <Text>Made with </Text>
          <Text color="main">
            <i className="ion-md-heart" />
          </Text>
          <Text> in Paris</Text>
        </Box>
        <Box color="darken" fontSize={1}>
          © Viewrz 2018
        </Box>
      </Flex>
    </Box>
  </Flex>
);
