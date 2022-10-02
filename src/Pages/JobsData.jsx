import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  SimpleGrid,
  Flex,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import SingleData from "./SingleData";
function Jobdata(setJobData, setLoading, page = 1, role, location, setpages) {
  if (location && role) {
    axios
      .get(
        `http://localhost:8080/jobs?_page=${page}&_limit=5&companyLocation=${location}&JobTitle=${role}`
      )
      .then((res) => {
        if (res.data) {
          setJobData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(console.log("Job Data Completed"));
    axios
      .get(
        `http://localhost:8080/jobs?companyLocation=${location}&JobTitle=${role}`
      )
      .then((res) => {
        if (res.data) {
          setpages(res.data.length);
        }
      })
      .catch((err) => console.log(err))
      .finally(console.log("Job Data Completed"));
  } else if (location) {
    axios
      .get(
        `http://localhost:8080/jobs?_page=${page}&_limit=5&companyLocation=${location}`
      )
      .then((res) => {
        if (res.data) {
          setJobData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(console.log("Job Data Completed"));
    axios
      .get(`http://localhost:8080/jobs?companyLocation=${location}`)
      .then((res) => {
        if (res.data) {
          setpages(res.data.length);
        }
      })
      .catch((err) => console.log(err))
      .finally(console.log("Job Data Completed"));
  } else if (role) {
    axios
      .get(`http://localhost:8080/jobs?_page=${page}&_limit=5&JobTitle=${role}`)
      .then((res) => {
        if (res.data) {
          setJobData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(console.log("Job Data Completed"));
    axios
      .get(`http://localhost:8080/jobs?&JobTitle=${role}`)
      .then((res) => {
        if (res.data) {
          setpages(res.data.length);
        }
      })
      .catch((err) => console.log(err))
      .finally(console.log("Job Data Completed"));
  } else {
    axios
      .get(`http://localhost:8080/jobs?_page=${page}&_limit=5`)
      .then((res) => {
        if (res.data) {
          setJobData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(console.log("Job Data Completed"));
    axios
      .get(`http://localhost:8080/jobs`)
      .then((res) => {
        if (res.data) {
          setpages(res.data.length);
        }
      })
      .catch((err) => console.log(err))
      .finally(console.log("Job Data Completed"));
  }
}
function JobsData(Props) {
  const [pages, setpages] = useState(1);
  const { role, location } = Props;
  const [loading, setLoading] = useState(true);
  const [jobData, setJobData] = useState([]);

  const [page, setPage] = useState(1);

  const handlePageChange = (n) => {
    setPage(n);
  };
  useEffect(() => {
    Jobdata(setJobData, setLoading, page, role, location, setpages);
  }, [page, location, role, pages]);
  if (loading) {
    return <Text>...Loading</Text>;
  }
  return (
    <div>
      <Box w="90%" m="auto" padding="50px 0px">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="50px">
          <Flex flexDirection="column">
            {jobData?.map((el, i) => {
              return (
                <Box
                  key={el.id}
                  w="600px"
                  boxShadow="xs"
                  p="6"
                  rounded="md"
                  bg="white"
                  m="10px 0px"
                >
                  <Text fontWeight="bold" m="5px">
                    {el.JobTitle}
                  </Text>
                  <Text fontWeight="bold" m="5px">
                    {el.companyName}
                  </Text>
                  <Text fontWeight="bold" m="5px">
                    {el.companyLocation}
                  </Text>
                  {el.attribute_snippet && (
                    <Button m="5px">{el.attribute_snippet}</Button>
                  )}

                  {el.category_1 && <Button m="5px">{el.category_1}</Button>}
                  {el.category_2 && <Button m="5px">{el.category_2}</Button>}
                  {el.ialbl && (
                    <Text>
                      <ArrowRightIcon m="5px">{el.ialbl}</ArrowRightIcon>{" "}
                      {el.ialbl}
                    </Text>
                  )}
                  {el.hiringMultipleCandidatesCaption && (
                    <Button>{el.hiringMultipleCandidatesCaption}</Button>
                  )}
                  {el.urgentlyHiring && <Button>{el.urgentlyHiring}</Button>}

                  <UnorderedList marginLeft="50px">
                    {el.job_snippet && <ListItem>{el.job_snippet}</ListItem>}
                    {el.job_snippet_2 && (
                      <ListItem>{el.job_snippet_2}</ListItem>
                    )}
                    {el.job_snippet_3 && (
                      <ListItem>{el.job_snippet_3}</ListItem>
                    )}
                  </UnorderedList>
                </Box>
              );
            })}
            <Flex m="auto">
              {new Array(Math.ceil(pages / 5)).fill(0).map((acc, index) => (
                <Button
                  w="5px"
                  m="0pc 2px"
                  background={"blue.400"}
                  disabled={page === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  data-testid="page-btn"
                >
                  {index + 1}
                </Button>
              ))}
            </Flex>
          </Flex>
          <Flex>
            <SingleData />
          </Flex>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default JobsData;
