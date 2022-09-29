import { useEffect, useState } from "react";
import axios from "axios";
import {ArrowRightIcon} from "@chakra-ui/icons"
import { Text, Box, SimpleGrid, Flex, Button, List, UnorderedList, ListItem } from "@chakra-ui/react";
function Jobdata(setJobData, setLoading) {
  axios
    .get("http://localhost:8080/jobs?_page=1&_limit=4")
    .then((res) => {
      if (res.data) {
        setJobData(res.data);
        setLoading(false);
      }
    })
    .catch((err) => console.log(err))
    .finally(console.log("Job Data Completed"));
}
function JobsData() {
  const [loading, setLoading] = useState(true);
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    Jobdata(setJobData, setLoading);
  }, [jobData]);
  if (loading) {
    return <Text>...Loading</Text>;
  }
  return (
    <div >
      <Box w="90%" m="auto">
        <SimpleGrid>
          <Flex justifyContent="space-between" >
          <Flex flexDirection="column" >
            {jobData?.map((el,i) => {
              return (
                <Box w="500px" backgroundColor="grey" m="10px 0px">
                    <Text m="5px">{el.JobTitle}</Text>
                    <Text m="5px">{el.companyName}</Text>
                    <Text m="5px">{el.companyLocation}</Text>
                    {el.attribute_snippet && <Button m="5px">{el.attribute_snippet}</Button>}
                    
                    {el.category_1 &&<Button m="5px">{el.category_1}</Button>}
                    {el.category_2 &&<Button m="5px">{el.category_2}</Button>}
                    {el.ialbl && <Text><ArrowRightIcon m="5px">{el.ialbl}</ArrowRightIcon> {el.ialbl}</Text>}
                    {el.hiringMultipleCandidatesCaption && <Button>{el.hiringMultipleCandidatesCaption}</Button>}
                    {el.urgentlyHiring && <Button>{el.urgentlyHiring}</Button>}
                    
                    <UnorderedList marginLeft="50px">
                    {el.job_snippet && <ListItem>{el.job_snippet}</ListItem>}
                    {el.job_snippet_2 && <ListItem>{el.job_snippet_2}</ListItem>}
                    {el.job_snippet_3 && <ListItem>{el.job_snippet_3}</ListItem>}
                    </UnorderedList>
                    
                    
                </Box>
                
              );
            })}
            </Flex>
            <Flex>jjj</Flex>
          </Flex>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default JobsData;
