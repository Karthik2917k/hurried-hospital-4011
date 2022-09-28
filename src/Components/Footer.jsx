import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Text as='b' fontSize='6xl' >Indeed</Text>
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Indeed. All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Explore Indeed</Text>
            <Link href={'#'}>Career Explorer</Link>
            <Link href={'#'}>Career Advice</Link>
            <Link href={'#'}>Browse Jobs</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Blog</Text>
            <Link href={'#'}>Salaries</Link>
            <Link href={'#'}>Indded Events</Link>
            <Link href={'#'}>Work at Indeed</Link>
            <Link href={'#'}>Countries</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>FAQ</Text>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Esg at Indeed</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Follow Us</Text>
            <Link href={'https://www.facebook.com/Indeed.co.in/?brand_redir=5944538380&from=gnav-title-webapp'}>Facebook</Link>
            <Link href={'https://twitter.com/Indeed?from=gnav-title-webapp'}>Twitter</Link>
            <Link href={'https://www.instagram.com/indeedworks/?from=gnav-title-webapp'}>Instagram</Link>
            <Link href={'https://www.youtube.com/user/IndeedJobs'}>Youtube</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}