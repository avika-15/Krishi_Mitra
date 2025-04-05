
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">Standard Registration</h1>
            <p className="mt-2">Join our agricultural community</p>
          </CardHeader>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <Input id="email" placeholder="Enter email address" type="email" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium">Password</label>
                  <Input id="password" placeholder="Create password" type="password" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
                  <Input id="confirmPassword" placeholder="Confirm password" type="password" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="farmerType" className="block text-sm font-medium">Farmer Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select farmer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smallholder">Smallholder Farmer</SelectItem>
                    <SelectItem value="commercial">Commercial Farmer</SelectItem>
                    <SelectItem value="cooperative">Cooperative Member</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="region" className="block text-sm font-medium">Region/District</label>
                <Input id="region" placeholder="Enter your region or district" />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <Link to="/home" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Back to Home
                  </Button>
                </Link>
                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                  Complete Registration
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
