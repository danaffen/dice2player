* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background: #C9FFBF;  
	background: -webkit-linear-gradient(to right, #FFAFBD, #C9FFBF);  
	background: linear-gradient(to right, rgb(248, 138, 48), rgb(243, 64, 147)); 
    font-family: monospace;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

h3, p, li {text-transform: uppercase;}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 255, 255);
    border: 3px solid rgb(7, 7, 7);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}


.rules-panel {
	 line-height: 30px;
}

.player-0-panel,
.player-1-panel {
    width: 50%;
    float: left;
    height: 600px;
    padding: 100px;
}




*** PLAYERS


.player-name {
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: 10px;
    position: relative;
}

.player-score-0 {
    text-align: center;
    font-size: 80px;
    font-weight: 100;
    color: rgb(12, 12, 12);
    margin-bottom: 130px;
}

.player-score-1 {
    text-align: center;
    font-size: 80px;
    font-weight: 100;
    color: #050505;
    margin-bottom: 130px;
}

.player-0-rolled-1 {
	text-align: center;
	margin-bottom: 10px;
}

.player-1-rolled-1 {
	text-align: center;
	margin-bottom: 10px;
}

.active-0 { background-color: rgba(255, 175, 189, 0.1) }
.active-1 { background-color: rgba(46, 204, 113, 0.1) }
.active-0 .player-name, .active-1 .player-name { font-weight: 300; }

.active .player-name::after {
    content: "\2022";
    font-size: 47px;
    position: absolute;
    color: #EB4D4D;
    top: -7px;
    right: 10px;
    
}

.player-current-box-0 {
    background-color: #EB4D4D;
    color: rgb(8, 8, 8);
    width: 40%;
    margin: 0 auto;
    padding: 12px;
    text-align: center;
}

.player-current-box-1 {
    background-color: #2ecc71;
    color: rgb(8, 8, 8);
    width: 40%;
    margin: 0 auto;
    padding: 12px;
    text-align: center;
}

.player-current-label {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 12px;
    color: #222;
}

.player-current-score {
    font-size: 30px;
}

button {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #555;
    background: none;
    border: none;
    font-family: monospace;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
    transition: background-color 0.3s, color 0.3s;
}

button:hover { font-weight: 600; }
button:hover i { margin-right: 20px; }

button:focus {
    outline: none;
}

i {
    display: inline-block;
    margin-right: 15px;
    font-size: 32px;
    line-height: 1;
    vertical-align: text-top;
    margin-top: -4px;
    transition: margin 0.3s;
}

.color-0 {color: #EB4D4D;}
.color-1 {color: #2ecc71;}

.btn-new { top: 105px;}
.btn-rules { top: 45px;}
.btn-roll { top: 413px;}
.btn-back { top: 467px;}
.btn-hold { top: 477px;}

.dice {
    position: absolute;
    left: 50%;
    top: 178px;
    transform: translateX(-50%);
    height: 100px;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.10);
}

.winner-0 { background-color: #f7f7f7; }
.winner .player-name { font-weight: 300; color: #EB4D4D; }

.winner-0 { background-color: rgba(255, 175, 189, 0.1) }
.winner-1 { background-color: rgba(46, 204, 113, 0.1) }
.winner-0 .player-name { font-weight: 300; color: #EB4D4D;}
.winner-1 .player-name { font-weight: 300; color: #2ecc71;}

body{
    font-family: monospace;
}
.player-name {
    margin-left: 120px;
}

