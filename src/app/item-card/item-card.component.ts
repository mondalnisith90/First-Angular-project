import { Component, OnInit } from '@angular/core';

interface Watch {
  id: string,
  name: string,
  image: string,
  price: number,
  quantity: number

}

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  watchs: Watch[] = [
    {
      id: "aa100",
      name: "Apple Watch",
      image: "https://m.media-amazon.com/images/I/7143fdzuALS._AC_SL1500_.jpg",
      price: 7000,
      quantity: 1
    },
    {
      id: "bb101",
      name: "Samsung Watch",
      image: "https://m.media-amazon.com/images/I/61tu-CpDLxL._AC_SX522_.jpg",
      price: 3000,
      quantity: 1
    },
    {
      id: "cc101",
      name: "Redmi Watch",
      image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15040574/2021/8/16/93930149-cfb5-47af-8d7f-c4f98e471dbc1629095134249-realme-Watch-2Black-Strap-5751629095134044-1.jpg",
      price: 2000,
      quantity: 1
    },
    {
      id: "dd100",
      name: "One Plus Watch",
      image: "https://www.businessinsider.in/thumb/msid-77894278,width-640,resizemode-4/Master.jpg",
      price: 5000,
      quantity: 1
    },

  ];

  totalItems: number = 4;
  count:number = 0;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  
  public incrementQuentity(id:string): void{
    this.watchs = this.watchs.map((watch: Watch)=>{
      if(watch.id===id){
         watch.quantity = watch.quantity+1;
         this.totalItems = this.totalItems+1;
      }
        return watch;
    });
  }

  public decrementQuentity(id:string):void{
    this.watchs = this.watchs.map((watch: Watch)=>{
      if(watch.id===id && watch.quantity>1){
         watch.quantity = watch.quantity-1;
         this.totalItems = this.totalItems-1;
      }
        return watch;
    });
  }

  getTotalPrice():number{
    let totalPrice: number = 0;
    for(let watch of this.watchs){
      totalPrice = totalPrice + watch.price * watch.quantity;
    }
    return totalPrice;
  }

  viewDetails(watch: Watch):void{
    // alert(watch.id);
  }

}
