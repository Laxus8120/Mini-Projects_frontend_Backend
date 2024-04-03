document.addEventListener("DOMContentLoaded",(event) =>{
    
    let ball = document.getElementById('ball');
    let paddle = document.getElementById('paddle');
    let table = document.getElementById('pong_table')

    let table_Width = table.offsetWidth;
    let table_Height = table.offsetHeight;

    let paddle_Width = paddle.offsetWidth;
    let paddle_Height = paddle.offsetHeight;

    let ball_Width = ball.offsetWidth;
    let ball_Height = ball.offsetHeight;


    let ballX = 50;
    let ballY = 50;

    let dx = 2;
    let dy = 2;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    setInterval(()=>{

        ballX += dx;
        ballY += dy;


        ball.style.left = `${ballX}px`;
        ball.style.top =  `${ballY}px`;

        // collision
        if(
            ballX < paddle.offsetLeft + paddle.offsetWidth &&
            ballY > paddle.offsetTop &&
            ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
            ){
                dx *= -1;
            }


        if(ballX > table_Width - ball_Width || ballX <= 0 ) dx *= -1;
        if(ballY > table_Height - ball_Height || ballY <= 0) dy *= -1;
    },10)



    let paddleY = 0;
    let dPy = 5;
    document.addEventListener('keydown', (event) =>{
        if(event.keyCode == 38 && paddleY > 0){
            paddleY += (-1)*dPy;
            console.log(paddleY); 
        }
        else if(event.keyCode == 40 && paddleY < table_Height - paddle_Height){
            paddleY += dPy;
            console.log(paddleY);
        }
            paddle.style.top = `${paddleY}px`;
    })

    document.addEventListener("mousemove", (event) => {
        if(event.clientX > table.offsetLeft + (table.offsetWidth/2)) return;
        let mouseDistanceFromTop = event.clientY; // this is the distance of the mouse point from the top of the screen
        let distanceOfTableFromTop = table.offsetTop;
        let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight/2;
        paddleY = mousePointControl;
        if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return; // if bottom of the paddle touches bottom of the table return
        paddle.style.top = `${paddleY}px`;
    })
    
})