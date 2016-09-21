import { Component } from '@angular/core';

//pt one of TOH looks like it can be used to create colonists, aliens and poss encounters re:classes and interfaces
export class Hero {
	id: number;
	name: string;
	age: number;
	occupation: string;
}

//ngModel lets you access the properties of the class AppComponent in this case

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>
			<input [(ngModel)]="hero.name" placeholder = "name">
			<p>{{hero.name}}</p>
    </div>
    					 `
})
export class AppComponent { 

title = "Tour of Heroes->Colonists->Encounters";
hero: Hero = {
	id: 1,
	name: "Marissa",
	occupation: "nerf herder",
	age: 42
 //heroes->colonists (aliens)
	};
}
//pt 1 shows heroes similar to list of encounters in mars project