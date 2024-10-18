import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonAvatar, IonItem, IonList, IonGrid, IonRow, IonCol, IonLabel, IonText, IonAlert, AlertController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, create, createOutline, notifications, information, informationCircle, shareSocial, settings, logOut } from 'ionicons/icons';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonAlert, IonText, IonLabel, IonCol, IonRow, IonGrid, IonList, IonItem, IonAvatar, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Tab4Page {

  constructor(private alert: AlertController) {
    addIcons({ arrowBack, createOutline, notifications, settings, shareSocial, informationCircle, logOut, information, create });
  }

  async logout() {
    const alert = await this.alert.create({
      header: 'Are you sureyou want to logout?',
      subHeader: 'You have no longer access',
      buttons: [{
        text: 'cancel',
        role: 'cancel'
      },
      {
        text: "logout",
        cssClass: 'danger',
      }]
    })
    await alert.present()
  }

}
