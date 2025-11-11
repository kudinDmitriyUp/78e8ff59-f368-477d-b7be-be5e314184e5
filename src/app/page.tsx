"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bed, Calendar, Crown, Heart, MessageSquare, Newspaper, Star, Trophy } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Gallery", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Experience Luxury Beyond"
          description="Discover unparalleled elegance and world-class service at Grand Luxe Hotel, where every detail is crafted for your perfect stay"
          tag="Welcome"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "product" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g992287e2e7cf6d4badaa703e93e88ac63dad5b03754627579ea9e23bcc2194acf231d6072480ce38a15f01d4e88b8140b23bc2e417b6c8972ba540f561eac17e_1280.jpg",
              imageAlt: "Luxury hotel suite"
            },
            {
              imageSrc: "https://pixabay.com/get/g5e80447737a960955671e14a61e94e1463b7cc34580f5edb0d620443df6b5fd9b3b9a42eacb9b59edc3c165b3ad9e30b574d1db98d8d0279506e2edf22ed3523_1280.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              imageSrc: "https://pixabay.com/get/g45ec491ec7d88fb781378d2795f032ed632e48b3016ef61e267e49f756eeaf35176b1e595a93e2617e8fbe13c411a02e251c86d6d67f0e4ee125f5e1f796c29a_1280.jpg",
              imageAlt: "Spa wellness center"
            },
            {
              imageSrc: "https://pixabay.com/get/gef53959798b1a2cd53a16d08952e0f36dd31df8f19011df9b5b7d3bf4c19617efc9c0393ab12b3368b588563575babeeef3f0276a1d86b80bf82547459b1784f_1280.jpg",
              imageAlt: "Swimming pool"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Grand Luxe Hotel"
          description={[
            "For over three decades, Grand Luxe Hotel has been synonymous with exceptional hospitality and timeless elegance. Our commitment to excellence has earned us recognition as one of the world's premier luxury destinations.",
            "From our meticulously appointed suites to our award-winning dining experiences, every aspect of your stay is designed to exceed expectations and create lasting memories."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Immerse yourself in luxury with our comprehensive collection of premium amenities and services"
          tag="Amenities"
          tagIcon={Crown}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special requests",
              imageSrc: "https://pixabay.com/get/g8edec65b5df728f3cf00548123479656d4bca3e1dd3d1f770172eb5e814d468a3e26724f78c3a70b4bab30ad22ee911250ab2cf5adfc7744c0e0348cda834166_1280.jpg",
              imageAlt: "Professional concierge service"
            },
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body at our award-winning spa featuring world-class treatments and facilities",
              imageSrc: "https://pixabay.com/get/gec5cb366514d79034243b9b2a1df1b9203ea8fd39c744211706a132b146f680e58259f8ef63d16e1a7ef9a4ae747f6a0b21be8a5e518fcd605f4ebe0c7e6c3a3_1280.jpg",
              imageAlt: "Luxury spa treatments"
            },
            {
              title: "Fine Dining Excellence",
              description: "Experience culinary artistry at our Michelin-starred restaurants featuring renowned chefs and exquisite cuisine",
              imageSrc: "https://pixabay.com/get/gea240c0b19121ca26543f149767aa2868974c829c3bf89537dcdb99f9d4f8c96217e8582c5eeaae690307878477af94f16176fc05c27a6d4f8e25de931388639_1280.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your wellness routine in our fully equipped fitness center with personal training services available",
              imageSrc: "https://pixabay.com/get/gba595824c96e61cb0ce7dca5ea754f120205d2f16172bcce90d1586520964487546a59d8cbe1c9a0e536d359c3728096e0a42a445eea8cf9dcdea07b880a6aa8_1280.jpg",
              imageAlt: "Modern fitness center"
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardThree
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed for ultimate comfort"
          tag="Rooms & Suites"
          tagIcon={Bed}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "deluxe",
              name: "Deluxe King Room",
              price: "$350/night",
              imageSrc: "https://pixabay.com/get/ga8c7a3cf69617a1a192c30184974755f8bf75c79e0085359f7c4c3a8fa2fedf64a6380f05a0a78ec9df52c874e1aa4ba22ba1c57317012180c507ae341a3690d_1280.jpg",
              imageAlt: "Deluxe king room",
              initialQuantity: 1
            },
            {
              id: "suite",
              name: "Executive Suite",
              price: "$650/night",
              imageSrc: "https://pixabay.com/get/g9926d98f7e6174fc8d0e03662cbfc4b67b0ab6bfd0f0dbe43f0c3fbd8935e99ee1695f55350f55a133069d990a5c5f2bf96abc3af773bbffcb6193ffd49dc33d_1280.jpg",
              imageAlt: "Executive suite",
              initialQuantity: 1
            },
            {
              id: "penthouse",
              name: "Presidential Penthouse",
              price: "$1,200/night",
              imageSrc: "https://pixabay.com/get/g1f686d10044dff332ae6225d2b7dd598dbe5d836456d03d7febb734b7c1f949676fa040647e8afe1c727f378a4fd64b9b2607c1feab381531e90cd6790184d6b_1280.jpg",
              imageAlt: "Presidential penthouse",
              initialQuantity: 1
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Our commitment to exceptional service is reflected in these achievements"
          tag="Recognition"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "years",
              value: "30+",
              title: "Years",
              description: "Of luxury hospitality excellence",
              icon: Calendar
            },
            {
              id: "awards",
              value: "50+",
              title: "Awards",
              description: "International hospitality recognitions",
              icon: Trophy
            },
            {
              id: "satisfaction",
              value: "98%",
              title: "Satisfaction",
              description: "Guest satisfaction rating",
              icon: Heart
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grand Luxe Hotel for unforgettable experiences"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "Tech Innovations Inc.",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g450f591b7fdd962fc5ffba22110c06e00638dc6f87f9f854b5f9f945d20115fd49c8bb8ff845134c8ee542f960134feda19c0edb5879c40b4d5579bf71636255_1280.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael & Emma Chen",
              role: "Travelers",
              company: "Anniversary Celebration",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g6a1f5ed9533dd3cee665f9018739e97b0f683665f9c929fed33a1d0ece714743288177c90e84fe73b8b4ffe60f9e35ed581790fee17d3d1ef6167a3e85c1f4ae_1280.jpg",
              imageAlt: "Michael and Emma Chen"
            },
            {
              id: "3",
              name: "David Richardson",
              role: "Executive",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge9f278d5ae65d6b1f4ac066baef59a72c78549a9d96546af956913b4d0d71874eb0628d7617de22ad0a32542de689b364c9a99148b6634c0f95568dcdc795366_1280.jpg",
              imageAlt: "David Richardson"
            },
            {
              id: "4",
              name: "The Martinez Family",
              role: "Guests",
              company: "Family Vacation",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g8e3b823bde8012acef3e703b278f99e6cae9339b8ac9e13ccb262fb117a5d5d1eaee3a44cb23b26a7d97f51c9e51a66d7c2e14c459d405b44a94af93095fec76_1280.jpg",
              imageAlt: "Martinez Family"
            },
            {
              id: "5",
              name: "Isabella Rodriguez",
              role: "Travel Blogger",
              company: "Luxury Escapes",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g48b304595d90fe5068a37d47d42d08d188780e14571e0c9b368113276b43c801209f38b410af1efaf2e1426b59402d50a8871a0d4e649c5582a5355f32442569_1280.jpg",
              imageAlt: "Isabella Rodriguez"
            }
          ]}
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel News & Events"
          description="Stay updated with the latest happenings, events, and exclusive offers at Grand Luxe Hotel"
          tag="Latest"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Events",
              title: "Exclusive Winter Gala 2025",
              excerpt: "Join us for an unforgettable evening of elegance and celebration at our annual winter gala",
              imageSrc: "https://pixabay.com/get/g841fb72e0e592db66bbda3ad2b46f62c3ab30bde2a201c3cbd991fd813db7d442fb54f4c10fc4bba2cdbd1d7b9f058f6d5640da42997e30ef44b6a675782ba0f_1280.jpg",
              imageAlt: "Winter gala event",
              authorName: "Events Team",
              authorAvatar: "https://pixabay.com/get/g450f591b7fdd962fc5ffba22110c06e00638dc6f87f9f854b5f9f945d20115fd49c8bb8ff845134c8ee542f960134feda19c0edb5879c40b4d5579bf71636255_1280.jpg",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "Culinary",
              title: "Meet Our New Executive Chef",
              excerpt: "Discover the culinary vision behind our award-winning dining experiences",
              imageSrc: "https://pixabay.com/get/g5955d47cd52c6c67989adcb2a0114ad7890636c579c2b91a314a145282ffa81ce1661b2fe97ab167d6d49f15436dbd1c46d6aeb6dbfedf73125941da12a167d3_1280.jpg",
              imageAlt: "Executive chef",
              authorName: "Culinary Team",
              authorAvatar: "https://pixabay.com/get/g6a1f5ed9533dd3cee665f9018739e97b0f683665f9c929fed33a1d0ece714743288177c90e84fe73b8b4ffe60f9e35ed581790fee17d3d1ef6167a3e85c1f4ae_1280.jpg",
              date: "10 Dec 2024"
            },
            {
              id: "3",
              category: "Wellness",
              title: "New Spa Treatment Collection",
              excerpt: "Experience our latest wellness treatments designed for ultimate relaxation and rejuvenation",
              imageSrc: "https://pixabay.com/get/gca6fab1c1c39fff9d14c9c31c3ad3d827111315597eb54ba65801a3201e24852b2cde3441197af45a4462af9704f9bb29f587a88857e687041ce4f1ceed8339c_1280.jpg",
              imageAlt: "Spa treatments",
              authorName: "Spa Director",
              authorAvatar: "https://pixabay.com/get/ge9f278d5ae65d6b1f4ac066baef59a72c78549a9d96546af956913b4d0d71874eb0628d7617de22ad0a32542de689b364c9a99148b6634c0f95568dcdc795366_1280.jpg",
              date: "05 Dec 2024"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Stay"
          description="Contact our reservations team to book your luxury experience or inquire about special packages and amenities"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "checkin", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkout", type: "date", placeholder: "Check-out Date", required: true },
            { name: "guests", type: "number", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Inquiry"
          imageSrc="https://pixabay.com/get/g01249467b110182583a4591ade65232a18d566f2434b2b39b5c362f75a628d3627a36a5c36ddeebfaa35c86ca0dd0fdb283b1de43b3a530458ed3216464c0b77_1280.jpg"
          imageAlt="Hotel reception desk"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Luxe Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "product" },
                { label: "Amenities", href: "feature" },
                { label: "Dining", href: "feature" },
                { label: "Spa & Wellness", href: "feature" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "News & Events", href: "blog" },
                { label: "Gallery", href: "testimonial" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Concierge Services", href: "feature" },
                { label: "Business Center", href: "contact" },
                { label: "Gift Cards", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}