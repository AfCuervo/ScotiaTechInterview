import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit{

  noteTitle= "";
  noteContent= "";
  lane= 0;

  
  constructor(private dialog: MatDialog){
  
  }

  openModal() {
    const dialogRef = this.dialog.open(AddNoteComponent);
    }
  ngOnInit(): void {}
}
