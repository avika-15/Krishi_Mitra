
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const RegisterPoor = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">Register for Support Program</h1>
            <p className="mt-2">Special registration for eligible individuals</p>
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
                <label htmlFor="idNumber" className="block text-sm font-medium">ID Number</label>
                <Input id="idNumber" placeholder="Enter national ID number" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium">Address</label>
                <Input id="address" placeholder="Enter your address" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="income" className="block text-sm font-medium">Monthly Income</label>
                  <Input id="income" placeholder="Enter monthly income" type="number" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="familySize" className="block text-sm font-medium">Family Size</label>
                <Input id="familySize" placeholder="Enter number of family members" type="number" />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <Link to="/home" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Back to Home
                  </Button>
                </Link>
                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPoor;
