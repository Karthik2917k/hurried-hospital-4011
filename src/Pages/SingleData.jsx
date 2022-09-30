import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Link,
  Button,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {} from "react-router-dom";
function Single(setsingleData, setLoading) {
  axios
    .get("http://localhost:8080/jobs/1")
    .then((res) => {
      if (res.data) {
        setsingleData(res.data);
        setLoading(false);
      }
    })
    .catch((err) => console.log(err))
    .finally(console.log("Single DATA Completed"));
}
function SingleData() {
  const [single, setsingleData] = useState({});
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(true);
  useEffect(() => {
    Single(setsingleData, setLoading);
    console.log(loading);
  }, []);
  if (loading) {
    return <Text>...Loading</Text>;
  }
  return (
    <div>
      {single && (
        <Box
          key={single.id}
          w="600px"
          boxShadow="xs"
          p="6"
          rounded="md"
          bg="white"
          m="10px 0px"
          mb="40px"
        >
          <Text fontWeight="bold" m="5px">
            {single.JobTitle}
          </Text>
          <Text fontWeight="bold" m="5px">
            {single.companyName}
          </Text>
          <Text fontWeight="bold" m="5px">
            {single.companyLocation}
          </Text>
          {single.attribute_snippet && (
            <Button m="5px">{single.attribute_snippet}</Button>
          )}

          {single.category_1 && <Button m="5px">{single.category_1}</Button>}
          {single.category_2 && <Button m="5px">{single.category_2}</Button>}
          {single.ialbl && (
            <Text>
              <ArrowRightIcon m="5px">{single.ialbl}</ArrowRightIcon>{" "}
              {single.ialbl}
            </Text>
          )}
          {single.hiringMultipleCandidatesCaption && (
            <Button>{single.hiringMultipleCandidatesCaption}</Button>
          )}
          {single.urgentlyHiring && <Button>{single.urgentlyHiring}</Button>}
          {login === true ? (
            <Button bg="blue.600" color="white" m="20px 20px">
              <Link href="/applnow">ApplyNow</Link>
            </Button>
          ) : (
            <Button bg="blue.600" color="white" m="20px 20px">
              <Link href="/signin">ApplyNow</Link>
            </Button>
          )}
          {/* <UnorderedList marginLeft="50px">
            {single.job_snippet && <ListItem>{single.job_snippet}</ListItem>}
            {single.job_snippet_2 && <ListItem>{single.job_snippet_2}</ListItem>}
            {single.job_snippet_3 && <ListItem>{single.job_snippet_3}</ListItem>}
            </UnorderedList> */}

          <hr />
          <Box w="90%" m="auto" mt="40px" >
            {/**

               */}
            <Text fontSize="2xl" fontWeight="bold">
              Job Details
            </Text>
            {single.attribute_snippet && <Text fontWeight="300">Salary</Text>}
            {single.attribute_snippet && (
              <Text m="5px">{single.attribute_snippet}</Text>
            )}
            <Text fontWeight="300">Benefits & Perks</Text>
            <Text>Work from home, Provident Fund, Health insurance, Internet reimbursement</Text>
            <Text fontWeight="300">Job Type</Text>
            {single.category_2 && <Text>{single.category_2}</Text>}

          </Box>
          <hr/>
          <Box w="90%" m="auto" mt="40px">
                <Text fontSize="4xl" fontWeight="bold">Full Job Description</Text>
                <Text>Job Brief</Text>
                <Text>We are looking for an HR Executive to manage our company’s recruiting, learning and development and employee performance programs.</Text>
                <Text>HR Executive responsibilities include creating referral programs, updating HR policies and overseeing our hiring processes. To be successful in this role, you should have an extensive background in Human Resources departments and thorough knowledge of labor legislation.</Text>
                <Text>Ultimately, you will make strategic decisions for our company so that we hire, develop and retain qualified employees.</Text>
                <Text fontWeight="700">Responsibilities</Text>
                <UnorderedList marginLeft="50px">
                    <ListItem>Design compensation and benefits packages</ListItem>
                    <ListItem>Implement performance review procedures (e.g. quarterly/annual and 360° evaluations)</ListItem>
                    <ListItem>Develop fair HR policies and ensure employees understand and comply with them</ListItem>
                    <ListItem>Implement effective sourcing, screening and interviewing techniques</ListItem>
                    <ListItem>Assess training needs and coordinate learning and development initiatives for all employees</ListItem>
                </UnorderedList>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default SingleData;
