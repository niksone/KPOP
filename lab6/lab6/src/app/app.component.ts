import { Component, Inject, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  heroes: any[] = [];
  favorites: any[] = [];

  constructor(
    private http: HttpClient,
    private storage: Storage,
    public dialog: MatDialog
  ) {
    this.storage.create();
  }

  onFavorite(item: any): any {
    if (this.isFavorite(item)) {
      this.favorites = this.favorites.filter(
        (favorite) => item.id !== favorite.id
      );
    } else {
      this.favorites = [...this.favorites, item];
    }
    this.storage.set('favorites', this.favorites);
  }

  getHeroes(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api/?results=50');
  }

  modifyHero(hero): any {
    return {
      id: Math.ceil(Math.random() * 100000000),
      ...hero,
    };
  }

  isFavorite(item: any) {
    if (!item?.id) {
      return false;
    }
    return this.favorites?.map((favorite) => favorite.id).includes(item.id);
  }

  openInfo(item: any, func: any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '500px',
      data: { ...item, func },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.storage.get('favorites').then((v) => {
      console.log(v);
      this.favorites = v || [];
    });

    const heroes = this.getHeroes().subscribe((heroesItems) => {
      this.heroes = heroesItems.results.map((hero) => this.modifyHero(hero));
    });
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `<ion-list class="">
    <ion-item>First Name: {{ hero.name.first }}</ion-item>
    <ion-item>Last Name: {{ hero.name.last }}</ion-item>
    <ion-item>Gender: {{ hero.gender }}</ion-item>
    <ion-item>Date Of Birth: {{ hero.dob.date }}</ion-item>
    <ion-item>Age: {{ hero.dob.age }}</ion-item>
    <ion-item>Email: {{ hero.email }}</ion-item>
    <ion-item>Phone: {{ hero.phone }}</ion-item>
    <ion-item>City: {{ hero.location.city }}</ion-item>
  </ion-list> `,
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
