import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  snacksNdMunchies = {
    title: 'Snacks & munchies',
    products: [
      {
        id: 1,
        name: 'Lays',
        quantity: 1,
        price: 50,
        reviews: 5,
        averageReviews: 4.5,
        availability: 'IN_STOCK',
        imageSrc: '/images/lays.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 2,
        name: 'Bingo',
        quantity: 1,
        price: 45,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/bingo.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 3,
        name: 'Pringles',
        quantity: 1,
        price: 150,
        reviews: 5,
        averageReviews: 4.7,
        availability: 'IN_STOCK',
        imageSrc: '/images/pringles.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 4,
        name: 'Too Yum',
        quantity: 1,
        price: 35,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/too-yum.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 5,
        name: 'Marie Gold',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.0,
        availability: 'IN_STOCK',
        imageSrc: '/images/marie-gold.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 6,
        name: 'Bourbon',
        quantity: 1,
        price: 40,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/bourbon.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 7,
        name: 'Dark Fantasy',
        quantity: 1,
        price: 70,
        reviews: 5,
        averageReviews: 4.8,
        availability: 'IN_STOCK',
        imageSrc: '/images/dark-fantasy.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 8,
        name: 'Oreo',
        quantity: 1,
        price: 35,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/oreo.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 9,
        name: 'Hide & Seek',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/hide-and-seek.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 10,
        name: 'Good Day',
        quantity: 1,
        price: 35,
        reviews: 4,
        averageReviews: 4.1,
        availability: 'IN_STOCK',
        imageSrc: '/images/good-day.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 11,
        name: 'Unibic',
        quantity: 1,
        price: 50,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/unibic.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 12,
        name: 'Happy Happy',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/happy-happy.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 13,
        name: 'Little Hearts',
        quantity: 1,
        price: 20,
        reviews: 4,
        averageReviews: 4.0,
        availability: 'IN_STOCK',
        imageSrc: '/images/little-hearts.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 14,
        name: 'Dairy Milk',
        quantity: 1,
        price: 50,
        reviews: 5,
        averageReviews: 4.7,
        availability: 'IN_STOCK',
        imageSrc: '/images/dairy-milk.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 15,
        name: 'Bournville',
        quantity: 1,
        price: 120,
        reviews: 5,
        averageReviews: 4.6,
        availability: 'IN_STOCK',
        imageSrc: '/images/bournville.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 16,
        name: 'Dairy Milk Silk',
        quantity: 1,
        price: 90,
        reviews: 5,
        averageReviews: 4.8,
        availability: 'IN_STOCK',
        imageSrc: '/images/dairy-milk-silk.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 17,
        name: 'Milkybar',
        quantity: 1,
        price: 50,
        reviews: 4,
        averageReviews: 4.4,
        availability: 'IN_STOCK',
        imageSrc: '/images/milkybar.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 18,
        name: '5 Star',
        quantity: 1,
        price: 10,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/5-star.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 19,
        name: 'Kit Kat',
        quantity: 1,
        price: 20,
        reviews: 5,
        averageReviews: 4.5,
        availability: 'IN_STOCK',
        imageSrc: '/images/kit-kat.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
      {
        id: 20,
        name: 'Ferrero Rocher',
        quantity: 1,
        price: 400,
        reviews: 5,
        averageReviews: 4.9,
        availability: 'IN_STOCK',
        imageSrc: '/images/ferrero-rocher.jpg',
        isAddedToFav: false,
        category: 'snacksNdMunchies',
      },
    ],
  };

  fruitsNdVegetables = {
    title: 'Fruits & vegetables',
    products: [
      {
        id: 21,
        name: 'Kiwi',
        quantity: 1,
        price: 120,
        reviews: 5,
        averageReviews: 4.6,
        availability: 'IN_STOCK',
        imageSrc: '/images/kiwi.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 22,
        name: 'Dragon Fruit',
        quantity: 1,
        price: 150,
        reviews: 5,
        averageReviews: 4.7,
        availability: 'IN_STOCK',
        imageSrc: '/images/dragon-fruit.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 23,
        name: 'Papaya',
        quantity: 1,
        price: 50,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/papaya.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 24,
        name: 'Banana',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.1,
        availability: 'IN_STOCK',
        imageSrc: '/images/banana.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 25,
        name: 'Watermelon',
        quantity: 1,
        price: 100,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/watermelon.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 26,
        name: 'Oranges',
        quantity: 1,
        price: 70,
        reviews: 5,
        averageReviews: 4.6,
        availability: 'IN_STOCK',
        imageSrc: '/images/oranges.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 27,
        name: 'Apples',
        quantity: 1,
        price: 120,
        reviews: 5,
        averageReviews: 4.8,
        availability: 'IN_STOCK',
        imageSrc: '/images/apples.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 28,
        name: 'Pomegranate',
        quantity: 1,
        price: 150,
        reviews: 5,
        averageReviews: 4.7,
        availability: 'IN_STOCK',
        imageSrc: '/images/pomegranates.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 29,
        name: 'Lemon',
        quantity: 1,
        price: 15,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/lemons.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 30,
        name: 'Coconut',
        quantity: 1,
        price: 35,
        reviews: 12,
        averageReviews: 4.5,
        availability: 'IN_STOCK',
        imageSrc: '/images/coconut.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 31,
        name: 'Capsicum',
        quantity: 1,
        price: 40,
        reviews: 4,
        averageReviews: 4.1,
        availability: 'IN_STOCK',
        imageSrc: '/images/capsicum.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 32,
        name: 'Gongura Leaves',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/gongura-leaves.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 32,
        name: 'Cabbage',
        quantity: 1,
        price: 20,
        reviews: 4,
        averageReviews: 4.0,
        availability: 'IN_STOCK',
        imageSrc: '/images/cabbage.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 33,
        name: 'Lady Fingers',
        quantity: 1,
        price: 25,
        reviews: 4,
        averageReviews: 4.1,
        availability: 'IN_STOCK',
        imageSrc: '/images/lady-fingers.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 34,
        name: 'Cauli Flower',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/cauli-flower.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 35,
        name: 'Green Chillies',
        quantity: 1,
        price: 10,
        reviews: 4,
        averageReviews: 4.1,
        availability: 'IN_STOCK',
        imageSrc: '/images/green-chillies.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 36,
        name: 'Onions',
        quantity: 1,
        price: 40,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/onions.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 37,
        name: 'Tomatoes',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/tomatoes.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 38,
        name: 'Cucumber',
        quantity: 1,
        price: 20,
        reviews: 4,
        averageReviews: 4.0,
        availability: 'IN_STOCK',
        imageSrc: '/images/cucumber.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 39,
        name: 'Potatoes',
        quantity: 1,
        price: 40,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/potatoes.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 40,
        name: 'Beetroot',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.1,
        availability: 'IN_STOCK',
        imageSrc: '/images/beetroot.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 41,
        name: 'Carrots',
        quantity: 1,
        price: 50,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/carrots.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
      {
        id: 42,
        name: 'Ginger',
        quantity: 1,
        price: 10,
        reviews: 9,
        averageReviews: 4.7,
        availability: 'IN_STOCK',
        imageSrc: '/images/ginger.jpg',
        isAddedToFav: false,
        category: 'fruitsNdVegetables',
      },
    ],
  };

  diaryProducts = {
    title: 'Dairy Products',
    products: [
      {
        id: 43,
        name: 'Ghee',
        quantity: 1,
        price: 400,
        reviews: 5,
        averageReviews: 4.7,
        availability: 'IN_STOCK',
        imageSrc: '/images/ghee.jpg',
        isAddedToFav: true,
        category: 'diaryProducts',
      },
      {
        id: 44,
        name: 'Paneer',
        quantity: 1,
        price: 200,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/paneer.jpg',
        isAddedToFav: false,
        category: 'diaryProducts',
      },
      {
        id: 45,
        name: 'Eggs',
        quantity: 1,
        price: 60,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/eggs.jpg',
        isAddedToFav: false,
        category: 'diaryProducts',
      },
      {
        id: 46,
        name: 'Yogurt',
        quantity: 1,
        price: 50,
        reviews: 4,
        averageReviews: 4.0,
        availability: 'IN_STOCK',
        imageSrc: '/images/yogurt.jpg',
        isAddedToFav: false,
        category: 'diaryProducts',
      },
      {
        id: 47,
        name: 'Butter',
        quantity: 1,
        price: 80,
        reviews: 4,
        averageReviews: 4.4,
        availability: 'IN_STOCK',
        imageSrc: '/images/butter.jpg',
        isAddedToFav: false,
        category: 'diaryProducts',
      },
      {
        id: 48,
        name: 'Curd',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/curd.jpg',
        isAddedToFav: false,
        category: 'diaryProducts',
      },
      {
        id: 49,
        name: 'Cheese',
        quantity: 1,
        price: 100,
        reviews: 5,
        averageReviews: 4.6,
        availability: 'IN_STOCK',
        imageSrc: '/images/cheese.jpg',
        isAddedToFav: true,
        category: 'diaryProducts',
      },
    ],
  };

  drinksNdJuices = {
    title: 'Drinks & juices',
    products: [
      {
        id: 50,
        name: 'Tang',
        quantity: 1,
        price: 90,
        reviews: 4,
        averageReviews: 4.4,
        availability: 'IN_STOCK',
        imageSrc: '/images/tang.jpg',
        isAddedToFav: false,
        category: 'drinksNdJuices',
      },
      {
        id: 51,
        name: 'Red Bull',
        quantity: 1,
        price: 120,
        reviews: 5,
        averageReviews: 4.6,
        availability: 'IN_STOCK',
        imageSrc: '/images/red-bull.jpg',
        isAddedToFav: true,
        category: 'drinksNdJuices',
      },
      {
        id: 52,
        name: 'Pulpy Orange',
        quantity: 1,
        price: 60,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/pulpy-orange.jpg',
        isAddedToFav: false,
        category: 'drinksNdJuices',
      },
      {
        id: 53,
        name: '7Up',
        quantity: 1,
        price: 40,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/7-up.jpg',
        isAddedToFav: false,
        category: 'drinksNdJuices',
      },
      {
        id: 54,
        name: 'Club Soda',
        quantity: 1,
        price: 30,
        reviews: 4,
        averageReviews: 4.1,
        availability: 'IN_STOCK',
        imageSrc: '/images/club-soda.jpg',
        isAddedToFav: false,
        category: 'drinksNdJuices',
      },
      {
        id: 55,
        name: 'Thums Up',
        quantity: 1,
        price: 40,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/thums-up.jpg',
        isAddedToFav: false,
        category: 'drinksNdJuices',
      },
      {
        id: 56,
        name: 'Coca Cola',
        quantity: 1,
        price: 40,
        reviews: 4,
        averageReviews: 4.2,
        availability: 'IN_STOCK',
        imageSrc: '/images/cocacola.jpg',
        isAddedToFav: false,
        category: 'drinksNdJuices',
      },
      {
        id: 57,
        name: 'Mirinda',
        quantity: 1,
        price: 40,
        reviews: 4,
        averageReviews: 4.3,
        availability: 'IN_STOCK',
        imageSrc: '/images/mirinda.jpg',
        isAddedToFav: false,
        category: 'drinksNdJuices',
      },
      {
        id: 58,
        name: 'Slice',
        quantity: 1,
        price: 50,
        reviews: 4,
        averageReviews: 4.4,
        availability: 'IN_STOCK',
        imageSrc: '/images/slice.jpg',
        isAddedToFav: false,
        category: 'drinksNdJuices',
      },
    ],
  };

  constructor() {}

  getData(product: Object) {
    if (product === 'snacksNdMunchies') return this.snacksNdMunchies;
    else if (product == 'fruitsNdVegetables') return this.fruitsNdVegetables;
    else if (product == 'diaryProducts') return this.diaryProducts;
    else if (product == 'drinksNdJuices') return this.drinksNdJuices;
    else return this.fruitsNdVegetables;
  }
}
