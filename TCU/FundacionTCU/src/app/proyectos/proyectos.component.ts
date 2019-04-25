import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  participarProyecto(){
    debugger;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw-yAyeON05TsZb19U38n2ie1BofVhvNxVa1BsjErFMM5PVQLdI/exec'
    const form = document.forms['contact']
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Enviado!', response))
            .catch(error => console.error('Error!', error.message))
    })  
  }
}
  
