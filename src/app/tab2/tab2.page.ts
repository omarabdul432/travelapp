import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonImg, IonCardTitle, IonCardContent, IonCardHeader, IonButton, IonText, IonAvatar, IonLoading } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FavoritesService } from '../_services/favorites.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonLoading, IonAvatar, IonText, IonButton, IonCardHeader, IonCardContent, IonCardTitle, IonImg, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, RouterLink]
})
export class Tab2Page {

  favourites: any = []
  constructor(private favourite: FavoritesService) {
    this.favourites = this.favourite.getFavourites()
    console.log(this.favourite.getFavourites())
  }

  remove(item: any) {
    this.favourite.deleteFromFavourites(item)
    this.favourites = this.favourites.filter((fav: any) => fav !== item)
  }
}
