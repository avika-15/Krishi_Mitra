
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";

const Policies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">कृषि नीतियाँ</h1>
            <p className="mt-2">समर्थन कार्यक्रमों और नियमों की महत्वपूर्ण जानकारी</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <p className="text-gray-600">
                यह अनुभाग किसानों के लिए वर्तमान कृषि नीतियों, सब्सिडी और सहायता कार्यक्रमों की जानकारी प्रदान करता है। अधिक जानने के लिए प्रत्येक आइटम पर क्लिक करें।
              </p>
            </div>
            
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">सब्सिडी कार्यक्रम</AccordionTrigger>
                <AccordionContent className="text-gray-600 space-y-4">
                  <div>
                    <h4 className="font-medium text-green-600">बीज सब्सिडी कार्यक्रम</h4>
                    <p>पंजीकृत किसानों के लिए प्रमाणित बीजों पर 50% सब्सिडी सरकार द्वारा दी जाती है।</p>
                    <p className="text-sm mt-1">पात्रता: 5 हेक्टेयर से कम भूमि वाले सभी लघु किसान।</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600">उर्वरक सहायता पहल</h4>
                    <p>कृषि विस्तार अधिकारियों के माध्यम से रियायती उर्वरक उपलब्ध हैं।</p>
                    <p className="text-sm mt-1">वितरण केंद्र सोमवार-शुक्रवार, सुबह 8 से शाम 4 बजे तक खुले हैं।</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">भूमि उपयोग नीतियाँ</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>वर्तमान भूमि उपयोग विनियमों, संरक्षण आवश्यकताओं और सतत कृषि पद्धतियों के बारे में जानकारी।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">जल प्रबंधन</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>सिंचाई अधिकार, जल संरक्षण तकनीकों और सूखा प्रबंधन रणनीतियों पर दिशानिर्देश।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">बाजार पहुँच कार्यक्रम</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>किसानों को बाजार तक पहुँचने के लिए पहल, जिसमें सहकारी विपणन कार्यक्रम और निर्यात सहायता शामिल हैं।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg">आपदा राहत</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>फसल विफलता, बाढ़, सूखा या अन्य कृषि आपदाओं की स्थिति में सहायता प्राप्त करने के दिशा-निर्देश।</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center">
              <Link to="/home">
                <Button variant="outline" className="mr-4">
                  मुख्य पृष्ठ पर लौटें
                </Button>
              </Link>
              <Button className="bg-green-500 hover:bg-green-600">
                नीति दस्तावेज़ डाउनलोड करें
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Policies;
