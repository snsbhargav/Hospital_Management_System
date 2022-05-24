import { Component, OnInit } from '@angular/core';
import { Doctor } from '../Doctor';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctors!:Doctor[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getDocDetails();
  }
  getDocDetails(){
    this.service.getDoctorDetails().subscribe(data=>{
      this.doctors = data;
    });
  }

}
