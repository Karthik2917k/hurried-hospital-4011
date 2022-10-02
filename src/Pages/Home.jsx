import JobsData from "./JobsData";
import  {useState} from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Select,
  SimpleGrid
} from "@chakra-ui/react";
function Home() {
  const [location,setLocation] = useState("");
  const[role,setRole] = useState("");
  

  return (
    <div >
      <Box  style={{width:"80%",margin:"auto"}} m="auto">
        <SimpleGrid  columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          <Flex>
            <FormControl>
              <Flex>
                <FormLabel mt="5px">What</FormLabel>
                <Select placeholder="Job Role" size="lg" onChange={(e)=>setRole(e.target.value)}>
                  <option value="Front_End_Developer">Front End Developer</option>
                  <option value="Back_End_Developer">Backend End Developer</option>
                  <option value="Full_Stack_Web_Developer">Full stack developer</option>
                  <option value="Data_Scientist">Data Scientist</option>
                  <option value="Data_Analyist">Data Analyst</option>
                  <option value="Human_Resourcer">Human Resourcer</option>
                  <option value="Software_Engineer">Software Engineer</option>
                </Select>
              </Flex>
            </FormControl>
          </Flex>
          <FormControl>
            <Flex>
              <FormLabel mt="5px">Where</FormLabel>
              <Select placeholder="Location" size="lg" onChange={(e)=>setLocation(e.target.value)}>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Pune">Pune</option>
                <option value="Chennai">Chennai</option>
                <option value="Noida">Noida</option>
              </Select>
            </Flex>
          </FormControl>
        </SimpleGrid>
        {/*Post your resume – It only takes a few seconds
Employers: Post a job – Your next hire is here */}

        <Box mt="30px" mb="30px" >
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
        
      </Box>
      <Box  backgroundColor="gray.100">
        <JobsData role={role} location={location}/>np
      </Box>
    </div>
  );
}

export default Home;
