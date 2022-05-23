import {extendTheme} from '@chakra-ui/react'
import colors from './custom/colors'

const theme = extendTheme({
    colors,
    styles:{
        global: {
            body: {
                bg:"almostWhite" 
            }
        }
    },
    components: {
        Button: {
            baseStyle: {
                fontFamily: "Epilogue"
            },
            sizes: {
                md: {
                    fontSize: "18px"
                }
            },
            variants: {
                rounded: {
                  border:  "2px solid",
                  borderColor: "mediumGray",
                  bg: "almostWhite",
                  color: "mediumGray",
                  borderRadius: "2xl"
                },
                filled: {
                  color: "almostWhite",
                  bg: "almostBlack",
                  borderRadius: "2xl"  
                }
            }
        }
    }

})


export default theme