import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { Box, Button, Fading, Flex, Logo, Text } from './base-components';
import Header from './Header';
import jbl from './img/logos/jbl.png';
import mufe from './img/logos/mufe.png';
import samsung from './img/logos/samsung.png';
import seiko from './img/logos/seiko.png';

const BG_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\");";

const Bullet = () => (
  <Text fontWeight="normal" mr={2}>
    <i className="ion-ios-arrow-round-forward" />
  </Text>
);

const SolvedIssues = () => (
  <Box boxShadow="regular">
    <Box centerX mw1000 py={4} px={2} ta="center">
      <Box fontSize={5} mb={3}>
        <Text>The issues we </Text>
        <Text fontWeight="black" color="main">
          solve
        </Text>
        <Text>:</Text>
      </Box>
      <Flex wrap columnContainer={2}>
        <Box mb={2} p={2} w={[1, 1 / 2]}>
          <Box fontSize={5} fontWeight="black">
            Lack of scalability
          </Box>
          <Box mt={2}>
            #1 problem for brands, underused channel because of limited reach
          </Box>
        </Box>
        <Box mb={2} p={2} w={[1, 1 / 2]}>
          <Box fontSize={5} fontWeight="black">
            Growing fraud
          </Box>
          <Box mt={2}>
            Undiscussed topic, fake follower profiles are proliferating
          </Box>
        </Box>
        <Box mb={2} p={2} w={[1, 1 / 2]}>
          <Box fontSize={5} fontWeight="black">
            Lack of insight
          </Box>
          <Box mt={2}>Influence Marketing unclear KPIs to monitor</Box>
        </Box>
        <Box mb={2} p={2} w={[1, 1 / 2]}>
          <Box fontSize={5} fontWeight="black">
            Poor quality of delivery
          </Box>
          <Box mt={2}>
            Very manual process which leads to errors and messy management of
            influencers pools
          </Box>
        </Box>
      </Flex>
    </Box>
  </Box>
);

const Differences = () => (
  <Box boxShadow="regular" bg="darkenLight">
    <Box centerX mw1000 py={4} px={2}>
      <Box ta="center">
        <Box fontSize={5} mb={1}>
          <Text>How are we </Text>
          <Text fontWeight="black" color="main">
            different
          </Text>
          <Text>?</Text>
        </Box>
        <Box fontSize={5} mb={2}>
          We combine:
        </Box>
      </Box>
      <Flex
        p={2}
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
      >
        <Flex
          p={2}
          flex="auto"
          flexBasis={['auto', 'auto', 0]}
          justify="center"
        >
          <Box>
            <Box fontSize={5} fontWeight="black">
              Technology
            </Box>
            <Box mt={2}>
              <Bullet />
              Bring scalability
            </Box>
            <Box mt={2}>
              <Bullet />
              Prevent fraud
            </Box>
          </Box>
        </Flex>
        <Box color="main" fontSize={6}>
          &
        </Box>
        <Flex
          p={2}
          flex="auto"
          flexBasis={['auto', 'auto', 0]}
          justify="center"
        >
          <Flex inline flexDirection="column" alignItems="flex-start">
            <Box>
              <Box fontSize={5} fontWeight="black">
                Standardised processes
              </Box>
              <Box mt={2}>
                <Bullet />
                Guarantee quality of delivery
              </Box>
              <Box mt={2}>
                <Bullet />
                Offer clear campaign insights
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  </Box>
);

