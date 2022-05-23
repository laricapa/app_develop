import React from 'react'
import {
    Flex,
    Box,
    Image,
    Menu,
    MenuButton,
    Link,
    Button
} from '@chakra-ui/react'

function ContainerNav(){
    return (
        <>
            <Flex justify="space-between">
                <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center"
                w="40%"
                height={100}
                >
                    <Box>
                    <Image maxW="full" src="./images/logo.svg" alt="logo" /> 
                    </Box>
                    <Menu>
                        <MenuButton fontFamily="Epilogue"
                        fontWeight="700"
                        color="mediumGray"
                        fontSize="18px"
                        >Featuares</MenuButton>    
                    </Menu>
                    <Menu>
                        <MenuButton fontFamily="Epilogue"
                        fontWeight="700"
                        color="mediumGray"
                        fontSize="18px">Company</MenuButton>    
                    </Menu>
                    <Link fontFamily="Epilogue"
                        fontWeight="700"
                        color="mediumGray"
                        fontSize="18px">Careers</Link>
                    <Link fontFamily="Epilogue"
                        fontWeight="700"
                        color="mediumGray"
                        fontSize="18px">About</Link>
                </Box>
                <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
                w="60%"
                h={100}
                >
                    <Link  mr={10} fontFamily="Epilogue"
                        fontWeight="700"
                        color="mediumGray"
                        fontSize="18px">Login</Link>
                    <Button mr={10} variant="rounded">Register</Button>
                </Box>
            </Flex>
        </>
    )
}

export default ContainerNav