
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, UserPlus, Calendar, FileText, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">SeedHope Connect</h1>
            <div className="flex items-center space-x-3">
              <span>Welcome, User</span>
              <Button variant="outline" className="text-white border-white hover:bg-green-700">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome to SeedHope Connect</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-8">
            Your platform for agricultural support, resource distribution, and community engagement.
            Use the options below to navigate our services.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <User size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Register for Poor People</h3>
            <p className="text-gray-600 mb-4">Special registration path for those who qualify for additional support.</p>
            <Link to="/register-poor" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                Register Now
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <UserPlus size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Register</h3>
            <p className="text-gray-600 mb-4">Standard registration for farmers and community members.</p>
            <Link to="/register" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                Register Now
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <Calendar size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sowing Calendar</h3>
            <p className="text-gray-600 mb-4">Access seasonal planting guides and agricultural calendars.</p>
            <Link to="/calendar" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                View Calendar
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <FileText size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Policies</h3>
            <p className="text-gray-600 mb-4">Information on agricultural policies and support programs.</p>
            <Link to="/policies" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                View Policies
              </Button>
            </Link>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
            <Newspaper size={48} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">News</h3>
            <p className="text-gray-600 mb-4">Latest updates on agricultural developments and community news.</p>
            <Link to="/news" className="mt-auto">
              <Button className="bg-green-500 hover:bg-green-600 w-full">
                Read News
              </Button>
            </Link>
          </Card>
        </section>
      </main>

      <footer className="bg-green-600 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 SeedHope Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
