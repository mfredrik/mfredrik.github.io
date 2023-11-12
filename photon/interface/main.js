
var accessToken = "4225d5026647494c18d44c96c03ac99668feb75c";
var deviceID = "2a002e000a47343337373738";
var function_url = "https://api.spark.io/v1/devices/" + deviceID + "/froggzor";
var user_url = "https://api.spark.io/v1/devices/" + deviceID + "/user";
var laser_state_url = "https://api.spark.io/v1/devices/" + deviceID + "/laser_state";

$('#random-switch').bootstrapSwitch('state', false);
$('#laser-switch').bootstrapSwitch('state', false);
$('#manual-switch').bootstrapSwitch('state', false);
$('#path-switch').bootstrapSwitch('state', false);

$('#random-switch').on('switchChange.bootstrapSwitch', function (event, state) {
  if(state) {
    $("#manual-switch").bootstrapSwitch('state', false);
    $("#path-switch").bootstrapSwitch('state', false);    
    $.post(function_url, {params: "random", access_token: accessToken });
    $("#laser-switch").bootstrapSwitch('state', true);    
  } else {
    $.post(function_url, {params: "off", access_token: accessToken });
    $("#laser-switch").bootstrapSwitch('state', false);
  } 
});

$('#laser-switch').on('switchChange.bootstrapSwitch', function (event, state) {    
  if(state) {    
    $.post(laser_state_url, {params: "true", access_token: accessToken });    
  } else {    
    $.post(laser_state_url, {params: "false", access_token: accessToken });    
  }
});

$('#manual-switch').on('switchChange.bootstrapSwitch', function (event, state) {    

  if(state) {
    $("#random-switch").bootstrapSwitch('state', false);
    $("#path-switch").bootstrapSwitch('state', false);
    manual = true;
  } else
    manual = false;
});

$('#path-switch').on('switchChange.bootstrapSwitch', function (event, state) {    
    
  if(state) {
    $("#random-switch").bootstrapSwitch('state', false);
    $("#manual-switch").bootstrapSwitch('state', false);
    path = true;
  } else {
    path = false;
    resetPath();
  }
});

$('#set-path').on('click', function(event) {  
  resetPath();  
});

function resetPath() {
  last_x = -1;
  last_y = -1;
  move_path = "";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(255,255,255,0.9)";
  context.fillRect(0,0,180,180);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function setMove(e) {
  var pos = getMousePos(canvas, e);

  if(pos.x < 0 || pos.y < 0 || pos.x > 180 || pos.y > 180)
    return;
  
  if(path) {
    context.beginPath();
    context.arc(pos.x, pos.y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'black';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
    if(last_x > 0 && last_y > 0) {
      context.beginPath();
      context.moveTo(last_x, last_y);
      context.lineTo(pos.x, pos.y);
      context.stroke();
    }

    last_x = pos.x;
    last_y = pos.y;
    move_path = move_path.concat(Math.round(pos.x).toString(), ",", Math.round(pos.y).toString(), ";");
  }

  if(manual)
    $.post(user_url, {params: Math.round(pos.x).toString() + "," + Math.round(pos.y).toString(), access_token: accessToken });  
}

canvas = document.getElementById("move-canvas");
context = canvas.getContext("2d");
context.globalAlpha = 0.5;
context.beginPath();
context.fillStyle = "rgba(255,255,255,0.9)";
context.fillRect(0,0,180,180);

window.addEventListener("click", setMove, false);

move_path = "";
radius = 3;
last_x = -1;
last_y = -1;
manual = false;
path = false;
