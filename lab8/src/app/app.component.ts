import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  eventObserver = new EventObserver();
  todosFacade = new TodosFacade();

  title = 'angular3';

  data: any = [];
  favorites: any = new Proxy([], {
    set(target, prop, val) {
      try {
        const modifiedVal = {
          ...val,
          title: val.title?.toUpperCase() || val.title,
        };
        target[prop] = modifiedVal;

        return true;
      } catch {
        return true;
      }
    },
  });

  titleSize = 14;
  titleColor = 'black';

  list: any[] = [];

  ngOnInit() {
    this.onFetchList();
    this.eventObserver.subscribe(console.log);
  }

  constructor(public dialog: MatDialog) {}

  openInfo(item: any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { ...item },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  onFavorite(item: any): any {
    this.favorites = this.todosFacade.handleFavorite(item, this.favorites);
    this.eventObserver.broadcast(this.favorites);
  }

  onFetchList = async () => {
    this.list = await this.todosFacade.getUsers();
  };

  isFavorite(item: any) {
    return this.todosFacade.isFavorite(item, this.favorites);
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <div>userId {{ data.userId }}</div>
    <div>bookId {{ data.id }}</div>
    <div>completed: {{ data.completed }}</div>
    <div>title: {{ data.title }}</div>
  `,
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

class TodosFacade {
  async getUsers() {
    const newData: any = await fetch(
      'http://jsonplaceholder.typicode.com/todos',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }
    );
    const processed = await newData.json();
    return processed;
  }

  handleFavorite(item: any, favorites: any) {
    if (this.isFavorite(item, favorites)) {
      return favorites.filter((favorite: any) => item.id !== favorite.id);
    } else {
      favorites.push(item);
      return favorites;
    }
  }

  isFavorite(item: any, favorites: any) {
    return favorites.map((favorite: any) => favorite.id).includes(item.id);
  }
}

class EventObserver {
  observers: any[];
  constructor() {
    this.observers = [];
  }

  subscribe(fn: any) {
    this.observers.push(fn);
  }

  unsubscribe(fn: any) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data: any) {
    this.observers.forEach((subscriber) => subscriber(data));
  }
}
