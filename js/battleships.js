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
				if (this.innerHTML=='') inputShip(this.id);
				else alert('Wrong choice!');
			};
		}
	}
	alert('Now imput three ships by clicking the initial grid. You can decide if it is vertical or horizontal (left side down...)');
}


function inputShip(id) {
	let no1=parseInt(id[1]);
	let no2=parseInt(id[2]);
	let position=document.getElementById('vert').checked;
	let location=null;
	let no, n1, n2;
	switch (position) {
		case false: {
			if (counter<5) {
				for(i=0; i<5; i++) {
					
					if(no2<6) no=no2+i;
					else no=no2-i;
					location=document.getElementById(id[0]+no1+no);
					location.innerHTML='x';
					
					console.log(id[0]+no1+no);
					counter++;
				}
			}
			else if (counter<13) {
				
				for(i=0; i<4; i++) {
					
					if(no2<7) no=no2+i;
					else no=no2-i;
					location=document.getElementById(id[0]+no1+no);
					location.innerHTML='x';
					
					console.log(id[0]+no1+no);
					counter++;
				}
			}
			else alert('Too many ships!');
		}
			break;
			
		case true: {
			if (counter<5) {
				for(i=0; i<5; i++) {
					
					if(no1<6) no=no1+i;
					else no=no1-i;
					location=document.getElementById(id[0]+no+no2);
					location.innerHTML='x';
					
					console.log(id[0]+no+no2);
					counter++;
				}
			}
			else if (counter<13) {
				
				for(i=0; i<4; i++) {
					
					if(no1<7) no=no1+i;
					else no=no1-i;
					location=document.getElementById(id[0]+no+no2);
					location.innerHTML='x';
					
					console.log(id[0]+no+no2);
					counter++;
				}
			}
			else alert('Too many ships!');
		}
			break;
	}
}



