import { Component, OnInit , Input} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  /* this component is using the API https://guarded-mesa-24051.herokuapp.com/api/ */
  heros: Hero[]; /* Error message: property heros has no initialized and is not assigned in the constructor*/
  
  
  constructor(private heroService: HeroService) { }
  
  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(resultat => this.heros = resultat);
  }

}
