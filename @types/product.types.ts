export interface ProductTypes {
  company_id: string;
  brand: string;
  name: string;
  description: string;
  price: Number;
  discount: Number;
  rating: any;
  images: Array<string>;
  category: Array<Object>;
  status: string;
  color?: string;
  size?: string;
  material?: string;
}
