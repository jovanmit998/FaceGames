export interface Game {
  id: number;
  name: string;
  imgSrc: string;
  description: string;
  comments: Comment[];
  rate: number;
}

export interface Comment {
  comment: string;
  datePosted: string;
  isEdited: boolean;
}
