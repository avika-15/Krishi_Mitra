
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "नई सूखा-प्रतिरोधी फसल किस्में जारी",
      date: "3 अप्रैल 2025",
      summary: "कृषि अनुसंधान संस्थान ने मक्का और बीन्स की नई सूखा-प्रतिरोधी किस्में जारी की हैं।",
      category: "अनुसंधान"
    },
    {
      id: 2,
      title: "सब्सिडी आवेदन तिथि बढ़ाई गई",
      date: "1 अप्रैल 2025",
      summary: "कृषि मंत्रालय ने वार्षिक कृषि इनपुट सब्सिडी कार्यक्रम की अंतिम तिथि एक माह के लिए बढ़ा दी है।",
      category: "नीति"
    },
    {
      id: 3,
      title: "आगामी किसान प्रशिक्षण कार्यशालाएँ",
      date: "28 मार्च 2025",
      summary: "विभिन्न क्षेत्रों में आधुनिक कृषि तकनीकों पर कार्यशालाओं की श्रृंखला अगले सप्ताह से आयोजित की जाएगी।",
      category: "कार्यक्रम"
    },
    {
      id: 4,
      title: "प्रमुख फसलों के बाजार दाम अपडेट",
      date: "25 मार्च 2025",
      summary: "वर्तमान बाजार प्रवृत्तियाँ मक्का और बीन्स के दामों में वृद्धि दिखाती हैं, जबकि सब्ज़ियों के दाम स्थिर हैं।",
      category: "बाज़ार"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="container mx-auto max-w-5xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">कृषि समाचार</h1>
            <p className="mt-2">कृषि में नवीनतम विकास से अद्यतित रहें</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-semibold">नवीनतम समाचार</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">सभी</Button>
                <Button variant="outline" size="sm">नीति</Button>
                <Button variant="outline" size="sm">अनुसंधान</Button>
                <Button variant="outline" size="sm">बाजार</Button>
                <Button variant="outline" size="sm">कार्यक्रम</Button>
              </div>
            </div>
            
            <div className="space-y-6">
              {newsArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gray-200 w-full md:w-1/4 h-40 md:h-auto"></div>
                    <div className="p-4 md:p-6 w-full md:w-3/4 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                      <p className="text-gray-600">{article.summary}</p>
                      <a href="#" className="text-green-500 hover:underline mt-4 self-start">और पढ़ें →</a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mr-2">पिछला</Button>
              <Button variant="outline" className="mx-1">1</Button>
              <Button variant="outline" className="mx-1">2</Button>
              <Button variant="outline" className="mx-1">3</Button>
              <Button variant="outline" className="ml-2">अगला</Button>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 border-t p-4">
            <div className="w-full flex justify-between items-center">
              <p className="text-gray-500">साप्ताहिक अपडेट के लिए हमारे न्यूज़लेटर की सदस्यता लें</p>
              <Link to="/home">
                <Button variant="outline">मुख्य पृष्ठ पर लौटें</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default News;
