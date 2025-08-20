import { featuresData, howItWorksData, statsData } from "@/components/data/landing";
import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData,index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {statsData.value}
                </div>
                <div className="text-gray-600">
                  {statsData.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature,index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                 {feature.icon}
                 <h3 className="text-xl font-semibold">{feature.title}</h3>
                 <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {howItWorksData.map((step,index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials*/}
      {/* Start Free Trial */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4"></h2>
          <p className="text-white text-2xl font-extrabold mb-8 max-w-2xl mx-auto">Are you ready to take charge of your money, starting today?</p>
          <Link href="/dashboard">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">
            Let’s Go 🚀
          </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
