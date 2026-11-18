(function(){
var C=window.NEPTUNE,svc=document.body.dataset.service,P=C.pricing[svc];
function wa(t){return "https://wa.me/"+C.whatsapp+"?text="+encodeURIComponent(t)}
var ks=function(n){return "KSh "+n.toLocaleString("en-KE")};
// Image slots: missing files show a clear IMAGE NEEDED box
function ph(i){var d=document.createElement("div");d.className="ph";d.style.aspectRatio=i.dataset.ratio||"4/3";
var a=document.createElement("b");a.textContent="IMAGE NEEDED";var b=document.createElement("span");b.textContent=i.getAttribute("src");var c=document.createElement("em");c.textContent=i.dataset.need;
d.append(a,b,c);i.replaceWith(d)}
document.querySelectorAll("img.slot").forEach(function(i){i.addEventListener("error",function(){ph(i)});if(i.complete&&i.naturalWidth===0)ph(i)});
// Price calculator
var sel=document.getElementById("bd"),dc=document.getElementById("disc"),out=document.getElementById("out"),wb=document.getElementById("wab"),ww=document.getElementById("waw");
if(sel){for(var n=1;n<=C.maxBedrooms;n++){var o=document.createElement("option");o.value=n;o.textContent=n+(n===1?" bedroom":" bedrooms");sel.appendChild(o)}
var o2=document.createElement("option");o2.value="q";o2.textContent=(C.maxBedrooms+1)+"+ bedrooms, office or shop";sel.appendChild(o2);
document.getElementById("calc").addEventListener("click",function(){var v=sel.value,t,msg="Hello Neptune, I need "+document.body.dataset.name+". ";
if(v==="q"){t="Larger homes and commercial sites are quoted individually. Call us and we will give you your price.";msg+="Please quote me for a larger home or commercial site."}
else{var n=+v,p=P.base+P.extra*(n-1),f=Math.round(p*(1-C.discount));
t="Estimated cost for "+n+(n===1?" bedroom":" bedrooms")+": "+ks(p)+", with 4 months of cover.";
if(dc.checked&&C.discount>0){t+=" With "+Math.round(C.discount*100)+"% off: "+ks(f)+".";msg+="I want the "+Math.round(C.discount*100)+"% offer. "}
msg+="Home size: "+n+(n===1?" bedroom.":" bedrooms.")+" Estimate: "+ks(p)+"."}
out.textContent=t;wb.href="tel:"+C.phone;wb.style.display="inline-block";ww.href=wa(msg);ww.style.display="inline-block"})}
// Quote form: emails info@ (opens the email app on the visitor device, or posts to formEndpoint if set in config.js)
var f=document.getElementById("qf");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(f),nm=document.body.dataset.name,
body="Service: "+nm+"\nName: "+d.get("name")+"\nPhone: "+d.get("phone")+"\nArea: "+d.get("area")+"\nBedrooms: "+d.get("beds");
if(C.formEndpoint){fetch(C.formEndpoint,{method:"POST",body:d,headers:{Accept:"application/json"}}).then(function(r){f.replaceWith(Object.assign(document.createElement("p"),{textContent:r.ok?"Thank you. We got your request and will call you soon.":"Sorry, that did not send. Please call "+C.phoneDisplay+"."}))}).catch(function(){alert("Sorry, that did not send. Please call "+C.phoneDisplay+".")})}
else{location.href="mailto:"+C.email+"?subject="+encodeURIComponent("Quote request: "+nm)+"&body="+encodeURIComponent(body)}});
var fw=document.getElementById("qwa");
if(f&&fw)fw.addEventListener("click",function(){if(!f.reportValidity())return;var d=new FormData(f);window.open(wa("Hello Neptune, I need "+document.body.dataset.name+". Name: "+d.get("name")+". Phone: "+d.get("phone")+". Area: "+d.get("area")+". Bedrooms: "+d.get("beds")+"."),"_blank")});
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=wa(a.dataset.wa)});
document.querySelectorAll("[data-tel]").forEach(function(a){a.href="tel:"+C.phone;a.textContent=a.dataset.tel==="1"?"Call "+C.phoneDisplay:a.textContent})})();
