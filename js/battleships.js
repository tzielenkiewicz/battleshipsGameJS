let counter=0;

function startTheGame() {
	alert('Game started!');
	let z=document.getElementById('player').getElementsByTagName('tr');
	let x=document.getElementById('comp').getElementsByTagName('tr');
	let y;
	let v;
	for(i=1; i<11; i++) {
		y=z[i].getElementsByTagName('td');
		v=x[i].getElementsByTagName('td');
		for(j=1; j<11; j++) {
			y[j].id='p'+(i-1)+(j-1);
			v[j].id='c'+(i-1)+(j-1);
			y[j].onclick = function() {
				inputShip(this.id);
			};
		}
	}
	console.log('input comp ships');	
	inputShip(generateID());
	console.log('first ship');
	while(counter==5) inputShip(generateID());
	console.log('second ship');
	while(counter==9) inputShip(generateID());
	console.log('third ship');
	counter=0;
	alert('Now imput three ships by clicking the initial grid. You can decide if it is vertical or horizontal (left side down...)');
	
}

function generateID() {
	let ID='c' + Math.floor(Math.random()*10) + Math.floor(Math.random()*10);

	return ID;
}

function inputShip(id) {
	let no1=parseInt(id[1]);
	let no2=parseInt(id[2]);
	let no;
	if(id[0]=='p') {
		let position=document.getElementById('vert').checked;

		switch (position) {
			case false: {
				if (counter<5) {
					for(i=0; i<5; i++) {

						if(no2<6) no=no2+i;
						else no=no2-i;
						document.getElementById(id[0]+no1+no).innerHTML='x';

						counter++;
					}
				}
				else if (counter<13) {
					if (checkLocation(id[0], no1, no2, position)==true){
						for(i=0; i<4; i++) {

							if(no2<7) no=no2+i;
							else no=no2-i;
							document.getElementById(id[0]+no1+no).innerHTML='x';

							counter++;
						}
					}
					else alert('Wrong location!');
				}
				else alert('Too many ships!');
			}
				break;

			case true: {
				if (counter<5) {
					for(i=0; i<5; i++) {

						if(no1<6) no=no1+i;
						else no=no1-i;
						document.getElementById(id[0]+no+no2).innerHTML='x';

						counter++;
					}
				}
				else if (counter<13) {
					if (checkLocation(id[0], no1, no2, position)==true){
						for(i=0; i<4; i++) {

							if(no1<7) no=no1+i;
							else no=no1-i;
							document.getElementById(id[0]+no+no2).innerHTML='x';

							counter++;
						}
					}
					else alert('Wrong location!');
				}
				else alert('Too many ships!');
			}
				break;
		}
	}
	else if (id[0]=='c'){
		let position=Math.random()<0.5;
		if (checkLocation(id[0], no1, no2, position)==true) {	
			if (counter<5) {	
				for(i=0; i<5; i++) {
					if(position==true) {
						if(no1<6) no=no1+i;
						else no=no1-i;
						document.getElementById(id[0]+no+no2).innerHTML='x';
					}
					else {
						if(no2<6) no=no2+i;
						else no=no2-i;
						document.getElementById(id[0]+no1+no).innerHTML='x';
					}
					counter++;
				}
			}
			else {
				for(i=0; i<4; i++) {
					if(position==true) {
						if(no1<7) no=no1+i;
						else no=no1-i;
						document.getElementById(id[0]+no+no2).innerHTML='x';
					}
					else {
						if(no2<7) no=no2+i;
						else no=no2-i;
						document.getElementById(id[0]+no1+no).innerHTML='x';
					}
					counter++;
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



