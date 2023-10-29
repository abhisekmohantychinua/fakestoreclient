export interface User {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  name?: {
    firstname?: string;
    lastname?: string;
  };
  address?: Address;
  phone?: string;
  __v?: number;
}
export interface Address {
  geolocation?: {
    lat?: string;
    long?: string;
  };
  city?: string;
  street?: string;
  number?: number;
  zipcode?: string;
}
