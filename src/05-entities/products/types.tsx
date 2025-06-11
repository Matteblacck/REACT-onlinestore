

export interface Product {
    section: string;
    category: string;
    subcategory: string;
    id: string;
    name: string;
    description: string;
    sizes: Size[];
    photos: string[];
    price: number;
  }
  
  export interface Size {
    size: string;
  }
  
 