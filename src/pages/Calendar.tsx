
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Calendar = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">Sowing Calendar</h1>
            <p className="mt-2">Seasonal planting guide for optimal harvests</p>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="spring">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="spring">Spring</TabsTrigger>
                <TabsTrigger value="summer">Summer</TabsTrigger>
                <TabsTrigger value="autumn">Autumn</TabsTrigger>
                <TabsTrigger value="winter">Winter</TabsTrigger>
              </TabsList>
              
              <TabsContent value="spring" className="space-y-4">
                <h3 className="text-xl font-semibold">Spring Planting Guide (March-May)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">Vegetables</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Tomatoes - early March (indoor sowing)</li>
                      <li>Peppers - mid March</li>
                      <li>Lettuce - late March to May</li>
                      <li>Carrots - April onwards</li>
                      <li>Beans - early May</li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">Grains</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Maize - mid to late April</li>
                      <li>Rice - early April (after last frost)</li>
                      <li>Wheat - early spring variety in March</li>
                      <li>Barley - March to April</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
                  <h4 className="font-medium text-green-600">Spring Planting Tips</h4>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Wait until soil temperature reaches 10°C for most spring plantings</li>
                    <li>Prepare soil with compost and organic matter before planting</li>
                    <li>Consider row covers for early plantings to protect from late frosts</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="summer">
                <h3 className="text-xl font-semibold">Summer Planting Guide (June-August)</h3>
                <p className="mt-2 text-gray-600">Summer planting information will be here...</p>
              </TabsContent>
              
              <TabsContent value="autumn">
                <h3 className="text-xl font-semibold">Autumn Planting Guide (September-November)</h3>
                <p className="mt-2 text-gray-600">Autumn planting information will be here...</p>
              </TabsContent>
              
              <TabsContent value="winter">
                <h3 className="text-xl font-semibold">Winter Planting Guide (December-February)</h3>
                <p className="mt-2 text-gray-600">Winter planting information will be here...</p>
              </TabsContent>
              
              <div className="mt-8 text-center">
                <Link to="/home">
                  <Button variant="outline" className="mr-4">
                    Back to Home
                  </Button>
                </Link>
                <Button className="bg-green-500 hover:bg-green-600">
                  Download Calendar PDF
                </Button>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
