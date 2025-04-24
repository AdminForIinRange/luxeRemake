"use client";

import React from "react";


import Hero from "@/components/Hero";

import FAQ from "@/components/FAQ";

import { Box, HStack } from "@chakra-ui/react";

import ReactLenis from "lenis/react";
import Testimonials from "@/components/testimonials";
import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation";


const Home = () => {

  // const { user, setUser } = useUser();


  // useEffect(() => {
  //   const fetchUser = async () => {
  //     // Fetch the current user only if not already set
  //     if (!user) {
  //       const currentUser = await getCurrentUser();
  //       setUser(currentUser);
  //     }
  //     setLoading(false); // Mark loading as complete
      
  //   };

  //   fetchUser();
  // }, [user, setUser]);

 
 
  return (
    <>
    <ReactLenis root />

{/* <WaitingList /> */}


      <Hero />
{/* 
      <TestingCreateListingDB /> */}

<Testimonials />
   <HStack
        justify={"center"}
        align={"center"}
        w={"100%"}
        id="get-started-button"
        my={["50px", "50px", "50px", "50px", "50px", "50px"]}
      >
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <ScheduleConsultation />
      <HStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={"90%"} borderTop={"1px solid #e0e0e0"} />
      </HStack>
      <FAQ />
    

    </>
  );
};

export default Home;
