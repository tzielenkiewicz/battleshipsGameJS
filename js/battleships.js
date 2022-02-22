let counter=0;
let report;
let Battleship=function(status, bridgeLoc, radarLoc, gunLoc, chimneyLoc, rocketLauncherLoc) {
	this.status=status;
	this.bridgeLoc=bridgeLoc;
	this.radarLoc=radarLoc;
	this.gunLoc=gunLoc;
	this.chimneyLoc=chimneyLoc;
	this.rocketLauncherLoc=rocketLauncherLoc;

	this.changeStatus = function() {
		if (document.getElementById(bridgeLoc).innerHTML=='*' &&
		   document.getElementById(radarLoc).innerHTML=='*' &&
			document.getElementById(gunLoc).innerHTML=='*' &&
			document.getElementById(chimneyLoc).innerHTML=='*' &&
			document.getElementById(rocketLauncherLoc).innerHTML=='*') this.status='sunk';
		else if (document.getElementById(bridgeLoc).innerHTML=='*' ||
		   document.getElementById(radarLoc).innerHTML=='*' ||
			document.getElementById(gunLoc).innerHTML=='*' ||
			document.getElementById(chimneyLoc).innerHTML=='*' ||
			document.getElementById(rocketLauncherLoc).innerHTML=='*') this.status='hit';
	}
}
let Destroyer=function(bridgeLoc, radarLoc, gunLoc, chimneyLoc) {
	this.status='sailing';
	this.bridgeLoc=bridgeLoc;
	this.radarLoc=radarLoc;
	this.gunLoc=gunLoc;
	this.chimneyLoc=chimneyLoc;
	this.changeStatus = function() {
		if (document.getElementById(bridgeLoc).innerHTML=='*' &&
	   document.getElementById(radarLoc).innerHTML=='*' &&
		document.getElementById(gunLoc).innerHTML=='*' &&
		document.getElementById(chimneyLoc).innerHTML=='*') this.status='sunk';
	else if (document.getElementById(bridgeLoc).innerHTML=='*' ||
	   document.getElementById(radarLoc).innerHTML=='*' ||
		document.getElementById(gunLoc).innerHTML=='*' ||
		document.getElementById(chimneyLoc).innerHTML=='*') this.status='hit';
	}
}

let playerLocation;
let computerBattleship = new Battleship;
let computerDestroyer1 = new Destroyer;
let computerDestroyer2 = new Destroyer;
let playerBattleship = new Battleship;
let playerDestroyer1 = new Destroyer;
let playerDestroyer2 = new Destroyer;
let ID;

function startTheGame() {
	
	alert('Game started!');
	initialTablesPrep();
	computerBattleship = inputShip(generateID());
	while(counter==5) {computerDestroyer1 = inputShip(generateID());}
	while(counter==9) {computerDestroyer2 = inputShip(generateID());}
	counter=0;
	alert('Now input three ships by clicking the initial grid. You can decide if it is vertical or horizontal (left side down...)');

	document.getElementById('info').innerHTML='Set your ships!...and wait.';

	setTimeout(()=>{
		if (counter==13) {
			displayStatus();
			console.log('done');
		}
		
		let compRows=document.getElementById('comp').getElementsByTagName('tr');
		let compGrids;
		for(i=1; i<11; i++) {
			compGrids=compRows[i].getElementsByTagName('td');
			for(j=1; j<11; j++) compGrids[j].onclick = function() {
				if (this.innerHTML=='') {
				this.innerHTML='o';
				report='missed';
				}
				else if(this.innerHTML=='x') {
					this.innerHTML='*';
					report='hit';
				}
				else if(this.innerHTML=='*') document.getElementById('info').innerHTML='Already hit! Try again!';
				if (report=='missed') computerFire();
				displayStatus();
				checkWinner();
			};
		}
	}, 20000);
}

function initialTablesPrep() {
	
	for(i=1; i<11; i++) {
		let playerRows=document.getElementById('player').getElementsByTagName('tr');
		let compRows=document.getElementById('comp').getElementsByTagName('tr');
		let playerGrids;
		let compGrids;

		playerGrids=playerRows[i].getElementsByTagName('td');
		compGrids=compRows[i].getElementsByTagName('td');
		for(j=1; j<11; j++) {
			playerGrids[j].id='p'+(i-1)+(j-1);
			compGrids[j].id='c'+(i-1)+(j-1);
			playerGrids[j].onclick = function() {
				definePlayerShip(this.id);					
			};
		}
	}
}

function definePlayerShip(ID){

		console.log(counter+ID);
		if(counter==0) {
			playerBattleship = inputShip(ID);
			console.log(counter);
		}
		else if(counter==5){
			playerDestroyer1=inputShip(ID);
			console.log(counter);
		}
		else if(counter==9){
			playerDestroyer2=inputShip(ID);
			console.log(counter);
		}
	}
		

