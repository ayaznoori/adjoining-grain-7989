import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
   
    Box,
    VStack,
    Text,
    HStack
  } from '@chakra-ui/react';
  
import { useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../contexts/Authcontext';
import { Cartcontext } from '../contexts/Cartcontext';
import Cartitemmini from './Cartitemmini';
export const Cartdrawer=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {isAuth}=useContext(Authcontext);
    const {cartitem,setcartitem}=useContext(Cartcontext);
    const navigate=useNavigate();
    return (
      <>
        <Button onClick={onOpen} bgColor='white' _hover={'none'}>
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z" fill="black"></path></svg>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
         
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <HStack> <DrawerHeader>Bag </DrawerHeader>&nbsp; <Text>{cartitem.length} item</Text></HStack>
              <hr/>
            <DrawerBody>
                {!isAuth || cartitem.length<1?<Box justifyContent='center'>
                  <VStack>
                      <svg xmlns="http://www.w3.org/2000/svg" width="182" height="186" viewBox="0 0 182 186" fill="none"><g clip-path="url(#clip0_3039_24342)"><path d="M67.4009 176.307L9.61955 118.526C-3.20961 105.697 -3.20961 84.6433 9.61955 71.7138L67.4009 13.9325C80.2301 1.10332 101.284 1.10332 114.213 13.9325L171.995 71.7138C184.824 84.543 184.824 105.597 171.995 118.526L114.213 176.307C101.284 189.237 80.3304 189.237 67.4009 176.307Z" fill="#FDE3E0"></path><path d="M97.1534 135.613C96.5243 135.54 95.886 135.468 95.2568 135.404C95.3207 136.398 96.3328 147.804 108.104 149.518L108.378 147.658C98.667 146.245 97.3266 137.528 97.1534 135.613Z" fill="#45AAAA"></path><path d="M87.862 168.092L86.8772 166.642C91.2083 163.706 93.2599 159.366 92.9863 153.731C92.7766 149.436 91.2265 145.962 91.2083 145.926L92.804 145.197C92.8678 145.352 99.4602 160.223 87.862 168.092Z" fill="white"></path><path d="M101.676 168.092C103.166 168.092 104.375 166.884 104.375 165.393C104.375 163.903 103.166 162.694 101.676 162.694C100.185 162.694 98.9768 163.903 98.9768 165.393C98.9768 166.884 100.185 168.092 101.676 168.092Z" fill="white"></path><path d="M81.3699 154.916C82.8604 154.916 84.0688 153.708 84.0688 152.217C84.0688 150.727 82.8604 149.518 81.3699 149.518C79.8793 149.518 78.6709 150.727 78.6709 152.217C78.6709 153.708 79.8793 154.916 81.3699 154.916Z" fill="#EC8BB9"></path><path d="M79.724 113.756C81.5821 113.258 82.6349 111.163 82.0756 109.076C81.5163 106.99 79.5566 105.702 77.6986 106.2C75.8405 106.698 74.7876 108.793 75.347 110.88C75.9063 112.967 77.8659 114.254 79.724 113.756Z" fill="#BCBEC0"></path><path d="M104.362 107.156C106.221 106.658 107.273 104.562 106.714 102.476C106.155 100.389 104.195 99.1011 102.337 99.5991C100.479 100.097 99.4261 102.193 99.9854 104.279C100.545 106.366 102.504 107.654 104.362 107.156Z" fill="#BCBEC0"></path><path d="M100.408 132.395L98.8857 132.805C91.4363 134.793 83.7315 130.644 81.2969 123.331L77.0935 110.694L80.5128 109.572L84.698 122.192C86.549 127.69 92.3481 130.817 97.9557 129.331L99.4784 128.921C104.539 127.562 107.539 122.365 106.18 117.304C106.135 117.122 106.08 116.949 106.016 116.775L101.794 104.074L105.214 102.952L109.435 115.636C111.706 122.502 107.986 129.905 101.12 132.185C100.883 132.258 100.646 132.331 100.408 132.395Z" fill="#BCBEC0"></path><path d="M49.5295 63.0152L88.8011 50.6693C98.1654 47.7241 108.15 52.9306 111.095 62.2948L125.073 106.736L51.8819 129.75L37.9039 85.3089C34.9587 75.9446 40.1652 65.9603 49.5295 63.0152Z" fill="#E04D4C"></path><path d="M64.4193 58.3376L100.235 47.0767C110.557 43.8307 121.553 49.566 124.799 59.8876L138.23 102.597L65.0394 125.611L51.6084 82.9017C48.3624 72.58 54.0976 61.5836 64.4193 58.3376Z" fill="#F37E7C"></path><path d="M89.5282 110.008C91.3863 109.51 92.4391 107.415 91.8798 105.328C91.3205 103.241 89.3608 101.954 87.5028 102.452C85.6447 102.95 84.5918 105.045 85.1512 107.132C85.7105 109.218 87.6702 110.506 89.5282 110.008Z" fill="black"></path><path d="M114.164 103.399C116.022 102.901 117.075 100.805 116.516 98.7186C115.957 96.6319 113.997 95.344 112.139 95.8421C110.281 96.3401 109.228 98.4354 109.787 100.522C110.346 102.609 112.306 103.897 114.164 103.399Z" fill="black"></path><path d="M110.201 128.638L108.678 129.048C101.229 131.036 93.5242 126.887 91.0897 119.575L86.8862 106.937L90.3055 105.815L94.4907 118.435C96.3417 123.933 102.141 127.061 107.748 125.574L109.271 125.164C114.332 123.805 117.332 118.608 115.973 113.548C115.927 113.365 115.873 113.192 115.809 113.019L111.587 100.317L115.006 99.1957L119.228 111.879C121.499 118.745 117.778 126.149 110.912 128.428C110.675 128.501 110.438 128.574 110.201 128.638Z" fill="black"></path><path d="M53.1403 14.6528C53.7968 14.1057 74.5222 0 74.5222 0L78.8715 21.6555L90.8071 14.3975L82.227 67.6471L75.1513 37.3204L60.2159 45.1254L53.1403 14.6528Z" fill="white"></path><path d="M103.472 4.32196L121.088 10.0755L95.6489 38.9342L103.472 4.32196Z" fill="white"></path></g><defs><clipPath id="clip0_3039_24342"><rect width="181.605" height="186" fill="white"></rect></clipPath></defs></svg>
                   <br/>
                   <br/>
                   <Text align='center' fontSize={28} fontWeight={500}>Your Shopping Bag is Empty</Text>
                   </VStack><br/><br/>
                   <VStack><Button onClick={onClose} color='white' bgColor='rgb(252,39,121)'>Continue Shopping</Button> </VStack>
                </Box> : <VStack>
                      {cartitem.length>1?cartitem.map((ele,i)=>{
                       return <Cartitemmini ele={ele} key={i}/>
                      }): <Cartitemmini ele={cartitem[0]} key={cartitem[0].id}/>} 
                    <Box border='1px solid rgb(243,243,243)' width={'100%'}  >
                      <VStack width={"100%"} padding={2}>
                       <Text fontWeight='bold'width={"100%"} > Price Detail</Text>  
                       <HStack width={"100%"} justifyContent='space-between'><Text > Bag MRP</Text> <Text> ₹{cartitem.length>1?cartitem.reduce((a,b)=>a.price+b.price):cartitem[0].price}</Text>  </HStack>
                       <HStack width={"100%"} justifyContent='space-between'><Text > Bag Discount</Text><Text><strike> ₹{cartitem.length>1?cartitem.reduce((a,b)=>(a.price-a.offprice)+(b.price-b.offprice)):cartitem[0].price-cartitem[0].offprice}</strike></Text> </HStack> 
                       <HStack width={"100%"} justifyContent='space-between'><Text > Shipping</Text> <Text>  Free</Text> </HStack>
                       <hr/>
                       <HStack width={"100%"} justifyContent='space-between' fontWeight={500}><Text  >You Pay</Text> <Text>₹{cartitem.length>1?cartitem.reduce((a,b)=>a.offprice+b.offprice):cartitem[0].offprice}</Text> </HStack>
                       </VStack>
                    </Box> 
                    </VStack>
         
                
                }
            </DrawerBody>
            {isAuth && cartitem.length>0?<DrawerFooter>
              <Button color='white' bgColor='rgb(252,39,121)' onClick={()=>{navigate('/payment'); onClose()}}>Proceed</Button>
            </DrawerFooter>:""}
          </DrawerContent>
        </Drawer>
      </>
    )
  }