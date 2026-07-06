import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";
import {  GoalRegisterBodyComponent } from "../../layouts/bodies/goal-register-body/goal-register-body.component";
import { GoalRegisterHeader } from "../../layouts/headers/goal-register-header/goal-register-header";


@Component({
  selector: 'app-goal-form',
  standalone: true,
  imports: [FormsModule, Footer, GoalRegisterBodyComponent, GoalRegisterHeader],   // ✅ necessário para ngModel
  templateUrl: './goal-register.component.html',
  styleUrls: ['./goal-register.component.scss']
})
export class GoalRegisterComponent {

  @ViewChild(GoalRegisterBodyComponent) goalBody!: GoalRegisterBodyComponent;
  @ViewChild('goalForm') goalForm!: NgForm;

  goal = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    limit_value: 0,

  };

  categories: any[] = []; // lista de categorias carregadas do backend




  constructor(private http: HttpClient, public navigation: NavigationService

  ) {}


  onSubmit(goalForm: any) {


        const goalPayload = {
          month: this.goal.month,
          year: this.goal.year,
          limit_value: this.goal.limit_value,

        };



        this.http.post<any>('http://localhost:8080/api/goals/save', goalPayload).subscribe({

            next: (res) => {
              alert(`✅ Meta cadastrada com sucesso: ${res.description || 'OK'}`);


            },
            error: (err) => {
              console.error(err);
              alert("⚠️ Erro ao cadastrar meta.");
            }
          });
    }

    onClear() {

      

           this.goal = {
                  month: new Date().getMonth() + 1,
                  year: new Date().getFullYear(),
                  limit_value: 0,

                };






    }

    goHome(){

        this.navigation.goTo('');
    }





}
