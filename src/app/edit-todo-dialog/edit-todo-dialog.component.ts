import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Todo} from "../shared/todo.model";

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.css']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTodoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public todo:Todo) { }


  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close()
  }

  onFormSubmit(form: NgForm){
    const updatedTodo = {
      ...this.todo,
      ...form.value
      }

    this.dialogRef.close(updatedTodo)

  }

}
