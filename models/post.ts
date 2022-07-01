export interface IAuthor {
  name: string;
  title: string;
  profileUrl: string;
  avatarUrl: string;
}

export interface IPost {
  id: number | string;
  title: string;
  publishedDate: string;
  tagList: string[];
  description: string;

  slug: string;
  author?: IAuthor;

  mdContent?: string;
  htmlContent?: string;
}
