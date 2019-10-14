/////////////////////////////////// Activity 3: JS Objects ////////////////////////////////////////

// Your code here (Src: http://eloquentjavascript.net/04_data.html#h_IJBU+aXOIC)
function deepEqual(obj1, obj2) 
{
	//checking properties if they are of type "object" and not null 
	if((typeof(obj1) == "object" && obj1 != null) && (typeof(obj2) == "object" && obj2 != null)) {
		//they do not match if they have an unequal number of properties 
		if(Object.keys(obj1).length != Object.keys(obj2).length){
			return false;
		}

		//recursively check each of the properties of the objects
		for (var prop in obj1) {

			if(obj2.hasOwnProperty(prop)) {
				if(!deepEqual(obj1[prop], obj2[prop])) {
					return false;
				}
			} else {
				return false;
			}
		}
		//if all of the properties match, then it returns as true.	
		return true;

	} else if (obj1 !== obj2) {
		//it returns false if the params weren't objects and don't match
		return false;
	} else {
		//the params weren't objects but do match
		return true;
	}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
