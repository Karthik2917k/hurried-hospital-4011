import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  HStack,
  FormControl,
  FormLabel,
  Button,
  Input,
  PriceTag,
  useColorModeValue,
  Image,
  Grid,
  Link,
  FavouriteButton,
  GridItem,
  Text,
  VStack,
  SimpleGrid,
  Stack,
  AspectRatio,
  Container,
} from "@chakra-ui/react";

function SalaryGuide() {
  const [avgSalery, setAvgSalary] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/avgsalarybyrole")
      .then((res) => setAvgSalary(res.data))
      .catch((err) => console.log(err))
      .finally(console.log("completed"));
  }, []);
  return (
    <div>
      <Box backgroundImage="https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/salaries-8d20dc14bdeae8889387e0fb40e0d546.png">
        <Box p="20px" w="80%" m="auto">
          <Text fontSize="4xl" fontWeight="bold">
            Find a career you'll love
          </Text>
          <Text>
            Explore which careers have the highest job satisfaction, best
            salaries and more
          </Text>
        </Box>
        <Box w="80%" m="auto" mt="50px" pb="50px">
          <Flex>
            <HStack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <HStack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <HStack spacing={10}>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      height="40px"
                      mt="40px"
                    >
                      Search
                    </Button>
                  </HStack>
                </HStack>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Box>
      <Box w="80%" m="auto">
        <Text fontSize="4xl" fontWeight="bold">
          Browse top-paying jobs by industry
        </Text>
        <Container maxW={"7xl"} zIndex={10} position={"relative"} py={12}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
            {avgSalery?.map((el) => {
              return (
                <div>
                  <Flex
                    border="1px solid grey"
                    borderBottom="none"
                    borderTopRadius="8px"
                  >
                    <Link p="10px">{el.role}</Link>
                  </Flex>
                  <Box >
                    <Flex
                      justifyContent="space-between"
                      border="1px solid grey"
                      borderTop="none"
                    >
                      <Link p="10px">{el.avg}</Link>
                      <Link p="10px">{el.salary}</Link>
                    </Flex>
                    <Box
                      border="1px solid grey"
                      borderTop="none"
                      borderBottomRadius="8px"
                    >
                      <Link p="20px">Job Openings</Link>
                    </Box>
                  </Box>
                </div>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}

export default SalaryGuide;
