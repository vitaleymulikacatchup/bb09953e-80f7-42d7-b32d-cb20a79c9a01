"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = /* provided JSON array */ [{"id":"hero-image","url":"https://images.pexels.com/photos/6667210/pexels-photo-6667210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Intimate dining by the fireplace with wine and appetizers, perfect for a cozy winter evening."},{"id":"about-image","url":"https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sophisticated luxury restaurant interior featuring elegant chandeliers and plush seating, perfect for fine dining."},{"id":"team-image","url":"https://images.pexels.com/photos/680302/pexels-photo-680302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Vibrant market scene of hanging meats and vegetables in indoor setting."},{"id":"contact-image","url":"https://images.pexels.com/photos/5647584/pexels-photo-5647584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Crop anonymous African American entrepreneur in gray jacket with satchel and pass card browsing internet on smartphone on pavement near stone wall in city in daylight"}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={"text-stagger"}
      defaultTextAnimation={"entrance-slide"}
      borderRadius={"rounded"}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Pizzeria"
            description="Delicious slices waiting for you"
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[{ text: "Order Now", href: "menu" }]}
            className="bg-yellow-100"
            titleClassName="text-red-900"
            descriptionClassName="text-red-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Experience The Best Pizza In Town"
            buttons={[{ text: "Learn More", href: "about" }]}
            className="bg-yellow-100"
            titleClassName="text-red-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay in Touch"
            title="Join Our Newsletter"
            description="Stay updated with our latest offers"
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url}
            className="bg-yellow-100"
            titleClassName="text-red-900"
            descriptionClassName="text-red-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  { label: "Menu", href: "menu" },
                  { label: "Contact", href: "contact" }
                ]
              },
              {
                items: [
                  { label: "Terms of Service", href: "terms" },
                  { label: "Privacy Policy", href: "policy" }
                ]
              }
            ]}
            logoText="Pizzeria"
            className="bg-yellow-100"
            logoClassName="text-red-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
