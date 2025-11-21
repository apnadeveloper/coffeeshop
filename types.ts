export interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating?: number;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}