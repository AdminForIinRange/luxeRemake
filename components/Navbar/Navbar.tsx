"use client";

import React, { useState, useRef, useCallback, memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import luxeLogo from "@/public/png/LuxeLogo.png";

const Navbar = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const timeoutRef = useRef<any>(null);
  
  // Simulate active page for demo purposes
  const activePage = `/`;

  const Dropdown = memo(({ items, category }: { items: { label: string; link: string; description?: string }[]; category: string }) => (
    <Box
      position="absolute"
      top="calc(100% + 16px)"
      left="50%"
      transform="translateX(-50%)"
      bg="white"
      boxShadow="0 8px 24px rgba(0, 0, 0, 0.08)"
      border={"1px solid #F5F5F5"}
      borderRadius="8px"
      w="320px"
      zIndex={10}
      opacity={activeDropdown === category ? 1 : 0}
      visibility={activeDropdown === category ? "visible" : "hidden"}
      transition="all 0.25s ease-in-out"
      overflow="hidden"
      onMouseEnter={() => clearTimeout(timeoutRef.current)}
      onMouseLeave={() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 300);
      }}
      
    >
      
      <Box maxH="320px" overflowY="auto">
        {items.map((item, index) => (
          <Box
            key={index}
            p="16px 20px"
            cursor="pointer"
            transition="all 0.2s ease"
            _hover={{ bg: "#F9F9F9" }}
            onClick={() => router.push(item.link)}
            borderBottom={index !== items.length - 1 ? "1px solid #F5F5F5" : "none"}
          >
            <Text fontSize="15px" fontWeight="500" mb="4px">
              {item.label}
            </Text>
            {item.description && (
              <Text fontSize="13px" color="#666" lineHeight="1.4">
                {item.description}
              </Text>
            )}
          </Box>
        ))}
      </Box>
      <Box p="12px 20px" bg="#F9F9F9" borderTop="1px solid #F5F5F5">
        <Text 
          fontSize="13px" 
          fontWeight="500" 
          color="#555"
          cursor="pointer"
          _hover={{ color: "#000" }}
          onClick={() => router.push(`/${category}`)}
        >
          View all {category} →
        </Text>
      </Box>
    </Box>
  ));
  Dropdown.displayName = "Dropdown";

  const handleEnter = useCallback((name: string) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
    setHoveredItem(name);
  }, []);

  const handleLeave = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
    }, 300);
  }, []);


  const handleItemHover = useCallback((name: string) => {
    setHoveredItem(name);
  }, []);

  const handleItemLeave = useCallback(() => {
    setHoveredItem(null);
  }, []);

  const handleNavigate = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  return (
    <Box 
      w="100%" 
      position="sticky"
      top="0"
      zIndex="100"
      bg="rgba(255, 255, 255, 0.9)"
      backdropBlur="md"
backdropFilter={"blur(10px)"}

    >
      {/* Top Bar with Contact Info */}
      <Box 
        w="100%" 
        py="8px" 
            bg="rgba(255, 255, 255, 0.9)"
      backdropBlur="md"
        borderBottom="1px solid #F0F0F0"
        display={{ base: "none", md: "block" }}
      >
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          maxW="1400px" 
          mx="auto"
          px="40px"
        >
          <Box display="flex" alignItems="center">
            <Text fontSize="13px" color="#666" mr="24px">
              Luxury Property Management
            </Text>
            <Text fontSize="13px" color="#666">
              info@luxemanagement.com
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Text fontSize="13px" color="#666" mr="24px">
              +1 (800) 555-1234
            </Text>
            <Text 
              fontSize="13px" 
              fontWeight="500" 
              color="#333"
              cursor="pointer"
              _hover={{ color: "#000" }}
              onClick={() => handleNavigate("/contact")}
            >
              Request a Quote
            </Text>
          </Box>
        </Box>
      </Box>
      
      {/* Main Navigation */}
      <Box 
        w="100%" 
        py="10px" 
        px="40px" 
       
        borderBottom="1px solid #F0F0F0"



        transition="all 0.3s ease"
      >
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          maxW="1400px" 
          mx="auto"
        >
          {/* Logo Section */}
          <Box 
            display="flex" 
            alignItems="center" 
            cursor="pointer" 
            onClick={() => handleNavigate("/")}
            position="relative"
          >
            <Box 
              w="66px" 
              h="66px" 
              mr="0px"
              position="relative"
              overflow="hidden"
            >
              <Image src={luxeLogo || "/placeholder.svg"} alt="Luxe Management Logo" priority />
            </Box>
            <Box>
              <Text 
                fontSize="20px" 
                fontWeight="600" 
                letterSpacing="0.2px"
                fontFamily="raleway"
                color="#222222"
                lineHeight="1.1"
              >
                Luxe Management
              </Text>
              <Text
                fontSize="12px"
                color="#777777"
                letterSpacing="0.5px"
                fontFamily="raleway"
                textTransform="uppercase"
              >
                Premium Property Services
              </Text>
            </Box>
          </Box>

          {/* Navigation Items */}
          <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="flex-end"
          >
            {[
              { name: "About", path: "/about", hasDropdown: true, items: [
                { label: "Our Story", link: "/about/#story", description: "Learn about our journey and values" },
                { label: "Our Team", link: "/about/#team", description: "Meet the experts behind Luxe Management" },
                { label: "Testimonials", link: "/about/#testimonials", description: "What our clients say about us" },
                { label: "Our Journey", link: "/about/journey", description: "See how Luxe Management has evolved" },
              ]},
              { name: "News", path: "/news", hasDropdown: false },
              { name: "Services", path: "/services", hasDropdown: true, items: [
                { label: "Property Management", link: "/services/property-management", description: "Full-service management for luxury properties" },
                { label: "Cleaning & Linen", link: "/services/cleaning-and-linen", description: "Premium cleaning and linen services" },
                { label: "Furnishing & Styling", link: "/services/furnishing-and-styling", description: "Expert interior design and furnishing" },
                { label: "Photography", link: "/services/photography", description: "Professional property photography" },
              ]},
              { name: "Pricing", path: "/pricing", hasDropdown: false },
              { name: "Gallery", path: "/gallery", hasDropdown: false },
              { name: "Contact", path: "/contact", hasDropdown: false },
            ].map((item) => (
              <Box
                key={item.name}
                position="relative"
                mx="18px"
                onMouseEnter={() => {
                  handleItemHover(item.name.toLowerCase());
                  if (item.hasDropdown) handleEnter(item.name.toLowerCase());
                }}
                onMouseLeave={() => {
                  handleItemLeave();
                  if (item.hasDropdown) handleLeave();
                }}
              >
                <Box
                  cursor="pointer"
                  onClick={() => handleNavigate(item.path)}
                  position="relative"
                  pb="4px"
                  role="group"
                >
                  <Text
                    fontSize="16px"
                    fontWeight={activePage === item.path ? "600" : "500"}
                    fontFamily="raleway"
                    transition="all 0.2s ease"
                    color={activePage === item.path ? "#000000" : 
                          hoveredItem === item.name.toLowerCase() ? "#000000" : "#444444"}
                    letterSpacing="0.3px"
                  >
                    {item.name}
                  </Text>
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width={activePage === item.path ? "100%" : 
                          hoveredItem === item.name.toLowerCase() ? "70%" : "0%"}
                    height="2px"
                    bg={activePage === item.path ? "#000000" : "#555555"}
                    transition="all 0.3s ease"
                  />
                </Box>
                {item.hasDropdown && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="50%"
                    transform="translateX(-50%)"
                    width="16px"
                    height="16px"
                    pointerEvents="none"
                    opacity={activeDropdown === item.name.toLowerCase() ? 1 : 0}
                    visibility={activeDropdown === item.name.toLowerCase() ? "visible" : "hidden"}
                    transition="all 0.25s ease-in-out"
                    zIndex="101"
                  >
                    <Box
                      position="absolute"
                      top="8px"
                      left="0"
                      width="16px"
                      height="16px"
                      bg="white"
                      transform="rotate(45deg)"
                      boxShadow="0 0 10px rgba(0, 0, 0, 0.05)"
                    />
                  </Box>
                )}
                {item.hasDropdown && (
                  <Dropdown 
                    items={item.items || []} 
                    category={item.name.toLowerCase()} 
                  />
                )}
              </Box>
            ))}
            
            {/* Call to Action Button */}
            <Box
              ml="24px"
              bg="#222"
              color="white"
              px="20px"
              py="10px"
              borderRadius="4px"
              cursor="pointer"
              transition="all 0.2s ease"
              _hover={{ bg: "#000" }}
              onClick={() => handleNavigate("/contact")}
            >
              <Text fontSize="14px" fontWeight="500">
                Get a Quote
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;