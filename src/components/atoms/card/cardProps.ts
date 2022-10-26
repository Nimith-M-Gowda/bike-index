export interface CardProps {
  id: string;
  title: string;
  description?: string;
  dateStolen: Number;
  year?: Number;
  stolenLocation?: string;
  thumb?: string;
  onClickCard?: (id: string) => void;
}
