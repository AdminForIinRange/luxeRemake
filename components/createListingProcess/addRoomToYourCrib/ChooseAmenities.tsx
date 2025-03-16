"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Box, Stack, Text, Button } from "@chakra-ui/react";

import AmenitiesTypes from "./Amemities/AmenitiesTypes";


interface SelectRoomTypeProps {
  roomType: string | null;
  setRoomType: React.Dispatch<React.SetStateAction<string | null>>;
  chooseAmenities: string[];
  setChooseAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  chooseAmenitiesEnsuite: string[];
  setChooseAmenitiesEnsuite: React.Dispatch<React.SetStateAction<string[]>>;
}
const ChooseAmenities = ({
  roomType,
  setRoomType,
  chooseAmenities,
  setChooseAmenities,
  chooseAmenitiesEnsuite,
  setChooseAmenitiesEnsuite,
}: SelectRoomTypeProps) => {
  // const [amenitiesBedroom, setAmenitiesBedroom] = useState([])
  const render = () => {
    return (
      <AmenitiesTypes
        roomType={roomType}
        setChooseAmenities={setChooseAmenities}
        chooseAmenities={chooseAmenities}
        chooseAmenitiesEnsuite={chooseAmenitiesEnsuite}
        setChooseAmenitiesEnsuite={setChooseAmenitiesEnsuite}
      />
    );
  };

  return <>{render()}</>;
};

export default ChooseAmenities;
