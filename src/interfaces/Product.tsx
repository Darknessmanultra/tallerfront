export interface Product {
    id:          string;
    name:        string;
    description: string;
    price:       number;
    category:    string;
    urls:        string[];
    stock:       number;
    brand:       string;
    isDeleted:    boolean;
    condition:   number;
    createdAt: string;
    updatedAt?: string;
}

export interface Condition {
  id: number;
  name: 'New' | 'Used';
}