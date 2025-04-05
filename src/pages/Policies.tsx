
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Policies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">Agricultural Policies</h1>
            <p className="mt-2">Important information about support programs and regulations</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <p className="text-gray-600">
                This section provides information on current agricultural policies, subsidies, and support programs 
                available for farmers. Click on each item to learn more.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Subsidy Programs</AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-4">
                  <div>
                    <h4 className="font-medium text-green-600">Seed Subsidy Program</h4>
                    <p>Government provides 50% subsidy on certified seeds for registered farmers.</p>
                    <p className="text-sm mt-1">Eligibility: All registered smallholder farmers with less than 5 hectares of land.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600">Fertilizer Support Initiative</h4>
                    <p>Discounted fertilizer available through agricultural extension officers.</p>
                    <p className="text-sm mt-1">Distribution centers open Monday-Friday, 8am-4pm.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Land Use Policies</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>Information about current land use regulations, conservation requirements, and sustainable farming practices.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Water Management</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>Guidelines on irrigation rights, water conservation techniques, and drought management strategies.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">Market Access Programs</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>Information on initiatives to help farmers access markets, including cooperative marketing programs and export assistance.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg">Disaster Relief</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>Guidelines for accessing support in case of crop failure, floods, drought, or other agricultural disasters.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center">
              <Link to="/home">
                <Button variant="outline" className="mr-4">
                  Back to Home
                </Button>
              </Link>
              <Button className="bg-green-500 hover:bg-green-600">
                Download Policy Documents
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Policies;
