export interface FeatureItem {
  id: string;
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; // If true, image is on the right (for default theme)
  theme?: 'gray' | 'teal' | 'beige'; // Layout themes: 'gray' (Tech), 'teal' (Fashion), 'beige' (Store)
  buttonText?: string;
}

export interface NavLink {
  label: string;
  href: string;
}