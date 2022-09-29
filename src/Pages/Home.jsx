import {useEffect, useState} from "react";
import axios from "axios";
import JobsData from "./JobsData";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Select,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
function Home() {
  return (
    <div style={{width:"80%",margin:"auto"}}>
      <Box  m="auto">
        <SimpleGrid  columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          <Flex>
            <FormControl>
              <Flex>
                <FormLabel mt="5px">What</FormLabel>
                <Select placeholder="Job Role" size="lg">
                  <option>Front End Developer</option>
                  <option>Backend End Developer</option>
                  <option>Full stack developer</option>
                  <option>Data Scientist</option>
                  <option>Data Analyst</option>
                  <option>Human Resourcer</option>
                </Select>
              </Flex>
            </FormControl>
          </Flex>
          <FormControl>
            <Flex>
              <FormLabel mt="5px">Where</FormLabel>
              <Select placeholder="Location" size="lg">
                <option>Hyderabad</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>bangalore</option>
                <option>Pune</option>
                <option>Chennai</option>
              </Select>
            </Flex>
          </FormControl>
          <FormControl>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              height="40px"
            >
              Search
            </Button>
          </FormControl>
        </SimpleGrid>
        {/*Post your resume – It only takes a few seconds
Employers: Post a job – Your next hire is here */}

        <Box mt="30px" >
        <Text fontSize="20px" fontWeight={600}>
          <Text as={"span"} color={"blue"}>
            Post your resume -
          </Text>
          It only takes a few seconds
        </Text>
        <Text fontSize="20px" fontWeight={600}>
          <Text as={"span"} color={"blue"}>
            Employers:
          </Text>
          Post a job – Your next hire is here
        </Text>
        </Box>

        {/*
          Job data
        */}
        <JobsData/>
      </Box>
    </div>
  );
}

export default Home;
