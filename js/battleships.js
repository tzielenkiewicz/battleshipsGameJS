let counter=0;

let Battleship=function(status, bridgeLoc, radarLoc, gunLoc, chimneyLoc, rocketLauncherLoc) {
	this.status=status;
	this.bridgeLoc=bridgeLoc;
	this.radarLoc=radarLoc;
	this.gunLoc=gunLoc;
	this.chimneyLoc=chimneyLoc;
	this.rocketLauncherLoc=rocketLauncherLoc;
/*	
	this.changeStatus = function() {
		if (allLocations.innerHTML=='*') status=false;
	
	}*/
}
let Destroyer=function(status, bridgeLoc, radarLoc, gunLoc, chimneyLoc) {
	this.status=status;
	this.bridgeLoc=bridgeLoc;
	this.radarLoc=radarLoc;
	this.gunLoc=gunLoc;
	this.chimneyLoc=chimneyLoc;
/*	this.changeStatus = function() {
		if (allLocations.innerHTML=='*') status=false;
	*/
	
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
	console.log('input comp ships');	
	computerBattleship = inputShip(generateID());
	console.log('first ship status is: ' + computerBattleship.status + ' and its bridge location is: ' + computerBattleship.bridgeLoc);
	while(counter==5) {computerDestroyer1 = inputShip(generateID());}
	console.log('second ship status is: ' + computerDestroyer1.status);
	while(counter==9) {computerDestroyer2 = inputShip(generateID());}
	console.log('third ship status is: ' + computerDestroyer2.status);
	counter=0;
	alert('Now input three ships by clicking the initial grid. You can decide if it is vertical or horizontal (left side down...)');

	document.getElementById('info').innerHTML='Set your ships!';
	/*
		
	if (counter==5) {
		
		document.getElementById('player').addEventListener("click", definePlayerShip(playerLocation, playerBattleship));
		document.getElementById('player').removeEventListener("click", definePlayerBattleship());
	}
	

	if(counter==0) {

			document.getElementById('player').addEventListener("click", function() {
			ID=playerLocation;
			
			console.log(counter+ID);
			playerDestroyer1 = inputShip(ID);
			console.log(playerDestroyer1.status);
			document.getElementById('player').removeEventListener("click", this);});
	}

	if(counter==9) {

			document.getElementById('player').addEventListener("click", function() {
			ID=playerLocation;
			console.log(corunter+ID);
			playerDestroyer2 = inputShip(ID);
			console.log(counter + playerDestroyer2.status);});
	}
*/
	setTimeout(()=>{
		if (counter==13) {
			document.getElementById('info').innerHTML='Done! Battleship: '+ 
				playerBattleship.status+playerBattleship.bridgeLoc+' Destroyer1: '+playerDestroyer1.status+playerDestroyer1.bridgeLoc+
				' Destroyer2: '+playerDestroyer2.status+playerDestroyer2.bridgeLoc;
			console.log('done');
		}
	}, 20000);
		
}

function initialTablesPrep() {
	let playerRows=document.getElementById('player').getElementsByTagName('tr');
	let compRows=document.getElementById('comp').getElementsByTagName('tr');
	let playerGrids;
	let compGrids;
	for(i=1; i<11; i++) {
		playerGrids=playerRows[i].getElementsByTagName('td');
		compGrids=compRows[i].getElementsByTagName('td');
		for(j=1; j<11; j++) {
			playerGrids[j].id='p'+(i-1)+(j-1);
			compGrids[j].id='c'+(i-1)+(j-1);
			playerGrids[j].onclick = function() {
				playerLocation=this.id;
				definePlayerShip(playerLocation);
			};
		}
	}
}

