import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

const serviceFeatures = [
  {
    icon: "https://c.animaapp.com/me8oy38oFyJeJz/img/phone-1.svg",
    title: "Déménagement résidentiel",
    description: "Nous facilitons votre transition vers un nouveau chez-vous avec un service attentionné, ponctuel et efficace. Que ce soit un appartement, une maison ou un condo, notre équipe transporte vos biens avec soin et respect.",
  },
  {
    icon: "https://c.animaapp.com/me8oy38oFyJeJz/img/envelope-o-1.svg",
    title: "Déménagement commercial",
    description: "Minimisez l’interruption de vos activités grâce à notre expertise en déménagement d’entreprises. Bureaux, commerces ou ateliers; nous planifions chaque étape pour un transfert rapide et sécurisé.",
  },
  {
    icon: "https://c.animaapp.com/me8oy38oFyJeJz/img/pin-alt-1.svg",
    title: "Emballage et déballage",
    description: "Gagnez du temps et protégez vos objets fragiles avec notre service d’emballage professionnel. Nous fournissons les matériaux nécessaires et nous occupons du déballage si vous le souhaitez.",
  },
  {
    icon: "https://c.animaapp.com/me8oy38oFyJeJz/img/phone-1.svg",
    title: "Transport longue distance",
    description: "Vous changez de ville ou de région? Nous offrons un service fiable et ponctuel pour vos déménagements interrégionaux ou interprovinciaux, partout au Québec et au Canada.",
  },
  {
    icon: "https://c.animaapp.com/me8oy38oFyJeJz/img/envelope-o-1.svg",
    title: "Entreposage temporaire",
    description: "Besoin d’un espace temporaire pour vos biens? Nous proposons des solutions d’entreposage sécurisées à court ou moyen terme, idéales pendant une transition ou des rénovations.",
  },
  {
    icon: "https://c.animaapp.com/me8oy38oFyJeJz/img/pin-alt-1.svg",
    title: "Professional Team",
    description: "Experienced and trained delivery professionals at your service.",
  },
];

const footerServices = [
  "Same Day Delivery",
  "Express Delivery",
  "Scheduled Delivery",
  "International Shipping",
  "Package Tracking",
];

const footerCompany = [
  "About Us",
  "Careers",
  "Press",
  "Privacy Policy",
  "Terms of Service",
];

