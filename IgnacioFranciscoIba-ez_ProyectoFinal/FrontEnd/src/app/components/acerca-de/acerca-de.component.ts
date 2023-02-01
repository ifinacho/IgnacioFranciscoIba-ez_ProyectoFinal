import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargaPersona();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargaPersona(): void {
    this.personaService.detail(1).subscribe(data => {this.persona = data})
  }

}
