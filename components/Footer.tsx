import React from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  Group,
  HStack,
  Accordion,
  Span,
} from "@chakra-ui/react";
// import { InstagramLogoIcon } from "@radix-ui/react-icons";
import LuxeLogo from "@/public/png/LuxeLogo.png";
import Image from "next/image";
const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
];
const Footer = () => {
  return (
    <>
      <HStack my={"50px"}  justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>

      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a
                href="#"
                className="flex items-center"
              >
                <HStack fontSize={"30px"}>
                  <Box
                    w={"70px"}
                    h={"100%"}
                    cursor={"pointer"}
                    _hover={{
                      scale: 1.1,
                      fontWeight: "700",
                    }}
                    transition={"all 0.2s ease-in-out"}
                  >
                    <Image src={LuxeLogo} alt="logo" />
                  </Box>
                  <Text fontFamily={"raleway"} fontWeight={"700"}>
                    Luxe Management
                  </Text>
                </HStack>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline"
                    >
                      Luxe Managements
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:luxemanagements.info@gmail.com?subject=I'm%20interested%20in%20your%20services.`}
                      className="hover:underline"
                    >
                     luxemanagements.info
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/luxemanagements/"
                      className="hover:underline "
                    >
                    Instagram
                    </a>
                  </li>
                
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a
                href="#"
                className="hover:underline"
              >
                Luxe Managements™
              </a>
              . All Rights Reserved.
            </span>
            
           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
