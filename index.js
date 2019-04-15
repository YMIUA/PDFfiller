window.onload = function() {
	const lineHeight = 100/params.lines.length;  
	let lines = document.getElementsByClassName('line');
	addStartLines(params.lines, lineHeight);
	for (let i = 0; i < lines.length; i++) {
    const { updateTime } = params.lines[i];
    for (let j = 0; j < lines[i].children.length; j++){
    	let timerId = setInterval(() => {
    		lines[i].children[j].style.background = getColor();
    	}, updateTime)
    }
  }
};

function addStartLines(lines, lineHeight){
	let html = '';
	const root = document.getElementById('root');
	for (let line = 0; line < lines.length; line++ ) {		
		root.innerHTML = root.innerHTML + getLine(lines[line], lineHeight)
	}
}

function getLine(line, lineHeight){
	return `<div class="line" style="height:${lineHeight}vh; display:flex; background-color:${line.background}">
			${getElements(line.elements)}
		</div>`	
}

function getElements(elements){
	let html = '';
	for(let element = 0; element < elements.length; element++){
		html += `<div style="width:${elements[element].width}%; background-color:${elements[element].background}"></div>`
	}
	return html 
}

function getColor(){

	return `#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`;
}







let params = {
	lines: [{
		background: "#00F",
		updateTime: 1000,
		elements: [
			{
				background: "#00F",
				width: 25
			},
			{
				background: "#00F",
				width: 50
			},
			{
				background: "#00F",
				width: 25
			}
		]
	},
	{
		background: "#0F0",
		updateTime: 2000,
		elements: [
			{
				background: "#0F0",
				width: 20
			},
			{
				background: "#0F0",
				width: 40
			},
			{
				background: "#0F0",
				width: 40
			}
		]
	},
	{
		background: "#F00",
		updateTime: 3000,
		elements: [
			{
				background: "#F00",
				width: 50
			},
			{
				background: "#F00",
				width: 25
			},
			{
				background: "#F00",
				width: 25
			}
		]
	}
	]
}
