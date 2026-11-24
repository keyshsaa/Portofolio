const S=[
{n:"Programming and Web Development",d:"Building modern web applications from frontend to backend logic.",s:["JavaScript","Python","React","HTML","CSS"]},
{n:"Network Engineering",d:"Designing and managing network infrastructure from small to enterprise scale.",s:["Mikrotik","Cisco","Routing and Switching","VLANs","Topology Design"]},
{n:"AI and Machine Learning",d:"Developing models for classification, computer vision, and distributed learning.",s:["Federated Learning","Deep Learning","Image Classification","Computer Vision"]},
{n:"IoT and Embedded Systems",d:"Connecting physical devices to the cloud and to applications.",s:["ESP32","MQTT","Arduino","Sensors and Actuators"]}];
const P=[
{n:"BoxGuardAI",c:["AI & Machine Learning","IoT & Embedded"],s:["ESP32-CAM","YOLOv8","MQTT","IoT"],f:"BoxGuardAI is an automated packaging inspection system. An ESP32-CAM captures images of packages on the production line, a YOLOv8 model classifies each as good or defective, and results are sent in real time over MQTT to a monitoring dashboard. It shows how edge AI and IoT can be combined for industry.",l:[{t:"Live Demo",u:"https://drive.google.com/file/d/1onzF2QY-plEywpBDwV3kRuNYOIjlVV_B/view?usp=drivesdk"}]},
{n:"AI Smart Machine Monitor",c:["AI & Machine Learning"],s:["Python","Federated Learning","AI Monitoring"],f:"A Federated Learning simulation for industrial machine condition monitoring. Instead of collecting sensor data from every machine on one server, the model is trained across nodes, so sensitive company data stays at its source while the model still learns from the whole factory.",l:[{t:"Repository",u:"https://github.com/keyshsaa/keyshsaa-Smart-Machine-monitoring-PBL"}]},
{n:"AI Fertilizer Recommendation",c:["AI & Machine Learning"],s:["Python","Jupyter Notebook","Machine Learning"],f:"A machine learning model that analyzes soil and crop conditions to recommend the right fertilizer type and dosage, helping agriculture become more precise, efficient, and environmentally friendly by reducing excess fertilizer use.",l:[{t:"Repository",u:"https://github.com/keyshsaa/Fertilizer-Recommendation-AI"}]},
{n:"GMon: Golden Fish Monitoring",c:["IoT & Embedded"],s:["ESP32","RTC","Turbidity Sensor","IoT"],f:"GMon monitors water quality in a goldfish aquarium. A turbidity sensor reads water cloudiness, an ESP32 processes and sends the data, and an RTC records measurement time. Owners can follow water conditions in real time and act before the fish are affected.",l:[{t:"Live Demo",u:"https://drive.google.com/file/d/1OxAkITg9B0mghlnBesX9578U8lQk9zoO/view?usp=drivesdk"}]}];
const E=[
{t:"Database Systems Teaching Assistant",o:"Universitas Gadjah Mada",w:"Feb 2026 - Jun 2026",c:"Work"},
{t:"Public Relations and Publication Staff",o:"Balairung Class Try Out",w:"Nov 2025 - Feb 2026",c:"Leadership"},
{t:"Fundraising Staff",o:"Network National Competition 4.0",w:"Jul 2025 - Feb 2026",c:"Leadership"},
{t:"Social and Community Staff",o:"Internet Engineering Technology Student Communication Forum",w:"",c:"Leadership"},
{t:"Social and Community Staff",o:"Klaten Student Organization",w:"",c:"Leadership"}];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const chips=a=>`<div class="chips">${a.map(x=>`<span class="chip">${x}</span>`).join("")}</div>`;
function show(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth",block:"start"})}
function mark(id){$$("nav button").forEach(t=>{const on=t.dataset.t===id;on?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")})}
const secs=$$("section");
function spy(){let cur=secs[0].id;const y=innerHeight*0.35;secs.forEach(s=>{if(s.getBoundingClientRect().top<=y)cur=s.id});if(innerHeight+scrollY>=document.body.scrollHeight-4)cur=secs[secs.length-1].id;mark(cur)}
addEventListener("scroll",spy,{passive:true});addEventListener("resize",spy);spy();
$$("nav button").forEach(t=>t.onclick=()=>show(t.dataset.t));
document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b)show(b.dataset.go)});
// skills
let si=0;
function renderS(){
 $("#slist").innerHTML=S.map((x,i)=>`<button role="tab" aria-selected="${i===si}" data-i="${i}">${x.n}</button>`).join("");
 const x=S[si];$("#sdetail").innerHTML=`<h3>${x.n}</h3><p class="sub">${x.d}</p>${chips(x.s)}`;
 $$("#slist button").forEach(b=>b.onclick=()=>{si=+b.dataset.i;renderS()})}
renderS();
// projects
const cats=["All","AI & Machine Learning","IoT & Embedded","Computer Vision"];let cur="All",pi=0;
function renderP(){
 $("#filters").innerHTML=cats.map(c=>`<button aria-pressed="${c===cur}" data-c="${c}">${c}</button>`).join("");
 const vis=P.map((p,i)=>i).filter(i=>cur==="All"||P[i].c.includes(cur));
 if(!vis.includes(pi))pi=vis[0];
 $("#plist").innerHTML=vis.map(i=>`<button role="tab" aria-selected="${i===pi}" data-i="${i}">${P[i].n}</button>`).join("");
 const p=P[pi];$("#pdetail").innerHTML=`<div class="cat">${p.c.join(", ")}</div><h3>${p.n}</h3><p class="sub">${p.f}</p>${chips(p.s)}<div class="btns">${p.l.map(x=>`<a class="btn" href="${x.u}" target="_blank" rel="noopener">${x.t}</a>`).join("")}</div>`;
 $$("#filters button").forEach(b=>b.onclick=()=>{cur=b.dataset.c;renderP()});
 $$("#plist button").forEach(b=>b.onclick=()=>{pi=+b.dataset.i;renderP()})}
renderP();
// experience
const ec=["All","Work","Leadership"];let ecur="All";
function renderE(){
 $("#efilters").innerHTML=ec.map(c=>`<button aria-pressed="${c===ecur}" data-c="${c}">${c}</button>`).join("");
 $("#timeline").innerHTML=E.filter(e=>ecur==="All"||e.c===ecur).map(e=>`<article><h3>${e.t}</h3><div class="org">${e.o}</div>${e.w?`<div class="when">${e.w}</div>`:""}<div class="tag">${e.c}</div></article>`).join("");
 $$("#efilters button").forEach(b=>b.onclick=()=>{ecur=b.dataset.c;renderE()})}
renderE();
