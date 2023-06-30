// complete the given function

function palindrome(str){
	let newString = "";
	
	for(let i=0; i<str.length;i++){
	    let val = str.charAt(i);
	    if(val !=" "){
	      newString = newString+val;
	    }
	}
	newString = newString.toLowerCase();
	
	
	let start = 0; let end = newString.length-1; let ispalindrome = true;
	
	while(start <= end){
	    if(newString.charAt(start) != newString.charAt(end) ){
	        ispalindrome = false;
	        break;
	    }
	    start++;
	    end--;
	}
	let output = ispalindrome ? true:false;

 return output;	
}
module.exports = palindrome
