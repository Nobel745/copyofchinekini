export interface LandData {
  id: string;
  title: string;
  price: string; // Formatted price string
  rawPrice: number;
  location: string;
  size: string;
  image: string;
  details: {
    waterDepth: string;
    hospitalDistance: string;
    roadDistance: string;
    gasAvailability: boolean;
    riskScore: number; // 0-100 (High is bad)
    floodRisk: number; // 0-100
    quakeRisk: number; // 0-100
    droughtRisk: number; // 0-100
    historicalPrices: number[]; // Array of abstract values for chart
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface NavItem {
  id: string;
  label: string;
}

export type ViewState = 'landing' | 'login' | 'details';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}
