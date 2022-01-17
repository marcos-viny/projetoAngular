import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menuOpened : boolean = false;

  setMenuState(state:boolean){
    this.menuOpened = state;
  };

  closeMenu(){
    this.menuOpened = false;
  }


  public listTitle = [{
      trailer:'../../../assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover:'../../../assets/images/guardios-da-galaxia.jpg',
      name:'Guardiões da Galaxia',
      relevance:'98',
      age:'12',
      parts:'2',
      categories:['epico', 'ação', 'fantasia']
  },
  {
    trailer:'../../../assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover:'../../../assets/images/guardios-da-galaxia.jpg',
    name:'Homem Aranha',
    relevance:'91',
    age:'0',
    parts:'1',
    categories:['epico', 'terror', 'fantasia']
},
{
  trailer:'../../../assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
  cover:'../../../assets/images/guardios-da-galaxia.jpg',
  name:'Vingadores',
  relevance:'97',
  age:'18',
  parts:'3',
  categories:['epico', 'comedia', 'fantasia']
}];


}
