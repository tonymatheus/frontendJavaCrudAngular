import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ListarComponent } from './pessoa/listar/listar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  constructor(private router:Router){
  }

  Listar(){
    this.router.navigate(['listar']);
  }

  Novo(){
    this.router.navigate(['add']);
  }
  
}
