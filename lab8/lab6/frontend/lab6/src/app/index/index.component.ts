import { Component, OnInit } from '@angular/core';
 import $ from "jquery";
//declare var $: any;
//import { $ } from '../jquery-3.1.1';


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

$(document).ready(function(){
  $(".btn-search").click(async function(){
    console.log("here");
    //(document.getElementById('update_name')as HTMLFormElement).innerHTML = "here";
    //const search_term= (document.getElementById('search_q')as HTMLFormElement);
    const search_term= $('#search_q').val();
    console.log(search_term);
    //let search_term= (document.getElementById('search_q')as HTMLFormElement)
    //let search_btn = (document.getElementById('search-btn')as HTMLFormElement)
    // document.getElementById('show_error').classList.remove('show')
    // document.getElementById('show_error').classList.add('hidden')
  
    const url = new URL(`https://pokeapi.co/api/v2/pokemon/` + search_term);
    const response = await fetch(url.toString());
    
    
    
    const pokemon= await response.json();
    //$('#update_img').val()= pokemon.sprites.other.dream_world.front_default;
    (document.getElementById('update_img')as HTMLFormElement).setAttribute('src', pokemon.sprites.other.dream_world.front_default);
    (document.getElementById('update_name')as HTMLFormElement).innerHTML = pokemon.name;
    (document.getElementById('update_type')as HTMLFormElement).innerHTML = `${pokemon.types[0].type.name}`;
    (document.getElementById('update_hp')as HTMLFormElement).innerHTML= `HP ${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`;
    (document.getElementById('update_cp')as HTMLFormElement).innerHTML= `XP ${pokemon.base_experience}`;
    (document.getElementById('update_weight')as HTMLFormElement).innerHTML = `${pokemon.weight}kg`;
    (document.getElementById('update_height')as HTMLFormElement).innerHTML= `0.${pokemon.height}m`;
    // var tag= document.createElement("p");
    // tag.append(search_term);
    // var element= (document.getElementById('list_pokemon'));
    // (document.getElementById('list_pokemon').appendChild(tag);
    const app= document.getElementById('list_pokemon');
    const p= document.createElement("p");
    let name1:string= search_term! as string;
    p.textContent= name1;
    app?.appendChild(p);

    

  });
})

$(document). ready(function(){
  function sendRequest(e: Event){
    fetch('http://localhost:3000/reset',{
        method: 'DELETE'
    }).then(res=> console.log(res))
    var element= document.getElementById('list_pokemon');
    element!.parentNode!.removeChild(element!);
  }
  
  function onRequest(){
    let btnAction= (document.getElementById('delete_btn')as HTMLFormElement);
    btnAction.addEventListener("click", (e: Event)=> sendRequest(e));
  }

  onRequest();
})

$(document).ready(function(){
  function sendRequest(e: Event){
    fetch('http://localhost:3000/updateName',{
      method: 'PUT'
    }).then(res=>console.log(res))
  }

  function onRequest(){
    let btnAction= (document.getElementById('update_btn')as HTMLFormElement);
    btnAction.addEventListener("click", (e: Event)=> sendRequest(e));
  }

  onRequest();
})

// function onRequest(e: Event){
//   (document.getElementById('delete_btn')as HTMLFormElement).addEventListener("click",sendRequest );
// }

// export function sendRequest(e: Event){
//   fetch('http://localhost:3000/reset',{
//       method: 'DELETE'
//   }).then(res=> console.log(res))
// }

// export function onRequest(){
//   let btnAction= (document.getElementById('delete_btn')as HTMLFormElement);
//   btnAction.addEventListener("click", (e: Event)=> sendRequest(e));
// }

// onRequest();

//search_btn.addEventListener("click", () => getPokemonData(search_term.value));
// search_btn.addEventListener("click", (e: Event)=>getPokemonData());


// let search_term= (document.getElementById('search_q')as HTMLFormElement)
// let search_btn = (document.getElementById('search-btn')as HTMLFormElement)

//const getPokemonData= async()=>{
// const getPokemonData= async()=>{
//   let search_term= (document.getElementById('search_q')as HTMLFormElement)
//   //let search_term= (document.getElementById('search_q')as HTMLFormElement)
//   //let search_btn = (document.getElementById('search-btn')as HTMLFormElement)
//   // document.getElementById('show_error').classList.remove('show')
//   // document.getElementById('show_error').classList.add('hidden')

//   const url = new URL(`https://pokeapi.co/api/v2/pokemon/` + search_term);
//   const response = await fetch(url.toString());

//   const pokemon= await response.json();
//   (document.getElementById('update_img')as HTMLFormElement).setAttribute('src', pokemon.sprites.other.dream_world.front_default);
//   (document.getElementById('update_name')as HTMLFormElement).innerHTML = pokemon.name;
//   (document.getElementById('update_type')as HTMLFormElement).innerHTML = `${pokemon.types[0].type.name}`;
//   (document.getElementById('update_hp')as HTMLFormElement).innerHTML= `HP ${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`;
//   (document.getElementById('update_cp')as HTMLFormElement).innerHTML= `XP ${pokemon.base_experience}`;
//   (document.getElementById('update_weight')as HTMLFormElement).innerHTML = `${pokemon.weight}kg`;
//   (document.getElementById('update_height')as HTMLFormElement).innerHTML= `0.${pokemon.height}m`;
  

// }





