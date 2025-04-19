
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, UserPlus, Calendar, FileText, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">सीडहोप कनेक्ट</h1>
            <div className="flex items-center space-x-6">
              <LanguageToggle />
              <span>स्वागत है, उपयोगकर्ता</span>
              <Button variant="outline" className="text-white border-white hover:bg-green-700">
                लॉगआउट
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">सीडहोप कनेक्ट में आपका स्वागत है</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-8">
            कृषि समर्थन, संसाधन वितरण, और सामुदायिक सहभागिता के लिए आपका मंच।
            नीचे दिए गए विकल्पों का उपयोग करके हमारी सेवाओं पर नेविगेट करें।
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <User size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">गरीब लोगों के लिए पंजीकरण</h3>
            <p className="text-gray-600 mb-4">अतिरिक्त सहायता के लिए योग्य लोगों के लिए विशेष पंजीकरण मार्ग।</p>
            <Link to="/register-poor" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                अभी पंजीकरण करें
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <UserPlus size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">पंजीकरण करें</h3>
            <p className="text-gray-600 mb-4">किसानों और सामुदायिक सदस्यों के लिए मानक पंजीकरण।</p>
            <Link to="/register" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                अभी पंजीकरण करें
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <Calendar size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">बुवाई कैलेंडर</h3>
            <p className="text-gray-600 mb-4">मौसमी बोआई गाइड और कृषि कैलेंडर प्राप्त करें।</p>
            <Link to="/calendar" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                कैलेंडर देखें
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <FileText size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">नीतियाँ</h3>
            <p className="text-gray-600 mb-4">कृषि नीतियों और सहायता कार्यक्रमों की जानकारी।</p>
            <Link to="/policies" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                नीतियाँ देखें
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <Newspaper size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">समाचार</h3>
            <p className="text-gray-600 mb-4">कृषि विकास और सामुदायिक समाचार की ताजा जानकारी।</p>
            <Link to="/news" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                समाचार पढ़ें
              </Button>
            </Link>
          </Card>
        </section>
      </main>

      <footer className="bg-green-600 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 सीडहोप कनेक्ट. सर्वाधिकार सुरक्षित।</p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
