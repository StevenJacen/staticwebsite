export interface FeatureItem {
  id: string;
  title: string;
  description: string[];
  imageAlt: string;
  reverse?: boolean; // If true, image is on the right (for default theme)
  theme?: 'gray' | 'news' | 'beige'; // Layout themes: 'gray' (Tech), 'teal' (Fashion)
  buttonText?: string;
  backgroundImage?: string; // Optional background image URL for the section
  backgroundImageMobile?: string; // Optional mobile background image URL
  link?: string; // Optional URL to navigate to
}

export interface NavLink {
  label: string;
  href: string;
}