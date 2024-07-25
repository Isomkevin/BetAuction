// components/Layout.js
import {
  Box,
  Container,
  Flex,
  Spacer,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" w="auto">
      <Navbar />
      <Container bg="gray.200" maxW="container.md" flex="0.5">
        <VStack spacing={0.5} align="stretch">
          {children}
        </VStack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default Layout;

// components/Header.jsx
export const Header = () => (
  <Box bg="teal.500" color="white" p={4}>
    <Heading size="lg">VerifyCheckIn</Heading>
  </Box>
);

// components/Footer.jsx
export const Footer = () => (
  <Box bg="teal.500" color="white" p={4} mt="auto">
    <Text>
      &copy; {new Date().getFullYear()} VerifyCheckIn. All rights reserved.
    </Text>
  </Box>
);
