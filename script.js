// ====================
// REGISTER
// ====================

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let user={
name:name,
email:email,
password:password
};

localStorage.setItem("user",JSON.stringify(user));

document.getElementById("msg").innerHTML=
"✅ Registration Successful";

setTimeout(()=>{
window.location.href="login.html";
},1500);

});

}

// ====================
// LOGIN
// ====================

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;

let user=JSON.parse(localStorage.getItem("user"));

if(
user &&
email===user.email &&
password===user.password
){

document.getElementById("loginMsg").innerHTML=
"✅ Login Successful";

setTimeout(()=>{
window.location.href="dashboard.html";
},1000);

}
else{

document.getElementById("loginMsg").innerHTML=
"❌ Invalid Email or Password";

}

});

}

// ====================
// PARTICLE BACKGROUND
// ====================

const canvas=document.getElementById("particles");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<120;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5),
vy:(Math.random()-0.5)
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#00ffff";
ctx.shadowBlur=15;
ctx.shadowColor="#00ffff";
ctx.fill();

});

for(let i=0;i<particles.length;i++){

for(let j=i+1;j<particles.length;j++){

let dx=particles[i].x-particles[j].x;
let dy=particles[i].y-particles[j].y;

let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<130){

ctx.beginPath();
ctx.strokeStyle=`rgba(0,255,255,${1-dist/130})`;
ctx.moveTo(particles[i].x,particles[i].y);
ctx.lineTo(particles[j].x,particles[j].y);
ctx.stroke();

}

}

}

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

}