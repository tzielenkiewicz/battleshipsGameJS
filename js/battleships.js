let counter=0;

function startTheGame() {
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
}


function inputShip(id) {
	let no1=parseInt(id[1]);
	let no2=parseInt(id[2]);
	if (counter<8) {
		for(i=0; i<=3; i++) {
			no=no2+i;

			document.getElementById(id[0]+no1+no).innerHTML='x';
			console.log(id[0]+no1+no);
			counter++;
		}
	}
	else if (counter<13) {
		for(i=0; i<=4; i++) {
			no=no2+i;

			document.getElementById(id[0]+no1+no).innerHTML='x';
			console.log(id[0]+no1+no);
			counter++;
		}
	}
	else document.write('Too many ships!');
}



