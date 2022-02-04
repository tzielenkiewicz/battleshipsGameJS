let counter=0;

function startTheGame() {
	alert('Game started!');
	let z=document.getElementsByTagName('tr');
	let y;
	for(i=1; i<11; i++) {
		y=z[i].getElementsByTagName('td');
		for(j=1; j<11; j++) {
			y[j].id='p'+(i-1)+(j-1);
			y[j].onclick = function() {
				inputShip(this.id);
			};
		}
	}
	alert('Now imput three ships by clicking the initial grid. You can decide if it is vertical or horizontal (left side down...)');
}


function inputShip(id) {
	let no1=parseInt(id[1]);
	let no2=parseInt(id[2]);
	let position=document.getElementById('vert').checked;
	let location;
	let no;
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

						console.log(id[0]+no1+no);
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

						console.log(id[0]+no+no2);
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

function checkLocation(letter, n1, n2, position) {
	let correct=true;
	let n=0;
	let nBis=0;
	switch (position) {
		case false: {
			for(j=-1; j<2; j++) {
				nBis=n1+j;
				if(nBis<0 || nBis>9) nBis=n1;
				for(i=-1; i<5; i++) {
					if(n2<7) n=n2+i;
					else n=n2-i;
					if(n<0 || n>9) n=n2;
					if (document.getElementById(letter+nBis+n).innerHTML=='x') {
						correct=false;
						break;
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



