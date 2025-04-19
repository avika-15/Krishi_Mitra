
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
            <h1 className="text-3xl font-bold">बुवाई कैलेंडर</h1>
            <p className="mt-2">इष्टतम फसल के लिए मौसमी बुवाई गाइड</p>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="spring">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="spring">वसंत</TabsTrigger>
                <TabsTrigger value="summer">गर्मी</TabsTrigger>
                <TabsTrigger value="autumn">पतझड़</TabsTrigger>
                <TabsTrigger value="winter">सर्दी</TabsTrigger>
              </TabsList>
              
              <TabsContent value="spring" className="space-y-4">
                <h3 className="text-xl font-semibold">वसंत बुवाई गाइड (मार्च-मई)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">सब्ज़ियाँ</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>टमाटर - प्रारंभिक मार्च (इनडोर बुवाई)</li>
                      <li>मिर्च - मध्य मार्च</li>
                      <li>लेट्यूस - मार्च के अंत से मई</li>
                      <li>गाजर - अप्रैल से</li>
                      <li>फलियाँ - प्रारंभिक मई</li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium text-lg text-green-600">अनाज</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>मक्का - अप्रैल के मध्य से अंत</li>
                      <li>चावल - प्रारंभिक अप्रैल (अंतिम पाला के बाद)</li>
                      <li>गेहूं - मार्च में प्रारंभिक वसंत किस्म</li>
                      <li>जौ - मार्च से अप्रैल</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
                  <h4 className="font-medium text-green-600">वसंत बुवाई टिप्स</h4>
                  <ul className="list-disc pl-5 mt-2">
                    <li>अधिकांश वसंत बुवाई के लिए मिट्टी का तापमान 10°C होने की प्रतीक्षा करें</li>
                    <li>बुआई से पहले मिट्टी में कम्पोस्ट और जैविक पदार्थ मिलाएँ</li>
                    <li>अंतिम पाले से बचाव के लिए प्रारंभिक बुवाई हेतु रो कवर का उपयोग करें</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="summer">
                <h3 className="text-xl font-semibold">ग्रीष्मकालीन बुवाई गाइड (जून-अगस्त)</h3>
                <p className="mt-2 text-gray-600">ग्रीष्मकालीन बुवाई की जानकारी यहाँ होगी...</p>
              </TabsContent>
              
              <TabsContent value="autumn">
                <h3 className="text-xl font-semibold">पतझड़ बुवाई गाइड (सितंबर-नवंबर)</h3>
                <p className="mt-2 text-gray-600">पतझड़ बुवाई की जानकारी यहाँ होगी...</p>
              </TabsContent>
              
              <TabsContent value="winter">
                <h3 className="text-xl font-semibold">शीतकालीन बुवाई गाइड (दिसंबर-फरवरी)</h3>
                <p className="mt-2 text-gray-600">शीतकालीन बुवाई की जानकारी यहाँ होगी...</p>
              </TabsContent>
              
              <div className="mt-8 text-center">
                <Link to="/home">
                  <Button variant="outline" className="mr-4">
                    मुख्य पृष्ठ पर लौटें
                  </Button>
                </Link>
                <Button className="bg-green-500 hover:bg-green-600">
                  कैलेंडर PDF डाउनलोड करें
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
