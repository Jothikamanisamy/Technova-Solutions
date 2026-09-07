export interface BlogPost {
  id: number;
  apiId: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
