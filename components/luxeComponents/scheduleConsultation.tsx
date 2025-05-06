// import {
//   Box,
//   HStack,
//   Text,
// } from "@chakra-ui/react";
// import {
//   DialogContent,
//   DialogCloseTrigger,
//   DialogRoot,
// } from "@/components/chakra-snippets/dialog";
// import React, { useState } from "react";
// import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

// const ScheduleConsultation = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   return (
//     <>









// <Box
      
//         py={["60px", "80px", "100px"]}
//       >
//         <Box
//           maxWidth="1200px"
//           mx="auto"
//           px={["20px", "40px", "60px"]}
//         >
//           <Box
//             display="flex"
//             flexDirection={["column", "column", "row"]}
//             alignItems="center"
//             justifyContent="space-between"
//             gap={["40px", "40px", "60px"]}
//           >
//             {/* Text Content */}
//             <Box
//               width={["100%", "100%", "50%"]}
//             >
//               <Text
//                 fontSize={["28px", "32px", "36px"]}
//                 fontWeight={700}
//                 fontFamily="Raleway"
//                 color="#111"
//                 mb="20px"
//                 lineHeight="1.2"
//               >
//                 Ready to start your design journey?
//               </Text>
//               <Text
//                 fontSize={["15px", "16px", "17px"]}
//                 color="#555"
//                 mb="30px"
//                 lineHeight="1.6"
//               >
//                 Contact us today to discuss what makes your property unique. 
//                 Our team is ready to provide you with a tailored solution to enhance 
//                 your property's appeal and functionality.
//               </Text>
              
//               {/* Contact Methods */}
//               <Box
//                 display="flex"
//                 flexDirection="column"
//                 gap="16px"
//                 mb="30px"
//               >
//                 <Box
//                   display="flex"
//                   alignItems="center"
//                   gap="12px"
//                 >
//                   <Box
//                     width="40px"
//                     height="40px"
//                     borderRadius="full"
//                     bg="#eee"
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="center"
//                   >
//                     <Mail size={18} color="#333" />
//                   </Box>
//                   <Text
//                     fontSize="16px"
//                     color="#333"
//                   >
//                     hello@luxeproperties.com
//                   </Text>
//                 </Box>
                
//                 <Box
//                   display="flex"
//                   alignItems="center"
//                   gap="12px"
//                 >
//                   <Box
//                     width="40px"
//                     height="40px"
//                     borderRadius="full"
//                     bg="#eee"
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="center"
//                   >
//                     <Phone size={18} color="#333" />
//                   </Box>
//                   <Text
//                     fontSize="16px"
//                     color="#333"
//                   >
//                     +1 (555) 123-4567
//                   </Text>
//                 </Box>
                
//                 <Box
//                   display="flex"
//                   alignItems="center"
//                   gap="12px"
//                 >
//                   <Box
//                     width="40px"
//                     height="40px"
//                     borderRadius="full"
//                     bg="#eee"
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="center"
//                   >
//                     <MessageCircle size={18} color="#333" />
//                   </Box>
//                   <Text
//                     fontSize="16px"
//                     color="#333"
//                   >
//                     Live chat available 9am-5pm EST
//                   </Text>
//                 </Box>
//               </Box>
              
//               <Box
//                 display="inline-flex"
//                 alignItems="center"
//                 bg="#111"
//                 color="white"
//                 py="14px"
//                 px="28px"
//                 borderRadius="30px"
//                 fontWeight={600}
//                 fontSize="16px"
//                 cursor="pointer"
//                 transition="all 0.3s ease"
//                 _hover={{
//                   transition: "all 0.2s ease-in-out",
//                   scale: 1.1,
//                   fontWeight: "700",
//                   px: "80px",
//                   bg: "balck",
//                 }}
//                 onClick={() => setIsDialogOpen(true)}
//               >
//                 <Text mr="8px">Get Started</Text>
//                 <ArrowRight size={16} />
//               </Box>
//             </Box>
            
