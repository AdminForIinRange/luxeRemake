import { Box, Text } from "@chakra-ui/react"
import { Search, ShoppingBag, User, Menu, ChevronRight, Heart, Star } from "lucide-react"

const Store = () => {
  return (
    <>
      {/* Main Container */}
      <Box width="100%" maxWidth="1200px" mx="auto" px={{ base: "16px", md: "24px" }}>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="20px"
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          {/* Logo */}
          <Box>
            <Text fontSize="24px" fontWeight="700" letterSpacing="-0.5px">
              RENTAL ESSENTIALS
            </Text>
          </Box>

          {/* Navigation - Desktop */}
          <Box display={{ base: "none", md: "flex" }} gap="32px">
            {["Home", "Bedding", "Linens", "Furniture", "Cleaning", "Guest Amenities"].map((item) => (
              <Text key={item} fontSize="15px" fontWeight="500" cursor="pointer" _hover={{ color: "blue.500" }}>
                {item}
              </Text>
            ))}
          </Box>

          {/* Icons */}
          <Box display="flex" alignItems="center" gap="16px">
            <Box display={{ base: "none", md: "flex" }} gap="16px">
              <Box
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="40px"
                height="40px"
              >
                <Search size={20} />
              </Box>
              <Box
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="40px"
                height="40px"
              >
                <Heart size={20} />
              </Box>
              <Box
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="40px"
                height="40px"
              >
                <User size={20} />
              </Box>
            </Box>
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40px"
              height="40px"
              bg="black"
              color="white"
              borderRadius="full"
            >
              <ShoppingBag size={18} />
            </Box>
            <Box display={{ base: "flex", md: "none" }} cursor="pointer">
              <Menu size={24} />
            </Box>
          </Box>
        </Box>

        {/* Hero Section */}
        <Box mt="40px" display="flex" flexDirection={{ base: "column", md: "row" }} gap="24px">
          {/* Main Feature */}
          <Box
            flex="2"
            height={{ base: "300px", md: "500px" }}
            bg="gray.100"
            borderRadius="16px"
            position="relative"
            overflow="hidden"
          >
            <Box position="absolute" bottom="0" left="0" p="32px" width="100%">
              <Text fontSize={{ base: "24px", md: "32px" }} fontWeight="700" mb="8px">
                Premium Bedding Collection
              </Text>
              <Text fontSize={{ base: "14px", md: "16px" }} mb="16px" maxWidth="80%">
                Luxury quilts and linens that will delight your guests and earn you 5-star reviews
              </Text>
              <Box
                display="flex"
                alignItems="center"
                width="fit-content"
                cursor="pointer"
                _hover={{ color: "blue.500" }}
              >
                <Text fontWeight="600" fontSize="15px" mr="4px">
                  Shop Bedding
                </Text>
                <ChevronRight size={16} />
              </Box>
            </Box>
          </Box>

          {/* Side Features */}
          <Box flex="1" display="flex" flexDirection="column" gap="24px">
            <Box
              height={{ base: "200px", md: "238px" }}
              bg="gray.100"
              borderRadius="16px"
              position="relative"
              overflow="hidden"
            >
              <Box position="absolute" bottom="0" left="0" p="24px">
                <Text fontSize="20px" fontWeight="700" mb="8px">
                  Cleaning Essentials
                </Text>
                <Box
                  display="flex"
                  alignItems="center"
                  width="fit-content"
                  cursor="pointer"
                  _hover={{ color: "blue.500" }}
                >
                  <Text fontWeight="600" fontSize="14px" mr="4px">
                    View Products
                  </Text>
                  <ChevronRight size={14} />
                </Box>
              </Box>
            </Box>

            <Box
              height={{ base: "200px", md: "238px" }}
              bg="gray.100"
              borderRadius="16px"
              position="relative"
              overflow="hidden"
            >
              <Box position="absolute" bottom="0" left="0" p="24px">
                <Text fontSize="20px" fontWeight="700" mb="8px">
                  Guest Amenities
                </Text>
                <Box
                  display="flex"
                  alignItems="center"
                  width="fit-content"
                  cursor="pointer"
                  _hover={{ color: "blue.500" }}
                >
                  <Text fontWeight="600" fontSize="14px" mr="4px">
                    View Collection
                  </Text>
                  <ChevronRight size={14} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Categories Section */}
        <Box mt="64px">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="24px">
            <Text fontSize="22px" fontWeight="700">
              Shop by Category
            </Text>
            <Box display="flex" alignItems="center" cursor="pointer" _hover={{ color: "blue.500" }}>
              <Text fontWeight="500" fontSize="14px" mr="4px">
                View All
              </Text>
              <ChevronRight size={16} />
            </Box>
          </Box>

          <Box display="flex" flexWrap="wrap" gap="16px">
            {[
              "Quilts & Bedding",
              "Towels & Linens",
              "Furniture",
              "Cleaning Supplies",
              "Guest Amenities",
              "Kitchen Essentials",
              "Bathroom Accessories",
              "Smart Home",
            ].map((category) => (
              <Box
                key={category}
                flex={{ base: "1 0 calc(50% - 8px)", md: "1 0 calc(25% - 12px)" }}
                height="180px"
                bg="gray.100"
                borderRadius="12px"
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                p="16px"
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Text fontSize="16px" fontWeight="600">
                  {category}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Featured Products */}
        <Box mt="64px">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="24px">
            <Text fontSize="22px" fontWeight="700">
              Bestselling Products
            </Text>
            <Box display="flex" alignItems="center" cursor="pointer" _hover={{ color: "blue.500" }}>
              <Text fontWeight="500" fontSize="14px" mr="4px">
                View All
              </Text>
              <ChevronRight size={16} />
            </Box>
          </Box>

          <Box display="flex" flexWrap="wrap" gap="24px">
            {[
              { name: "Premium Cotton Quilt Set", price: "$129", },
              { name: "Luxury Bath Towel Bundle", price: "$89", },
              { name: "Smart Lock for Rentals", price: "$199",},
              { name: "Professional Cleaning Kit", price: "$79", },
            ].map((product, index) => (
              <Box
                key={index}
                flex={{ base: "1 0 calc(50% - 12px)", md: "1 0 calc(25% - 18px)" }}
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Box height={{ base: "200px", md: "280px" }} bg="gray.100" borderRadius="12px" mb="12px" />
                <Box display="flex" justifyContent="space-between" mb="4px">
                  <Text fontSize="15px" fontWeight="600">
                    {product.name}
                  </Text>
                  <Text fontSize="15px" fontWeight="700">
                    {product.price}
                  </Text>
                </Box>
                <Box display="flex" alignItems="center">
                  
                
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Host Favorites Section */}
        <Box mt="64px">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="24px">
            <Text fontSize="22px" fontWeight="700">
              Host Favorites
            </Text>
            <Box display="flex" alignItems="center" cursor="pointer" _hover={{ color: "blue.500" }}>
              <Text fontWeight="500" fontSize="14px" mr="4px">
                View All
              </Text>
              <ChevronRight size={16} />
            </Box>
          </Box>

          <Box display="flex" flexWrap="wrap" gap="24px">
            {[
              { name: "Hypoallergenic Pillow Set", price: "$59" },
              { name: "Digital Keypad Safe", price: "$79" },
              { name: "Welcome Basket Essentials", price: "$49"  },
              { name: "Eco-Friendly Cleaning Bundle", price: "$65"},
            ].map((product, index) => (
              <Box
                key={index}
                flex={{ base: "1 0 calc(50% - 12px)", md: "1 0 calc(25% - 18px)" }}
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Box height={{ base: "200px", md: "280px" }} bg="gray.100" borderRadius="12px" mb="12px" />
                <Box display="flex" justifyContent="space-between" mb="4px">
                  <Text fontSize="15px" fontWeight="600">
                    {product.name}
                  </Text>
                  <Text fontSize="15px" fontWeight="700">
                    {product.price}
                  </Text>
                </Box>
               
              </Box>
            ))}
          </Box>
        </Box>

        {/* Host Tips Section */}
        <Box mt="80px" mb="40px" bg="gray.100" borderRadius="16px" p={{ base: "32px", md: "48px" }}>
          <Text fontSize={{ base: "24px", md: "28px" }} fontWeight="700" mb="24px">
            Hosting Tips & Guides
          </Text>

          <Box display="flex" flexWrap="wrap" gap="24px">
            {[
              { title: "Essential Amenities Every Airbnb Should Have", type: "Guide" },
              { title: "Quick Turnover Cleaning Checklist", type: "Checklist" },
              { title: "How to Earn Consistent 5-Star Reviews", type: "Article" },
            ].map((item, index) => (
              <Box
                key={index}
                flex={{ base: "1 0 100%", md: "1 0 calc(33.33% - 16px)" }}
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Box height="160px" bg="white" borderRadius="12px" mb="12px" />
                <Box display="flex" justifyContent="space-between" mb="4px">
                  <Text fontSize="16px" fontWeight="600">
                    {item.title}
                  </Text>
                </Box>
                <Text fontSize="14px" color="gray.600">
                  {item.type}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Newsletter Section */}
        <Box
          mt="40px"
          mb="64px"
          bg="gray.100"
          borderRadius="16px"
          p={{ base: "32px", md: "48px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Text fontSize={{ base: "24px", md: "28px" }} fontWeight="700" mb="16px">
            Join Our Host Community
          </Text>
          <Text fontSize="16px" maxWidth="500px" mb="24px">
            Subscribe to get special offers, hosting tips, and early access to new products for your rental property.
          </Text>
          <Box display="flex" width="100%" maxWidth="480px" height="48px">
            <Box flex="1" bg="white" borderRadius="8px 0 0 8px" px="16px" display="flex" alignItems="center">
              <Text color="gray.400">Your email address</Text>
            </Box>
            <Box
              width="120px"
              bg="black"
              color="white"
              borderRadius="0 8px 8px 0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="600"
              cursor="pointer"
            >
              <Text>Subscribe</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Store
