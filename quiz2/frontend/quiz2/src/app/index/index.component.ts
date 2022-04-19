import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
//ONLY PROBLEM HERE IS THE .READY AND ITS NOT WORKING 
$(document).ready(function(){
  function sendRequest(e: Event){
    fetch('http://localhost:3000/mongo',{
        method: 'PUT'
    }).then(res=> console.log(res))
  }
  
  function onRequest(){
    let btnAction= (document.getElementById('btn-search-put')as HTMLFormElement);
    btnAction.addEventListener("click", (e: Event)=> sendRequest(e));
  }

  onRequest();
})

//ONLY PROBLEM HERE IS THE .READY AND ITS NOT WORKING 
$(document).ready(function(){
  function sendRequest(e: Event){
    fetch('http://localhost:3000/mongo',{
        method: 'DELETE'
    }).then(res=> console.log(res))
    var element= document.getElementById('btn-search-delete');
    element!.parentNode!.removeChild(element!);
  }
  
  function onRequest(){
    let btnAction= (document.getElementById('btn-search-delete')as HTMLFormElement);
    btnAction.addEventListener("click", (e: Event)=> sendRequest(e));
  }

  onRequest();
})
