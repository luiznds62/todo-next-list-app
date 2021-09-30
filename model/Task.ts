export default class Task {
  description: string;
  from: string;
  to: string;
  createdAt: Date;

  constructor(description: string, from: string, to: string, createdAt: Date) {
    this.description = description;
    this.from = from;
    this.to = to;
    this.createdAt = createdAt;
  }
}
