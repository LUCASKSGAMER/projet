canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 300;
roverHeight = 300;
monstro1.webpWidth = 450;
monstro1.webpHeight = 500;

backgroundImage = "mars.jpg";
monstro1.webpImage = "monstro1.webp"
roverImage = "rover.png";

roverX = 10;
roverY = 500;
monstro1.webpX = 70;
monstro1.webpY = 500;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem
    
	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
	
	monstro1.webpImgTag = new Image(); //definindo uma variável com uma nova imagem
	monstro1.webpImgTag.onload = uploadmonstro1webp; // ajustando uma função, ao carregar essa variável
	monstro1.webpImgTag.src = roverImage;   // carregar a imagem
	
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

function uploadmonstro1webp() {
	ctx.drawImage(monstro1.webpImgTag, monstro1.webpX, monstro1.webpY, monstro1.webpWidth, monstro1.webpHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
}
function up()
{
	if(roverY >=0)
	{
		roverY = roverY - 10;
		console.log("Quando direcional cima for pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadrover();
		 uploadmonstro1webp();
	}
}
function down()
{
	if(roverY <=500)
	{
		roverY =roverY+ 10;
		console.log("Quando direcional baixo for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
		 uploadmonstro1webp();
	}
}
function left()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		console.log("Quando direcional esquerda for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
		 uploadmonstro1webp();
	}
}
function right()
{
	if(roverX <= 700)
	{
		roverX =roverX + 10;
		console.log("Quando direcional direita for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadrover();
		uploadmonstro1webp();
   }
}

	
