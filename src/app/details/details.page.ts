import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonList, IonItem, IonCard, IonCardContent, IonCardSubtitle, IonText, IonGrid, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FavoritesService } from '../_services/favorites.service';
import { addIcons } from 'ionicons';
import { arrowBack, location, star } from 'ionicons/icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonLabel, IonGrid, IonText, IonCardSubtitle, IonCardContent, IonCard, IonItem, IonList, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class DetailsPage implements OnInit {

  items: any = []
  constructor(private route: ActivatedRoute, private favourite: FavoritesService) {
    addIcons({ arrowBack, location, star });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    if (id) {
      this.items = this.favourite.getdetailsById(id)
      console.log(this.items)
    }
  }
}

