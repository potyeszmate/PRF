import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Team } from 'src/app/Model/team.model';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})
export class TeamAddComponent {
  team: Team = {
    teamname: '',
    country: '',
    teamvalue: 0,
    stadium: ''
  };
  errorMessage: string ='';


  constructor(private teamService: ExampleService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.teamService.createTeam(this.team).subscribe(
      res => {
        console.log(res);
        form.reset();
        window.location.reload();


      },
      err => {
        console.error(err);
        this.errorMessage = err.error.message;

        // window.location.reload();

      }

      
    );
    this.router.navigate(['/admin-teams']);


  }

  goToBack() {
    this.router.navigate(['/admin-teams']);

  }
}
