import Task from '../model/Task';

class TaskService {
  tasks: Task[] = [];

  generateTasks() {
    this.tasks.push(new Task('Walk the dogs', '9am', '10:30am', new Date()));
    this.tasks.push(new Task('Look at events for Here', '11am', '12am', new Date()));
    this.tasks.push(new Task('Daily ideas demo for devs', '2pm', '4pm', new Date()));
  }

  getTasks(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      resolve(this.tasks);
    });
  }
}

const taskService = new TaskService();
taskService.generateTasks();

export default taskService;
