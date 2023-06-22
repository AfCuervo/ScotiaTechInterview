import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  updateNote() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get('http://localhost:8080/api/v1/note/getAll');
  }
  
  save(note: any)
  {
    return this.http.post('http://localhost:8080/api/v1/note/save', note, {responseType: 'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData)
      alert("Note added succesfully");
    });
  }
  
  deleteNote(note: any)
  {
    return this.http.delete('http://localhost:8080/api/v1/note/delete'+ "/" + note, {responseType: 'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData)
      alert("Note deleted succesfully");
    });
  }
}