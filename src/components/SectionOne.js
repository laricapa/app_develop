import React from 'react'
import {
   Flex,
   Box,
   Image,
   Heading,
   Text,
   Button
    
} from '@chakra-ui/react'

function SectionOne(){
    return (
        <>
        <Flex>
            <Box w="60%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            >
              <Heading as="h1" fontFamily="Epilogue" fontWeight="700" fontSize="4.0rem" mb={10}>
              Make remote work
            </Heading>
             <Text
             
             fontFamily="Epilogue"
             fontWeight="500"
             fontSize="18px"
             color="mediumGray"
             pr={28}
             mb={10}
             >
             Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.  
                 </Text>
            <Button size="lg"  maxW="30%" variant="filled">
                Learn more
                </Button>     
            </Box>
            <Box w="40%">
                <Image src="./images/image-hero-desktop.png"maxW="100%" alt="hero desktop" />
            </Box>
        </Flex>
        </>
    )
}

export default SectionOne