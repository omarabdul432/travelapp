import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonAvatar, IonSearchbar, IonItem, IonChip, IonCard, IonList, IonCardHeader, IonCardContent, IonIcon, IonCardTitle, IonImg, IonThumbnail, IonLabel, IonicSlides, IonButton, ToastController, IonRow, IonGrid, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { addCircleOutline, star, heart, heartOutline } from 'ionicons/icons';
import { register } from 'swiper/element/bundle'
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../_services/favorites.service';
register()
// import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonCol, IonGrid, IonRow, IonButton, IonLabel, IonImg, IonCardTitle, IonIcon, IonCardContent, IonCardHeader, IonList, IonCard, IonChip, IonItem, IonSearchbar, IonAvatar, IonText, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonThumbnail, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {
  swiperModules = [IonicSlides]
  places = [
    {
      id: "1",
      imgURL: "https://img.freepik.com/free-photo/background-park-wonder-famous-countryside-waterscape_1417-1105.jpg",
      name: "Hogenakkal, India",
      price: "100.00",
      description: "Tucked away just 150 km from Bangalore is a cascading beauty that goes by the name of ‘Hogenakkal Falls’. Hogenakkal, located on the Tamil Nadu-Karnataka border makes for a quick getaway from Bangalore. Though a year round destination, Hogenakkal Waterfalls has a different character just after the rains. The area looks lush green and there are a number of waterfalls that you may come across.",
      rating: "4.6/5"
    },
    {
      id: "2",
      imgURL: "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg",
      name: "Thoothukudi, India",
      price: "50.00",
      description: "Tucked away just 150 km from Bangalore is a cascading beauty that goes by the name of ‘Hogenakkal Falls’. Hogenakkal, located on the Tamil Nadu-Karnataka border makes for a quick getaway from Bangalore. Though a year round destination, Hogenakkal Waterfalls has a different character just after the rains. The area looks lush green and there are a number of waterfalls that you may come across.",
      rating: "4.3/5"
    },
    {
      id: "3",
      imgURL: "https://img.freepik.com/premium-photo/mysore-palace_78361-1010.jpg",
      name: "Mysuru, India",
      price: "100.00",
      description: "The Palace of Mysore (also known as the Amba Vilas Palace) is a historical palace in the city of Mysore in Karnataka. Designed by the English Architect, Henry Irwin, the Mysore Palace dominates the skyline of Mysore. A three storied structure in the Indo-Saracenic style built between 1897-1912, the palace has beautifully designed square towers at cardinal points, covered with domes.",
      rating: "4.75/5"
    },
    {
      id: "4",
      imgURL: "https://img.freepik.com/free-photo/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand_335224-1063.jpg?ga=GA1.1.758758601.1726203726&semt=ais_hybrid",
      name: "Coorg, India",
      price: "150.00",
      desccription: "Coorg is a landlocked district in the State of Karnataka, officially known as Kodagu. The district is spread across an area of 4,102 square kilometers. Area-wise Coorg is bigger than the State of Goa.",
      rating: "4.8/5"
    },
    {
      id: "5",
      imgURL: "https://img.freepik.com/free-photo/golden-pagoda-top-golden-mount-wat-saket-ratcha-wora-maha-wihan-bangkok-thailand_231208-1438.jpg?ga=GA1.1.758758601.1726203726&semt=ais_hybrid",
      name: "Pondicherry, India",
      price: "150.00",
      description: "The Union Territory of Puducherry comprises of the erstwhile French colonies viz. Puducherry, Karaikal, Mahe and Yanam. The Puducherry and Karaikal regions are surrounded by the State of Tamilnadu, whereas Mahe is surrounded by the State of Kerala and Yanam by the state of Andra Pradesh.",
      rating: "4.7/5"
    }
  ]
  bestDestinations = [
    {
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajaw-gC6q4B4Rop3Y-RLYJz6laj1OJvWi3w&s",
      name: "Yanam",
      rating: "5.6",
    },
    {
      imgURL: "https://img.freepik.com/premium-photo/thiruvalluvar-statue-vivekananda-memorial_78361-13108.jpg?size=626&ext=jpg&ga=GA1.1.758758601.1726203726&semt=ais_hybrid",
      name: "Kanniyakumari",
      rating: "5.3",
    },
    {
      imgURL: "https://img.freepik.com/free-photo/cool-coffee-india-tea-leaves-forest_1376-24.jpg?size=626&ext=jpg&ga=GA1.1.758758601.1726203726&semt=ais_hybrid",
      name: "Munnar",
      rating: "5.7",
    },
    {
      imgURL: "https://img.freepik.com/free-photo/beautiful-ramboda-waterfall-sri-lanka-island_167946-169.jpg?ga=GA1.1.758758601.1726203726&semt=ais_hybrid",
      name: "Wayanad",
      rating: "5.8",
    }
  ]
  selected: number = 0;
  chip = ["Popular", "Adventure", "Top-Rated Destinations", "Seasonal Offers", "Luxury Travel", "Hotels", "Transport", "Concerts"]
  constructor(private favourites: FavoritesService, private Toast: ToastController) {
    addIcons({ heartOutline, star, heart, addCircleOutline });
  }

  async toastMsg(msg: string) {
    const toast = await this.Toast.create({
      message: msg,
      duration: 2000,
      position: 'top',
      color: 'secondary'
    })
    await toast.present()
  }
  change(i: number) {
    this.selected = i
  }
  isSelected(i: number): any {
    return this.selected === i;
  }

  addToFavourites(item: any) {
    this.favourites.addToFavourites(item)
    this.toastMsg('Added to favourites')
  }
}
