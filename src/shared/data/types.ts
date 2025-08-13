export type TypeObserveCard = {
  heading: string;
  url: string;
  imgUrl?: string;
  description: string | null;
};

export type TypeObserveCardsSection = {
  heading: string;
  description?: string;
  items: TypeObserveCard[]
}

export type TypeObserveCardsArray = TypeObserveCardsSection[];
