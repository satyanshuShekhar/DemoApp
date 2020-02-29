import { Component, OnInit } from '@angular/core';
import { MovieService, SearchType } from './../../services/movie.service';
import { Observable } from 'rxjs';
import {MovieDetail} from '../../movie-detail';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results:MovieDetail[]=[];
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    console.log(this.results)
  }

  searchChanged() {
    // Call our service function which returns an Observable
    //if(this.searchTerm!=''){
     this.movieService.searchData(this.searchTerm, this.type).subscribe((data)=>{
     if(data){
     this.results = data;
     }else{
       this.results = [];
     }
     console.log(this.results)
    })

  }
  

}