function generateID() {
	let ID='c' + Math.floor(Math.random()*10) + Math.floor(Math.random()*10);

	return ID;
}

function inputShip(id) {
	let no1=parseInt(id[1]);
	let no2=parseInt(id[2]);
	let no;
	let position;
	let locationSet=[];
	if(id[0]=='p') {
		position=document.getElementById('vert').checked;
		let playerBTLS;
		let playerDSTR1;
		let playerDSTR2;
		if (counter<5) {
			for(i=0; i<5; i++) {
				if(position==false) {
					if(no2<6) no=no2+i;
					else no=no2-i;
					document.getElementById(id[0]+no1+no).innerHTML='x';
					locationSet[locationSet.length]=no;
				
				}
				else {
					if(no1<6) no=no1+i;
					else no=no1-i;
					document.getElementById(id[0]+no+no2).innerHTML='x';
					locationSet[locationSet.length]=no;
				
				}
					counter++;
			}
			if (position==true) {
				playerBTLS = new Battleship('sailing', 'p'+locationSet[0]+no2, 'p'+locationSet[1]+no2, 'p'+locationSet[2]+no2, 'p'+locationSet[3]+no2, 'p'+locationSet[4]+no2);
				console.log(playerBTLS);
				return playerBTLS;
				
			}
			else {
				playerBTLS = new Battleship('sailing', 'p'+no1+locationSet[0], 'p'+no1+locationSet[1], 'p'+no1+locationSet[2], 'p'+no1+locationSet[3], 'p'+no1+locationSet[4]);
				console.log(playerBTLS);
				
				return playerBTLS;
			}
		}
		else if (counter>4 && counter<13) {
			if (checkLocation(id[0], no1, no2, position)==true){
				for(i=0; i<4; i++) {
	
					if(position==false){
						if(no2<7) no=no2+i;
						else no=no2-i;
						document.getElementById(id[0]+no1+no).innerHTML='x';
						locationSet[locationSet.length]=no;
					
					}
					else {
						if(no1<7) no=no1+i;
						else no=no1-i;
						document.getElementById(id[0]+no+no2).innerHTML='x';
						locationSet[locationSet.length]=no;
					
					}
					counter++;
				}
				if(position==true && counter==9) {
					playerDSTR1=new Destroyer('p'+locationSet[0]+no2, 'p'+locationSet[1]+no2, 'p'+locationSet[2]+no2, 'p'+locationSet[3]+no2);
					console.log(playerDSTR1);
					return playerDSTR1;
				}
				else if(position==false && counter==9) {
					playerDSTR1=new Destroyer('p'+no1+locationSet[0], 'p'+no1+locationSet[1], 'p'+no1+locationSet[2], 'p'+no1+locationSet[3]);
					console.log(playerDSTR1);
					return playerDSTR1;
				}
				else if(position==true && counter>9) {
					playerDSTR2=new Destroyer('p'+locationSet[0]+no2, 'p'+locationSet[1]+no2, 'p'+locationSet[2]+no2, 'p'+locationSet[3]+no2);
					console.log(playerDSTR2);
					return playerDSTR2;
				}
				else if(position==false && counter>9) {
					playerDSTR2=new Destroyer('p'+no1+locationSet[0], 'p'+no1+locationSet[1], 'p'+no1+locationSet[2], 'p'+no1+locationSet[3]);
					console.log(playerDSTR2);
					return playerDSTR2;
				}
			}
			else alert('Wrong location!');
		}	
	}
	
	else if (id[0]=='c'){
		position=Math.random()<0.5;
		let compBTLS;
		let compDSTR1;
		let compDSTR2;
		if (checkLocation(id[0], no1, no2, position)==true) {	
			if (counter<5) {	
				for(i=0; i<5; i++) {
					if(position==true) {
						if(no1<6) no=no1+i;
						else no=no1-i;
						document.getElementById(id[0]+no+no2).innerHTML='x';
						locationSet[locationSet.length]=no;
						
					}
					else {
						if(no2<6) no=no2+i;
						else no=no2-i;
						document.getElementById(id[0]+no1+no).innerHTML='x';
						locationSet[locationSet.length]=no;
						
					}
					counter++;
				}
				if(position==true){ 
					compBTLS = new Battleship('sailing', 'c'+locationSet[0]+no2, 'c'+locationSet[1]+no2, 'c'+locationSet[2]+no2, 'c'+locationSet[3]+no2, 'c'+locationSet[4]+no2);
					console.log(compBTLS);
					return compBTLS;
				}
				else {
					compBTLS = new Battleship('sailing', 'c'+no1+locationSet[0], 'c'+no1+locationSet[1], 'c'+no1+locationSet[2], 'c'+no1+locationSet[3], 'c'+no1+locationSet[4]);
					console.log(compBTLS);
					return compBTLS;
				}
			}
			else {
				for(i=0; i<4; i++) {
					if(position==true) {
						if(no1<7) no=no1+i;
						else no=no1-i;
						document.getElementById(id[0]+no+no2).innerHTML='x';
						locationSet[locationSet.length]=no;
						
					}
					else {
						if(no2<7) no=no2+i;
						else no=no2-i;
						document.getElementById(id[0]+no1+no).innerHTML='x';
						locationSet[locationSet.length]=no;
					
					}
					counter++;
				}
				if(position==true && counter==9) {
					compDSTR1=new Destroyer('c'+locationSet[0]+no2, 'c'+locationSet[1]+no2, 'c'+locationSet[2]+no2, 'c'+locationSet[3]+no2);
					console.log(compDSTR1.bridgeLoc);
					return compDSTR1;
				}
				else if(position==false && counter==9) {
					compDSTR1=new Destroyer('c'+no1+locationSet[0], 'c'+no1+locationSet[1], 'c'+no1+locationSet[2], 'c'+no1+locationSet[3]);
					console.log(compDSTR1.bridgeLoc);
					return compDSTR1;
				}
					else if(position==true && counter>9) {
					compDSTR2=new Destroyer('c'+locationSet[0]+no2, 'c'+locationSet[1]+no2, 'c'+locationSet[2]+no2, 'c'+locationSet[3]+no2);
					console.log(compDSTR2.chimneyLoc);
					return compDSTR2;
				}
				else if(position==false && counter>9) {
					compDSTR2=new Destroyer('c'+no1+locationSet[0], 'c'+no1+locationSet[1], 'c'+no1+locationSet[2], 'c'+no1+locationSet[3]);
					console.log(compDSTR2.chimneyLoc);
					return compDSTR2;
				}				
			}
		}
	}
}