const socialIcons = [
  {
    src: "https://c.animaapp.com/me8oy38oFyJeJz/img/facebook-1.svg",
    alt: "Facebook",
    className: "w-3 h-5",
  },
  {
    src: "https://c.animaapp.com/me8oy38oFyJeJz/img/instagram-1.svg",
    alt: "Instagram",
    className: "w-5 h-5",
  },
  {
    src: "https://c.animaapp.com/me8oy38oFyJeJz/img/x-twitter-1.svg",
    alt: "X Twitter",
    className: "w-[19px] h-[18px]",
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#002319] min-h-screen w-full overflow-x-hidden">
      {/* Header Navigation */}
      <header className="w-full px-4 md:px-8 lg:px-16 py-4 md:py-8 lg:py-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <img
            className="w-32 h-4 md:w-48 md:h-5 lg:w-[269px] lg:h-[30px]"
            alt="LogistiquePro Logo"
            src="https://c.animaapp.com/me8oy38oFyJeJz/img/asset-6-1.svg"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="font-normal text-white text-lg lg:text-xl tracking-[0] leading-5 hover:text-[#00da5b] transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            variant="outline"
            className="w-20 h-8 md:w-28 md:h-9 lg:w-[145px] lg:h-[39px] bg-[#00da5b] rounded-[10px] border-2 border-solid border-[#00da5b] text-white text-sm md:text-lg lg:text-xl font-normal hover:bg-white hover:text-[#00da5b] transition-all duration-300 ease-in-out"
          >
            Estimation
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative w-full">
        {/* Hero Background */}
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[772px]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Background"
            src="https://c.animaapp.com/me8oy38oFyJeJz/img/background.png"
          />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto w-full">
              <div className="max-w-lg lg:max-w-xl">
                <h1 className="text-3xl md:text-5xl lg:text-[90px] font-medium leading-tight lg:leading-[90px] mb-4 md:mb-6 lg:mb-8">
                  <span className="text-white">Des déménagements faits avec cœur </span>
                  <span className="text-[#00da5b]">âme,</span>
                  <span className="text-white"> </span>
                  <span className="text-[#00da5b]">et précision</span>
                </h1>
                
                <p className="text-white text-base md:text-xl lg:text-[25px] leading-relaxed lg:leading-[38px] max-w-sm lg:max-w-md">
                  Du premier appel jusqu’à l’installation du dernier objet, vous n’êtes jamais seul. Nous sommes vos alliés, vos accompagnateurs et ceux qui trouvent des solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div id="services" className="bg-white py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-[80px] font-semibold leading-tight lg:leading-[80px] mb-4 md:mb-6">
                <span className="text-[#00da5b]">Why choose</span>
                <br />
                <span className="text-[#002319]">our delivery service?</span>
              </h2>
              <p className="text-[#002319] text-lg md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto">
                We provide comprehensive delivery solutions with a focus on speed, security, and customer satisfaction.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {serviceFeatures.map((service, index) => (
                <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="mb-4 md:mb-6">
                      <img
                        className="w-12 h-12 md:w-16 md:h-16 mx-auto"
                        alt={service.title}
                        src={service.icon}
                      />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-[#002319] mb-3 md:mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fast & Reliable Delivery Section */}
      <section className="relative w-full">
        <div className="relative h-[400px] md:h-[600px] lg:h-[706px]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Truck logistics operation at dusk"
            src="https://c.animaapp.com/me8oy38oFyJeJz/img/truck-logistics-operation-dusk-1.png"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#002319] via-[#002319]/80 to-transparent" />
          
          <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto w-full">
              <div className="max-w-lg lg:max-w-xl">
                <h2 className="text-3xl md:text-5xl lg:text-[90px] font-normal leading-tight lg:leading-[90px]">
                  <span className="text-white">Fast & Reliable</span>
                  <br />
                  <span className="text-white">Delivery </span>
                  <span className="text-[#00da5b]">at Your Fingertips</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="about" className="bg-[#002319] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Testimonial Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="relative">
                <img
                  className="w-12 h-12 lg:w-[70px] lg:h-[54px] mb-4 mx-auto lg:mx-0"
                  alt="Opening quote"
                  src="https://c.animaapp.com/me8oy38oFyJeJz/img/----1.svg"
                />
                
                <blockquote className="text-2xl md:text-3xl lg:text-[49.1px] font-medium leading-tight lg:leading-[54.5px] mb-6">
                  <span className="text-white">I can only say that it </span>
                  <span className="text-[#00da5b]">was the best moving experience I have ever had.</span>
                </blockquote>
                
                <img
                  className="w-12 h-12 lg:w-[70px] lg:h-[53px] ml-auto lg:ml-0 lg:float-right"
                  alt="Closing quote"
                  src="https://c.animaapp.com/me8oy38oFyJeJz/img/---.svg"
                />
              </div>
              
              <div className="mt-8 lg:mt-12">
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium">
                  Marie Trebouis
                </p>
              </div>
            </div>

            {/* Customer Photo */}
            <div className="flex-1 max-w-md lg:max-w-lg">
              <div className="relative">
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  alt="Decorative stripes"
                  src="https://c.animaapp.com/me8oy38oFyJeJz/img/stripes-1.png"
                />
                <img
                  className="absolute top-4 left-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-lg"
                  alt="Customer photo"
                  src="https://c.animaapp.com/me8oy38oFyJeJz/img/photo-1491349174775-aaafddd81942-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#00da5b] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* CTA Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                Ready to Experience Fast Delivery?
              </h2>
              
              <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
                Join Thousands of satisfied customers who trust us with their delivery needs. Get started today and enjoy reliable, fast delivery service.
              </p>

              {/* Email Signup */}
              <div className="flex flex-col sm:flex-row gap-2 mb-4 max-w-lg mx-auto lg:mx-0">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 h-12 bg-white rounded-[14px] shadow-[0px_4px_4px_#00000040] border-0 placeholder:text-[#829e8e] placeholder:font-semibold placeholder:text-lg"
                />
                <Button className="h-12 px-6 bg-white rounded-[14px] shadow-[0px_4px_4px_#00000040] text-[#00da5b] font-semibold text-lg hover:bg-gray-100 whitespace-nowrap">
                  Get Started
                </Button>
              </div>

              <p className="text-white text-lg">
                No setup fees. Cancel anytime
              </p>
            </div>

            {/* CTA Image and Stats */}
            <div className="flex-1 max-w-md lg:max-w-lg relative">
              <img
                className="w-full h-auto object-cover rounded-lg"
                alt="Young woman organizing live shop"
                src="https://c.animaapp.com/me8oy38oFyJeJz/img/young-woman-organizing-live-shop-3.png"
              />

              {/* Stats Card */}
              <Card className="absolute bottom-4 right-4 w-48 md:w-56 lg:w-[223px] shadow-[0px_4px_4px_#00000040] bg-white rounded-[16.84px] border-0">
                <CardContent className="p-4">
                  <div className="text-center mb-3">
                    <div className="text-[#00da5b] text-xl font-bold">5000+</div>
                    <div className="text-[#829e8e] text-xs font-bold">Happy users</div>
                  </div>
                  
                  <Separator className="mb-3" />
                  
                  <div className="flex justify-between text-center">
                    <div>
                      <div className="text-[#00da5b] text-lg font-bold">99.8%</div>
                      <div className="text-[#829e8e] text-xs font-bold">On-time</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div>
                        <div className="text-[#00da5b] text-lg font-bold">4.9</div>
                        <div className="text-[#829e8e] text-xs font-bold">Rating</div>
                      </div>
                      <img
                        className="w-4 h-4"
                        alt="Star rating"
                        src="https://c.animaapp.com/me8oy38oFyJeJz/img/star-1.svg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04161c] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  className="w-8 h-5 md:w-10 md:h-6 lg:w-[43px] lg:h-[26px]"
                  alt="Logo"
                  src="https://c.animaapp.com/me8oy38oFyJeJz/img/logo-1.svg"
                />
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                  LogistiquePro
                </h3>
              </div>
              
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mb-6 max-w-md">
                Your trusted delivery partner providing fast, secure, and reliable delivery services across the city. Available 24/7 for all your delivery needs.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    className="w-5 h-5"
                    alt="Phone"
                    src="https://c.animaapp.com/me8oy38oFyJeJz/img/phone-1.svg"
                  />
                  <span className="text-white text-lg">(555) 123-4567</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <img
                    className="w-5 h-4"
                    alt="Envelope"
                    src="https://c.animaapp.com/me8oy38oFyJeJz/img/envelope-o-1.svg"
                  />
                  <span className="text-white text-lg">support@logistiquepro.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <img
                    className="w-5 h-6"
                    alt="Pin location"
                    src="https://c.animaapp.com/me8oy38oFyJeJz/img/pin-alt-1.svg"
                  />
                  <span className="text-white text-lg">123 Delivery St, Canada, Montreal 12345</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white text-xl font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                {footerServices.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-[#829e8e] text-sm hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white text-xl font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                {footerCompany.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-[#829e8e] text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-600 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white text-sm">
                © 2025 LogistiquePro. All rights reserved.
              </p>
              
              <div className="flex gap-4">
                {socialIcons.map((icon, index) => (
                  <a key={index} href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      className={icon.className}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
