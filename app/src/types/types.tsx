export interface Listing {
  id?: number;
  title: string;
  picture?: string;
  health?: number;
  currency?: string;
  beds?: number;
  basePrice?: number;
  days?: Array;
}

export interface Listings {
  listings: Array<Listing>
}
