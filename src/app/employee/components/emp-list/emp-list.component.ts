import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss'],
})
export class EmpListComponent implements OnInit {

  employees: any;
  flag:boolean=false;
  size:number;
  constructor(private empService: EmployeeService) {
    this.getAllEmp();
  }

  ngOnInit() {
  }

  /**
   * fetch all employee data
   */
  getAllEmp() {
    this.empService.getAllEmployees().subscribe(
      data => {
        if (data) {
          debugger
          this.size=Object.keys(data).length;
          this.employees = data;
        }
        return data
      }
    );
  }

  /**
   * remove employee with given id
   * @param id get employee id
   */
  removeEmp(id: number) {
    debugger
    let res = confirm('Are you sure want to Delete ?');
    if (res) {
      this.empService.removeEmployee(id).subscribe(
        data => {
          if (id) {
            alert("Record with Id:-" + id + " is Deleted");
            this.getAllEmp();
          }
        }
      );
    }
    else {
      return;
    }
  }

  /**
   * toggle on sort
   */
  sorting(){
    this.flag = !this.flag;
  }
}