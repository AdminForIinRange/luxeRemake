// "use client";
// import React, { useState } from "react";
// import { Box, Text } from "@chakra-ui/react";

// const NetGainNetLoss = () => {
//   const [trades, setTrades] = useState([{ cost: "", winAmount: "" }]);

//   const addTrade = () => {
//     setTrades([...trades, { cost: "", winAmount: "" }]);
//   };

//   const updateTrade = (index, field, value) => {
//     const updated = trades.map((trade, i) =>
//       i === index ? { ...trade, [field]: value } : trade
//     );
//     setTrades(updated);
//   };

//   const getOutcomes = () => {
//     const parsed = trades.map(({ cost, winAmount }) => ({
//       cost: parseFloat(cost) || 0,
//       winAmount: parseFloat(winAmount) || 0,
//     }));

//     const totalCost = parsed.reduce((acc, t) => acc + t.cost, 0);

//     return parsed.map((trade, index) => {
//       const gainIfWin = trade.winAmount - trade.cost;
//       const netIfThisWins = trade.winAmount - totalCost;

//       return {
//         index,
//         gainIfWin,
//         netIfThisWins,
//       };
//     });
//   };

//   const outcomes = getOutcomes();
//   const totalLossIfAllLose = trades.reduce(
//     (acc, t) => acc + parseFloat(t.cost || 0),
//     0
//   );

//   return (
//     <Box maxW="600px" mx="auto" p={6} borderRadius="lg" bg="gray.50" boxShadow="md">
//       <Text fontSize="2xl" fontWeight="bold" mb={4} color="blue.700">
//         Polymarket Net Gain/Loss Calculator
//       </Text>

//       {trades.map((trade, index) => (
//         <Box key={index} bg="white" p={4} borderRadius="md" boxShadow="sm" mb={4}>
//           <Text fontSize="lg" fontWeight="semibold" mb={2}>
//             Trade {index + 1}
//           </Text>

//           <Box display="flex" alignItems="center" mb={2}>
//             <Text fontSize="sm" w="80px">
//               Cost ($):
//             </Text>
//             <input
//               type="number"
//               value={trade.cost}
//               onChange={(e) => updateTrade(index, "cost", e.target.value)}
//               style={{
//                 padding: "6px 10px",
//                 borderRadius: "6px",
//                 border: "1px solid #ccc",
//                 marginLeft: "8px",
//               }}
//             />
//           </Box>

//           <Box display="flex" alignItems="center" mb={3}>
//             <Text fontSize="sm" w="80px">
//               Win Amt ($):
//             </Text>
//             <input
//               type="number"
//               value={trade.winAmount}
//               onChange={(e) => updateTrade(index, "winAmount", e.target.value)}
//               style={{
//                 padding: "6px 10px",
//                 borderRadius: "6px",
//                 border: "1px solid #ccc",
//                 marginLeft: "8px",
//               }}
//             />
//           </Box>

//           <Box bg="gray.100" p={3} borderRadius="md">
//             <Text fontSize="sm" color="gray.700">
//               Projected Gain:{" "}
//               <b>${(outcomes[index]?.gainIfWin || 0).toFixed(2)}</b>
//             </Text>
//             <Text fontSize="sm" color="gray.700">
//               Net If This Wins:{" "}
//               <b>${(outcomes[index]?.netIfThisWins || 0).toFixed(2)}</b>
//             </Text>
//           </Box>
//         </Box>
//       ))}

//       <Box
//         onClick={addTrade}
//         bg="blue.600"
//         color="white"
//         textAlign="center"
//         py={2}
//         borderRadius="md"
//         fontWeight="medium"
//         cursor="pointer"
//         _hover={{ bg: "blue.700" }}
//       >
//         + Add Trade
//       </Box>

//       <Box mt={6} bg="red.50" p={4} borderRadius="md">
//         <Text fontWeight="semibold" color="red.600">
//           If all markets lose: Total Loss = ${totalLossIfAllLose.toFixed(2)}
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default NetGainNetLoss;
