interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class PostModel implements Post {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(data?: Post) {
    this.userId = data && data.userId || null;
    this.id = data && data.id || null;
    this.title = data && data.title || null;
    this.body = data && data.body || null;
  }
}
