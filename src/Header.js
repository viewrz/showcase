import React from 'react';
import { Flex, Box, Logo, Button } from './base-components';
import { Link } from 'react-router-dom';

export default () => (
  <Box bgGrad="main" color="mainInvert" boxShadow="regular">
    <Flex
      py={2}
      px={2}
      fontSize={[2, 4]}
      justify="space-between"
      alignItems="center"
      mw1000
      centerX
    >
      <Link to="/">
        <Logo />
      </Link>
      <Button
        iconName="md-arrow-forward"
        fontWeight="black"
        bg="mainInvert"
        color="main"
        py={1}
        grow={0.5}
        float="right"
      >
        Get in touch
      </Button>
    </Flex>
  </Box>
);
