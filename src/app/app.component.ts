import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetpostService } from './services/getpost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Welcome to Angular';
  version = 15;
  isButtonClicked = false;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getData:any=[];
  

  constructor(private api:GetpostService){}

  ngOnInit(){
    this.api.getAllPost().subscribe( (res) =>{
        console.log(res);
        this.getData = res
    })
  }

  onClicked(){
    this.isButtonClicked = !this.isButtonClicked;
  }

  course = ['html','css','js','typescript','angular','react']

  studentCourseDetails = [
    {name:'ajinkya',course:'full stack web development',fees:'30000'},
    {name:'prakash',course:'full stack Java development',fees:'32000'},
    {name:'Vishal',course:'full stack .Net development',fees:'30000'},
    {name:'Komal',course:'full stack PHP development',fees:'20000'},
    {name:'Bharti',course:'full stack Python development',fees:'35000'},
    {name:'Sayali',course:'MEAN Development',fees:'40000'}

  ]
}
