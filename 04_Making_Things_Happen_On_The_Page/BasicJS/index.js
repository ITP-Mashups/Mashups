/*------------------------------------------------//
Looping over arrays
//------------------------------------------------*/

var firstNames = ['john', 'paul', 'george', 'ringo'];
var lastNames = ['lennon', 'mccartney', 'harrison', 'starr'];

var howManyBeatles = function (names) {
	return names.length;
};

var printNames = function(names) {

	for (var i = 0; i < names.length; i++) {
		if (names[i] === 'john') {
			console.log(names[i]);
		}

	}
};

/*------------------------------------------------//
Looping over simple objects
//------------------------------------------------*/

var simpleBeatlesObject = {
	'guitar': 'John Lennon',
	'bass': 'Paul McCartney',
	'name': 'George Harrison',
	'drums': 'Ringo Starr'
};

var printNames = function () {
	for (person in simpleBeatlesObject) {
		console.log(simpleBeatlesObject[person]);
	}
}

var whoPlayedDrums() {
	return simeBeatleObject.drums;
}

/*------------------------------------------------//
Looping over more complex objects
//------------------------------------------------*/

var detailedBandObject = {
	'beatles' : {
		'members' : ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
		'years-active': '1960 - 1970',
		'albums': [
			{
				'name': 'Please Please Me',
				'year': '1963',
			},
			{
				'name': 'With the Beatles',
				'year': '1963',
			},
			{
				'name': 'A Hard Day\'s Night',
				'year': '1964',
			},
			{
				'name': 'Beatles for Sale',
				'year': '1964',
			},
			{
				'name': 'Help!',
				'year': '1965',
			},
			{
				'name': 'Rubber Soul',
				'year': '1965',
			},
			{
				'name': 'Revolver',
				'year': '1966',
			},
			{
				'name': 'Sgt. Pepper\s Lonely Hearts Club Band',
				'year': '1967',
			},  
			{
				'name': 'The White Album', 
				'year': '1968',
			},     
			{
				'name': 'Yellow Submarine',
				'year': '1969',
			},
			{
				'name': 'Abbey Road',
				'year': '1969',
			},
			{
				'name': 'Let It Be',
				'year': '1970',
			}
		]
	}
};

var listBeatlesAlbums = function () {
	var albums = detailedBandObject.beatles.albums;
	for (var i = 0; i < albums.length; i++) {
		debugger;
		console.log(albums[i].name);
	}
}

/*------------------------------------------------//
Looping over even more complex objects
//------------------------------------------------*/

var detailedBandObject = {
	'beatles' : {
		'members' : ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
		'years-active': '1960 - 1970',
		'albums': [
			{
				'name': 'Please Please Me',
				'year': '1963',
			},
			{
				'name': 'With the Beatles',
				'year': '1963',
			},
			{
				'name': 'A Hard Day\'s Night',
				'year': '1964',
			},
			{
				'name': 'Beatles for Sale',
				'year': '1964',
			},
			{
				'name': 'Help!',
				'year': '1965',
			},
			{
				'name': 'Rubber Soul',
				'year': '1965',
			},
			{
				'name': 'Revolver',
				'year': '1966',
			},
			{
				'name': 'Sgt. Pepper\s Lonely Hearts Club Band',
				'year': '1967',
			},  
			{
				'name': 'The White Album', 
				'year': '1968',
			},     
			{
				'name': 'Yellow Submarine',
				'year': '1969',
			},
			{
				'name': 'Abbey Road',
				'year': '1969',
			},
			{
				'name': 'Let It Be',
				'year': '1970',
			}
		]
	},
	'nirvana': {
		'members' : ['Kurt Cobain', 'Dave Grohl', 'Krist Novoselic'],
		'years-active': '1987–1994',
		'albums': [
			{
				'name': 'Bleach',
				'year': '1989',
			},
			{
				'name': 'Nevermind',
				'year': '1991',
			},
			{
				'name': 'In Utero',
				'year': '1993',
			}
		]
	}
};

var whoHadMoreMembers = function () {
	var nirvanaMembers = detailedBandObject.nirvana.members;
	var beatlesMembers = detailedBandObject.beatles.members;

	if (nirvanaMembers.length > beatlesMembers.length) {
		console.log('Nirvana had more band members')
	} else {
		console.log('The Beatles had more band members')
	}
}
