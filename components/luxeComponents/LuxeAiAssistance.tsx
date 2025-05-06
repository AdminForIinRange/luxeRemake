"use client"

import { useState, useRef, useEffect } from "react"
import { Box, Text } from "@chakra-ui/react"
import luxeLogo from "@/public/png/LuxeLogo.png"

const LuxeAiAssistance = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: input }),
      })

      const rawText = await res.text()
      let data
      try {
        data = JSON.parse(rawText)
      } catch (parseError) {
        throw new Error("Invalid JSON returned from backend:\n" + rawText)
      }

      const aiResponse = data.text ?? "Sorry, no response generated."
      setMessages((prev) => [...prev, { role: "assistant", text: aiResponse }])
    } catch (err: any) {
      console.error("Fetch error:", err.message || err)
      setMessages((prev) => [...prev, { role: "assistant", text: "Error: " + (err.message || "Unknown error") }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      position="fixed"
      bottom={open ? ["0px", "16px", "24px", "24px", "24px", "24px"] : ["16px", "16px", "16px", "24px", "24px", "24px"]}
      right={open ? ["0px", "16px", "24px", "24px", "24px", "24px"] : ["16px", "16px", "16px", "24px", "24px", "24px"]}
      bg="white"
      borderTopRadius={open ? "40px" : "100px"}
      borderLeftRadius={open ? "40px" : "100px"}
      borderEndEndRadius={open ? "0px" : "20px"}

      boxShadow="0 8px 30px rgba(0, 0, 0, 0.12)"
      width={open ? ["380px", "380px", "460px", "500px", "540px", "580px"] : "92px"}
      height={open ? ["580px", "580px", "580px", "580px", "580px", "680px"] : "92px"}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      zIndex={9998}
      border={open ? "2px solid lightgray" :"4px solid lightgray"}
    >
      {/* Chat Icon (Closed State) */}
      {!open && (
        <Box
          height="100%"
          width="100%"
          borderRadius="xl"
          cursor="pointer"
          onClick={() => setOpen(true)}
          display="flex"
          alignItems="center"
          justifyContent="center"
       bg={"white"}
          position="relative"
          _hover={{ transform: "scale(1.05)", transition: "transform 0.2s ease" }}
        >
          <Box
            width="78px"
            height="78px"
            borderRadius="full"
            backgroundImage={`url(${luxeLogo.src})`}
            backgroundSize="cover"
            backgroundPosition="center"
          />
          <Box
            position="absolute"
            top="15px"
            right="15px"
            width="15px"
            height="15px"
            borderRadius="full"
            bg="#38A169"
            boxShadow="0 0 0 2px white"
          />
     
        </Box>
      )}

      {/* Header (Open State) */}
      {open && (
        <>
          <Box
            p="16px"
            cursor="pointer"
            borderBottom="1px solid rgba(240, 240, 240, 0.8)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
           bg={"white"}
          >
            <Box display="flex" alignItems="center">
              <Box
                width="52px"
                height="52px"
                borderRadius="full"
                backgroundImage={`url(${luxeLogo.src})`}
                backgroundSize="cover"
                backgroundPosition="center"
              
              />
              <Box>
                <Text fontWeight="700" fontSize="16px" color="#1A202C">
                  Luxe AI Assistant
                </Text>
                <Text fontSize="12px" color="#4A5568" mt="2px">
                  Property Management Expert
                </Text>
              </Box>
            </Box>
            <Box
              onClick={() => setOpen(false)}
              width="28px"
              height="28px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="rgba(240, 240, 240, 0.6)"
              _hover={{ bg: "rgba(240, 240, 240, 0.9)" }}
            >
              <Text fontSize="16px" lineHeight="1">
                ✕
              </Text>
            </Box>
          </Box>

          {/* Messages Container */}
          <Box
            flex="1"
            p="16px"
            overflowY="auto"
            display="flex"
            flexDirection="column"
            gap="12px"
            bg="linear-gradient(180deg, #FAFBFF 0%, #F8FAFC 100%)"
            sx={{
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(240, 240, 240, 0.3)",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(160, 174, 192, 0.5)",
                borderRadius: "3px",
              },
            }}
          >
            {messages.length === 0 && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                p="20px"
              >
                <Box
                  width="60px"
                  height="60px"
                  borderRadius="full"
                  backgroundImage={`url(${luxeLogo.src})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  mb="16px"
                  boxShadow="0 4px 12px rgba(0, 0, 0, 0.08)"
                />
                <Text color="#2D3748" fontSize="16px" fontWeight="600" textAlign="center" mb="8px">
                  Welcome to Luxe Management
                </Text>
                <Text color="#4A5568" fontSize="14px" textAlign="center" lineHeight="1.5">
                  I can help you with property management, bookings, maintenance requests, and maximizing your rental
                  income in the Adelaide area.
                </Text>
                <Box
                  mt="20px"
                  p="12px 16px"
                  bg="rgba(49, 130, 206, 0.08)"
                  borderRadius="md"
                  cursor="pointer"
                  _hover={{ bg: "rgba(49, 130, 206, 0.12)" }}
                >
                  <Text color="#3182CE" fontSize="14px" fontWeight="500">
                    Ask me about our services →
                  </Text>
                </Box>
              </Box>
            )}

            {messages.map((msg, idx) => (
              <Box
                key={idx}
                alignSelf={msg.role === "user" ? "flex-end" : "flex-start"}
                bg={msg.role === "user" ? "rgba(49, 130, 206, 0.08)" : "white"}
                borderRadius={msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px"}
                p="14px 18px"
                maxWidth="85%"
                boxShadow={msg.role === "assistant" ? "0 2px 8px rgba(0, 0, 0, 0.06)" : "none"}
                border={msg.role === "assistant" ? "1px solid rgba(230, 230, 230, 0.7)" : "none"}
                position="relative"
                _after={
                  msg.role === "assistant"
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: "8px",
                        left: "-6px",
                        width: "12px",
                        height: "12px",
                        bg: "white",
                        borderLeft: "1px solid rgba(230, 230, 230, 0.7)",
                        borderBottom: "1px solid rgba(230, 230, 230, 0.7)",
                        transform: "rotate(45deg)",
                      }
                    : {}
                }
              >
                {msg.role === "assistant" && (
                  <Text fontSize="12px" fontWeight="600" color="#3182CE" mb="4px">
                    Luxe Assistant
                  </Text>
                )}
                <Text
                  fontSize="14px"
                  whiteSpace="pre-wrap"
                  lineHeight="1.6"
                  color={msg.role === "user" ? "#2D3748" : "#1A365D"}
                >
                  {msg.text}
                </Text>
              </Box>
            ))}

            {loading && (
              <Box
                alignSelf="flex-start"
                bg="white"
                borderRadius="16px 16px 16px 4px"
                p="14px 18px"
                maxWidth="85%"
                boxShadow="0 2px 8px rgba(0, 0, 0, 0.06)"
                border="1px solid rgba(230, 230, 230, 0.7)"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "8px",
                  left: "-6px",
                  width: "12px",
                  height: "12px",
                  bg: "white",
                  borderLeft: "1px solid rgba(230, 230, 230, 0.7)",
                  borderBottom: "1px solid rgba(230, 230, 230, 0.7)",
                  transform: "rotate(45deg)",
                }}
              >
                <Text fontSize="12px" fontWeight="600" color="#3182CE" mb="4px">
                  Luxe Assistant
                </Text>
                <Box display="flex" alignItems="center">
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="full"
                    bg="#3182CE"
                    mr="4px"
                    animation="pulse 1s infinite"
                    sx={{
                      "@keyframes pulse": {
                        "0%": { opacity: 0.4 },
                        "50%": { opacity: 1 },
                        "100%": { opacity: 0.4 },
                      },
                    }}
                  />
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="full"
                    bg="#3182CE"
                    mr="4px"
                    animation="pulse 1s infinite 0.2s"
                    sx={{
                      "@keyframes pulse": {
                        "0%": { opacity: 0.4 },
                        "50%": { opacity: 1 },
                        "100%": { opacity: 0.4 },
                      },
                    }}
                  />
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="full"
                    bg="#3182CE"
                    animation="pulse 1s infinite 0.4s"
                    sx={{
                      "@keyframes pulse": {
                        "0%": { opacity: 0.4 },
                        "50%": { opacity: 1 },
                        "100%": { opacity: 0.4 },
                      },
                    }}
                  />
                </Box>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input Area */}
          <Box p="16px" borderTop="1px solid rgba(240, 240, 240, 0.8)" bg="white">
            <Box
              as="form"
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              display="flex"
              alignItems="center"
              bg="#F7FAFC"
              borderRadius="full"
              p="4px 6px 4px 16px"
              border="1px solid rgba(226, 232, 240, 0.8)"
              _focusWithin={{
                boxShadow: "0 0 0 2px rgba(49, 130, 206, 0.2)",
                borderColor: "#3182CE",
              }}
              transition="all 0.2s ease"
            >
              <Box
                as="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                border="none"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="#2D3748"
              />
              <Box
                as="button"
                type="submit"
                ml="4px"
                px="18px"
                py="10px"
                bg={input.trim() ? "linear-gradient(135deg, #3182CE 0%, #2B6CB0 100%)" : "#CBD5E0"}
                color="white"
                borderRadius="full"
                fontSize="14px"
                fontWeight="600"
                _hover={{
                  transform: input.trim() ? "translateY(-1px)" : "none",
                  boxShadow: input.trim() ? "0 4px 8px rgba(49, 130, 206, 0.25)" : "none",
                }}
                _active={{
                  transform: input.trim() ? "translateY(0px)" : "none",
                  boxShadow: "none",
                }}
                transition="all 0.2s ease"
                disabled={!input.trim()}
                cursor={!input.trim() ? "not-allowed" : "pointer"}
              >
                Send
              </Box>
            </Box>
            <Text fontSize="11px" color="#A0AEC0" textAlign="center" mt="8px">
              Powered by Luxe Management • Adelaide's Premier Property Service
            </Text>
          </Box>
        </>
      )}
    </Box>
  )
}

export default LuxeAiAssistance
