export default class Team {
  constructor(characters) {
  	this.characters = characters;
  	this.indexOfCharacters = -1;
  }
  [Symbol.iterator]() {
  	  return {
  	    next() {
  	      if(this.indexOfCharacters < this.characters.length - 1) {
  	        return {
  	      	  done: false,
  	      	  value: this.characters[this.indexOfCharacters++]
  	        };
  	      }

  	      return {
  	        done: true
  	      };
  	    }
  	  }
    }
}