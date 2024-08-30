import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from '../task/task.model';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css',
})
export class NewTasksComponent {
  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<AddTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit(){
    if(this.enteredTitle === '' || this.enteredSummary === '' || this.enteredDate === ''){
      return;
    }

    const addTask: AddTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };
    
    this.add.emit(addTask);
  }

}