const FullService = () => (
  <Box boxShadow="regular">
    <Flex
      centerX
      mw1000
      py={4}
      px={2}
      flexDirection="column"
      alignItems={['center', 'center', 'stretch']}
    >
      <Box fontSize={5} mb={2} ta="center">
        <Text>We provide a </Text>
        <Text fontWeight="black" color="main">
          full service
        </Text>
        <Text> approach to Influence Marketing</Text>
      </Box>
      <Flex
        py={2}
        columnContainer={2}
        flexDirection={['column', 'column', 'row']}
        justify="space-between"
      >
        <Box flex="auto" flexBasis="0" p={2}>
          <Box mb={2} fontSize={5} fontWeight="black">
            Industry expertise
          </Box>
          <Box>
            <Box>
              <Bullet />
              Recommendations
            </Box>
            <Box>
              <Bullet />
              Creative input
            </Box>
            <Box>
              <Bullet />
              Best practice sharing
            </Box>
          </Box>
        </Box>
        <Box flex="auto" flexBasis="0" p={2}>
          <Box mb={2} fontSize={5} fontWeight="black">
            Campaign management
          </Box>
          <Box>
            <Box>
              <Bullet />
              From brief to reporting
            </Box>
            <Flex>
              <Bullet />
              Centralised influencer pool management
            </Flex>
          </Box>
        </Box>
        <Box flex="auto" flexBasis="0" p={2}>
          <Box mb={2} fontSize={5} fontWeight="black">
            Reporting
          </Box>
          <Box>
            <Bullet />
            Analytics
          </Box>
          <Flex>
            <Bullet />
            Documentation & screenshots
          </Flex>
        </Box>
      </Flex>
      <Box mt={3} ta="center" fontSize={5}>
        <Box>Operating on all networks:</Box>
        <Flex wrap justify="center" mt={2} py={2}>
          <Text mx={2}>
            <i className="ion-logo-instagram" />
          </Text>
          <Text mx={2}>
            <i className="ion-logo-facebook" />
          </Text>
          <Text mx={2}>
            <i className="ion-logo-youtube" />
          </Text>
          <Text mx={2}>
            <i className="ion-logo-snapchat" />
          </Text>
          <Text mx={2}>
            <i className="ion-logo-twitter" />
          </Text>
          <Text mx={2}>
            <i className="ion-logo-linkedin" />
          </Text>
          <Text mx={2}>
            <i className="ion-logo-pinterest" />
          </Text>
          <Text mx={2}>
            <i className="ion-logo-twitch" />
          </Text>
        </Flex>
      </Box>
      <Box mt={3} ta="center" fontSize={5}>
        <Box>They trusted us:</Box>
        <Flex wrap justify="center" alignItems="center" py={2}>
          <Text m={2}>
            <img src={samsung} style={{ width: '100px' }} alt="Samsung" />
          </Text>
          <Text m={2}>
            <img
              src={jbl}
              style={{ width: '100px', marginBottom: '-25px' }}
              alt="JBL"
            />
          </Text>
          <Text m={2}>
            <img src={seiko} style={{ width: '100px' }} alt="Seiko" />
          </Text>
          <Text m={2}>
            <img src={mufe} style={{ width: '100px' }} alt="Make Up For Ever" />
          </Text>
        </Flex>
      </Box>
    </Flex>
  </Box>
);

class HomeHeader extends Component {
  state = { scrolledPastBigHeader: false };

  render = () => this.view(this);
  view = ({ state: { scrolledPastBigHeader } }) => (
    <Box>
      <Flex
        pt={2}
        pb={4}
        px={2}
        bgGrad="main"
        fontSize={5}
        color="mainInvert"
        boxShadow="regular"
        flexDirection="column"
        alignItems="center"
        css={{
          position: 'relative',
          ':before': {
            position: 'absolute',
            'pointer-events': 'none',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            content: '""',
            background: BG_PATTERN
          }
        }}
      >
        <Box py={3} fontSize={6}>
          <Logo />
        </Box>
        <Box py={2}>
          The Solution for <Text fontWeight="black">Influence Marketing</Text>
          <Text> that is :</Text>
        </Box>
        <Flex
          inline
          flexDirection="column"
          alignItems="flex-start"
          fontWeight="black"
        >
          <Box>
            <Bullet />
            Scalable
          </Box>
          <Box>
            <Bullet />
            Measurable
          </Box>
          <Box>
            <Bullet />
            Fraud free
          </Box>
          <Box>
            <Bullet />
            Professional
          </Box>
        </Flex>
        <Box>
          <a
            href="mailto:hello@wildflame.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              iconName="md-arrow-forward"
              fontWeight="black"
              bg="mainInvert"
              mt={3}
              color="main"
              py={1}
              grow={0.5}
            >
              Get in touch
            </Button>
          </a>
        </Box>
      </Flex>
      <Fading visible={scrolledPastBigHeader} duration={200}>
        <Box css={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
          <Header />
        </Box>
      </Fading>
      <Waypoint
        topOffset={77}
        onPositionChange={({ currentPosition }) =>
          this.setState({
            scrolledPastBigHeader: currentPosition === Waypoint.above
          })
        }
      />
    </Box>
  );
}

export default () => (
  <Box fontSize={3}>
    <HomeHeader />
    <SolvedIssues />
    <Differences />
    <FullService />
  </Box>
);
