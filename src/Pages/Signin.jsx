import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../AuthhContext/AuthContext';
export default function Signin() {
  let {auth,setAuth}=useContext(Authcontext);
  console.log(auth)
  let navigate=useNavigate();
  
 const[email,setEmail]=useState("");
 const[password,setPassword]=useState("");
 const [data,setData]=useState([]);
 const handleSubmit = ()=>{
  axios.get(`http://localhost:8080/users?email=${email}&password=${password}`)
  .then(res=>setData(res.data))
  .catch(err=>console.log(err))
  .finally(console.log("completed"))
console.log(data)
  if(data.length>0){
    setAuth(true);
    navigate('/')
  }
 }
  useEffect(()=>{
    if(auth){
      navigate('/')
    }
  })
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      flexDirection="column"
      bg={useColorModeValue('gray.100', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                
              </Stack>
              <Button
              onClick={handleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} >
                Sign in
              </Button>
              <Text>Still Your not register please click on below button...</Text>
              <Link textAlign={"center"} textDecoration={'none'} href="signup"><Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign Up
              </Button></Link>
            </Stack>
          </Stack>
          
        </Box>
      </Stack>
      
    </Flex>
  );
}
