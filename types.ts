export interface FeatureItem {
  id: string;
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; // If true, image is on the right
}

export interface NavLink {
  label: string;
  href: string;
}