function definePlayerShip(playerLocation){
		ID=playerLocation;
		console.log(counter+ID);
		if(counter==0) {
			playerBattleship = inputShip(ID);
			console.log(playerBattleship.status);
		}
		else if(counter==5){
			playerDestroyer1=inputShip(ID);
			console.log(playerDestroyer1.status);
		}
		else if(counter==9){
			playerDestroyer2=inputShip(ID);
			console.log(playerDestroyer2.status);
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
			if (position==false) {
				playerBTLS = new Battleship('sailing', [locationSet[0], no2], [locationSet[1], no2], [locationSet[2], no2], [locationSet[3], no2], [locationSet[4], no2]);
				console.log(playerBTLS.status);
				return playerBTLS;
				
			}
			else {
				playerBTLS = new Battleship('sailing', [no1, locationSet[0]], [no1, locationSet[1]], [no1, locationSet[2]], [no1, locationSet[3]], [no1, locationSet[4]]);
				console.log(playerBTLS.status);
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
					playerDSTR1=new Destroyer('sailing', [locationSet[0], no2], [locationSet[1], no2], [locationSet[2], no2], [locationSet[3], no2]);
					console.log(playerDSTR1.bridgeLoc);
					return playerDSTR1;
				}
				else if(position==false && counter==9) {
					playerDSTR1=new Destroyer('sailing', [no1, locationSet[0]], [no1, locationSet[1]], [no1, locationSet[2]], [no1, locationSet[3]]);
					console.log(playerDSTR1.bridgeLoc);
					return playerDSTR1;
				}
				else if(position==true && counter>9) {
					playerDSTR2=new Destroyer('sailing', [locationSet[0], no2], [locationSet[1], no2], [locationSet[2], no2], [locationSet[3], no2]);
					console.log(playerDSTR2.chimneyLoc[1]);
					return playerDSTR2;
				}
				else if(position==false && counter>9) {
					playerDSTR2=new Destroyer('sailing', [no1, locationSet[0]], [no1, locationSet[1]], [no1, locationSet[2]], [no1, locationSet[3]]);
					console.log(playerDSTR2.chimneyLoc[1]);
					return playerDSTR2;
				}
			}
			

			else alert('Wrong location!');
		}
		else alert('Too many ships!');	
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
					compBTLS = new Battleship('sailing', [locationSet[0], no2], [locationSet[1], no2], [locationSet[2], no2], [locationSet[3], no2], [locationSet[4], no2]);
					return compBTLS;
				}
				else {
					compBTLS = new Battleship('sailing', [no1, locationSet[0]], [no1, locationSet[1]], [no1, locationSet[2]], [no1, locationSet[3]], [no1, locationSet[4]]);
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
					compDSTR1=new Destroyer('sailing', [locationSet[0], no2], [locationSet[1], no2], [locationSet[2], no2], [locationSet[3], no2]);
					console.log(compDSTR1.bridgeLoc);
					return compDSTR1;
				}
				else if(position==false && counter==9) {
					compDSTR1=new Destroyer('sailing', [no1, locationSet[0]], [no1, locationSet[1]], [no1, locationSet[2]], [no1, locationSet[3]]);
					console.log(compDSTR1.bridgeLoc);
					return compDSTR1;
				}
					else if(position==true && counter>9) {
					compDSTR2=new Destroyer('sailing', [locationSet[0], no2], [locationSet[1], no2], [locationSet[2], no2], [locationSet[3], no2]);
					console.log(compDSTR2.chimneyLoc[1]);
					return compDSTR2;
				}
				else if(position==false && counter>9) {
					compDSTR2=new Destroyer('sailing', [no1, locationSet[0]], [no1, locationSet[1]], [no1, locationSet[2]], [no1, locationSet[3]]);
					console.log(compDSTR2.chimneyLoc[1]);
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

function fireRound(){
	console.log('fireRound started');
	document.getElementById('info').innerHTML='player Battleship: ' + playerBTLS.status + ', player Destroyer1: ' + playerDSTR1.status + ', player Destroyer2: ' + playerDSTR2.status + '    computer Battleship: ' + compBTLS.status +', computer Destroyer1: ' + compDSTR1.status + ', computer Destroyer2: ' + compDSTR2.status;
	console.log('fireRound executed');
}
