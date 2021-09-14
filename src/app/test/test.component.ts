import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestService]
})
export class TestComponent implements OnInit {

  constructor(
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    try {
      this.testService.getAll().subscribe( (response)=>{
        console.log(response)
      }
      )
    } catch (error) {
      console.error(error)
      
    }
  }

}
