import React, { useEffect, useState } from 'react'
import {Text,Box, Container, Image,SimpleGrid, Flex} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import axios from"axios";
function Companies() {
  const [popCompanies,setPopCompanies] = useState([]);
  const[Comparing,setComparing]= useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:8080/popularcompanies")
    .then((res) => setPopCompanies(res.data))
    .catch((err) => console.log(err))
    .finally(console.log("completed"));

    axios
    .get("http://localhost:8080/compareWorkinat")
    .then((res) => setComparing(res.data))
    .catch((err) => console.log(err))
    .finally(console.log("completed"));
  },[])
  return (
    <div>
      <Box w="70%" m="auto">
      <Text fontSize="4xl" fontWeight="bold">Find great places to work</Text>
      <Text fontSize="xl">Get access to millions of company reviews</Text>
      </Box>
      <Box w="70%" m="auto" mt="50px">
        <Text fontSize="2xl" fontWeight="600">Popular companies</Text>
        <Container maxW={"7xl"} zIndex={10} position={"relative"} py={12}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
            {popCompanies?.map((el) => {
              return (
                <div>
                  <Flex h="120px">
                    <Flex>
                      <Image
                        marginTop="17px"
                        marginLeft="10px"
                        border="1px solid black"
                        height="60px"
                        w="80%"
                        p="4px"
                        src={el.image}
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
                                  i < 4 ? "	#800000" : "gray.300"
                                }
                              />
                            ))}
                        </Box>
                        <Text mt="10px" ml="4px" fontSize="10px">
                          {el.reviews}
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
      Comapring work
      */}

<Box w="70%" m="auto" mt="50px">
        <Text fontSize="2xl" fontWeight="600">Popular companies</Text>
        <Container maxW={"7xl"} zIndex={10} position={"relative"} py={12}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={10}>
            {Comparing?.map((el) => {
              return (
                
                  <Flex border="1px solid grey" borderRadius="7px" h="100px">
                    <Image box-shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' m="20px 0px 0px 20px" w="50px" h="50px" src={el.image} alt={el.company}/>
                    <Flex flexDirection="column" p="10px">
                      <Text>{el.company}</Text>
                      <Flex>
                        <Text><StarIcon color="	#800000"></StarIcon></Text>
                        <Text>{el.rating}</Text>
                      </Flex>
                    </Flex>
                    <Text mt="30px" fontSize="2xl" color="grey" p="0px 20px">VS</Text>
                    <Image box-shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' m="20px 0px 0px 20px" w="50px" h="50px" src={el.image_2} alt={el.company_2}/>
                    <Flex flexDirection="column" p="10px">
                      <Text>{el.company_2}</Text>
                      <Flex>
                        <Text><StarIcon color="	#800000"></StarIcon></Text>
                        <Text>{el.rating_2}</Text>
                      </Flex>
                    </Flex>
                    
                  </Flex>
                 );
            })}
          </SimpleGrid>
        </Container>
      </Box>

    </div>
  )
}

export default Companies;
