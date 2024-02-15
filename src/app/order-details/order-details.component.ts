import { Component } from '@angular/core';
import { FoodOrderServiceService } from '../Services/food-order-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
 
  foodOrders: any= [];
  total_Fine: number = 0;
  total_Fine1: any=[];

  constructor(private FoodOrderSvc: FoodOrderServiceService) {}

  ngOnInit(){
    this.loadFoodOrders();
  }

  loadFoodOrders() {
    this.FoodOrderSvc.getMonthlyFoodOrders(11).subscribe(data => {
      this.foodOrders = data;
      console.log(this.foodOrders,"order")
    });
  }
 
  GetTotalFine():number {
      let totalFine = 0;
      this.foodOrders.reports.forEach((report:any) => {
        if (report.opt_ins.breakfast === 'Pending' || report.opt_ins.lunch === 'Pending' || report.opt_ins.dinner === 'Pending') {
          totalFine += 100;
        }
      });
      return totalFine;
    }
    }
  

