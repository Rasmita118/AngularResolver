import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public products:any;
constructor(private http:HttpClient){}
  ngOnInit(): void {
   this.getproduct();
  }
  getproduct(){
    this.http.get('https://fakestoreapi.com/products').subscribe((data)=>{
     this.products=data;
    });
  }
 
}
