export default class Task {
  description: string;
  from: string;
  to: string;
  createdAt: Date;
  done: boolean;

  constructor(description: string, from: string, to: string, createdAt: Date, done: boolean) {
    this.description = description;
    this.from = from;
    this.to = to;
    this.createdAt = createdAt;
    this.done = done;
  }
}
