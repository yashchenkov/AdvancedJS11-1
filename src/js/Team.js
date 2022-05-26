export default class Team {
  constructor(characters) {
  	this.characters = characters;
  	this.indexOfCharacters = -1;
  }
  [Symbol.iterator]() {
     return {
       current: this.indexOfCharacters,
       last: this.characters,
  	   next() {
  	     if(this.current < this.last.length - 1) {
  	       return {
  	      	 done: false,
  	      	 value: this.last[current++]
  	       };
  	      }
  	      return {
  	        done: true
  	      };
  	    }
  	  }
    }
}