import React, { useEffect, useState } from "react";
import axios from "axios";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  FormControl,
  FormLabel,
  Button,
  Input,
  useColorModeValue,
  Image,
  Link,
  Text,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

function SalaryGuide() {
  const [avgSalery, setAvgSalary] = useState([]);
  const [TopPayingCompanies, setTopPayingCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/avgsalarybyrole")
      .then((res) => setAvgSalary(res.data))
      .catch((err) => console.log(err))
      .finally(console.log("completed"));
    axios
      .get(" http://localhost:8080/toppayingcompanies")
      .then((res) => setTopPayingCompanies(res.data))
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
                  <FormControl id="role">
                    <FormLabel>What</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl id="location">
                    <FormLabel>Where</FormLabel>
                    <Input type="text" />
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
      {/*Avg salary */}
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
                    <Link fontWeight="bold" p="10px">{el.role}</Link>
                  </Flex>
                  <Box>
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

      {/*
      Top paying companies
      */}

      <Box w="80%" m="auto">
        <Box>
          <Text fontSize="4xl" fontWeight="bold">
            Browse top paying companies by company
          </Text>
        </Box>
        <Container maxW={"7xl"} zIndex={10} position={"relative"} py={12}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
            {TopPayingCompanies?.map((el) => {
              return (
                <div>
                  <Flex border="1px solid grey" h="120px" borderRadius="8px">
                    <Flex>
                      <Image
                        marginTop="17px"
                        marginLeft="10px"
                        border="1px solid black"
                        height="70px"
                        w="80%"
                        p="10px"
                        src={el.companylogo}
                        alt={el.id}
                      />
                    </Flex>
                    <Flex p="0px 20px" flexDirection="column">
                      <Text fontSize="xl">{el.company}</Text>
                      <Flex>
                        <Box display="flex" mt="2" alignItems="center">
                          {Array(5)
                            .fill("")
                            .map((_, i) => (
                              <StarIcon
                                fontSize="12px"
                                key={i}
                                color={
                                  i < el.ratingimg ? "teal.500" : "gray.300"
                                }
                              />
                            ))}
                        </Box>
                        <Text mt="10px" ml="4px" fontSize="12px">
                          {el.ratings}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
      {/*
          salary Scale range  */}

      <Box  w="80%" m="auto">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={10}>
        <Flex flexDirection="column">
          <Text fontSize="3xl">How much should you be earning?</Text>
          <br/>
          <Text>
            Get an estimated calculation of how much you should be earning and
            insight into your career options.
          </Text>
          <Button background="blue" mt="20px" color="white" w="200px" h="40px" hover={{background:"lightblue"}}>Get estimated pay range</Button>
        </Flex>
        <Flex>
          <Image
            src="https://d3fw5vlhllyvee.cloudfront.net/mosaic-provider-salary-calculator-entries/dist/images/src/components/ResponsiveDefaultEntry/chart_desktop_janish-36baaa.svg"
            alt="payscale"
          />
        </Flex>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default SalaryGuide;
