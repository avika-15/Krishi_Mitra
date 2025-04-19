
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
            <h1 className="text-3xl font-bold">समर्थन कार्यक्रम हेतु पंजीकरण</h1>
            <p className="mt-2">पात्र व्यक्तियों हेतु विशेष पंजीकरण</p>
          </CardHeader>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">प्रथम नाम</label>
                  <Input id="firstName" placeholder="अपना प्रथम नाम दर्ज करें" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">अंतिम नाम</label>
                  <Input id="lastName" placeholder="अपना अंतिम नाम दर्ज करें" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="idNumber" className="block text-sm font-medium">पहचान संख्या</label>
                <Input id="idNumber" placeholder="राष्ट्रीय पहचान संख्या दर्ज करें" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium">पता</label>
                <Input id="address" placeholder="अपना पता दर्ज करें" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">फ़ोन नंबर</label>
                  <Input id="phone" placeholder="फ़ोन नंबर दर्ज करें" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="income" className="block text-sm font-medium">मासिक आय</label>
                  <Input id="income" placeholder="मासिक आय दर्ज करें" type="number" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="familySize" className="block text-sm font-medium">परिवार का आकार</label>
                <Input id="familySize" placeholder="परिवार के सदस्यों की संख्या दर्ज करें" type="number" />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <Link to="/home" className="flex-1">
                  <Button variant="outline" className="w-full">
                    मुख्य पृष्ठ पर लौटें
                  </Button>
                </Link>
                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                  आवेदन सबमिट करें
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
