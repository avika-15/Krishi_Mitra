
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle authentication
    // For now, we'll just navigate to home page
    window.location.href = "/home";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md shadow-md">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold text-center mb-6">Welcome...</h1>
          
          <Tabs defaultValue="signin" className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin" className="text-green-500 font-medium">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    className={`rounded-none border-b-2 ${true ? 'border-green-500 text-green-500' : 'border-transparent'}`}
                  >
                    Password
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    className={`rounded-none border-b-2 ${false ? 'border-green-500 text-green-500' : 'border-transparent'}`}
                  >
                    OTP
                  </Button>
                </div>
                
                <div>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-3"
                  />
                </div>
                
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? "👁️" : "👁️"}
                  </button>
                </div>
                
                <div className="text-right">
                  <a href="#" className="text-green-500 hover:underline text-sm">
                    Forgot Password?
                  </a>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Captcha</span>
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/f1b1986c-8853-4015-8431-6cadbce24163.png" 
                        alt="Captcha" 
                        className="h-8 mr-2" 
                      />
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        ↻
                      </Button>
                    </div>
                  </div>
                  <Input
                    type="text"
                    placeholder="Enter Captcha"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  Sign In
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full border-green-500 text-green-500 hover:bg-green-50"
                >
                  Check Enrolment Status
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <div className="text-center p-4">
                <h3 className="text-lg mb-2">Create a new account</h3>
                <p className="mb-4 text-gray-600">Please fill in your details to register</p>
                <Link to="/home">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Continue to Sign Up
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
