import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent
{
  title = "Quote";
  quoteCount= 0;
  quote = "Quote";
  upvote = "Upvoted";
  downvote = "Downvoted";

  
  
  addQuote()
  {
    this.quoteCount++;

  }

  upVoteQuote()
  {
    //We would like to upvote the created quote.
    this.upvote = this.quote + "upvoted";

  }
  downVoteQuote()
  {
    //We would like to downvote the created quote
    this.downvote = this.quote + "downvoted";
  }
  deleteQuote()
  {
    //We would like to delete the created quote
    this.quote = "";

  }
  createQuote()
  {
    //Build an array of created quotes    
    this.quote ="Quote1";
  }
   
}


