export interface User {
    id:            string;
    Name?:    string;
    email:        string;
    phoneNumber?:   string;
    street?:       string;
    number?:       string;
    commune?:      string;
    region?:       string;
    postalCode?:   string;
    birthDate?:    null;
    registeredAt?: Date;
    lastAccess?:   Date;
    isActive?:     boolean;
    token:        string;
    role?:         string;
}

export interface Address {
  id: string;
  calle: string;
  numero:number;
  comuna: string;
  region: string;
  postalCode: number;
}