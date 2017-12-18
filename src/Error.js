import React from 'react';
import { Flex, Box } from './base-components';
import { Link } from 'react-router-dom';

export default ({ message }) => (
  <Flex flex="auto" justify="center" alignItems="center" flexDirection="column">
    <Box fontSize={3} mb={2}>
      {message || 'Oops, something went wrong...'}
    </Box>
    <Link to="/">
      <Box color="main" underline fontSize={1}>
        Go back home.
      </Box>
    </Link>.
  </Flex>
);