function checkLocation(letter, n1, n2, position) {
	let correct=true;
	let n=0;
	let nBis=0;
	switch (position) {
		case false: {
			for(c=-1; c<2; c++) {
				nBis=n1+c;
				if(nBis<0 || nBis>9) nBis=n1;

				for(d=-1; d<5; d++) {
					if(n2<7) n=n2+d;
					else n=n2-d;
					if(n<0 || n>9) n=n2;

					if (document.getElementById(letter+nBis+n).innerHTML=='x') {
						correct=false;
						
					}
				}
			}
		}
		break;
		
		case true: {
			for(j=-1; j<2; j++) {
				nBis=n2+j;
				if(nBis<0 || nBis>9) nBis=n2;
				for(i=-1; i<5; i++) {
					if(n1<7) n=n1+i;
					else n=n1-i;
					if(n<0 || n>9) n=n1;
				
					if (document.getElementById(letter+n+nBis).innerHTML=='x') {
						correct=false;
					}
				}
			}
		}
		break;
	}
	return correct;
}

function displayStatus() {
	playerBattleship.changeStatus();
	playerDestroyer1.changeStatus();
	playerDestroyer2.changeStatus();
	computerBattleship.changeStatus();
	computerDestroyer1.changeStatus();
	computerDestroyer2.changeStatus();
	document.getElementById('info').innerHTML='Battleship: '+playerBattleship.status
		+ ' Destroyer1: '+playerDestroyer1.status +' Destroyer2: '+ playerDestroyer2.status+
		' Battleship: '+computerBattleship.status+' Destroyer1: '+
		computerDestroyer1.status+' Destroyer2: '+computerDestroyer2.status;
}
function play() {
	document.getElementById(playerBTLS.gunLoc).innerHTML='*';	
}

function computerFire() {
	let fireCoord, grid;
	do {
		fireCoord = 'p'+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
		grid = document.getElementById(fireCoord);

		if (grid.innerHTML=='') {
			grid.innerHTML='o';
			report='missed';
		}
		else if(grid.innerHTML=='x') {
			grid.innerHTML='*';
			report='hit';
		}
		else report='hit';
	} while(report=='hit')
}

function checkWinner() {
	if (computerBattleship.status=='sunk' && computerDestroyer1.status=='sunk' && computerDestroyer2.status=='sunk')
		document.getElementById('info').innerHTML='Player wins!';
	else if (playerBattleship.status=='sunk' && playerDestroyer1.status=='sunk' && playerDestroyer2=='sunk')
		document.getElementById('info').innerHTML='Computer wins!';
}