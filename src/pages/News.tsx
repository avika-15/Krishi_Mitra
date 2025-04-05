
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "New Drought-Resistant Crop Varieties Released",
      date: "April 3, 2025",
      summary: "The Agricultural Research Institute has announced the release of new drought-resistant varieties of maize and beans.",
      category: "Research"
    },
    {
      id: 2,
      title: "Extended Deadline for Subsidy Applications",
      date: "April 1, 2025",
      summary: "The Ministry of Agriculture has extended the deadline for the annual farm input subsidy program by one month.",
      category: "Policy"
    },
    {
      id: 3,
      title: "Upcoming Farmer Training Workshops",
      date: "March 28, 2025",
      summary: "A series of workshops on modern farming techniques will be held across different regions starting next week.",
      category: "Events"
    },
    {
      id: 4,
      title: "Market Prices Update for Major Crops",
      date: "March 25, 2025",
      summary: "Current market trends show increased prices for maize and beans, while vegetable prices remain stable.",
      category: "Market"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-green-500 text-white text-center py-6">
            <h1 className="text-3xl font-bold">Agricultural News</h1>
            <p className="mt-2">Stay updated with the latest developments in agriculture</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Latest News</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">All</Button>
                <Button variant="outline" size="sm">Policy</Button>
                <Button variant="outline" size="sm">Research</Button>
                <Button variant="outline" size="sm">Markets</Button>
                <Button variant="outline" size="sm">Events</Button>
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
                      <a href="#" className="text-green-500 hover:underline mt-4 self-start">Read more →</a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mr-2">Previous</Button>
              <Button variant="outline" className="mx-1">1</Button>
              <Button variant="outline" className="mx-1">2</Button>
              <Button variant="outline" className="mx-1">3</Button>
              <Button variant="outline" className="ml-2">Next</Button>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 border-t p-4">
            <div className="w-full flex justify-between items-center">
              <p className="text-gray-500">Subscribe to our newsletter for weekly updates</p>
              <Link to="/home">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default News;
