export interface Step {
  type: string;
  action?: string;
  title?: string;
  url?: string;
  tweet?: string;
}

export interface Prize {
  name: string;
  value: string;
}

export interface GiveawayData {
  giveaway_name: string;
  description: string;
  rules: string;
  start_date: string;
  end_date: string;
  category: string;
  steps: Step[];
  prizes: Prize[];
  image: BinaryType | string;
}
