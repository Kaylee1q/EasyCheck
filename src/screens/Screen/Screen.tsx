import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1489px] relative flex flex-row">
        {/* Left side with logo */}
        <div className="w-[40%] flex flex-col items-center justify-center p-8 clip-diagonal">
          <div className="flex flex-col items-center">
            <img
              className="w-[265px] h-[265px] object-cover"
              alt="CheckEasy Logo"
              src="/oilcheck-1--1--removebg-preview-1.png"
            />
            <h1 className="mt-4 font-['Myanmar_Khyay-Regular',Helvetica] text-[40px] text-[#2e6d5c] text-center">
              CheckEasy
            </h1>
          </div>
        </div>

        {/* Right side with login form */}
        <div className="w-[60%] bg-[url(/rectangle-4.svg)] bg-[100%_100%] flex flex-col items-center justify-center clip-diagonal-inverse">
          <Card className="w-[337px] bg-transparent border-0 shadow-none">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-2">
                <label className="font-['Inter',Helvetica] text-white text-lg block">
                  Your email
                </label>
                <Input
                  className="h-[53px] bg-white rounded text-[#adadad] text-[15px] font-['Inter',Helvetica]"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="font-['Inter',Helvetica] text-white text-lg block">
                  Password
                </label>
                <Input
                  type="password"
                  className="h-[53px] bg-white rounded text-[#adadad] text-[15px] font-['Inter',Helvetica]"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    className="bg-white rounded-sm h-3.5 w-3.5"
                  />
                  <label
                    htmlFor="remember"
                    className="font-['Inter',Helvetica] text-white text-base cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="font-['Inter',Helvetica] text-[#227760] text-base"
                >
                  Forgot password?
                </a>
              </div>

              <Button className="w-full h-[53px] bg-[#296a58] hover:bg-[#1e5142] rounded font-['Myanmar_Khyay-Regular',Helvetica] text-white text-base">
                SIGN IN
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};