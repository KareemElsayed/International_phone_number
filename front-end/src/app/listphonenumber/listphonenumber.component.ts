import { Component, OnInit } from '@angular/core';
import { CustomersdataService } from '../service/data/customerdata.service';


const size: number =10;


export class Customer {

  constructor(private name: string,
    private number: string,
    private countryCode: string,
    private countryName: string,
    private state: string){}
}

@Component({
  selector: 'app-listphonenumber',
  templateUrl: './listphonenumber.component.html',
  styleUrls: ['./listphonenumber.component.css']
})
export class ListphonenumberComponent implements OnInit {

  customers: Customer[];
  country: string;
  state: string;
  countries: string[] = ['Cameroon', 'Ethiopia', 'Morocco', 'Mozambique', 'Uganda'];
  states: string[] = ['Valid', 'Not_Valid'];
  error: string;
  page: number;
  
  currentSelectedPage: number = 0;
  totalPages: number = 0;
  pageIndexes: Array<number> = [];


  constructor(
    private customerService: CustomersdataService
  ) { }

  ngOnInit(): void {
    // this.retrieveCustomersPaged(0);
    this.retrieveAllCustomers();
  }


  retrieveByCountry(country) {
    this.customerService.retrieveCustomersByCountry(country).subscribe(
      response => {
        this.customers = response;
      },
      error => {
        this.error = error;
      })
  }

  retrieveAllCustomers() {
    this.customerService.retrieveAllCustomers().subscribe(
      response => {
        this.customers = response;
      },
      error => {
        this.error = error;
      })
  }

  retrieveByState(state) {
    this.customerService.retrieveCustomersByState(state).subscribe(
      response => {
        this.customers = response;
      },
      error => {
        this.error = error;
      }
    )
  }

  retrieveByCountryAndState(country, state) {
    this.customerService.retrieveCustomersByCountryAndState(country, state).subscribe(
      response => {
        this.customers = response;
      },
      error => {
        this.error = error;
      }
    )
  }

  // retrieveCustomersPaged(page: number) {
  //   this.customerService.retrieveCustomersPages(page,size).subscribe(
  //     (message: Message) => {
  //       this.customers = message.customers;
  //       this.totalPages = message.totalPage;
  //       this.pageIndexes = Array(this.totalPages).fill(0).map((x, i) => i);
  //       this.currentSelectedPage = message.pageNumber;
  //     },
  //     error => {
  //       this.error = error;
  //     });
  // }

  // getPaginationWithIndex(index: number) {
  //   this.retrieveCustomersPaged(index);
  // }



  retrieveByCountryAndStateCheck(country, state) {
    console.log(country, state);
    if (typeof country === "undefined" && typeof state === "undefined") {
      this.retrieveAllCustomers();
    }
    else if (typeof country === "undefined" && typeof state !== "undefined") {
      this.retrieveByState(state);
    }
    else if (typeof country !== "undefined" && typeof state === "undefined") {
      this.retrieveByCountry(country);
    }
    else if (typeof country !== "undefined" && typeof state !== "undefined")
      this.retrieveByCountryAndState(country, state);
    else
      this.retrieveAllCustomers();
  }




  // active(index: number) {
  //   if(this.currentSelectedPage == index ){
  //     return {
  //       active: true
  //     };
  //   }
  // }

  // nextClick(){
  //   if(this.currentSelectedPage < this.totalPages-1){
  //     this.retrieveCustomersPaged(++this.currentSelectedPage);
  //   }  
  // }

  // previousClick(){
  //   if(this.currentSelectedPage > 0){
  //     this.retrieveCustomersPaged(--this.currentSelectedPage);
  //   }  
  // }

}
