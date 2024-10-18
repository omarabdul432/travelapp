import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favourites: any[] = JSON.parse(localStorage.getItem("favourites") || '[]')

  constructor() { }

  addToFavourites(item: any) {
    this.favourites.push(item)
    localStorage.setItem("favourites", JSON.stringify(this.favourites))
    console.log(this.favourites)
  }

  getFavourites() {
    console.log(this.favourites)
    return this.favourites
  }

  deleteFromFavourites(item: any) {
    this.favourites = this.favourites.filter((i) => i.id !== item.id)
    localStorage.setItem("favourites", JSON.stringify(this.favourites))
  }
  getdetailsById(id: any) {
    console.log(id);
    this.favourites = this.favourites.filter((i) => i.id == id)
    console.log(this.favourites)
    return this.favourites
  }
}
