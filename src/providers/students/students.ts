import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentsProvider {

  private apiUrl = 'http://localhost:3000/student';

  constructor(
    private http: HttpClient
  ) {
    console.log('Hello RestProvider Provider');
  }

  getAllStudents() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/')
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getStudentsNotInSubject(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/not_in/' + id)
        .map(res => res)
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  showStudent(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/' + id)
        .map(res => res)
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveStudent(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/', data)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateStudent(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/' + id, data)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteStudent(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
