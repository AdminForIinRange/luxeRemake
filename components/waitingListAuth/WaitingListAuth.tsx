"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  VStack,
  HStack,
  Tabs,
} from "@chakra-ui/react";
import { isValidPhoneNumber } from "libphonenumber-js";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "react-international-phone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createAccount } from "@/lib/actions/user.actions";
import OtpModal from "@/components/OTPModal";
import { FlipWords } from "../ui/flip-words";
import { HeroScrollDemo } from "../customUI/ContainerScrollAnimation/HeroScrollDemo";

const WaitingListAuth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accountId, setAccountId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z.object({
    fullName: z.string().min(2, {
      message: "Invalid Full Name.",
    }),
    email: z.string().email({
      message: "Invalid Email.",
    }),
    phoneNumber: z.string().refine(
      (value) => isValidPhoneNumber(value, "US"),
      { message: "Invalid Phone Number." }
    ),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage(""); // Clear any previous errors
    try {
      const result = await createAccount({
        fullName: values.fullName || "",
        email: values.email,
        phoneNumber: values.phoneNumber || "",
        password: values.password,
      });

      // Check if the returned result contains an error
      if (result.error) {
        setErrorMessage(result.error);
        return; // Stop further processing if there is an error
      }

      // Otherwise, proceed with the OTP flow
      setAccountId(result.accountId);
      setIsOpen(true);
    } catch (err: any) {
      setErrorMessage(
        err?.message || "Failed to create account. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box
        w={"100%"}
        // shadow={{ base: "none", sm: "md", md: "md", lg: "md", xl: "md" }}
        p={{ base: "0", sm: "4", md: "4", lg: "4", xl: "4" }}
        borderRadius={"16px"}
mt={"16px"}
      >
        <Form {...form}>
          {/* Optionally show a generic error if it is not one of the known errors */}
          {errorMessage !== "Email is already registered" &&
            errorMessage !== "Phone number is already registered" && (
              <div className="text-[0.8rem] font-medium text-rose-400">
                {errorMessage}
              </div>
            )}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="au"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        inputClassName="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                    {errorMessage === "Invalid Phone Number." && (
                      <div className="text-[0.8rem] font-medium text-rose-400">
                        {errorMessage}
                      </div>
                    )}
                  </FormItem>
                )}
              />
            </>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="crib@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                  {errorMessage === "Email is already registered" && (
                    <div className="text-[0.8rem] font-medium text-rose-400">
                      {errorMessage}
                    </div>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type={showPassword ? "text" : "password"} {...field} />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="size-4 text-gray-500" />
                        ) : (
                          <Eye className="size-4 text-gray-500" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading} >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="-ml-1 mr-3 size-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>Sign Up</>
              )}
            </Button>
          </form>
        </Form>
      </Box>

      {accountId && (
        <OtpModal
          email={form.getValues("email")}
          accountId={accountId}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default WaitingListAuth;
