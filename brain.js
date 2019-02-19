//player name generator
	//generates player names to any value with the data attribute [data-name-nation]

//TO DO
	//CSS for heavens sake
	//move name lists out to a separate file or database
	//name lists needed for:
		//Ireland
		//Scotland
		//France
		//Italy
		//New Zealand
		//Fiji
		//Samoa
		//Australia
		//South Africa
		//Argentina
	//formula generator for each country
		//percentage chance of a New Zealand/Pacific islands name
	//data attribute for name length
	//data attribute for name weirdness?
	//generate first names from one country and second name from another
	//league teams
		//generate team names
		//generate player names
	//referees
		//option to return country as well as name
	//expose to the user
		//let user add names
		//let user see the formulas (adjust them?)
		//let users test generating their new addition
		//let users upvote and downvote suggestions

$(function(){	
	//list of English names
	var name_first_England = [
		'Jake', 
		'Mike', 
		'Mark', 
		'Dan', 
		'Danny',
		'Nick',
		'Olly',
		'Owen', 
		'Dylan', 
		'Toby',
		'Perry',
		'Courtney', 
		'Lawrence', 
		'Tom', 
		'Ben', 
		'Martel', 
		'Michael', 
		'Tommy', 
		'Kyle', 
		'Martin', 
		'Johnny', 
		'Matt',
		'Austin',
		'Charlie', 
		'Will', 
		'Harry', 
		'Oscar', 
		'Oliver', 
		'Charlton', 
		'Henry', 
		'Christian', 
		'Judas', 
		'Joe', 
		'Joseph', 
		'Spencer', 
		'Alex',
		'Alexander',
		'Neil',
		'Jeremy',
		'Elliot',
		'Kyle',
		'George',
		'Jamie',
		'Jack',
		'Topsy',
		'Lesley',
		'Luther',
		'Phillip',
		'Stuart',
		'Rory',
		'Gordon',
		'Clive'
	];
	
	var name_pre_England = [
		'de ',
		'Mc'
	];
	
	var name_x_England = [
		'Black', //colours
		'Brown',
		'Mauve', 
		'Red',
		'Grey',
		'Green',
		'Wood', //wood
		'Oak',
		'Chestnut',
		'Ash',
		'Forrest',
		'Hazell',
		'Apple',
		'Maple',
		'Grape',
		'Brack',
		'Vaux', //car
		'Cole', //jobs/things
		'Goth',
		'Law',
		'Smart',
		'Launch',
		'Butch',
		'Shear',
		'Slate',
		'Thatch',
		'Stock', 
		'Sip', 
		'Slip', 
		'Trip', 
		'Husk',
		'Hunt',
		'Good',
		'Chute',
		'Bell',
		'Hard',
		'Soft',
		'January', //months
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
		'Sun', //environmental things
		'Moon',
		'Cloud',
		'Hill', 
		'Mound', 
		'Mount',
		'Brook',
		'River',
		'Summer',
		'Spring',
		'Fresh',
		'Large', //scale
		'Small',
		'Sleight',
		'Little',
		'Left',//directions
		'Right',
		'North',
		'South',
		'West',
		'East',
		'Under',
		'Over',
		'Through',
		'Middle',
		'Round',
		'Long',
		'Short',
		'Horse', //animals
		'Cow',
		'Catt',
		'Lamb', 
		'Duck',
		'Swan',
		'Calf',
		'John', //first names 
		'Mark', 
		'Luke', 
		'Michael',
		'Robin',
		'Ian',
		'Rob', 
		'Mitch',
		'Joseph',
		'Lewis',
		'Oscar',
		'Clark',
		'Andrew',
		'House', //home 
		'Flat',
		'Shed',
		'Town',
		'Castle', 
		'Waddle', //actual surnames
		'Waddel',
		'Moore', 
		'Sharp',
		'Hart',
		'Inver',
		'Robert',
		'Barrow',
		'Butt', //body parts
		'Bot',
		'Hand', 
		'Cock', 
		'Arm', 
		'Leg', 
		'Head', 
		'Eye', 
		'Lip',
		'Wrist',
		'Harl', //noises
		'Lang', 
		'Hiddle',
		'Tomp',
		'Simp',
		'Sim',
		'Att',
		'Titter',
		'Baxen',
		'Chap',
		'Knight', //chess pieces
		'Bishop', 
		'Pawn',
		'Queen',
		'King',
		'Trout',//fish
		'Marl',
		'Carp',
		'Cod',
		'Leather', // fabrics
		'Cotton',
		'Silk',
		'Copper', // metals
		
	];
	
	var name_y_England = [
		'',
		'ingham',
		'kins',
		'ker', 
		'ling', 
		'ing', 
		'ings',
		'cott',
		'burn',
		'bottom',
		'botham',
		's', 
		'fill',
		'dale',
		'water',
		'trees', 
		'bark', 
		'seed', 
		'ler', 
		'hill',
		'ham', 
		'bury', 
		'ston', 
		'son', 
		'som',
		'er', 
		'hall', 
		'well', 
		'ness', 
		'ford', 
		'flower', 
		'mayne',
		'fellow',
		'head',
		'lie', 
		'y', 
		'say', 
		'ert', 
		'ton', 
		'ry', 
		'e', 
		'ell',
		'mare', 
		'der', 
		'ille',
		'field',
		'cock', 
		'brow', 
		'hand',
		'corn',
		'rider',
		'strong',
		'hard',
		'ville',
		'man',
		'wicke',
		'rose',
		'forth'
	];
	
	var name_z_England = [
		'-Douglas', 
		'-Daniel',
		'-Simpson',
		'-Hall',
		'-Sharpe', 
		'-Lindsay', 
		'-Robinson', 
		'-Mitchell', 
		'-Hand',
		'-Rider',
		'-Laws',
		'-Jones',
		'-Lewis',
		'-Turner',
		//'-Hearst-Hemlsley'		
	];
	
	//list of Welsh names
		//name_pre - prefixes (ap Williams, Wyn Davies etc)
		//name_x - full names
		//name_y - surname start
		//name_z - surname end
		
	var name_first_Wales = [
		'Nathan',
		'Rhys',
		'Dan',
		'Sam',
		'Ken',
		'Neil',
		'Rob',
		'Alex',
		'Tom',
		'Jamie',
		'Ross',
		'Gareth',
		'Mike',
		'Nicky',
		'Matt',
		'Scott',
		'Dafydd',
		'Emyr',
		'Owen',
		'Toby',
		'Ashley',
		'Liam',
		'Lloyd',
		'Ryan',
		'Jonathan',
		'John',
		'Craig',
		'Bradley',
		'Leigh',
		'Lee',
		'Aled',
		'Ceri',
		'Richie',
		'Richard',
		'Luke',
		'Adam',
		'Huw',
		'Shane',
		'Alun',
		'Roland',
		'Barry',
		'Kingsley',
		'Martyn',
		'Gwyn',
		'Arwel',
		'Iestyn',
		'Ieuan'
	];
	
	var name_pre_Wales = [
		'ap ',
		'Wyn '
	];
	
	var name_x_Wales = [
		'Phillips',
		'Rees',
		'Jones',
		'Jenkins',
		'Jacobs',
		'Brew',
		'Pugh',
		'Huws',
		'Davies',
		'Williams',
		'Young',
		'Baxter',
		'Thomas',
		'Bennett',
		'John',
		'Lloyd',
		'Richards',
		'Adams',
		'Scott',
		'Rhys',
		'Watkins',
		'Moon',
		'Cooper',
		'Parker',
		'Owen',
		'Owens',
		'Parks',
		'Harris',
		'Wyatt',
		'Jarvis',
		'Moriarty',
		'Francis',
		'Harris',
		'Ball',
		'Bates',
		'Howell',
		'Howley',
		'Cockbain',
		'Cockburn',
		'Charvis',
		'Charteris',
		'Robinson',
		'Popell',
		'Popwell',
		'Pope',
		'Shanklin',
		'Shankley',
		'Biggar',
		'Bateman',
		'Batewell',
		'Quinell',
		'Howarth',
		'Rowley',
		'Ringer',
		'Ringley',
		'Sinkinson'
	];
	
	var name_y_Wales = [
		'How',
		'Robin',
		'Cock',
		'Oak',
		'Pop',
		'Shank',
		'Char',
		'War',
		'Bigg',
		'Ring',
		'Sink',
		'Hay',
		'Row',
		'Quin',
		'Bate'
	];
	
	var name_z_Wales = [
		'ley',
		'well',
		'son',
		'ham',
		'lin',
		'burton',
		'ler',
		'er',
		'inson',
		'arth',
		'ward',
		's',
		'tris'
	];
	
	var name_first = {
		Wales : name_first_Wales,
		England : name_first_England
	};
	
	var name_pre = {
		Wales: name_pre_Wales,
		England: name_pre_England
	};
	
	var name_x = {
		Wales : name_x_Wales,
		England : name_x_England
	};
	
	var name_y = {
		Wales : name_y_Wales,
		England : name_y_England
	};
	
	var name_z = {
		Wales : name_z_Wales,
		England : name_z_England
	}
	
	// console.log(name_first);
	//Welsh names
		//standard first name
		//prefix - 95/5 without/with
		//surname - 75/25 x/y+z
	
	function name_smooth(x, y) {
		//smoother flow
			if (y.length > 0) {
				//if first letter of y == last letter of x
				if (y.substring(0,1) == x.substring(x.length-1) ) {
					//remove the first letter from gen_y
					y = y.substring(1);
					
				}
			}
			return x+y;
	}
	
	function name_generate(nation) {
		gen_first = name_first[nation][Math.floor(Math.random()*name_first[nation].length)];
		
		if (nation == 'Wales') {
			gen_second = name_x[nation][Math.floor(Math.random()*name_x[nation].length)];		
		} else {
			gen_x = name_x[nation][Math.floor(Math.random()*name_x[nation].length)];
			gen_y = name_y[nation][Math.floor(Math.random()*name_y[nation].length)];	
			gen_z = name_z[nation][Math.floor(Math.random()*name_z[nation].length)];	
		
			gen_second = name_smooth(gen_x,gen_y);
		}
		
		//should we have a prefix?
		var prefix_test = Math.random();
		
		if (prefix_test > 0.92) {
			gen_pre = name_pre[nation][Math.floor(Math.random()*name_pre[nation].length)];
			console.log(gen_pre);
			
			gen_second = gen_pre+gen_second;
		}
		
		return gen_first + ' ' + gen_second;
	}
	
	
	
	$('[data-name-nation]').each(function(x) {
		$(this).text(name_generate($(this).data('name-nation')));
	});
	
	$('.name-reload').on('click', function() {
		$('[data-name-nation]').each(function(x) {
			$(this).text(name_generate($(this).data('name-nation')));
		});		
	});
	
});