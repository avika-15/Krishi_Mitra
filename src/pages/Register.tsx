
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
            <h1 className="text-3xl font-bold">मानक पंजीकरण</h1>
            <p className="mt-2">हमारे कृषि समुदाय से जुड़ें</p>
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
                <label htmlFor="email" className="block text-sm font-medium">ईमेल</label>
                <Input id="email" placeholder="ईमेल पता दर्ज करें" type="email" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium">पासवर्ड</label>
                  <Input id="password" placeholder="पासवर्ड बनाएँ" type="password" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium">पासवर्ड की पुष्टि करें</label>
                  <Input id="confirmPassword" placeholder="पासवर्ड की पुष्टि करें" type="password" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="farmerType" className="block text-sm font-medium">किसान प्रकार</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="किसान का प्रकार चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smallholder">लघु किसान</SelectItem>
                    <SelectItem value="commercial">व्यावसायिक किसान</SelectItem>
                    <SelectItem value="cooperative">सहकारी सदस्य</SelectItem>
                    <SelectItem value="other">अन्य</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="region" className="block text-sm font-medium">क्षेत्र/जनपद</label>
                <Input id="region" placeholder="अपना क्षेत्र या जनपद दर्ज करें" />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <Link to="/home" className="flex-1">
                  <Button variant="outline" className="w-full">
                    मुख्य पृष्ठ पर लौटें
                  </Button>
                </Link>
                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                  पंजीकरण पूरा करें
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
