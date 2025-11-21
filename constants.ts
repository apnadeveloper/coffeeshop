import { CoffeeItem, Feature, Testimonial, FaqItem } from './types';
import { Coffee, Award, Clock, Leaf, User, ShieldCheck, Bean } from 'lucide-react';

export const NAV_LINKS_LEFT = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Offers', href: '#offers' },
];

export const NAV_LINKS_RIGHT = [
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Awaken Your Senses",
    subtitle: "Experience the richest dark roasts sourced from the mountains of Ethiopia.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Pure Arabica",
    subtitle: "100% Organic beans, roasted to perfection for that velvet finish.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Latte Artistry",
    subtitle: "Where passion meets precision in every cup we pour.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1920&auto=format&fit=crop"
  }
];

export const FEATURED_COFFEES: CoffeeItem[] = [
  {
    id: 1,
    name: "Classic Espresso",
    description: "Rich, intense, and full-bodied.",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk foam.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    description: "Vanilla syrup, espresso, and caramel drizzle.",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Cold Brew",
    description: "Steeped for 24 hours for smoothness.",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop"
  }
];

export const MENU_ITEMS: CoffeeItem[] = [
  {
    id: 1,
    name: "Velvet Latte",
    description: "Our signature latte with a hint of rose and vanilla, served with oat milk.",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Mocha Bliss",
    description: "Belgian dark chocolate melted into espresso and steamed milk.",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Hazelnut Pour-Over",
    description: "Manual brew method highlighting the nutty notes of our Brazilian beans.",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Affogato",
    description: "A scoop of artisan vanilla bean gelato drowned in hot espresso.",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Flat White",
    description: "Micro-foam poured over a double shot of espresso for a creamy texture.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Irish Coffee",
    description: "Coffee, Irish whiskey, sugar, topped with cream (Alcoholic).",
    price: "$8.00",
    image: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?q=80&w=600&auto=format&fit=crop"
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Premium Beans",
    description: "Sourced directly from farmers ensuring fair trade and top quality.",
    icon: "Bean"
  },
  {
    id: 2,
    title: "Expert Baristas",
    description: "Our team is award-winning and passionate about coffee craft.",
    icon: "Award"
  },
  {
    id: 3,
    title: "Cozy Ambiance",
    description: "A perfect environment for work, study, or relaxation.",
    icon: "Coffee"
  },
  {
    id: 4,
    title: "Fast Service",
    description: "Quality coffee shouldn't mean waiting forever.",
    icon: "Clock"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do you offer dairy-free milk options?",
    answer: "Yes! We offer Oat, Almond, Soy, and Coconut milk at no extra charge for most drinks."
  },
  {
    question: "Are your beans organic?",
    answer: "We strive to use 100% organic beans for our house blends and single-origin offerings."
  },
  {
    question: "Do you have Wi-Fi?",
    answer: "Absolutely. We provide high-speed fiber internet free for all our paying customers."
  },
  {
    question: "Can I book the space for events?",
    answer: "Yes, we have a private room available for bookings. Please contact us for details."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Student",
    text: "The student offer is a lifesaver! Best place to study with amazing cold brew.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelancer",
    text: "Fast wifi, great ambiance, and the velvet latte is simply out of this world.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Coffee Enthusiast",
    text: "I've tried coffee shops all over the city, and this is by far the most authentic.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];