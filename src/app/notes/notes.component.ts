import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: any[] = [];
  
lane: number = 1;
_id: string = "";
noteTitle: string ="";
noteContent: string ="";
 /* notes: any[] = [
    {
      id: 1,
      noteTitle: 'This is my first note',
      noteContent: 'This is the content of my first note',
      lane: 1
    },
    {
      id: 2,
      noteTitle: 'This is my second note',
      noteContent: 'This is the content of my second note',
      lane: 2
    },
    {
      id: 3,
      noteTitle: 'This is my 3rd note',
      noteContent: 'This is the content of my 3rd note',
      lane: 3
    },
    {
      id: 4,
      noteTitle: 'This is my 4th note',
      noteContent: 'This is the content of my 4th note',
      lane: 2
    }
  ];
*/
  constructor(private noteService: NoteService) {}

ngOnInit() {
  this.noteService.getAll().subscribe(notes => {
        this.setNotes(notes);
      });
}

setNotes(inputNotes: any)
{
  this.notes = inputNotes;
  console.log(this.notes)
}


  getToDos(notes: any[]): any[]{
    return notes.filter(p=>p.lane==1);
  }
  getInProgress(notes: any[]): any[]{
    return notes.filter(p=>p.lane==2);
  }
  getDone(notes: any[]): any[]{
    return notes.filter(p=>p.lane==3);
  }
  createNote() : void
  {
    console.log("CreateNotePushed")
  }
  addNoteButton():void
  {
    console.log("Add Note Button Pushed")
    let note={
      "noteTitle":this.noteTitle,
      "noteContent": this.noteContent,
      "lane":this.lane
    };
    this.noteService.save(note)
    console.log('Note saved');
    console.log(note);
    this.reset();
    this.ngOnInit();
  }
  reset():void
  {
    this.noteTitle="";
    this.noteContent="";
    this.lane=0;
  }
  setUpdate(data:any)
  {
    console.log("Modify called")
    this.noteContent = data.noteContent;
    this.noteTitle = data.noteTitle;
    this.lane = data.lane;
    this._id = data._id;
    this.noteService.updateNote()
    //call API Update Method

    this.reset();
  }
  setDelete(data:any)
  {
    console.log(data);
    this.noteService.deleteNote(data._id)
    this.reset();
    this.ngOnInit();
  }
}

interface Note {
  noteTitle: string;
  noteContent: string;
  lane: number;
  _id: string;
}