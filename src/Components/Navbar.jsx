import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Navbar = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const [login, setlogin] = useState(true);
  if (login) {
    return (
      <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          mb={8}
          p={8}
          bg={["#1A365D", "#1A365D", "transparent", "transparent"]}
          color={["white", "white", "black", "black"]}
          {...props}
        >
          <Flex align="center">
            <Image
              w="100px"
              src="https://theme.zdassets.com/theme_assets/499832/5df58aa55d0f323d0cd573c7e2a963fa3343219b.png"
              alt="Indeed"
            />
            <Image
              w="40px"
              h="40px"
              src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png"
              alt="flower"
            />
          </Flex>

          <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
            {show ? <CloseIcon /> : <MenuIcon />}
          </Box>

          <Box
            display={{ base: show ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
          >
            <Flex
              align="center"
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <MenuItem to="/">Find Jobs</MenuItem>
              <MenuItem to="/companies">Company Reviews</MenuItem>
              <MenuItem to="/salaryguide">Salary Guide</MenuItem>
              <MenuItem to="/signin">
                <Button
                  size="sm"
                  rounded="md"
                  color={["black", "black", "white", "white"]}
                  bg={["white", "white", "#4299E1", "#4299E1"]}
                  _hover={{
                    bg: ["1A365D", "#1A365D", "#1A365D", "#1A365D"],
                  }}
                >
                  Sign in
                </Button>
              </MenuItem>
              <MenuItem to="/postjob" isLast>
                <Button
                  size="sm"
                  rounded="md"
                  color={["black", "black", "white", "white"]}
                  bg={["white", "white", "#4299E1", "#4299E1"]}
                  _hover={{
                    bg: ["1A365D", "#1A365D", "#1A365D", "#1A365D"],
                  }}
                >
                  Post a Job
                </Button>
              </MenuItem>
            </Flex>
          </Box>
        </Flex>
      </Box>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

export default Navbar;
