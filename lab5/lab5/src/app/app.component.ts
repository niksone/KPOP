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
  title = 'angular3';

  data: any = [];
  favorites: any[] = [];

  list: any[] = [];

  ngOnInit() {
    this.onFetchList();
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
    if (this.isFavorite(item)) {
      this.favorites = this.favorites.filter(
        (favorite) => item.id !== favorite.id
      );
    } else {
      this.favorites = [...this.favorites, item];
    }
  }

  onFetchList = async () => {
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
    this.list = processed;
  };

  isFavorite(item: any) {
    return this.favorites.map((favorite) => favorite.id).includes(item.id);
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
