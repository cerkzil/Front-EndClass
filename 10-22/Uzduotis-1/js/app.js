/*
var - global variable scope
let - block variable scope
console.log - to log
alert() - to pop up an alert
typeof() - get the type of var
'use strict' - at the beggining to be more strict about the syntax

let lastname = "John";
let count = 10;
let price = 11.25;
let items = ['Item1', 'Item20'];
let user = {name: 'Martynas', lastname: 'Kaselionis'}
let online = false;


console.log(typeof(lastname) + '\n' + 
			typeof(count) + '\n' + 
			typeof(price) + '\n' + 
			typeof(items) + '\n' + 
			typeof(user) + '\n' + 
			typeof(online));

console.log('\n' + lastname.length)
console.log('\n' + lastname[2])
console.log('\n' + lastname.indexOf("hn"))
console.log('\n' + lastname.slice(0,1))

for(let i = 0; i < lastname.length; i++){
	console.log(lastname[i]);
}

for(let item in items){
	console.log(items[item])
}

*/

'use strict';

let catalog = 
[{
	'horror':[
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	},
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	},
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	},
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	}
	]
},
{
	'fiction':[
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	},
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	},
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	},
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	}
	]
},
{
	'scifi':[
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	},
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	},
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	},
	{
		ISBN: 45445,
		Year: 1999,
		Title: 'Serial Experiments Lain',
		Pages: 250
	}
	]
},
];

console.log(catalog[2].scifi[3]);