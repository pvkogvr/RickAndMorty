import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  participantId:string = "";
  response:any;

  constructor(private http: HttpClient){
  }

  search(){
      this.http
      .get('https://rickandmortyapi.com/api/character/'+ this.participantId)
      .subscribe((response)=>{
          this.response = response;
          console.log(this.response);
      })
  }
  
}
