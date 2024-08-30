import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { AddTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Create a new project',
      summary: 'Create a new project for the upcoming tasks',
      dueDate: '2024-06-30',
    },
  ];

  get selectedUsertasks() {
    return this.Tasks.filter((task) => task.userId === this.userId);
  }

  onCompletedTask(taskId: string) {
    this.Tasks = this.Tasks.filter((task) => task.id !== taskId);
  }

  onStartAddingTask() {
    this.isAddingTask = true;
  }

  onCancelAddingTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: AddTask) {
    this.Tasks.unshift({
      id: Math.random().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });

    this.isAddingTask = false;
  }
}