//             {/* Image */}
//             <Box
//               width={["100%", "100%", "50%"]}
//               borderRadius="16px"
//               overflow="hidden"
//               boxShadow="0 20px 40px rgba(0,0,0,0.1)"
//             >
//               <Box
//                 backgroundImage="url(https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg)"
//                 backgroundSize="cover"
//                 backgroundPosition="center"
//                 width="100%"
//                 paddingBottom="75%" /* 4:3 Aspect Ratio */
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Box>








//       <DialogRoot
//         size={"cover"}
//         open={isDialogOpen}
//         onOpenChange={({ open }) => setIsDialogOpen(open)}
//       >
//         <DialogContent
//           p={0}
//           bg={"white"}
//           color={"white"}
//           rounded={"10px"}
//         >
//           <iframe
//             loading="lazy"
//             className="calendly-frame"
//             src="https://calendly.com/luxemanagements-info"
//           ></iframe>

//           <DialogCloseTrigger
//             rounded="full"
//             color="black"
//             w="40px"
//             h="40px"
//             border="1px black solid"
//             position="absolute"
//             top="10px"
//             right="10px"
//             onClick={() => setIsDialogOpen(false)}
//             _focus={{ outline: "none" }}
//           />
//         </DialogContent>
//       </DialogRoot>

//       <style jsx>{`
//         .calendly-frame {
//           width: 100%;
//           height: 800px;
//           border: none;
//           border-radius: 10px;
//         }
//       `}</style>
//     </>
//   );
// };

// export default ScheduleConsultation;


import {
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";
import {
  DialogContent,
  DialogCloseTrigger,
  DialogRoot,
} from "@/components/chakra-snippets/dialog";
import React, { useState } from "react";

const ScheduleConsultation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <HStack
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
        justify={"center"}
        align={"center"}
        w={"100%"}
        transition={"all 0.2s ease-in-out"}
        zIndex={3}
        id="get-started-button"
      >
        <Box
          bg={"#0A0F29"}
          w={"90%"}
          h={"100%"}
          borderRadius={"30px"}
          p={"25px"}
          py={"35px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.1)"}
          textAlign={"center"}
        >
          <Text
            color={"white"}
            fontWeight={"700"}
            fontSize={["30px", "30px", "30px", "60px", "60px", "60px"]}
            fontFamily={"raleway"}
            mb={"10px"}
          >
            Ready to transform your property management?
          </Text>
          <Text
            color={"white"}
            fontSize={["14px", "14px", "14px", "26px", "26px", "26px"]}
            fontFamily={"raleway"}
          >
            Get a full consultation, market analysis in under 24 hours for free
          </Text>

          <HStack
            justify={"center"}
            align={"center"}
            w={"100%"}
            transition={"all 0.2s ease-in-out"}
            zIndex={3}
          >
            <Box
              my={"25px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"15px"}
              fontFamily={"raleway"}
              transition={"all 0.2s ease-in-out"}
              cursor={"pointer"}
              _hover={{
                transition: "all 0.2s ease-in-out",
                scale: 1.1,
                fontWeight: "700",
                px: "80px",
                bg: "white",
              }}
              p={4}
              bg={"White"}
              color={"black"}
              rounded={"30px"}
              px={"12"}
              fontWeight={"500"}
              onClick={() => setIsDialogOpen(true)}
            >
              Schedule a consultation
            </Box>
          </HStack>
        </Box>
      </HStack>

      <DialogRoot
        size={"cover"}
        open={isDialogOpen}
        onOpenChange={({ open }) => setIsDialogOpen(open)}
      >
        <DialogContent
          p={0}
          bg={"white"}
          color={"white"}
          rounded={"10px"}
        >
          <iframe
            loading="lazy"
            className="calendly-frame"
            src="https://calendly.com/luxemanagements-info"
          ></iframe>

          <DialogCloseTrigger
            rounded="full"
            color="black"
            w="40px"
            h="40px"
            border="1px black solid"
            position="absolute"
            top="10px"
            right="10px"
            onClick={() => setIsDialogOpen(false)}
            _focus={{ outline: "none" }}
          />
        </DialogContent>
      </DialogRoot>

      <style jsx>{`
        .calendly-frame {
          width: 100%;
          height: 800px;
          border: none;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default ScheduleConsultation;
