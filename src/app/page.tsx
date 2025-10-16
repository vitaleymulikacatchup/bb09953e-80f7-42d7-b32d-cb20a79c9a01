"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "heroImage", url: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal." },
  { id: "aboutImage", url: "https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Warm and inviting Italian cafe with a variety of pizzas and drinks displayed on a counter." },
  { id: "footerLogo", url: "https://images.pexels.com/photos/7317349/pexels-photo-7317349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Neon sign reading 'Pizzeria Pera' on a textured wall, captured in Istanbul's urban environment." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/7317349/pexels-photo-7317349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          brandName="Pizzeria"
          buttonText="Join Now"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Taste the best pizzas made with fresh ingredients."
            imageSrc="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Order Now", href: "https://example.com/order" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We create delightful pizza experiences"
            buttons={[{ text: "Find Out More", href: "https://example.com/about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Unique Features"
            features={[
              { title: "Authentic Ingredients", description: "Using only the freshest and finest ingredients.", icon: "Leaf" },
              { title: "Unique Recipes", description: "Combining flavors for a unique tasting experience.", icon: "Zap" }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Our Menu"
            products={[
              { id: "1", name: "Margherita", price: "$12", imageSrc: "/images/margherita.jpg", onProductClick: "() => window.open('https://example.com/products/margherita', '_blank')" },
              { id: "2", name: "Pepperoni", price: "$15", imageSrc: "/images/pepperoni.jpg", onProductClick: "() => window.open('https://example.com/products/pepperoni', '_blank')" },
              { id: "3", name: "Vegetarian", price: "$14", imageSrc: "/images/vegetarian.jpg", onProductClick: "() => window.open('https://example.com/products/vegetarian', '_blank')" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay updated with our latest news"
            description="Subscribe for updates and exclusive offers."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [{ label: "Menu", href: "product" }, { label: "About Us", href: "about" }] },
              { title: "Support", items: [{ label: "Contact", href: "contact" }, { label: "FAQs", href: "https://example.com/faq" }] }
            ]}
            logoSrc="https://images.pexels.com/photos/7317349/pexels-photo-7317349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            copyrightText="© 2025 | Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
