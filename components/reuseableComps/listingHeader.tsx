import React from "react";
import { Text } from "@chakra-ui/react";
interface ListingHeaderProps {
  title: string;
  description: string;
}

const ListingHeader: React.FC<ListingHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <Text
     
        fontSize={["24px", "24px", "24px", "30px", "36px"]}
        fontWeight="bold"
        mb="8px"
      >
        {title}
      </Text>
      <Text
   
        fontSize={["16px", "16px", "16px", "16px", "20px"]}
        color="gray.600"
      >
        {description}
      </Text>
    </>
  );
};

export default ListingHeader;
