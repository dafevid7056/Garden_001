(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Nc="182",Vs={ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Op=0,Ph=1,Bp=2,Fa=1,kp=2,wr=3,yi=0,an=1,$n=2,ni=0,Gs=1,xl=2,Ih=3,Dh=4,zp=5,as=100,Vp=101,Gp=102,Hp=103,Wp=104,Xp=200,Yp=201,qp=202,jp=203,vl=204,yl=205,Kp=206,Zp=207,$p=208,Jp=209,Qp=210,em=211,tm=212,nm=213,im=214,Ml=0,Sl=1,bl=2,js=3,Tl=4,El=5,Al=6,wl=7,oo=0,sm=1,rm=2,ii=0,Td=1,Ed=2,Ad=3,wd=4,Rd=5,Cd=6,Pd=7,Lh="attached",am="detached",Id=300,_s=301,Ks=302,Ya=303,Rl=304,lo=306,Zs=1e3,Nn=1001,qa=1002,Mt=1003,Dd=1004,Rr=1005,pt=1006,Oa=1007,Qn=1008,vn=1009,Ld=1010,Nd=1011,kr=1012,Uc=1013,si=1014,Jt=1015,Xt=1016,Fc=1017,Oc=1018,zr=1020,Ud=35902,Fd=35899,Od=1021,Bd=1022,Un=1023,Mi=1026,ls=1027,Bc=1028,kc=1029,$s=1030,zc=1031,Vc=1033,Ba=33776,ka=33777,za=33778,Va=33779,Cl=35840,Pl=35841,Il=35842,Dl=35843,Ll=36196,Nl=37492,Ul=37496,Fl=37488,Ol=37489,Bl=37490,kl=37491,zl=37808,Vl=37809,Gl=37810,Hl=37811,Wl=37812,Xl=37813,Yl=37814,ql=37815,jl=37816,Kl=37817,Zl=37818,$l=37819,Jl=37820,Ql=37821,ec=36492,tc=36494,nc=36495,ic=36283,sc=36284,rc=36285,ac=36286,om=2200,lm=2201,cm=2202,Vr=2300,Gr=2301,bo=2302,Os=2400,Bs=2401,ja=2402,Gc=2500,hm=2501,um=0,kd=1,oc=2,dm=3200,hr=0,fm=1,Li="",mt="srgb",Vt="srgb-linear",Ka="linear",nt="srgb",vs=7680,Nh=519,pm=512,mm=513,_m=514,Hc=515,gm=516,xm=517,Wc=518,vm=519,lc=35044,Uh="300 es",ei=2e3,Za=2001;function zd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ym(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mm(){const r=Hr("canvas");return r.style.display="block",r}const Fh={};function $a(...r){const e="THREE."+r.shift();console.log(e,...r)}function Se(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Pe(...r){const e="THREE."+r.shift();console.error(e,...r)}function Wr(...r){const e=r.join(" ");e in Fh||(Fh[e]=!0,Se(...r))}function Sm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oh=1234567;const Lr=Math.PI/180,Js=180/Math.PI;function Hn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Be(r,e,t){return Math.max(e,Math.min(t,r))}function Xc(r,e){return(r%e+e)%e}function bm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Tm(r,e,t){return r!==e?(t-r)/(e-r):0}function Nr(r,e,t){return(1-t)*r+t*e}function Em(r,e,t,n){return Nr(r,e,1-Math.exp(-t*n))}function Am(r,e=1){return e-Math.abs(Xc(r,e*2)-e)}function wm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Rm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Cm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Pm(r,e){return r+Math.random()*(e-r)}function Im(r){return r*(.5-Math.random())}function Dm(r){r!==void 0&&(Oh=r);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lm(r){return r*Lr}function Nm(r){return r*Js}function Um(r){return(r&r-1)===0&&r!==0}function Fm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Om(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bm(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:Se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vd={DEG2RAD:Lr,RAD2DEG:Js,generateUUID:Hn,clamp:Be,euclideanModulo:Xc,mapLinear:bm,inverseLerp:Tm,lerp:Nr,damp:Em,pingpong:Am,smoothstep:wm,smootherstep:Rm,randInt:Cm,randFloat:Pm,randFloatSpread:Im,seededRandom:Dm,degToRad:Lm,radToDeg:Nm,isPowerOfTwo:Um,ceilPowerOfTwo:Fm,floorPowerOfTwo:Om,setQuaternionFromProperEuler:Bm,normalize:it,denormalize:Gn};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new U,Bh=new bn;class Ue{constructor(e,t,n,i,s,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],S=i[4],M=i[7],b=i[2],w=i[5],A=i[8];return s[0]=a*_+o*y+l*b,s[3]=a*m+o*S+l*w,s[6]=a*p+o*M+l*A,s[1]=c*_+h*y+u*b,s[4]=c*m+h*S+u*w,s[7]=c*p+h*M+u*A,s[2]=d*_+f*y+g*b,s[5]=d*m+f*S+g*w,s[8]=d*p+f*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eo=new Ue,kh=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function km(){const r={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?Ka:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vt]:{primaries:e,whitePoint:n,transfer:Ka,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),r}const We=km();function vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ys;class zm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Hr("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=vi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vm=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ao(i[a].image)):s.push(Ao(i[a]))}else s=Ao(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ao(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}let Gm=0;const wo=new U;class Lt extends Xi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Nn,i=Nn,s=pt,a=Qn,o=Un,l=vn,c=Lt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Hn(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Se(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Se(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Id;Lt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(f+1)/2,b=(p+1)/2,w=(h+d)/4,A=(u+_)/4,R=(g+m)/4;return S>M&&S>b?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=A/n):M>b?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=R/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=R/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hm extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Lt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Yc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Hm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wm extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),oa.subVectors(this.max,_r),Ms.subVectors(e.a,_r),Ss.subVectors(e.b,_r),bs.subVectors(e.c,_r),Ei.subVectors(Ss,Ms),Ai.subVectors(bs,Ss),Zi.subVectors(Ms,bs);let t=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Zi.z,Zi.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Zi.z,0,-Zi.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Zi.y,Zi.x,0];return!Ro(t,Ms,Ss,bs,oa)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Ms,Ss,bs,oa))?!1:(la.crossVectors(Ei,Ai),t=[la.x,la.y,la.z],Ro(t,Ms,Ss,bs,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new U,new U,new U,new U,new U,new U,new U,new U],kn=new U,aa=new Ti,Ms=new U,Ss=new U,bs=new U,Ei=new U,Ai=new U,Zi=new U,_r=new U,oa=new U,la=new U,$i=new U;function Ro(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){$i.fromArray(r,s);const o=i.x*Math.abs($i.x)+i.y*Math.abs($i.y)+i.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Xm=new Ti,gr=new U,Co=new U;class ai{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Co)),this.expandByPoint(gr.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hi=new U,Po=new U,ca=new U,wi=new U,Io=new U,ha=new U,Do=new U;class ur{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Po.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ca),o=wi.dot(this.direction),l=-wi.dot(ca),c=wi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Po).addScaledVector(ca,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),i=hi.dot(hi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,i,s){Io.subVectors(t,e),ha.subVectors(n,e),Do.crossVectors(Io,ha);let a=this.direction.dot(Do),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=o*this.direction.dot(ha.crossVectors(wi,ha));if(l<0)return null;const c=o*this.direction.dot(Io.cross(wi));if(c<0||l+c>a)return null;const h=-o*wi.dot(Do);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ym,e,qm)}lookAt(e,t,n){const i=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ri.crossVectors(n,_n),Ri.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ri.crossVectors(n,_n)),Ri.normalize(),ua.crossVectors(_n,Ri),i[0]=Ri.x,i[4]=ua.x,i[8]=_n.x,i[1]=Ri.y,i[5]=ua.y,i[9]=_n.y,i[2]=Ri.z,i[6]=ua.z,i[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],S=n[7],M=n[11],b=n[15],w=i[0],A=i[4],R=i[8],x=i[12],T=i[1],P=i[5],O=i[9],L=i[13],z=i[2],G=i[6],B=i[10],k=i[14],q=i[3],ne=i[7],ee=i[11],oe=i[15];return s[0]=a*w+o*T+l*z+c*q,s[4]=a*A+o*P+l*G+c*ne,s[8]=a*R+o*O+l*B+c*ee,s[12]=a*x+o*L+l*k+c*oe,s[1]=h*w+u*T+d*z+f*q,s[5]=h*A+u*P+d*G+f*ne,s[9]=h*R+u*O+d*B+f*ee,s[13]=h*x+u*L+d*k+f*oe,s[2]=g*w+_*T+m*z+p*q,s[6]=g*A+_*P+m*G+p*ne,s[10]=g*R+_*O+m*B+p*ee,s[14]=g*x+_*L+m*k+p*oe,s[3]=y*w+S*T+M*z+b*q,s[7]=y*A+S*P+M*G+b*ne,s[11]=y*R+S*O+M*B+b*ee,s[15]=y*x+S*L+M*k+b*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-c*d,S=o*f-c*u,M=o*d-l*u,b=a*f-c*h,w=a*d-l*h,A=a*u-o*h;return t*(_*y-m*S+p*M)-n*(g*y-m*b+p*w)+i*(g*S-_*b+p*A)-s*(g*M-_*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,S=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,b=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,w=t*y+n*S+i*M+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=S*A,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*A,e[8]=M*A,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=b*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,y=l*c,S=l*h,M=l*u,b=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*b,i[1]=(f+M)*b,i[2]=(g-S)*b,i[3]=0,i[4]=(f-M)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+S)*A,i[9]=(m-y)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ts.set(i[0],i[1],i[2]).length();const a=Ts.set(i[4],i[5],i[6]).length(),o=Ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),zn.copy(this);const c=1/s,h=1/a,u=1/o;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ei,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===ei)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Za)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ei,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===ei)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Za)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ts=new U,zn=new Fe,Ym=new U(0,0,0),qm=new U(1,1,1),Ri=new U,ua=new U,_n=new U,Vh=new Fe,Gh=new bn;class Bn{constructor(e=0,t=0,n=0,i=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jm=0;const Hh=new U,Es=new bn,ui=new Fe,da=new U,xr=new U,Km=new U,Zm=new bn,Wh=new U(1,0,0),Xh=new U(0,1,0),Yh=new U(0,0,1),qh={type:"added"},$m={type:"removed"},As={type:"childadded",child:null},Lo={type:"childremoved",child:null};class St extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new U,t=new Bn,n=new bn,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ue}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(xr,da,this.up):ui.lookAt(da,xr,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(ui),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),As.child=e,this.dispatchEvent(As),As.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($m),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}St.DEFAULT_UP=new U(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new U,di=new U,No=new U,fi=new U,ws=new U,Rs=new U,jh=new U,Uo=new U,Fo=new U,Oo=new U,Bo=new ft,ko=new ft,zo=new ft;class Ln{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vn.subVectors(e,t),i.cross(Vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vn.subVectors(i,t),di.subVectors(n,t),No.subVectors(e,t);const a=Vn.dot(Vn),o=Vn.dot(di),l=Vn.dot(No),c=di.dot(di),h=di.dot(No),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Bo.setScalar(0),ko.setScalar(0),zo.setScalar(0),Bo.fromBufferAttribute(e,t),ko.fromBufferAttribute(e,n),zo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Bo,s.x),a.addScaledVector(ko,s.y),a.addScaledVector(zo,s.z),a}static isFrontFacing(e,t,n,i){return Vn.subVectors(n,t),di.subVectors(e,t),Vn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ws.subVectors(i,n),Rs.subVectors(s,n),Uo.subVectors(e,n);const l=ws.dot(Uo),c=Rs.dot(Uo);if(l<=0&&c<=0)return t.copy(n);Fo.subVectors(e,i);const h=ws.dot(Fo),u=Rs.dot(Fo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ws,a);Oo.subVectors(e,s);const f=ws.dot(Oo),g=Rs.dot(Oo);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Rs,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return jh.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(jh,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(ws,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Vo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=Xc(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vo(a,s,e+1/3),this.g=Vo(a,s,e),this.b=Vo(a,s,e-1/3)}return We.colorSpaceToWorking(this,i),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&Se("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Se("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=Hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return We.workingToColorSpace(Ht.copy(this),e),Math.round(Be(Ht.r*255,0,255))*65536+Math.round(Be(Ht.g*255,0,255))*256+Math.round(Be(Ht.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,s=Ht.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=mt){We.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(fa);const n=Nr(Ci.h,fa.h,t),i=Nr(Ci.s,fa.s,t),s=Nr(Ci.l,fa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ae;Ae.NAMES=Hd;let Jm=0;class on extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=Gs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=yl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Se(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Se(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cs extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gi=Qm();function Qm(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function e_(r){Math.abs(r)>65504&&Se("DataUtils.toHalfFloat(): Value out of range."),r=Be(r,-65504,65504),gi.floatView[0]=r;const e=gi.uint32View[0],t=e>>23&511;return gi.baseTable[t]+((e&8388607)>>gi.shiftTable[t])}function t_(r){const e=r>>10;return gi.uint32View[0]=gi.mantissaTable[gi.offsetTable[e]+(r&1023)]+gi.exponentTable[e],gi.floatView[0]}class pa{static toHalfFloat(e){return e_(e)}static fromHalfFloat(e){return t_(e)}}const Ct=new U,ma=new be;let n_=0;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}}class Wd extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xd extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let i_=0;const Pn=new Fe,Go=new St,Cs=new U,gn=new Ti,vr=new Ti,Ot=new U;class en extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Xd:Wd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(gn.min,vr.min),gn.expandByPoint(Ot),Ot.addVectors(gn.max,vr.max),gn.expandByPoint(Ot)):(gn.expandByPoint(vr.min),gn.expandByPoint(vr.max))}gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Ot.add(Cs)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new U,l[R]=new U;const c=new U,h=new U,u=new U,d=new be,f=new be,g=new be,_=new U,m=new U;function p(R,x,T){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,T),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(_),o[x].add(_),o[T].add(_),l[R].add(m),l[x].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,x=y.length;R<x;++R){const T=y[R],P=T.start,O=T.count;for(let L=P,z=P+O;L<z;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new U,M=new U,b=new U,w=new U;function A(R){b.fromBufferAttribute(i,R),w.copy(b);const x=o[R];S.copy(x),S.sub(b.multiplyScalar(b.dot(x))).normalize(),M.crossVectors(w,x);const P=M.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,x=y.length;R<x;++R){const T=y[R],P=T.start,O=T.count;for(let L=P,z=P+O;L<z;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new kt(d,h,u)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kh=new Fe,Ji=new ur,_a=new ai,Zh=new U,ga=new U,xa=new U,va=new U,Ho=new U,ya=new U,$h=new U,Ma=new U;class dn extends St{constructor(e=new en,t=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ho.fromBufferAttribute(u,e),a?ya.addScaledVector(Ho,h):ya.addScaledVector(Ho.sub(t),h))}t.add(ya)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(_a.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(_a,Zh)===null||Ji.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&(Kh.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,b=S;M<b;M+=3){const w=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);i=Sa(this,p,e,n,c,h,u,w,A,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);i=Sa(this,a,e,n,c,h,u,y,S,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,b=S;M<b;M+=3){const w=M,A=M+1,R=M+2;i=Sa(this,p,e,n,c,h,u,w,A,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,M=m+2;i=Sa(this,a,e,n,c,h,u,y,S,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function s_(r,e,t,n,i,s,a,o){let l;if(e.side===an?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===yi,o),l===null)return null;Ma.copy(o),Ma.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:r}}function Sa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ga),r.getVertexPosition(l,xa),r.getVertexPosition(c,va);const h=s_(r,e,t,n,ga,xa,va,$h);if(h){const u=new U;Ln.getBarycoord($h,ga,xa,va,u),i&&(h.uv=Ln.getInterpolatedAttribute(i,o,l,c,u,new be)),s&&(h.uv1=Ln.getInterpolatedAttribute(s,o,l,c,u,new be)),a&&(h.normal=Ln.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};Ln.getNormal(ga,xa,va,d.normal),h.face=d,h.barycoord=u}return h}class Qr extends en{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(_,m,p,y,S,M,b,w,A,R,x){const T=M/A,P=b/R,O=M/2,L=b/2,z=w/2,G=A+1,B=R+1;let k=0,q=0;const ne=new U;for(let ee=0;ee<B;ee++){const oe=ee*P-L;for(let Ee=0;Ee<G;Ee++){const we=Ee*T-O;ne[_]=we*y,ne[m]=oe*S,ne[p]=z,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ee/A),u.push(1-ee/R),k+=1}}for(let ee=0;ee<R;ee++)for(let oe=0;oe<A;oe++){const Ee=d+oe+G*ee,we=d+oe+G*(ee+1),He=d+(oe+1)+G*(ee+1),qe=d+(oe+1)+G*ee;l.push(Ee,we,qe),l.push(we,He,qe),q+=6}o.addGroup(f,q,x),f+=q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(r){const e={};for(let t=0;t<r.length;t++){const n=Qs(r[t]);for(const i in n)e[i]=n[i]}return e}function r_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const qd={clone:Qs,merge:Kt};var a_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=r_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jd extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new U,Jh=new be,Qh=new be;class Zt extends jd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Jh,Qh),t.subVectors(Qh,Jh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Is=1;class l_ extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(Ps,Is,e,t);i.layers=this.layers,this.add(i);const s=new Zt(Ps,Is,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Ps,Is,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Ps,Is,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Ps,Is,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Ps,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kd extends Lt{constructor(e=[],t=_s,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zd extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qr(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ni});s.uniforms.tEquirect.value=t;const a=new dn(i,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=pt),new l_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Ni extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c_={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class h_ extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $d{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lc,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new U;class co{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){$a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const eu=new U,tu=new ft,nu=new ft,u_=new U,iu=new Fe,ba=new U,Xo=new ai,su=new Fe,Yo=new ur;class d_ extends dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ba),this.boundingBox.expandByPoint(ba)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ba),this.boundingSphere.expandByPoint(ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),e.ray.intersectsSphere(Xo)!==!1&&(su.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(su),!(this.boundingBox!==null&&Yo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===am?this.bindMatrixInverse.copy(this.bindMatrix).invert():Se("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;tu.fromBufferAttribute(i.attributes.skinIndex,e),nu.fromBufferAttribute(i.attributes.skinWeight,e),eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=nu.getComponent(s);if(a!==0){const o=tu.getComponent(s);iu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(u_.copy(eu).applyMatrix4(iu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jd extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ho extends Lt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Mt,h=Mt,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=new Fe,f_=new Fe;class jc{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Se("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:f_;ru.multiplyMatrices(o,t[s]),ru.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ho(t,e,e,Un,Jt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Se("Skeleton: No bone found with UUID:",s),a=new Jd),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class cc extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new Fe,au=new Fe,Ta=[],ou=new Ti,p_=new Fe,yr=new dn,Mr=new ai;class m_ extends dn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,p_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),ou.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(ou)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),Mr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),e.ray.intersectsSphere(Mr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ds),au.multiplyMatrices(n,Ds),yr.matrixWorld=au,yr.raycast(e,Ta);for(let a=0,o=Ta.length;a<o;a++){const l=Ta[a];l.instanceId=s,l.object=this,t.push(l)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ho(new Float32Array(i*this.count),i,this.count,Bc,Jt));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qo=new U,__=new U,g_=new Ue;class Di{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qo.subVectors(n,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||g_.getNormalMatrix(e),i=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new ai,x_=new be(.5,.5),Ea=new U;class Kc{constructor(e=new Di,t=new Di,n=new Di,i=new Di,s=new Di,a=new Di){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],S=s[13],M=s[14],b=s[15];if(i[0].setComponents(c-a,f-h,p-g,b-y).normalize(),i[1].setComponents(c+a,f+h,p+g,b+y).normalize(),i[2].setComponents(c+o,f+u,p+_,b+S).normalize(),i[3].setComponents(c-o,f-u,p-_,b-S).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,p-m,b-M).normalize();else if(i[4].setComponents(c-l,f-d,p-m,b-M).normalize(),t===ei)i[5].setComponents(c+l,f+d,p+m,b+M).normalize();else if(t===Za)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);const t=x_.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ea.x=i.normal.x>0?e.max.x:e.min.x,Ea.y=i.normal.y>0?e.max.y:e.min.y,Ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qd extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ja=new U,Qa=new U,lu=new Fe,Sr=new ur,Aa=new ai,jo=new U,cu=new U;class Zc extends St{constructor(e=new en,t=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ja.fromBufferAttribute(t,i-1),Qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ja.distanceTo(Qa);e.setAttribute("lineDistance",new Qt(n,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;lu.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(lu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),y=h.getX(_+1),S=wa(this,e,Sr,l,p,y,_);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=wa(this,e,Sr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=wa(this,e,Sr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=wa(this,e,Sr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wa(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Ja.fromBufferAttribute(o,i),Qa.fromBufferAttribute(o,s),t.distanceSqToSegment(Ja,Qa,jo,cu)>n)return;jo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(jo);if(!(c<e.near||c>e.far))return{distance:c,point:cu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const hu=new U,uu=new U;class v_ extends Zc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)hu.fromBufferAttribute(t,i),uu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hu.distanceTo(uu);e.setAttribute("lineDistance",new Qt(n,1))}else Se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class y_ extends Zc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $c extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const du=new Fe,hc=new ur,Ra=new ai,Ca=new U;class ef extends St{constructor(e=new en,t=new $c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;du.copy(i).invert(),hc.copy(e.ray).applyMatrix4(du);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ca.fromBufferAttribute(u,m),fu(Ca,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ca.fromBufferAttribute(u,g),fu(Ca,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fu(r,e,t,n,i,s,a){const o=hc.distanceSqToPoint(r);if(o<t){const l=new U;hc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class uo extends Lt{constructor(e,t,n,i,s=pt,a=pt,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class er extends Lt{constructor(e,t,n=si,i,s,a,o=Mt,l=Mt,c,h=Mi,u=1){if(h!==Mi&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class M_ extends er{constructor(e,t=si,n=_s,i,s,a=Mt,o=Mt,l,c=Mi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tf extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fo extends en{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let S=0;S<c;S++){const M=S*u-s;g.push(M,-y,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const S=y+c*p,M=y+c*(p+1),b=y+1+c*(p+1),w=y+1+c*p;f.push(S,M,w),f.push(M,b,w)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}class S_ extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jc extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oi extends Jc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pu extends on{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b_ extends on{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class T_ extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class E_ extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A_ extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class w_ extends on{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ae(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hr,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Pa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function R_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function mu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function nf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ea{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class C_ extends ea{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bs:s=e,o=2*t-n;break;case ja:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bs:a=e,l=2*n-t;break;case ja:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let b=0;b!==o;++b)s[b]=p*a[h+b]+y*a[c+b]+S*a[l+b]+M*a[u+b];return s}}class sf extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class P_ extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new P_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new C_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Gr:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Se("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ym(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Gr;class dr extends Xn{constructor(e,t,n){super(e,t,n)}}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Vr;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class rf extends Xn{constructor(e,t,n,i){super(e,t,n,i)}}rf.prototype.ValueTypeName="color";class tr extends Xn{constructor(e,t,n,i){super(e,t,n,i)}}tr.prototype.ValueTypeName="number";class I_ extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class nr extends Xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new I_(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends Xn{constructor(e,t,n){super(e,t,n)}}fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Vr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Xn{constructor(e,t,n,i){super(e,t,n,i)}}ir.prototype.ValueTypeName="vector";class uc{constructor(e="",t=-1,n=[],i=Gc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(L_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=R_(l);l=mu(l,1,h),c=mu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new tr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Se("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];nf(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new tr(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(ir,f+".position",d,"pos",i),n(nr,f+".quaternion",d,"rot",i),n(ir,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function D_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return rf;case"quaternion":return nr;case"bool":case"boolean":return dr;case"string":return fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function L_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=D_(r.type);if(r.times===void 0){const t=[],n=[];nf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const xi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class N_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const U_=new N_;class Yi{constructor(e){this.manager=e!==void 0?e:U_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class F_ extends Error{constructor(e,t){super(e),this.response=t}}class Xr extends Yi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Se("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=pi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:M})=>{if(S)p.close();else{_+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,A=h.length;w<A;w++){const R=h[w];R.onProgress&&R.onProgress(b)}p.enqueue(M),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new F_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{xi.add(`file:${e}`,c);const h=pi[e];delete pi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=new WeakMap;class O_ extends Yi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ls.get(a);u===void 0&&(u=[],Ls.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Hr("img");function l(){h(),t&&t(this);const u=Ls.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ls.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),xi.remove(`image:${e}`);const d=Ls.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ls.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class B_ extends Yi{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ho,o=new Xr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{h(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Nn,a.wrapT=c.wrapT!==void 0?c.wrapT:Nn,a.magFilter=c.magFilter!==void 0?c.magFilter:pt,a.minFilter=c.minFilter!==void 0?c.minFilter:pt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Qn),c.mipmapCount===1&&(a.minFilter=pt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class af extends Yi{constructor(e){super(e)}load(e,t,n,i){const s=new Lt,a=new O_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class po extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ko=new Fe,_u=new U,gu=new U;class Qc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kc,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_u.setFromMatrixPosition(e.matrixWorld),t.position.copy(_u),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),Ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k_ extends Qc{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class z_ extends po{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new k_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class V_ extends Qc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class of extends po{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new V_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ta extends jd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class G_ extends Qc{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dc extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new G_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class xu extends po{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ur{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Zo=new WeakMap;class H_ extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Se("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Se("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(Zo.has(a)===!0)i&&i(Zo.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return xi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Zo.set(l,c),xi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class W_ extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class X_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){bn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;bn.multiplyQuaternionsFlat(e,a,e,t,e,n),bn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const eh="\\[\\]\\.:\\/",Y_=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",q_="[^"+eh.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",th),K_=/(WCOD+)?/.source.replace("WCOD",q_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),$_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),J_=new RegExp("^"+j_+K_+Z_+$_+"$"),Q_=["material","materials","bones","map"];class eg{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y_,"")}static parseTrackName(e){const t=J_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Q_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=eg;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Os,endingEnd:Os};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case hm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Gc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===cm;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===om){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Bs,i.endingEnd=Bs):(e?i.endingStart=this.zeroSlopeAtStart?Bs:Os:i.endingStart=ja,t?i.endingEnd=this.zeroSlopeAtEnd?Bs:Os:i.endingEnd=ja)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const ng=new Float32Array(1);class ig extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new X_(Je.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new sf(new Float32Array(2),new Float32Array(2),1,ng),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?uc.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Gc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new tg(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?uc.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const vu=new Fe;class sg{constructor(e,t,n=0,i=1/0){this.ray=new ur(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vu),this}intersectObject(e,t=!0,n=[]){return fc(e,this,n,t),n.sort(yu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)fc(e[i],this,n,t);return n.sort(yu),n}}function yu(r,e){return r.distance-e.distance}function fc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)fc(s[a],e,t,!0)}}class Mu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rg extends Xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Su(r,e,t,n){const i=ag(n);switch(t){case Od:return r*e;case Bc:return r*e/i.components*i.byteLength;case kc:return r*e/i.components*i.byteLength;case $s:return r*e*2/i.components*i.byteLength;case zc:return r*e*2/i.components*i.byteLength;case Bd:return r*e*3/i.components*i.byteLength;case Un:return r*e*4/i.components*i.byteLength;case Vc:return r*e*4/i.components*i.byteLength;case Ba:case ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case za:case Va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Dl:return Math.max(r,16)*Math.max(e,8)/4;case Cl:case Il:return Math.max(r,8)*Math.max(e,8)/2;case Ll:case Nl:case Fl:case Ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Bl:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case $l:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ec:case tc:case nc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ic:case sc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rc:case ac:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(r){switch(r){case vn:case Ld:return{byteLength:1,components:1};case kr:case Nd:case Xt:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case si:case Uc:case Jt:return{byteLength:4,components:1};case Ud:case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);function cf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function og(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ig=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ax=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:lg,alphahash_pars_fragment:cg,alphamap_fragment:hg,alphamap_pars_fragment:ug,alphatest_fragment:dg,alphatest_pars_fragment:fg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:_g,batching_vertex:gg,begin_vertex:xg,beginnormal_vertex:vg,bsdfs:yg,iridescence_fragment:Mg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:Ag,color_fragment:wg,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Pg,common:Ig,cube_uv_reflection_fragment:Dg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Ng,displacementmap_vertex:Ug,emissivemap_fragment:Fg,emissivemap_pars_fragment:Og,colorspace_fragment:Bg,colorspace_pars_fragment:kg,envmap_fragment:zg,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Gg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:e0,envmap_vertex:Wg,fog_vertex:Xg,fog_pars_vertex:Yg,fog_fragment:qg,fog_pars_fragment:jg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:Zg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:s0,lights_physical_fragment:r0,lights_physical_pars_fragment:a0,lights_fragment_begin:o0,lights_fragment_maps:l0,lights_fragment_end:c0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:f0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:_0,map_particle_pars_fragment:g0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:v0,morphinstance_vertex:y0,morphcolor_vertex:M0,morphnormal_vertex:S0,morphtarget_pars_vertex:b0,morphtarget_vertex:T0,normal_fragment_begin:E0,normal_fragment_maps:A0,normal_pars_fragment:w0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:N0,opaque_fragment:U0,packing:F0,premultiplied_alpha_fragment:O0,project_vertex:B0,dithering_fragment:k0,dithering_pars_fragment:z0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:Y0,skinbase_vertex:q0,skinning_pars_vertex:j0,skinning_vertex:K0,skinnormal_vertex:Z0,specularmap_fragment:$0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ax,background_vert:ox,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:hx,cube_vert:ux,cube_frag:dx,depth_vert:fx,depth_frag:px,distance_vert:mx,distance_frag:_x,equirect_vert:gx,equirect_frag:xx,linedashed_vert:vx,linedashed_frag:yx,meshbasic_vert:Mx,meshbasic_frag:Sx,meshlambert_vert:bx,meshlambert_frag:Tx,meshmatcap_vert:Ex,meshmatcap_frag:Ax,meshnormal_vert:wx,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Ix,meshphysical_frag:Dx,meshtoon_vert:Lx,meshtoon_frag:Nx,points_vert:Ux,points_frag:Fx,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:kx,sprite_frag:zx},ce={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Zn={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Zn.physical={uniforms:Kt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ia={r:0,b:0,g:0},es=new Bn,Vx=new Fe;function Gx(r,e,t,n,i,s,a){const o=new Ae(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function _(S){let M=!1;const b=g(S);b===null?p(o,l):b&&b.isColor&&(p(b,1),M=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,M){const b=g(M);b&&(b.isCubeTexture||b.mapping===lo)?(h===void 0&&(h=new dn(new Qr(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Qs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),es.copy(M.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(es)),h.material.toneMapped=We.getTransfer(b.colorSpace)!==nt,(u!==b||d!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new dn(new fo(2,2),new An({name:"BackgroundMaterial",uniforms:Qs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=We.getTransfer(b.colorSpace)!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(Ia,Yd(r)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,M,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m,dispose:y}}function Hx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(T,P,O,L,z){let G=!1;const B=u(L,O,P);s!==B&&(s=B,c(s.object)),G=f(T,L,O,z),G&&g(T,L,O,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(T,P,O,L),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,P,O){const L=O.wireframe===!0;let z=n[T.id];z===void 0&&(z={},n[T.id]=z);let G=z[P.id];G===void 0&&(G={},z[P.id]=G);let B=G[L];return B===void 0&&(B=d(l()),G[L]=B),B}function d(T){const P=[],O=[],L=[];for(let z=0;z<t;z++)P[z]=0,O[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:L,object:T,attributes:{},index:null}}function f(T,P,O,L){const z=s.attributes,G=P.attributes;let B=0;const k=O.getAttributes();for(const q in k)if(k[q].location>=0){const ee=z[q];let oe=G[q];if(oe===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;B++}return s.attributesNum!==B||s.index!==L}function g(T,P,O,L){const z={},G=P.attributes;let B=0;const k=O.getAttributes();for(const q in k)if(k[q].location>=0){let ee=G[q];ee===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),z[q]=oe,B++}s.attributes=z,s.attributesNum=B,s.index=L}function _(){const T=s.newAttributes;for(let P=0,O=T.length;P<O;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){const O=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;O[T]=1,L[T]===0&&(r.enableVertexAttribArray(T),L[T]=1),z[T]!==P&&(r.vertexAttribDivisor(T,P),z[T]=P)}function y(){const T=s.newAttributes,P=s.enabledAttributes;for(let O=0,L=P.length;O<L;O++)P[O]!==T[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function S(T,P,O,L,z,G,B){B===!0?r.vertexAttribIPointer(T,P,O,z,G):r.vertexAttribPointer(T,P,O,L,z,G)}function M(T,P,O,L){_();const z=L.attributes,G=O.getAttributes(),B=P.defaultAttributeValues;for(const k in G){const q=G[k];if(q.location>=0){let ne=z[k];if(ne===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor)),ne!==void 0){const ee=ne.normalized,oe=ne.itemSize,Ee=e.get(ne);if(Ee===void 0)continue;const we=Ee.buffer,He=Ee.type,qe=Ee.bytesPerElement,j=He===r.INT||He===r.UNSIGNED_INT||ne.gpuType===Uc;if(ne.isInterleavedBufferAttribute){const $=ne.data,pe=$.stride,Ne=ne.offset;if($.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge,$.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);r.bindBuffer(r.ARRAY_BUFFER,we);for(let ge=0;ge<q.locationSize;ge++)S(q.location+ge,oe/q.locationSize,He,ee,pe*qe,(Ne+oe/q.locationSize*ge)*qe,j)}else{if(ne.isInstancedBufferAttribute){for(let $=0;$<q.locationSize;$++)p(q.location+$,ne.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let $=0;$<q.locationSize;$++)m(q.location+$);r.bindBuffer(r.ARRAY_BUFFER,we);for(let $=0;$<q.locationSize;$++)S(q.location+$,oe/q.locationSize,He,ee,oe*qe,oe/q.locationSize*$*qe,j)}}else if(B!==void 0){const ee=B[k];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(q.location,ee);break;case 3:r.vertexAttrib3fv(q.location,ee);break;case 4:r.vertexAttrib4fv(q.location,ee);break;default:r.vertexAttrib1fv(q.location,ee)}}}}y()}function b(){R();for(const T in n){const P=n[T];for(const O in P){const L=P[O];for(const z in L)h(L[z].object),delete L[z];delete P[O]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const O in P){const L=P[O];for(const z in L)h(L[z].object),delete L[z];delete P[O]}delete n[T.id]}function A(T){for(const P in n){const O=n[P];if(O[T.id]===void 0)continue;const L=O[T.id];for(const z in L)h(L[z].object),delete L[z];delete O[T.id]}}function R(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Wx(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Un&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==vn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Jt&&!R)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Se("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:w}}function Yx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Di,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,S=y*4;let M=p.clippingState||null;l.value=M,M=h(g,d,S,f);for(let b=0;b!==S;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==_;++S,M+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function qx(r){let e=new WeakMap;function t(a,o){return o===Ya?a.mapping=_s:o===Rl&&(a.mapping=Ks),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===Rl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zd(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ui=4,bu=[.125,.215,.35,.446,.526,.582],os=20,jx=256,br=new ta,Tu=new Ae;let $o=null,Jo=0,Qo=0,el=!1;const Kx=new U;class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Kx}=s;$o=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($o,Jo,Qo),this._renderer.xr.enabled=el,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Xt,format:Un,colorSpace:Vt,depthBuffer:!1},i=Au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zx(s)),this._blurMaterial=Jx(s,e,t),this._ggxMaterial=$x(s,e,t)}return i}_compileMaterial(e){const t=new dn(new en,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,i,s){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Tu),u.toneMapping=ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new Qr,new cs({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Tu),p=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const b=this._cubeSize;Ns(i,M*b,S>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_s||e.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Ui?n-g+Ui:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ns(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,br),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ns(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,br)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*os-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):os;m>os&&Se(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const p=[];let y=0;for(let A=0;A<os;++A){const R=A/_,x=Math.exp(-R*R/2);p.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const M=this._sizeLods[i],b=3*M*(i>S-Ui?i-S+Ui:0),w=4*(this._cubeSize-M);Ns(t,b,w,3*M,2*M),l.setRenderTarget(t),l.render(u,br)}}function Zx(r){const e=[],t=[],n=[];let i=r;const s=r-Ui+1+bu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ui?l=bu[a-r+Ui-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),S=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,R=w>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(x,_*g*w),S.set(d,m*g*w);const T=[w,w,w,w,w,w];M.set(T,p*g*w)}const b=new en;b.setAttribute("position",new kt(y,_)),b.setAttribute("uv",new kt(S,m)),b.setAttribute("faceIndex",new kt(M,p)),n.push(new dn(b,null)),i>Ui&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Au(r,e,t){const n=new Tn(r,e,t);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $x(r,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jx(r,e,t){const n=new Float32Array(os),i=new U(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function wu(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ru(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qx(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===Rl,h=l===_s||l===Ks;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Eu(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Eu(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ev(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Wr("WebGLRenderer: "+n+" extension not supported."),i}}}function tv(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let S=0,M=y.length;S<M;S+=3){const b=y[S+0],w=y[S+1],A=y[S+2];d.push(b,w,w,A,A,b)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,M=y.length/3-1;S<M;S+=3){const b=S+0,w=S+1,A=S+2;d.push(b,w,w,A,A,b)}}else return;const m=new(zd(d)?Xd:Wd)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function nv(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function iv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sv(r,e,t){const n=new WeakMap,i=new ft;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let b=o.attributes.position.count*M,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*u),R=new Gd(A,b,w,u);R.type=Jt,R.needsUpdate=!0;const x=M*4;for(let P=0;P<u;P++){const O=p[P],L=y[P],z=S[P],G=b*w*4*P;for(let B=0;B<O.count;B++){const k=B*x;g===!0&&(i.fromBufferAttribute(O,B),A[G+k+0]=i.x,A[G+k+1]=i.y,A[G+k+2]=i.z,A[G+k+3]=0),_===!0&&(i.fromBufferAttribute(L,B),A[G+k+4]=i.x,A[G+k+5]=i.y,A[G+k+6]=i.z,A[G+k+7]=0),m===!0&&(i.fromBufferAttribute(z,B),A[G+k+8]=i.x,A[G+k+9]=i.y,A[G+k+10]=i.z,A[G+k+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new be(b,w)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function rv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const av={[Td]:"LINEAR_TONE_MAPPING",[Ed]:"REINHARD_TONE_MAPPING",[Ad]:"CINEON_TONE_MAPPING",[wd]:"ACES_FILMIC_TONE_MAPPING",[Cd]:"AGX_TONE_MAPPING",[Pd]:"NEUTRAL_TONE_MAPPING",[Rd]:"CUSTOM_TONE_MAPPING"};function ov(r,e,t,n,i){const s=new Tn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Tn(e,t,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),o=new en;o.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const l=new S_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new dn(o,l),h=new ta(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(y,S){s.setSize(y,S),a.setSize(y,S);for(let M=0;M<m.length;M++){const b=m[M];b.setSize&&b.setSize(y,S)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const S=s.width,M=s.height;for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(S,M)}},this.begin=function(y,S){if(f||y.toneMapping===ii&&m.length===0)return!1;if(_=S,S!==null){const M=S.width,b=S.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return p===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=ii,!0},this.hasRenderPass=function(){return p},this.end=function(y,S){y.toneMapping=g,f=!0;let M=s,b=a;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(y,b,M,S),A.needsSwap!==!1)){const R=M;M=b,b=R}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},We.getTransfer(u)===nt&&(l.defines.SRGB_TRANSFER="");const w=av[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(_),y.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const hf=new Lt,pc=new er(1,1),uf=new Gd,df=new Wm,ff=new Kd,Cu=[],Pu=[],Iu=new Float32Array(16),Du=new Float32Array(9),Lu=new Float32Array(4);function pr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Cu[i];if(s===void 0&&(s=new Float32Array(i),Cu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _o(r,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function lv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Lu.set(n),r.uniformMatrix2fv(this.addr,!1,Lu),Ut(t,n)}}function fv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Du.set(n),r.uniformMatrix3fv(this.addr,!1,Du),Ut(t,n)}}function pv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Iu.set(n),r.uniformMatrix4fv(this.addr,!1,Iu),Ut(t,n)}}function mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function vv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function Mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function bv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(pc.compareFunction=t.isReversedDepthBuffer()?Wc:Hc,s=pc):s=hf,t.setTexture2D(e||s,i)}function Tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||df,i)}function Ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ff,i)}function Av(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uf,i)}function wv(r){switch(r){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return _v;case 35668:case 35672:return gv;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Av}}function Rv(r,e){r.uniform1fv(this.addr,e)}function Cv(r,e){const t=pr(e,this.size,2);r.uniform2fv(this.addr,t)}function Pv(r,e){const t=pr(e,this.size,3);r.uniform3fv(this.addr,t)}function Iv(r,e){const t=pr(e,this.size,4);r.uniform4fv(this.addr,t)}function Dv(r,e){const t=pr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Lv(r,e){const t=pr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nv(r,e){const t=pr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Uv(r,e){r.uniform1iv(this.addr,e)}function Fv(r,e){r.uniform2iv(this.addr,e)}function Ov(r,e){r.uniform3iv(this.addr,e)}function Bv(r,e){r.uniform4iv(this.addr,e)}function kv(r,e){r.uniform1uiv(this.addr,e)}function zv(r,e){r.uniform2uiv(this.addr,e)}function Vv(r,e){r.uniform3uiv(this.addr,e)}function Gv(r,e){r.uniform4uiv(this.addr,e)}function Hv(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=pc:a=hf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Wv(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||df,s[a])}function Xv(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ff,s[a])}function Yv(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||uf,s[a])}function qv(r){switch(r){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Iv;case 35674:return Dv;case 35675:return Lv;case 35676:return Nv;case 5124:case 35670:return Uv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return Bv;case 5125:return kv;case 36294:return zv;case 36295:return Vv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return Yv}}class jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wv(t.type)}}class Kv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qv(t.type)}}class Zv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Nu(r,e){r.seq.push(e),r.map[e.id]=e}function $v(r,e,t){const n=r.name,i=n.length;for(tl.lastIndex=0;;){const s=tl.exec(n),a=tl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Nu(t,c===void 0?new jv(o,r,e):new Kv(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Zv(o),Nu(t,u)),t=u}}}class Ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$v(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Uu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Jv=37297;let Qv=0;function ey(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Fu=new Ue;function ty(r){We._getMatrix(Fu,We.workingColorSpace,r);const e=`mat3( ${Fu.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case Ka:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ou(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ey(r.getShaderSource(e),o)}else return s}function ny(r,e){const t=ty(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iy={[Td]:"Linear",[Ed]:"Reinhard",[Ad]:"Cineon",[wd]:"ACESFilmic",[Cd]:"AgX",[Pd]:"Neutral",[Rd]:"Custom"};function sy(r,e){const t=iy[e];return t===void 0?(Se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Da=new U;function ry(){We.getLuminanceCoefficients(Da);const r=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ay(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function oy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ly(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Cr(r){return r!==""}function Bu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ku(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(r){return r.replace(cy,uy)}const hy=new Map;function uy(r,e){let t=Oe[e];if(t===void 0){const n=hy.get(e);if(n!==void 0)t=Oe[n],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(r){return r.replace(dy,fy)}function fy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const py={[Fa]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function my(r){return py[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _y={[_s]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE_UV"};function gy(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_y[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xy={[Ks]:"ENVMAP_MODE_REFRACTION"};function vy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yy={[oo]:"ENVMAP_BLENDING_MULTIPLY",[sm]:"ENVMAP_BLENDING_MIX",[rm]:"ENVMAP_BLENDING_ADD"};function My(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yy[r.combine]||"ENVMAP_BLENDING_NONE"}function Sy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function by(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=my(t),c=gy(t),h=vy(t),u=My(t),d=Sy(t),f=ay(t),g=oy(s),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ii?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,ny("linearToOutputTexel",t.outputColorSpace),ry(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=mc(a),a=Bu(a,t),a=ku(a,t),o=mc(o),o=Bu(o,t),o=ku(o,t),a=zu(a),o=zu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+a,M=y+p+o,b=Uu(i,i.VERTEX_SHADER,S),w=Uu(i,i.FRAGMENT_SHADER,M);i.attachShader(_,b),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",L=i.getShaderInfoLog(b)||"",z=i.getShaderInfoLog(w)||"",G=O.trim(),B=L.trim(),k=z.trim();let q=!0,ne=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,w);else{const ee=Ou(i,b,"vertex"),oe=Ou(i,w,"fragment");Pe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+ee+`
`+oe)}else G!==""?Se("WebGLProgram: Program Info Log:",G):(B===""||k==="")&&(ne=!1);ne&&(P.diagnostics={runnable:q,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(b),i.deleteShader(w),R=new Ga(i,_),x=ly(i,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,Jv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let Ty=0;class Ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ay(e),t.set(e,n)),n}}class Ay{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}}function wy(r,e,t,n,i,s,a){const o=new qc,l=new Ey,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,P,O,L){const z=O.fog,G=L.geometry,B=x.isMeshStandardMaterial?O.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),q=k&&k.mapping===lo?k.image.height:null,ne=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Se("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=ee!==void 0?ee.length:0;let Ee=0;G.morphAttributes.position!==void 0&&(Ee=1),G.morphAttributes.normal!==void 0&&(Ee=2),G.morphAttributes.color!==void 0&&(Ee=3);let we,He,qe,j;if(ne){const et=Zn[ne];we=et.vertexShader,He=et.fragmentShader}else we=x.vertexShader,He=x.fragmentShader,l.update(x),qe=l.getVertexShaderID(x),j=l.getFragmentShaderID(x);const $=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,Ke=!!x.map,Ft=!!x.matcap,je=!!k,Qe=!!x.aoMap,at=!!x.lightMap,ke=!!x.bumpMap,wt=!!x.normalMap,I=!!x.displacementMap,Rt=!!x.emissiveMap,$e=!!x.metalnessMap,ht=!!x.roughnessMap,ve=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,N=x.iridescence>0,Y=x.sheen>0,Z=x.transmission>0,X=ve&&!!x.anisotropyMap,Me=C&&!!x.clearcoatMap,se=C&&!!x.clearcoatNormalMap,xe=C&&!!x.clearcoatRoughnessMap,De=N&&!!x.iridescenceMap,Q=N&&!!x.iridescenceThicknessMap,ae=Y&&!!x.sheenColorMap,_e=Y&&!!x.sheenRoughnessMap,ye=!!x.specularMap,re=!!x.specularColorMap,ze=!!x.specularIntensityMap,D=Z&&!!x.transmissionMap,ue=Z&&!!x.thicknessMap,te=!!x.gradientMap,de=!!x.alphaMap,J=x.alphaTest>0,K=!!x.alphaHash,ie=!!x.extensions;let Le=ii;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Le=r.toneMapping);const ut={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:we,fragmentShader:He,defines:x.defines,customVertexShaderID:qe,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Vt,alphaToCoverage:!!x.alphaToCoverage,map:Ke,matcap:Ft,envMap:je,envMapMode:je&&k.mapping,envMapCubeUVHeight:q,aoMap:Qe,lightMap:at,bumpMap:ke,normalMap:wt,displacementMap:I,emissiveMap:Rt,normalMapObjectSpace:wt&&x.normalMapType===fm,normalMapTangentSpace:wt&&x.normalMapType===hr,metalnessMap:$e,roughnessMap:ht,anisotropy:ve,anisotropyMap:X,clearcoat:C,clearcoatMap:Me,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:v,iridescence:N,iridescenceMap:De,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:ae,sheenRoughnessMap:_e,specularMap:ye,specularColorMap:re,specularIntensityMap:ze,transmission:Z,transmissionMap:D,thicknessMap:ue,gradientMap:te,opaque:x.transparent===!1&&x.blending===Gs&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:K,combine:x.combine,mapUv:Ke&&_(x.map.channel),aoMapUv:Qe&&_(x.aoMap.channel),lightMapUv:at&&_(x.lightMap.channel),bumpMapUv:ke&&_(x.bumpMap.channel),normalMapUv:wt&&_(x.normalMap.channel),displacementMapUv:I&&_(x.displacementMap.channel),emissiveMapUv:Rt&&_(x.emissiveMap.channel),metalnessMapUv:$e&&_(x.metalnessMap.channel),roughnessMapUv:ht&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:Me&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(x.sheenRoughnessMap.channel),specularMapUv:ye&&_(x.specularMap.channel),specularColorMapUv:re&&_(x.specularColorMap.channel),specularIntensityMapUv:ze&&_(x.specularIntensityMap.channel),transmissionMapUv:D&&_(x.transmissionMap.channel),thicknessMapUv:ue&&_(x.thicknessMap.channel),alphaMapUv:de&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(wt||ve),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(Ke||de),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ke&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:Rt&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===$n,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(T,x),S(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const T=g[x.type];let P;if(T){const O=Zn[T];P=qd.clone(O.uniforms)}else P=x.uniforms;return P}function b(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new by(r,T,x,s),h.push(P),u.set(T,P)),P}function w(x){if(--x.usedTimes===0){const T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:R}}function Ry(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Cy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Cy),n.length>1&&n.sort(d||Gu),i.length>1&&i.sort(d||Gu)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Py(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Hu,r.set(n,[a])):i>=s.length?(a=new Hu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Iy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ae};break;case"SpotLight":t={position:new U,direction:new U,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function Dy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ly=0;function Ny(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Uy(r){const e=new Iy,t=Dy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new Fe,a=new Fe;function o(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,S=0,M=0,b=0,w=0,A=0;c.sort(Ny);for(let x=0,T=c.length;x<T;x++){const P=c[x],O=P.color,L=P.intensity,z=P.distance;let G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===$s?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*L,u+=O.g*L,d+=O.b*L;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],L);A++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,q=t.get(P);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=B,f++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(O).multiplyScalar(L),B.distance=z,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[_]=B;const k=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,k.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=k.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=G,M++}_++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(O).multiplyScalar(L),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const k=P.shadow,q=t.get(P);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(L),B.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==M||R.numSpotMaps!==b||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=M,R.numSpotMaps=b,R.numLightProbes=A,n.version=Ly++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(S.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Wu(r){const e=new Uy(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Fy(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Wu(r),e.set(i,[o])):s>=a.length?(o=new Wu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,By=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ky=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],zy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Xu=new Fe,Tr=new U,nl=new U;function Vy(r,e,t){let n=new Kc;const i=new be,s=new be,a=new ft,o=new E_,l=new A_,c={},h=t.maxTextureSize,u={[yi]:an,[an]:yi,[$n]:$n},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Oy,fragmentShader:By}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let p=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===kp&&(Se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Fa);const x=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(ni),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=p!==this.type;L&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(G=>G.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,G=w.length;z<G;z++){const B=w[z],k=B.shadow;if(k===void 0){Se("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const q=k.getFrameExtents();if(i.multiply(q),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,k.mapSize.y=s.y)),k.map===null||L===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===wr){if(B.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Tn(i.x,i.y,{format:$s,type:Xt,minFilter:pt,magFilter:pt,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new er(i.x,i.y,Jt),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=Mi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Mt,k.map.depthTexture.magFilter=Mt}else{B.isPointLight?(k.map=new Zd(i.x),k.map.depthTexture=new M_(i.x,si)):(k.map=new Tn(i.x,i.y),k.map.depthTexture=new er(i.x,i.y,si)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=Mi;const ee=r.state.buffers.depth.getReversed();this.type===Fa?(k.map.depthTexture.compareFunction=ee?Wc:Hc,k.map.depthTexture.minFilter=pt,k.map.depthTexture.magFilter=pt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Mt,k.map.depthTexture.magFilter=Mt)}k.camera.updateProjectionMatrix()}const ne=k.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<ne;ee++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,ee),r.clear();else{ee===0&&(r.setRenderTarget(k.map),r.clear());const oe=k.getViewport(ee);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),O.viewport(a)}if(B.isPointLight){const oe=k.camera,Ee=k.matrix,we=B.distance||oe.far;we!==oe.far&&(oe.far=we,oe.updateProjectionMatrix()),Tr.setFromMatrixPosition(B.matrixWorld),oe.position.copy(Tr),nl.copy(oe.position),nl.add(ky[ee]),oe.up.copy(zy[ee]),oe.lookAt(nl),oe.updateMatrixWorld(),Ee.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Xu.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Xu,oe.coordinateSystem,oe.reversedDepth)}else k.updateMatrices(B);n=k.getFrustum(),M(A,R,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===wr&&y(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,T,P)};function y(w,A){const R=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Tn(i.x,i.y,{format:$s,type:Xt})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,R,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,R,f,_,null)}function S(w,A,R,x){let T=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=R.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=T.uuid,L=A.uuid;let z=c[O];z===void 0&&(z={},c[O]=z);let G=z[L];G===void 0&&(G=T.clone(),z[L]=G,A.addEventListener("dispose",b)),T=G}if(T.visible=A.visible,T.wireframe=A.wireframe,x===wr?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const O=r.properties.get(T);O.light=R}return T}function M(w,A,R,x,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===wr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const L=e.update(w),z=w.material;if(Array.isArray(z)){const G=L.groups;for(let B=0,k=G.length;B<k;B++){const q=G[B],ne=z[q.materialIndex];if(ne&&ne.visible){const ee=S(w,ne,x,T);w.onBeforeShadow(r,w,A,R,L,ee,q),r.renderBufferDirect(R,null,L,ee,w,q),w.onAfterShadow(r,w,A,R,L,ee,q)}}}else if(z.visible){const G=S(w,z,x,T);w.onBeforeShadow(r,w,A,R,L,G,null),r.renderBufferDirect(R,null,L,G,w,null),w.onAfterShadow(r,w,A,R,L,G,null)}}const O=w.children;for(let L=0,z=O.length;L<z;L++)M(O[L],A,R,x,T)}function b(w){w.target.removeEventListener("dispose",b);for(const R in c){const x=c[R],T=w.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}const Gy={[Ml]:Sl,[bl]:Al,[Tl]:wl,[js]:El,[Sl]:Ml,[Al]:bl,[wl]:Tl,[El]:js};function Hy(r,e){function t(){let D=!1;const ue=new ft;let te=null;const de=new ft(0,0,0,0);return{setMask:function(J){te!==J&&!D&&(r.colorMask(J,J,J,J),te=J)},setLocked:function(J){D=J},setClear:function(J,K,ie,Le,ut){ut===!0&&(J*=Le,K*=Le,ie*=Le),ue.set(J,K,ie,Le),de.equals(ue)===!1&&(r.clearColor(J,K,ie,Le),de.copy(ue))},reset:function(){D=!1,te=null,de.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,te=null,de=null,J=null;return{setReversed:function(K){if(ue!==K){const ie=e.get("EXT_clip_control");K?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),ue=K;const Le=J;J=null,this.setClear(Le)}},getReversed:function(){return ue},setTest:function(K){K?$(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(K){te!==K&&!D&&(r.depthMask(K),te=K)},setFunc:function(K){if(ue&&(K=Gy[K]),de!==K){switch(K){case Ml:r.depthFunc(r.NEVER);break;case Sl:r.depthFunc(r.ALWAYS);break;case bl:r.depthFunc(r.LESS);break;case js:r.depthFunc(r.LEQUAL);break;case Tl:r.depthFunc(r.EQUAL);break;case El:r.depthFunc(r.GEQUAL);break;case Al:r.depthFunc(r.GREATER);break;case wl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=K}},setLocked:function(K){D=K},setClear:function(K){J!==K&&(ue&&(K=1-K),r.clearDepth(K),J=K)},reset:function(){D=!1,te=null,de=null,J=null,ue=!1}}}function i(){let D=!1,ue=null,te=null,de=null,J=null,K=null,ie=null,Le=null,ut=null;return{setTest:function(et){D||(et?$(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(et){ue!==et&&!D&&(r.stencilMask(et),ue=et)},setFunc:function(et,Yn,li){(te!==et||de!==Yn||J!==li)&&(r.stencilFunc(et,Yn,li),te=et,de=Yn,J=li)},setOp:function(et,Yn,li){(K!==et||ie!==Yn||Le!==li)&&(r.stencilOp(et,Yn,li),K=et,ie=Yn,Le=li)},setLocked:function(et){D=et},setClear:function(et){ut!==et&&(r.clearStencil(et),ut=et)},reset:function(){D=!1,ue=null,te=null,de=null,J=null,K=null,ie=null,Le=null,ut=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,M=null,b=null,w=null,A=new Ae(0,0,0),R=0,x=!1,T=null,P=null,O=null,L=null,z=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=k>=2);let ne=null,ee={};const oe=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),we=new ft().fromArray(oe),He=new ft().fromArray(Ee);function qe(D,ue,te,de){const J=new Uint8Array(4),K=r.createTexture();r.bindTexture(D,K),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<te;ie++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,J):r.texImage2D(ue+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,J);return K}const j={};j[r.TEXTURE_2D]=qe(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(r.DEPTH_TEST),a.setFunc(js),ke(!1),wt(Ph),$(r.CULL_FACE),Qe(ni);function $(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function pe(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ne(D,ue){return u[D]!==ue?(r.bindFramebuffer(D,ue),u[D]=ue,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ue),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function ge(D,ue){let te=f,de=!1;if(D){te=d.get(ue),te===void 0&&(te=[],d.set(ue,te));const J=D.textures;if(te.length!==J.length||te[0]!==r.COLOR_ATTACHMENT0){for(let K=0,ie=J.length;K<ie;K++)te[K]=r.COLOR_ATTACHMENT0+K;te.length=J.length,de=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,de=!0);de&&r.drawBuffers(te)}function Ke(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const Ft={[as]:r.FUNC_ADD,[Vp]:r.FUNC_SUBTRACT,[Gp]:r.FUNC_REVERSE_SUBTRACT};Ft[Hp]=r.MIN,Ft[Wp]=r.MAX;const je={[Xp]:r.ZERO,[Yp]:r.ONE,[qp]:r.SRC_COLOR,[vl]:r.SRC_ALPHA,[Qp]:r.SRC_ALPHA_SATURATE,[$p]:r.DST_COLOR,[Kp]:r.DST_ALPHA,[jp]:r.ONE_MINUS_SRC_COLOR,[yl]:r.ONE_MINUS_SRC_ALPHA,[Jp]:r.ONE_MINUS_DST_COLOR,[Zp]:r.ONE_MINUS_DST_ALPHA,[em]:r.CONSTANT_COLOR,[tm]:r.ONE_MINUS_CONSTANT_COLOR,[nm]:r.CONSTANT_ALPHA,[im]:r.ONE_MINUS_CONSTANT_ALPHA};function Qe(D,ue,te,de,J,K,ie,Le,ut,et){if(D===ni){_===!0&&(pe(r.BLEND),_=!1);return}if(_===!1&&($(r.BLEND),_=!0),D!==zp){if(D!==m||et!==x){if((p!==as||M!==as)&&(r.blendEquation(r.FUNC_ADD),p=as,M=as),et)switch(D){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xl:r.blendFunc(r.ONE,r.ONE);break;case Ih:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pe("WebGLState: Invalid blending: ",D);break}else switch(D){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ih:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",D);break}y=null,S=null,b=null,w=null,A.set(0,0,0),R=0,m=D,x=et}return}J=J||ue,K=K||te,ie=ie||de,(ue!==p||J!==M)&&(r.blendEquationSeparate(Ft[ue],Ft[J]),p=ue,M=J),(te!==y||de!==S||K!==b||ie!==w)&&(r.blendFuncSeparate(je[te],je[de],je[K],je[ie]),y=te,S=de,b=K,w=ie),(Le.equals(A)===!1||ut!==R)&&(r.blendColor(Le.r,Le.g,Le.b,ut),A.copy(Le),R=ut),m=D,x=!1}function at(D,ue){D.side===$n?pe(r.CULL_FACE):$(r.CULL_FACE);let te=D.side===an;ue&&(te=!te),ke(te),D.blending===Gs&&D.transparent===!1?Qe(ni):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){T!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),T=D)}function wt(D){D!==Op?($(r.CULL_FACE),D!==P&&(D===Ph?r.cullFace(r.BACK):D===Bp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),P=D}function I(D){D!==O&&(B&&r.lineWidth(D),O=D)}function Rt(D,ue,te){D?($(r.POLYGON_OFFSET_FILL),(L!==ue||z!==te)&&(r.polygonOffset(ue,te),L=ue,z=te)):pe(r.POLYGON_OFFSET_FILL)}function $e(D){D?$(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function ht(D){D===void 0&&(D=r.TEXTURE0+G-1),ne!==D&&(r.activeTexture(D),ne=D)}function ve(D,ue,te){te===void 0&&(ne===null?te=r.TEXTURE0+G-1:te=ne);let de=ee[te];de===void 0&&(de={type:void 0,texture:void 0},ee[te]=de),(de.type!==D||de.texture!==ue)&&(ne!==te&&(r.activeTexture(te),ne=te),r.bindTexture(D,ue||j[D]),de.type=D,de.texture=ue)}function C(){const D=ee[ne];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Y(){try{r.texSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Z(){try{r.texSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function se(){try{r.texStorage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function xe(){try{r.texStorage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function De(){try{r.texImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Q(){try{r.texImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function ae(D){we.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function _e(D){He.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function ye(D,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let de=te.get(D);de===void 0&&(de=r.getUniformBlockIndex(ue,D.name),te.set(D,de))}function re(D,ue){const de=c.get(ue).get(D);l.get(ue)!==de&&(r.uniformBlockBinding(ue,de,D.__bindingPointIndex),l.set(ue,de))}function ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,ee={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,M=null,b=null,w=null,A=new Ae(0,0,0),R=0,x=!1,T=null,P=null,O=null,L=null,z=null,we.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:pe,bindFramebuffer:Ne,drawBuffers:ge,useProgram:Ke,setBlending:Qe,setMaterial:at,setFlipSided:ke,setCullFace:wt,setLineWidth:I,setPolygonOffset:Rt,setScissorTest:$e,activeTexture:ht,bindTexture:ve,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:De,texImage3D:Q,updateUBOMapping:ye,uniformBlockBinding:re,texStorage2D:se,texStorage3D:xe,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Me,scissor:ae,viewport:_e,reset:ze}}function Wy(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return f?new OffscreenCanvas(C,v):Hr("canvas")}function _(C,v,N){let Y=1;const Z=ve(C);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Y*Z.width),Me=Math.floor(Y*Z.height);u===void 0&&(u=g(X,Me));const se=v?g(X,Me):u;return se.width=X,se.height=Me,se.getContext("2d").drawImage(C,0,0,X,Me),Se("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Me+")."),se}else return"data"in C&&Se("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,v,N,Y,Z=!1){if(C!==null){if(r[C]!==void 0)return r[C];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===r.RED&&(N===r.FLOAT&&(X=r.R32F),N===r.HALF_FLOAT&&(X=r.R16F),N===r.UNSIGNED_BYTE&&(X=r.R8)),v===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.R8UI),N===r.UNSIGNED_SHORT&&(X=r.R16UI),N===r.UNSIGNED_INT&&(X=r.R32UI),N===r.BYTE&&(X=r.R8I),N===r.SHORT&&(X=r.R16I),N===r.INT&&(X=r.R32I)),v===r.RG&&(N===r.FLOAT&&(X=r.RG32F),N===r.HALF_FLOAT&&(X=r.RG16F),N===r.UNSIGNED_BYTE&&(X=r.RG8)),v===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RG8UI),N===r.UNSIGNED_SHORT&&(X=r.RG16UI),N===r.UNSIGNED_INT&&(X=r.RG32UI),N===r.BYTE&&(X=r.RG8I),N===r.SHORT&&(X=r.RG16I),N===r.INT&&(X=r.RG32I)),v===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGB8UI),N===r.UNSIGNED_SHORT&&(X=r.RGB16UI),N===r.UNSIGNED_INT&&(X=r.RGB32UI),N===r.BYTE&&(X=r.RGB8I),N===r.SHORT&&(X=r.RGB16I),N===r.INT&&(X=r.RGB32I)),v===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),N===r.UNSIGNED_INT&&(X=r.RGBA32UI),N===r.BYTE&&(X=r.RGBA8I),N===r.SHORT&&(X=r.RGBA16I),N===r.INT&&(X=r.RGBA32I)),v===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),v===r.RGBA){const Me=Z?Ka:We.getTransfer(Y);N===r.FLOAT&&(X=r.RGBA32F),N===r.HALF_FLOAT&&(X=r.RGBA16F),N===r.UNSIGNED_BYTE&&(X=Me===nt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(C,v){let N;return C?v===null||v===si||v===zr?N=r.DEPTH24_STENCIL8:v===Jt?N=r.DEPTH32F_STENCIL8:v===kr&&(N=r.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===si||v===zr?N=r.DEPTH_COMPONENT24:v===Jt?N=r.DEPTH_COMPONENT32F:v===kr&&(N=r.DEPTH_COMPONENT16),N}function b(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mt&&C.minFilter!==pt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){const v=C.target;v.removeEventListener("dispose",w),R(v),v.isVideoTexture&&h.delete(v)}function A(C){const v=C.target;v.removeEventListener("dispose",A),T(v)}function R(C){const v=n.get(C);if(v.__webglInit===void 0)return;const N=C.source,Y=d.get(N);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(C),Object.keys(Y).length===0&&d.delete(N)}n.remove(C)}function x(C){const v=n.get(C);r.deleteTexture(v.__webglTexture);const N=C.source,Y=d.get(N);delete Y[v.__cacheKey],a.memory.textures--}function T(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)r.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else r.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)r.deleteFramebuffer(v.__webglFramebuffer[Y]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=C.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const X=n.get(N[Y]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(C)}let P=0;function O(){P=0}function L(){const C=P;return C>=i.maxTextures&&Se("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function z(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function G(C,v){const N=n.get(C);if(C.isVideoTexture&&$e(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const Y=C.image;if(Y===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,C,v);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+v)}function B(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){j(N,C,v);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+v)}function k(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){j(N,C,v);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+v)}function q(C,v){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){$(N,C,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+v)}const ne={[Zs]:r.REPEAT,[Nn]:r.CLAMP_TO_EDGE,[qa]:r.MIRRORED_REPEAT},ee={[Mt]:r.NEAREST,[Dd]:r.NEAREST_MIPMAP_NEAREST,[Rr]:r.NEAREST_MIPMAP_LINEAR,[pt]:r.LINEAR,[Oa]:r.LINEAR_MIPMAP_NEAREST,[Qn]:r.LINEAR_MIPMAP_LINEAR},oe={[pm]:r.NEVER,[vm]:r.ALWAYS,[mm]:r.LESS,[Hc]:r.LEQUAL,[_m]:r.EQUAL,[Wc]:r.GEQUAL,[gm]:r.GREATER,[xm]:r.NOTEQUAL};function Ee(C,v){if(v.type===Jt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===pt||v.magFilter===Oa||v.magFilter===Rr||v.magFilter===Qn||v.minFilter===pt||v.minFilter===Oa||v.minFilter===Rr||v.minFilter===Qn)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ne[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ne[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ne[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ee[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ee[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mt||v.minFilter!==Rr&&v.minFilter!==Qn||v.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function we(C,v){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));const Y=v.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const X=z(v);if(X!==C.__cacheKey){Z[X]===void 0&&(Z[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[X].usedTimes++;const Me=Z[C.__cacheKey];Me!==void 0&&(Z[C.__cacheKey].usedTimes--,Me.usedTimes===0&&x(v)),C.__cacheKey=X,C.__webglTexture=Z[X].texture}return N}function He(C,v,N){return Math.floor(Math.floor(C/N)/v)}function qe(C,v,N,Y){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,N,Y,v.data);else{X.sort((Q,ae)=>Q.start-ae.start);let Me=0;for(let Q=1;Q<X.length;Q++){const ae=X[Me],_e=X[Q],ye=ae.start+ae.count,re=He(_e.start,v.width,4),ze=He(ae.start,v.width,4);_e.start<=ye+1&&re===ze&&He(_e.start+_e.count-1,v.width,4)===re?ae.count=Math.max(ae.count,_e.start+_e.count-ae.start):(++Me,X[Me]=_e)}X.length=Me+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),xe=r.getParameter(r.UNPACK_SKIP_PIXELS),De=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Q=0,ae=X.length;Q<ae;Q++){const _e=X[Q],ye=Math.floor(_e.start/4),re=Math.ceil(_e.count/4),ze=ye%v.width,D=Math.floor(ye/v.width),ue=re,te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,ze,D,ue,te,N,Y,v.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function j(C,v,N){let Y=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=r.TEXTURE_3D);const Z=we(C,v),X=v.source;t.bindTexture(Y,C.__webglTexture,r.TEXTURE0+N);const Me=n.get(X);if(X.version!==Me.__version||Z===!0){t.activeTexture(r.TEXTURE0+N);const se=We.getPrimaries(We.workingColorSpace),xe=v.colorSpace===Li?null:We.getPrimaries(v.colorSpace),De=v.colorSpace===Li||se===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Q=_(v.image,!1,i.maxTextureSize);Q=ht(v,Q);const ae=s.convert(v.format,v.colorSpace),_e=s.convert(v.type);let ye=S(v.internalFormat,ae,_e,v.colorSpace,v.isVideoTexture);Ee(Y,v);let re;const ze=v.mipmaps,D=v.isVideoTexture!==!0,ue=Me.__version===void 0||Z===!0,te=X.dataReady,de=b(v,Q);if(v.isDepthTexture)ye=M(v.format===ls,v.type),ue&&(D?t.texStorage2D(r.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,ye,Q.width,Q.height,0,ae,_e,null));else if(v.isDataTexture)if(ze.length>0){D&&ue&&t.texStorage2D(r.TEXTURE_2D,de,ye,ze[0].width,ze[0].height);for(let J=0,K=ze.length;J<K;J++)re=ze[J],D?te&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,re.width,re.height,ae,_e,re.data):t.texImage2D(r.TEXTURE_2D,J,ye,re.width,re.height,0,ae,_e,re.data);v.generateMipmaps=!1}else D?(ue&&t.texStorage2D(r.TEXTURE_2D,de,ye,Q.width,Q.height),te&&qe(v,Q,ae,_e)):t.texImage2D(r.TEXTURE_2D,0,ye,Q.width,Q.height,0,ae,_e,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,ye,ze[0].width,ze[0].height,Q.depth);for(let J=0,K=ze.length;J<K;J++)if(re=ze[J],v.format!==Un)if(ae!==null)if(D){if(te)if(v.layerUpdates.size>0){const ie=Su(re.width,re.height,v.format,v.type);for(const Le of v.layerUpdates){const ut=re.data.subarray(Le*ie/re.data.BYTES_PER_ELEMENT,(Le+1)*ie/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,Le,re.width,re.height,1,ae,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Q.depth,ae,re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,ye,re.width,re.height,Q.depth,0,re.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,Q.depth,ae,_e,re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,ye,re.width,re.height,Q.depth,0,ae,_e,re.data)}else{D&&ue&&t.texStorage2D(r.TEXTURE_2D,de,ye,ze[0].width,ze[0].height);for(let J=0,K=ze.length;J<K;J++)re=ze[J],v.format!==Un?ae!==null?D?te&&t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,re.width,re.height,ae,re.data):t.compressedTexImage2D(r.TEXTURE_2D,J,ye,re.width,re.height,0,re.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,re.width,re.height,ae,_e,re.data):t.texImage2D(r.TEXTURE_2D,J,ye,re.width,re.height,0,ae,_e,re.data)}else if(v.isDataArrayTexture)if(D){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,ye,Q.width,Q.height,Q.depth),te)if(v.layerUpdates.size>0){const J=Su(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const ie=Q.data.subarray(K*J/Q.data.BYTES_PER_ELEMENT,(K+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ae,_e,ie)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,_e,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,ae,_e,Q.data);else if(v.isData3DTexture)D?(ue&&t.texStorage3D(r.TEXTURE_3D,de,ye,Q.width,Q.height,Q.depth),te&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,_e,Q.data)):t.texImage3D(r.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,ae,_e,Q.data);else if(v.isFramebufferTexture){if(ue)if(D)t.texStorage2D(r.TEXTURE_2D,de,ye,Q.width,Q.height);else{let J=Q.width,K=Q.height;for(let ie=0;ie<de;ie++)t.texImage2D(r.TEXTURE_2D,ie,ye,J,K,0,ae,_e,null),J>>=1,K>>=1}}else if(ze.length>0){if(D&&ue){const J=ve(ze[0]);t.texStorage2D(r.TEXTURE_2D,de,ye,J.width,J.height)}for(let J=0,K=ze.length;J<K;J++)re=ze[J],D?te&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,ae,_e,re):t.texImage2D(r.TEXTURE_2D,J,ye,ae,_e,re);v.generateMipmaps=!1}else if(D){if(ue){const J=ve(Q);t.texStorage2D(r.TEXTURE_2D,de,ye,J.width,J.height)}te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,_e,Q)}else t.texImage2D(r.TEXTURE_2D,0,ye,ae,_e,Q);m(v)&&p(Y),Me.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function $(C,v,N){if(v.image.length!==6)return;const Y=we(C,v),Z=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){t.activeTexture(r.TEXTURE0+N);const Me=We.getPrimaries(We.workingColorSpace),se=v.colorSpace===Li?null:We.getPrimaries(v.colorSpace),xe=v.colorSpace===Li||Me===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let K=0;K<6;K++)!De&&!Q?ae[K]=_(v.image[K],!0,i.maxCubemapSize):ae[K]=Q?v.image[K].image:v.image[K],ae[K]=ht(v,ae[K]);const _e=ae[0],ye=s.convert(v.format,v.colorSpace),re=s.convert(v.type),ze=S(v.internalFormat,ye,re,v.colorSpace),D=v.isVideoTexture!==!0,ue=X.__version===void 0||Y===!0,te=Z.dataReady;let de=b(v,_e);Ee(r.TEXTURE_CUBE_MAP,v);let J;if(De){D&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,ze,_e.width,_e.height);for(let K=0;K<6;K++){J=ae[K].mipmaps;for(let ie=0;ie<J.length;ie++){const Le=J[ie];v.format!==Un?ye!==null?D?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Le.width,Le.height,ye,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,ze,Le.width,Le.height,0,Le.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Le.width,Le.height,ye,re,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,ze,Le.width,Le.height,0,ye,re,Le.data)}}}else{if(J=v.mipmaps,D&&ue){J.length>0&&de++;const K=ve(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,ze,K.width,K.height)}for(let K=0;K<6;K++)if(Q){D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ae[K].width,ae[K].height,ye,re,ae[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,ae[K].width,ae[K].height,0,ye,re,ae[K].data);for(let ie=0;ie<J.length;ie++){const ut=J[ie].image[K].image;D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ut.width,ut.height,ye,re,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,ze,ut.width,ut.height,0,ye,re,ut.data)}}else{D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,re,ae[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,ye,re,ae[K]);for(let ie=0;ie<J.length;ie++){const Le=J[ie];D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ye,re,Le.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,ze,ye,re,Le.image[K])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function pe(C,v,N,Y,Z,X){const Me=s.convert(N.format,N.colorSpace),se=s.convert(N.type),xe=S(N.internalFormat,Me,se,N.colorSpace),De=n.get(v),Q=n.get(N);if(Q.__renderTarget=v,!De.__hasExternalTextures){const ae=Math.max(1,v.width>>X),_e=Math.max(1,v.height>>X);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,xe,ae,_e,v.depth,0,Me,se,null):t.texImage2D(Z,X,xe,ae,_e,0,Me,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Rt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,I(v)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Z,Q.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(C,v,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=M(v.stencilBuffer,Z),Me=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Rt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(v),X,v.width,v.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(v),X,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,X,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,C)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],Me=s.convert(X.format,X.colorSpace),se=s.convert(X.type),xe=S(X.internalFormat,Me,se,X.colorSpace);Rt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(v),xe,v.width,v.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(v),xe,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,xe,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(C,v,N){const Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,v.depthTexture);const De=s.convert(v.depthTexture.format),Q=s.convert(v.depthTexture.type);let ae;v.depthTexture.format===Mi?ae=r.DEPTH_COMPONENT24:v.depthTexture.format===ls&&(ae=r.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ae,v.width,v.height,0,De,Q,null)}}else G(v.depthTexture,0);const X=Z.__webglTexture,Me=I(v),se=Y?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,xe=v.depthTexture.format===ls?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Mi)Rt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,se,X,0,Me):r.framebufferTexture2D(r.FRAMEBUFFER,xe,se,X,0);else if(v.depthTexture.format===ls)Rt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,se,X,0,Me):r.framebufferTexture2D(r.FRAMEBUFFER,xe,se,X,0);else throw new Error("Unknown depthTexture format")}function Ke(C){const v=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)ge(v.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?ge(v.__webglFramebuffer[0],C,0):ge(v.__webglFramebuffer,C,0)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=r.createRenderbuffer(),Ne(v.__webglDepthbuffer[Y],C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,X)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ne(v.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(C,v,N){const Y=n.get(C);v!==void 0&&pe(Y.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Ke(C)}function je(C){const v=C.texture,N=n.get(C),Y=n.get(v);C.addEventListener("dispose",A);const Z=C.textures,X=C.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=v.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let xe=0;xe<v.mipmaps.length;xe++)N.__webglFramebuffer[se][xe]=r.createFramebuffer()}else N.__webglFramebuffer[se]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)N.__webglFramebuffer[se]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(Me)for(let se=0,xe=Z.length;se<xe;se++){const De=n.get(Z[se]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Rt(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const xe=Z[se];N.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[se]);const De=s.convert(xe.format,xe.colorSpace),Q=s.convert(xe.type),ae=S(xe.internalFormat,De,Q,xe.colorSpace,C.isXRRenderTarget===!0),_e=I(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,ae,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,N.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(N.__webglFramebuffer[se][xe],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe);else pe(N.__webglFramebuffer[se],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let se=0,xe=Z.length;se<xe;se++){const De=Z[se],Q=n.get(De);let ae=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Ee(ae,De),pe(N.__webglFramebuffer,C,De,r.COLOR_ATTACHMENT0+se,ae,0),m(De)&&p(ae)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Ee(se,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(N.__webglFramebuffer[xe],C,v,r.COLOR_ATTACHMENT0,se,xe);else pe(N.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}C.depthBuffer&&Ke(C)}function Qe(C){const v=C.textures;for(let N=0,Y=v.length;N<Y;N++){const Z=v[N];if(m(Z)){const X=y(C),Me=n.get(Z).__webglTexture;t.bindTexture(X,Me),p(X),t.unbindTexture()}}}const at=[],ke=[];function wt(C){if(C.samples>0){if(Rt(C)===!1){const v=C.textures,N=C.width,Y=C.height;let Z=r.COLOR_BUFFER_BIT;const X=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(C),se=v.length>1;if(se)for(let De=0;De<v.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const xe=C.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let De=0;De<v.length;De++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const Q=n.get(v[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,r.NEAREST),l===!0&&(at.length=0,ke.length=0,at.push(r.COLOR_ATTACHMENT0+De),C.depthBuffer&&C.resolveDepthBuffer===!1&&(at.push(X),ke.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ke)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let De=0;De<v.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const Q=n.get(v[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function Rt(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function $e(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ht(C,v){const N=C.colorSpace,Y=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Vt&&N!==Li&&(We.getTransfer(N)===nt?(Y!==Un||Z!==vn)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",N)),v}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=Ft,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xy(r,e){function t(n,i=Li){let s;const a=We.getTransfer(i);if(n===vn)return r.UNSIGNED_BYTE;if(n===Fc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ld)return r.BYTE;if(n===Nd)return r.SHORT;if(n===kr)return r.UNSIGNED_SHORT;if(n===Uc)return r.INT;if(n===si)return r.UNSIGNED_INT;if(n===Jt)return r.FLOAT;if(n===Xt)return r.HALF_FLOAT;if(n===Od)return r.ALPHA;if(n===Bd)return r.RGB;if(n===Un)return r.RGBA;if(n===Mi)return r.DEPTH_COMPONENT;if(n===ls)return r.DEPTH_STENCIL;if(n===Bc)return r.RED;if(n===kc)return r.RED_INTEGER;if(n===$s)return r.RG;if(n===zc)return r.RG_INTEGER;if(n===Vc)return r.RGBA_INTEGER;if(n===Ba||n===ka||n===za||n===Va)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Pl||n===Il||n===Dl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===kl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ll||n===Nl)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fl)return s.COMPRESSED_R11_EAC;if(n===Ol)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Bl)return s.COMPRESSED_RG11_EAC;if(n===kl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Yl||n===ql||n===jl||n===Kl||n===Zl||n===$l||n===Jl||n===Ql)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ec||n===tc||n===nc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ec)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===sc||n===rc||n===ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ic)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:Yy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new fo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ky extends Xi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new jy,p={},y=t.getContextAttributes();let S=null,M=null;const b=[],w=[],A=new be;let R=null;const x=new Zt;x.viewport=new ft;const T=new Zt;T.viewport=new ft;const P=[x,T],O=new W_;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=b[j];return $===void 0&&($=new Wo,b[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=b[j];return $===void 0&&($=new Wo,b[j]=$),$.getGripSpace()},this.getHand=function(j){let $=b[j];return $===void 0&&($=new Wo,b[j]=$),$.getHandSpace()};function G(j){const $=w.indexOf(j.inputSource);if($===-1)return;const pe=b[$];pe!==void 0&&(pe.update(j.inputSource,j.frame,c||a),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",k);for(let j=0;j<b.length;j++){const $=w[j];$!==null&&(w[j]=null,b[j].disconnect($))}L=null,z=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(S),f=null,d=null,u=null,i=null,M=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",B),i.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ne=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=y.stencil?ls:Mi,Ne=y.stencil?zr:si);const Ke={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Tn(d.textureWidth,d.textureHeight,{format:Un,type:vn,depthTexture:new er(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Tn(f.framebufferWidth,f.framebufferHeight,{format:Un,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(j){for(let $=0;$<j.removed.length;$++){const pe=j.removed[$],Ne=w.indexOf(pe);Ne>=0&&(w[Ne]=null,b[Ne].disconnect(pe))}for(let $=0;$<j.added.length;$++){const pe=j.added[$];let Ne=w.indexOf(pe);if(Ne===-1){for(let Ke=0;Ke<b.length;Ke++)if(Ke>=w.length){w.push(pe),Ne=Ke;break}else if(w[Ke]===null){w[Ke]=pe,Ne=Ke;break}if(Ne===-1)break}const ge=b[Ne];ge&&ge.connect(pe)}}const q=new U,ne=new U;function ee(j,$,pe){q.setFromMatrixPosition($.matrixWorld),ne.setFromMatrixPosition(pe.matrixWorld);const Ne=q.distanceTo(ne),ge=$.projectionMatrix.elements,Ke=pe.projectionMatrix.elements,Ft=ge[14]/(ge[10]-1),je=ge[14]/(ge[10]+1),Qe=(ge[9]+1)/ge[5],at=(ge[9]-1)/ge[5],ke=(ge[8]-1)/ge[0],wt=(Ke[8]+1)/Ke[0],I=Ft*ke,Rt=Ft*wt,$e=Ne/(-ke+wt),ht=$e*-ke;if($.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ht),j.translateZ($e),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ge[10]===-1)j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ve=Ft+$e,C=je+$e,v=I-ht,N=Rt+(Ne-ht),Y=Qe*je/C*ve,Z=at*je/C*ve;j.projectionMatrix.makePerspective(v,N,Y,Z,ve,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function oe(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let $=j.near,pe=j.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),O.near=T.near=x.near=$,O.far=T.far=x.far=pe,(L!==O.near||z!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,z=O.far),O.layers.mask=j.layers.mask|6,x.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;const Ne=j.parent,ge=O.cameras;oe(O,Ne);for(let Ke=0;Ke<ge.length;Ke++)oe(ge[Ke],Ne);ge.length===2?ee(O,x,T):O.projectionMatrix.copy(x.projectionMatrix),Ee(j,O,Ne)};function Ee(j,$,pe){pe===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Js*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return p[j]};let we=null;function He(j,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ne=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,Ne=!0);for(let je=0;je<pe.length;je++){const Qe=pe[je];let at=null;if(f!==null)at=f.getViewport(Qe);else{const wt=u.getViewSubImage(d,Qe);at=wt.viewport,je===0&&(e.setRenderTargetTextures(M,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(M))}let ke=P[je];ke===void 0&&(ke=new Zt,ke.layers.enable(je),ke.viewport=new ft,P[je]=ke),ke.matrix.fromArray(Qe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Qe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(at.x,at.y,at.width,at.height),je===0&&(O.matrix.copy(ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ne===!0&&O.cameras.push(ke)}const ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const je=u.getDepthInformation(pe[0]);je&&je.isValid&&je.texture&&m.init(je,i.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let je=0;je<pe.length;je++){const Qe=pe[je].camera;if(Qe){let at=p[Qe];at||(at=new tf,p[Qe]=at);const ke=u.getCameraImage(Qe);at.sourceTexture=ke}}}}for(let pe=0;pe<b.length;pe++){const Ne=w[pe],ge=b[pe];Ne!==null&&ge!==void 0&&ge.update(Ne,$,c||a)}we&&we(j,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const qe=new cf;qe.setAnimationLoop(He),this.setAnimationLoop=function(j){we=j},this.dispose=function(){}}}const ts=new Bn,Zy=new Fe;function $y(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,ts.copy(M),ts.x*=-1,ts.y*=-1,ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(ts)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jy(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=i[y.id];M===void 0&&(g(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",m));const b=S.program;n.updateUBOMapping(y,b);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const S=u();y.__bindingPointIndex=S;const M=r.createBuffer(),b=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=i[y.id],M=y.uniforms,b=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,A=M.length;w<A;w++){const R=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,T=R.length;x<T;x++){const P=R[x];if(f(P,w,x,b)===!0){const O=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let G=0;G<L.length;G++){const B=L[G],k=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,O+z,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,z),z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,M,b){const w=y.value,A=S+"_"+M;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const R=b[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return b[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(y){const S=y.uniforms;let M=0;const b=16;for(let A=0,R=S.length;A<R;A++){const x=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,P=x.length;T<P;T++){const O=x[T],L=Array.isArray(O.value)?O.value:[O.value];for(let z=0,G=L.length;z<G;z++){const B=L[z],k=_(B),q=M%b,ne=q%k.boundary,ee=q+ne;M+=ne,ee!==0&&b-ee<k.storage&&(M+=b-ee),O.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=k.storage}}}const w=M%b;return w>0&&(M+=b-w),y.__size=M,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Se("WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const Qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qn=null;function eM(){return qn===null&&(qn=new ho(Qy,16,16,$s,Xt),qn.name="DFG_LUT",qn.minFilter=pt,qn.magFilter=pt,qn.wrapS=Nn,qn.wrapT=Nn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}class tM{constructor(e={}){const{canvas:t=Mm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([Vc,zc,kc]),p=new Set([vn,si,kr,zr,Fc,Oc]),y=new Uint32Array(4),S=new Int32Array(4);let M=null,b=null;const w=[],A=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=mt;let P=0,O=0,L=null,z=-1,G=null;const B=new ft,k=new ft;let q=null;const ne=new Ae(0);let ee=0,oe=t.width,Ee=t.height,we=1,He=null,qe=null;const j=new ft(0,0,oe,Ee),$=new ft(0,0,oe,Ee);let pe=!1;const Ne=new Kc;let ge=!1,Ke=!1;const Ft=new Fe,je=new U,Qe=new ft,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function wt(){return L===null?we:1}let I=n;function Rt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nc}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",et,!1),I===null){const F="webgl2";if(I=Rt(F,E),I===null)throw Rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Pe("WebGLRenderer: "+E.message),E}let $e,ht,ve,C,v,N,Y,Z,X,Me,se,xe,De,Q,ae,_e,ye,re,ze,D,ue,te,de,J;function K(){$e=new ev(I),$e.init(),te=new Xy(I,$e),ht=new Xx(I,$e,e,te),ve=new Hy(I,$e),ht.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),C=new iv(I),v=new Ry,N=new Wy(I,$e,ve,v,ht,te,C),Y=new qx(x),Z=new Qx(x),X=new og(I),de=new Hx(I,X),Me=new tv(I,X,C,de),se=new rv(I,Me,X,C),ze=new sv(I,ht,N),_e=new Yx(v),xe=new wy(x,Y,Z,$e,ht,de,_e),De=new $y(x,v),Q=new Py,ae=new Fy($e),re=new Gx(x,Y,Z,ve,se,g,l),ye=new Vy(x,se,ht),J=new Jy(I,C,ht,ve),D=new Wx(I,$e,C),ue=new nv(I,$e,C),C.programs=xe.programs,x.capabilities=ht,x.extensions=$e,x.properties=v,x.renderLists=Q,x.shadowMap=ye,x.state=ve,x.info=C}K(),_!==vn&&(R=new ov(_,t.width,t.height,i,s));const ie=new Ky(x,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(E){E!==void 0&&(we=E,this.setSize(oe,Ee,!1))},this.getSize=function(E){return E.set(oe,Ee)},this.setSize=function(E,F,W=!0){if(ie.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=E,Ee=F,t.width=Math.floor(E*we),t.height=Math.floor(F*we),W===!0&&(t.style.width=E+"px",t.style.height=F+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(oe*we,Ee*we).floor()},this.setDrawingBufferSize=function(E,F,W){oe=E,Ee=F,we=W,t.width=Math.floor(E*W),t.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(_===vn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,F,W,H){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,F,W,H),ve.viewport(B.copy(j).multiplyScalar(we).round())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,F,W,H){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,F,W,H),ve.scissor(k.copy($).multiplyScalar(we).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(E){ve.setScissorTest(pe=E)},this.setOpaqueSort=function(E){He=E},this.setTransparentSort=function(E){qe=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let H=0;if(E){let V=!1;if(L!==null){const le=L.texture.format;V=m.has(le)}if(V){const le=L.texture.type,fe=p.has(le),he=re.getClearColor(),me=re.getClearAlpha(),Te=he.r,Ie=he.g,Re=he.b;fe?(y[0]=Te,y[1]=Ie,y[2]=Re,y[3]=me,I.clearBufferuiv(I.COLOR,0,y)):(S[0]=Te,S[1]=Ie,S[2]=Re,S[3]=me,I.clearBufferiv(I.COLOR,0,S))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",et,!1),re.dispose(),Q.dispose(),ae.dispose(),v.dispose(),Y.dispose(),Z.dispose(),se.dispose(),de.dispose(),J.dispose(),xe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",bh),ie.removeEventListener("sessionend",Th),ji.stop()};function Le(E){E.preventDefault(),$a("WebGLRenderer: Context Lost."),T=!0}function ut(){$a("WebGLRenderer: Context Restored."),T=!1;const E=C.autoReset,F=ye.enabled,W=ye.autoUpdate,H=ye.needsUpdate,V=ye.type;K(),C.autoReset=E,ye.enabled=F,ye.autoUpdate=W,ye.needsUpdate=H,ye.type=V}function et(E){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yn(E){const F=E.target;F.removeEventListener("dispose",Yn),li(F)}function li(E){Cp(E),v.remove(E)}function Cp(E){const F=v.get(E).programs;F!==void 0&&(F.forEach(function(W){xe.releaseProgram(W)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,H,V,le){F===null&&(F=at);const fe=V.isMesh&&V.matrixWorld.determinant()<0,he=Ip(E,F,W,H,V);ve.setMaterial(H,fe);let me=W.index,Te=1;if(H.wireframe===!0){if(me=Me.getWireframeAttribute(W),me===void 0)return;Te=2}const Ie=W.drawRange,Re=W.attributes.position;let Ve=Ie.start*Te,st=(Ie.start+Ie.count)*Te;le!==null&&(Ve=Math.max(Ve,le.start*Te),st=Math.min(st,(le.start+le.count)*Te)),me!==null?(Ve=Math.max(Ve,0),st=Math.min(st,me.count)):Re!=null&&(Ve=Math.max(Ve,0),st=Math.min(st,Re.count));const bt=st-Ve;if(bt<0||bt===1/0)return;de.setup(V,H,he,W,me);let Tt,ot=D;if(me!==null&&(Tt=X.get(me),ot=ue,ot.setIndex(Tt)),V.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*wt()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(V.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),ve.setLineWidth(Ce*wt()),V.isLineSegments?ot.setMode(I.LINES):V.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else V.isPoints?ot.setMode(I.POINTS):V.isSprite&&ot.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Wr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ce=V._multiDrawStarts,tt=V._multiDrawCounts,Ze=V._multiDrawCount,pn=me?X.get(me).bytesPerElement:1,xs=v.get(H).currentProgram.getUniforms();for(let mn=0;mn<Ze;mn++)xs.setValue(I,"_gl_DrawID",mn),ot.render(Ce[mn]/pn,tt[mn])}else if(V.isInstancedMesh)ot.renderInstances(Ve,bt,V.count);else if(W.isInstancedBufferGeometry){const Ce=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,tt=Math.min(W.instanceCount,Ce);ot.renderInstances(Ve,bt,tt)}else ot.render(Ve,bt)};function Sh(E,F,W){E.transparent===!0&&E.side===$n&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,ra(E,F,W),E.side=yi,E.needsUpdate=!0,ra(E,F,W),E.side=$n):ra(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),b=ae.get(W),b.init(F),A.push(b),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const H=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const le=V.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const he=le[fe];Sh(he,W,V),H.add(he)}else Sh(le,W,V),H.add(le)}),b=A.pop(),H},this.compileAsync=function(E,F,W=null){const H=this.compile(E,F,W);return new Promise(V=>{function le(){if(H.forEach(function(fe){v.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){V(E);return}setTimeout(le,10)}$e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let yo=null;function Pp(E){yo&&yo(E)}function bh(){ji.stop()}function Th(){ji.start()}const ji=new cf;ji.setAnimationLoop(Pp),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(E){yo=E,ie.setAnimationLoop(E),E===null?ji.stop():ji.start()},ie.addEventListener("sessionstart",bh),ie.addEventListener("sessionend",Th),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const W=ie.enabled===!0&&ie.isPresenting===!0,H=R!==null&&(L===null||W)&&R.begin(x,L);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,L),b=ae.get(E,A.length),b.init(F),A.push(b),Ft.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ne.setFromProjectionMatrix(Ft,ei,F.reversedDepth),Ke=this.localClippingEnabled,ge=_e.init(this.clippingPlanes,Ke),M=Q.get(E,w.length),M.init(),w.push(M),ie.enabled===!0&&ie.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&Mo(fe,F,-1/0,x.sortObjects)}Mo(E,F,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(He,qe),ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ke&&re.addToRenderList(M,E),this.info.render.frame++,ge===!0&&_e.beginShadows();const V=b.state.shadowsArray;if(ye.render(V,E,F),ge===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&R.hasRenderPass())===!1){const fe=M.opaque,he=M.transmissive;if(b.setupLights(),F.isArrayCamera){const me=F.cameras;if(he.length>0)for(let Te=0,Ie=me.length;Te<Ie;Te++){const Re=me[Te];Ah(fe,he,E,Re)}ke&&re.render(E);for(let Te=0,Ie=me.length;Te<Ie;Te++){const Re=me[Te];Eh(M,E,Re,Re.viewport)}}else he.length>0&&Ah(fe,he,E,F),ke&&re.render(E),Eh(M,E,F)}L!==null&&O===0&&(N.updateMultisampleRenderTarget(L),N.updateRenderTargetMipmap(L)),H&&R.end(x),E.isScene===!0&&E.onAfterRender(x,E,F),de.resetDefaultState(),z=-1,G=null,A.pop(),A.length>0?(b=A[A.length-1],ge===!0&&_e.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function Mo(E,F,W,H){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ne.intersectsSprite(E)){H&&Qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ft);const fe=se.update(E),he=E.material;he.visible&&M.push(E,fe,he,W,Qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ne.intersectsObject(E))){const fe=se.update(E),he=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qe.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Qe.copy(fe.boundingSphere.center)),Qe.applyMatrix4(E.matrixWorld).applyMatrix4(Ft)),Array.isArray(he)){const me=fe.groups;for(let Te=0,Ie=me.length;Te<Ie;Te++){const Re=me[Te],Ve=he[Re.materialIndex];Ve&&Ve.visible&&M.push(E,fe,Ve,W,Qe.z,Re)}}else he.visible&&M.push(E,fe,he,W,Qe.z,null)}}const le=E.children;for(let fe=0,he=le.length;fe<he;fe++)Mo(le[fe],F,W,H)}function Eh(E,F,W,H){const{opaque:V,transmissive:le,transparent:fe}=E;b.setupLightsView(W),ge===!0&&_e.setGlobalState(x.clippingPlanes,W),H&&ve.viewport(B.copy(H)),V.length>0&&sa(V,F,W),le.length>0&&sa(le,F,W),fe.length>0&&sa(fe,F,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ah(E,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Ve=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Tn(1,1,{generateMipmaps:!0,type:Ve?Xt:vn,minFilter:Qn,samples:ht.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const le=b.state.transmissionRenderTarget[H.id],fe=H.viewport||B;le.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);const he=x.getRenderTarget(),me=x.getActiveCubeFace(),Te=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(ne),ee=x.getClearAlpha(),ee<1&&x.setClearColor(16777215,.5),x.clear(),ke&&re.render(W);const Ie=x.toneMapping;x.toneMapping=ii;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ge===!0&&_e.setGlobalState(x.clippingPlanes,H),sa(E,W,H),N.updateMultisampleRenderTarget(le),N.updateRenderTargetMipmap(le),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let st=0,bt=F.length;st<bt;st++){const Tt=F[st],{object:ot,geometry:Ce,material:tt,group:Ze}=Tt;if(tt.side===$n&&ot.layers.test(H.layers)){const pn=tt.side;tt.side=an,tt.needsUpdate=!0,wh(ot,W,H,Ce,tt,Ze),tt.side=pn,tt.needsUpdate=!0,Ve=!0}}Ve===!0&&(N.updateMultisampleRenderTarget(le),N.updateRenderTargetMipmap(le))}x.setRenderTarget(he,me,Te),x.setClearColor(ne,ee),Re!==void 0&&(H.viewport=Re),x.toneMapping=Ie}function sa(E,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let V=0,le=E.length;V<le;V++){const fe=E[V],{object:he,geometry:me,group:Te}=fe;let Ie=fe.material;Ie.allowOverride===!0&&H!==null&&(Ie=H),he.layers.test(W.layers)&&wh(he,F,W,me,Ie,Te)}}function wh(E,F,W,H,V,le){E.onBeforeRender(x,F,W,H,V,le),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(x,F,W,H,E,le),V.transparent===!0&&V.side===$n&&V.forceSinglePass===!1?(V.side=an,V.needsUpdate=!0,x.renderBufferDirect(W,F,H,V,E,le),V.side=yi,V.needsUpdate=!0,x.renderBufferDirect(W,F,H,V,E,le),V.side=$n):x.renderBufferDirect(W,F,H,V,E,le),E.onAfterRender(x,F,W,H,V,le)}function ra(E,F,W){F.isScene!==!0&&(F=at);const H=v.get(E),V=b.state.lights,le=b.state.shadowsArray,fe=V.state.version,he=xe.getParameters(E,V.state,le,F,W),me=xe.getProgramCacheKey(he);let Te=H.programs;H.environment=E.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(E.isMeshStandardMaterial?Z:Y).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",Yn),Te=new Map,H.programs=Te);let Ie=Te.get(me);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===fe)return Ch(E,he),Ie}else he.uniforms=xe.getUniforms(E),E.onBeforeCompile(he,x),Ie=xe.acquireProgram(he,me),Te.set(me,Ie),H.uniforms=he.uniforms;const Re=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=_e.uniform),Ch(E,he),H.needsLights=Lp(E),H.lightsStateVersion=fe,H.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMap.value=V.state.directionalShadowMap,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotShadowMap.value=V.state.spotShadowMap,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMap.value=V.state.pointShadowMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function Rh(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ga.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Ch(E,F){const W=v.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Ip(E,F,W,H,V){F.isScene!==!0&&(F=at),N.resetTextureUnits();const le=F.fog,fe=H.isMeshStandardMaterial?F.environment:null,he=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Vt,me=(H.isMeshStandardMaterial?Z:Y).get(H.envMap||fe),Te=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!W.morphAttributes.position,Ve=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let bt=ii;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(bt=x.toneMapping);const Tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=Tt!==void 0?Tt.length:0,Ce=v.get(H),tt=b.state.lights;if(ge===!0&&(Ke===!0||E!==G)){const qt=E===G&&H.id===z;_e.setState(H,E,qt)}let Ze=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==tt.state.version||Ce.outputColorSpace!==he||V.isBatchedMesh&&Ce.batching===!1||!V.isBatchedMesh&&Ce.batching===!0||V.isBatchedMesh&&Ce.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ce.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ce.instancing===!1||!V.isInstancedMesh&&Ce.instancing===!0||V.isSkinnedMesh&&Ce.skinning===!1||!V.isSkinnedMesh&&Ce.skinning===!0||V.isInstancedMesh&&Ce.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ce.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ce.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ce.instancingMorph===!1&&V.morphTexture!==null||Ce.envMap!==me||H.fog===!0&&Ce.fog!==le||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==_e.numPlanes||Ce.numIntersection!==_e.numIntersection)||Ce.vertexAlphas!==Te||Ce.vertexTangents!==Ie||Ce.morphTargets!==Re||Ce.morphNormals!==Ve||Ce.morphColors!==st||Ce.toneMapping!==bt||Ce.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,Ce.__version=H.version);let pn=Ce.currentProgram;Ze===!0&&(pn=ra(H,F,V));let xs=!1,mn=!1,mr=!1;const dt=pn.getUniforms(),tn=Ce.uniforms;if(ve.useProgram(pn.program)&&(xs=!0,mn=!0,mr=!0),H.id!==z&&(z=H.id,mn=!0),xs||G!==E){ve.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),dt.setValue(I,"projectionMatrix",E.projectionMatrix),dt.setValue(I,"viewMatrix",E.matrixWorldInverse);const nn=dt.map.cameraPosition;nn!==void 0&&nn.setValue(I,je.setFromMatrixPosition(E.matrixWorld)),ht.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,mn=!0,mr=!0)}if(Ce.needsLights&&(tt.state.directionalShadowMap.length>0&&dt.setValue(I,"directionalShadowMap",tt.state.directionalShadowMap,N),tt.state.spotShadowMap.length>0&&dt.setValue(I,"spotShadowMap",tt.state.spotShadowMap,N),tt.state.pointShadowMap.length>0&&dt.setValue(I,"pointShadowMap",tt.state.pointShadowMap,N)),V.isSkinnedMesh){dt.setOptional(I,V,"bindMatrix"),dt.setOptional(I,V,"bindMatrixInverse");const qt=V.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),dt.setValue(I,"boneTexture",qt.boneTexture,N))}V.isBatchedMesh&&(dt.setOptional(I,V,"batchingTexture"),dt.setValue(I,"batchingTexture",V._matricesTexture,N),dt.setOptional(I,V,"batchingIdTexture"),dt.setValue(I,"batchingIdTexture",V._indirectTexture,N),dt.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&dt.setValue(I,"batchingColorTexture",V._colorsTexture,N));const Cn=W.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ze.update(V,W,pn),(mn||Ce.receiveShadow!==V.receiveShadow)&&(Ce.receiveShadow=V.receiveShadow,dt.setValue(I,"receiveShadow",V.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(tn.envMap.value=me,tn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=eM()),mn&&(dt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&Dp(tn,mr),le&&H.fog===!0&&De.refreshFogUniforms(tn,le),De.refreshMaterialUniforms(tn,H,we,Ee,b.state.transmissionRenderTarget[E.id]),Ga.upload(I,Rh(Ce),tn,N)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ga.upload(I,Rh(Ce),tn,N),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(I,"center",V.center),dt.setValue(I,"modelViewMatrix",V.modelViewMatrix),dt.setValue(I,"normalMatrix",V.normalMatrix),dt.setValue(I,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const qt=H.uniformsGroups;for(let nn=0,So=qt.length;nn<So;nn++){const Ki=qt[nn];J.update(Ki,pn),J.bind(Ki,pn)}}return pn}function Dp(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Lp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,F,W){const H=v.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=F,v.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const W=v.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Np=I.createFramebuffer();this.setRenderTarget=function(E,F=0,W=0){L=E,P=F,O=W;let H=null,V=!1,le=!1;if(E){const he=v.get(E);if(he.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(I.FRAMEBUFFER,he.__webglFramebuffer),B.copy(E.viewport),k.copy(E.scissor),q=E.scissorTest,ve.viewport(B),ve.scissor(k),ve.setScissorTest(q),z=-1;return}else if(he.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(he.__hasExternalTextures)N.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ie=E.depthTexture;if(he.__boundDepthTexture!==Ie){if(Ie!==null&&v.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const me=E.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(le=!0);const Te=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?H=Te[F][W]:H=Te[F],V=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?H=v.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[W]:H=Te,B.copy(E.viewport),k.copy(E.scissor),q=E.scissorTest}else B.copy(j).multiplyScalar(we).floor(),k.copy($).multiplyScalar(we).floor(),q=pe;if(W!==0&&(H=Np),ve.bindFramebuffer(I.FRAMEBUFFER,H)&&ve.drawBuffers(E,H),ve.viewport(B),ve.scissor(k),ve.setScissorTest(q),V){const he=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,he.__webglTexture,W)}else if(le){const he=F;for(let me=0;me<E.textures.length;me++){const Te=v.get(E.textures[me]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+me,Te.__webglTexture,W,he)}}else if(E!==null&&W!==0){const he=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(E,F,W,H,V,le,fe,he=0){if(!(E&&E.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ve.bindFramebuffer(I.FRAMEBUFFER,me);try{const Te=E.textures[he],Ie=Te.format,Re=Te.type;if(!ht.textureFormatReadable(Ie)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Re)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-H&&W>=0&&W<=E.height-V&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),I.readPixels(F,W,H,V,te.convert(Ie),te.convert(Re),le))}finally{const Te=L!==null?v.get(L).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,H,V,le,fe,he=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(F>=0&&F<=E.width-H&&W>=0&&W<=E.height-V){ve.bindFramebuffer(I.FRAMEBUFFER,me);const Te=E.textures[he],Ie=Te.format,Re=Te.type;if(!ht.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),I.readPixels(F,W,H,V,te.convert(Ie),te.convert(Re),0);const st=L!==null?v.get(L).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,st);const bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Sm(I,bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.deleteBuffer(Ve),I.deleteSync(bt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,W=0){const H=Math.pow(2,-W),V=Math.floor(E.image.width*H),le=Math.floor(E.image.height*H),fe=F!==null?F.x:0,he=F!==null?F.y:0;N.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,fe,he,V,le),ve.unbindTexture()};const Up=I.createFramebuffer(),Fp=I.createFramebuffer();this.copyTextureToTexture=function(E,F,W=null,H=null,V=0,le=null){le===null&&(V!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=V,V=0):le=0);let fe,he,me,Te,Ie,Re,Ve,st,bt;const Tt=E.isCompressedTexture?E.mipmaps[le]:E.image;if(W!==null)fe=W.max.x-W.min.x,he=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,Ie=W.min.y,Re=W.isBox3?W.min.z:0;else{const Cn=Math.pow(2,-V);fe=Math.floor(Tt.width*Cn),he=Math.floor(Tt.height*Cn),E.isDataArrayTexture?me=Tt.depth:E.isData3DTexture?me=Math.floor(Tt.depth*Cn):me=1,Te=0,Ie=0,Re=0}H!==null?(Ve=H.x,st=H.y,bt=H.z):(Ve=0,st=0,bt=0);const ot=te.convert(F.format),Ce=te.convert(F.type);let tt;F.isData3DTexture?(N.setTexture3D(F,0),tt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(N.setTexture2DArray(F,0),tt=I.TEXTURE_2D_ARRAY):(N.setTexture2D(F,0),tt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Ze=I.getParameter(I.UNPACK_ROW_LENGTH),pn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xs=I.getParameter(I.UNPACK_SKIP_PIXELS),mn=I.getParameter(I.UNPACK_SKIP_ROWS),mr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Tt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re);const dt=E.isDataArrayTexture||E.isData3DTexture,tn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Cn=v.get(E),qt=v.get(F),nn=v.get(Cn.__renderTarget),So=v.get(qt.__renderTarget);ve.bindFramebuffer(I.READ_FRAMEBUFFER,nn.__webglFramebuffer),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,So.__webglFramebuffer);for(let Ki=0;Ki<me;Ki++)dt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(E).__webglTexture,V,Re+Ki),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(F).__webglTexture,le,bt+Ki)),I.blitFramebuffer(Te,Ie,fe,he,Ve,st,fe,he,I.DEPTH_BUFFER_BIT,I.NEAREST);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||v.has(E)){const Cn=v.get(E),qt=v.get(F);ve.bindFramebuffer(I.READ_FRAMEBUFFER,Up),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fp);for(let nn=0;nn<me;nn++)dt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Cn.__webglTexture,V,Re+nn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Cn.__webglTexture,V),tn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.__webglTexture,le,bt+nn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qt.__webglTexture,le),V!==0?I.blitFramebuffer(Te,Ie,fe,he,Ve,st,fe,he,I.COLOR_BUFFER_BIT,I.NEAREST):tn?I.copyTexSubImage3D(tt,le,Ve,st,bt+nn,Te,Ie,fe,he):I.copyTexSubImage2D(tt,le,Ve,st,Te,Ie,fe,he);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else tn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(tt,le,Ve,st,bt,fe,he,me,ot,Ce,Tt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(tt,le,Ve,st,bt,fe,he,me,ot,Tt.data):I.texSubImage3D(tt,le,Ve,st,bt,fe,he,me,ot,Ce,Tt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,le,Ve,st,fe,he,ot,Ce,Tt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,le,Ve,st,Tt.width,Tt.height,ot,Tt.data):I.texSubImage2D(I.TEXTURE_2D,le,Ve,st,fe,he,ot,Ce,Tt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xs),I.pixelStorei(I.UNPACK_SKIP_ROWS,mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,mr),le===0&&F.generateMipmaps&&I.generateMipmap(tt),ve.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){P=0,O=0,L=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const Yu={type:"change"},nh={type:"start"},pf={type:"end"},La=new ur,qu=new Di,nM=Math.cos(70*Vd.DEG2RAD),Dt=new U,sn=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},il=1e-6;class iM extends rg{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new bn,this._lastTargetPosition=new U,this._quat=new bn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mu,this._sphericalDelta=new Mu,this._scale=1,this._panOffset=new U,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new U,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rM.bind(this),this._onPointerDown=sM.bind(this),this._onPointerUp=aM.bind(this),this._onContextMenu=fM.bind(this),this._onMouseWheel=cM.bind(this),this._onKeyDown=hM.bind(this),this._onTouchStart=uM.bind(this),this._onTouchMove=dM.bind(this),this._onMouseDown=oM.bind(this),this._onMouseMove=lM.bind(this),this._interceptControlDown=pM.bind(this),this._interceptControlUp=mM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yu),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Dt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(La.origin.copy(this.object.position),La.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(La.direction))<nM?this.object.lookAt(this.target):(qu.setFromNormalAndCoplanarPoint(this.object.up,this.target),La.intersectPlane(qu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>il||this._lastTargetPosition.distanceToSquared(this.target)>il?(this.dispatchEvent(Yu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Dt.copy(i).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function sM(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function rM(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function aM(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pf),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function oM(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=rt.DOLLY;break;case Vs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}break;case Vs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(nh)}function lM(r){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function cM(r){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(r.preventDefault(),this.dispatchEvent(nh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(pf))}function hM(r){this.enabled!==!1&&this._handleKeyDown(r)}function uM(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=rt.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=rt.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(nh)}function dM(r){switch(this._trackPointer(r),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=rt.NONE}}function fM(r){this.enabled!==!1&&r.preventDefault()}function pM(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mM(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class na{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _M=new ta(-1,1,1,-1,0,1);class gM extends en{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const xM=new gM;class mf{constructor(e){this._mesh=new dn(xM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_M)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function ju(r,e){if(e===um)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===oc||e===kd){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===oc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}const sl=new WeakMap;class vM extends Yi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Xr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,mt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Vt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(sl.has(e)){const l=sl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),sl.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new en;e.index&&t.setIndex(new kt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:s,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[n];let c;if(a===o)c=new kt(s,a);else{const h=new $d(s,o);c=new co(h,a,0)}i==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(s instanceof Float32Array)),t.setAttribute(i,c)}return t}_assignVertexColorSpace(e,t){if(t!==mt)return;const n=new Ae;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),We.colorSpaceToWorking(n,mt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Xr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=yM.toString(),a=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function yM(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let y,S;if(c.useUniqueIDs)S=h[m],y=o.GetAttributeByUniqueId(d,S);else{if(S=o.GetAttributeId(d,a[h[m]]),S===-1)continue;y=o.GetAttribute(d,S)}const M=i(a,o,d,m,p,y);m==="color"&&(M.vertexColorSpace=c.vertexColorSpace),_.attributes.push(M)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,o,d)),a.destroy(d),_}function n(a,o,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,l,c,h,u){const d=l.num_points(),f=u.num_components(),g=s(a,h),_=f*h.BYTES_PER_ELEMENT,m=Math.ceil(_/4)*4,p=m/h.BYTES_PER_ELEMENT,y=d*_,S=d*m,M=a._malloc(y);o.GetAttributeDataArrayForAllPoints(l,u,g,y,M);const b=new h(a.HEAPF32.buffer,M,y/h.BYTES_PER_ELEMENT);let w;if(_===m)w=b.slice();else{w=new h(S/h.BYTES_PER_ELEMENT);let A=0;for(let R=0,x=b.length;R<x;R++){for(let T=0;T<f;T++)w[A+T]=b[R*f+T];A+=p}}return a._free(M),{name:c,count:d,itemSize:f,array:w,stride:p}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class MM extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new zM(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ur.extractUrlBase(e);a=Ur.resolveURL(c,this.path)}else a=Ur.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Xr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_f){try{a[Ge.KHR_BINARY_GLTF]=new VM(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new eS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:a[u]=new TM;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[u]=new GM(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[u]=new HM;break;case Ge.KHR_MESH_QUANTIZATION:a[u]=new WM;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function SM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bM{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Vt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new dc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new of(h),c.distance=u;break;case"spot":c=new z_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class TM{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return cs}extendParams(e,t,n){const i=[];e.color=new Ae(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Vt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,mt))}return Promise.all(i)}}class EM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class AM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(o,o)}return Promise.all(s)}}class wM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class RM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class CM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class PM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class IM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(o[0],o[1],o[2],Vt),Promise.all(s)}}class DM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class LM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(o[0],o[1],o[2],Vt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mt)),Promise.all(s)}}class NM{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class UM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class FM{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class OM{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class BM{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class kM{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class zM{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Dn.TRIANGLES&&c.mode!==Dn.TRIANGLE_STRIP&&c.mode!==Dn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Fe,m=new U,p=new bn,y=new U(1,1,1),S=new m_(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,_.compose(m,p,y));for(const M in l)if(M==="_COLOR_0"){const b=l[M];S.instanceColor=new cc(b.array,b.itemSize,b.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);St.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const _f="glTF",Er=12,Ku={JSON:1313821514,BIN:5130562};class VM{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_f)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Er,s=new DataView(e,Er);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ku.JSON){const c=new Uint8Array(e,Er+a,o);this.content=n.decode(c)}else if(l===Ku.BIN){const c=Er+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=_c[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=_c[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ws[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,Vt,d)})})}}class HM{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class WM{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class gf extends ea{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,y=1-m,S=p-d+u;for(let M=0;M!==o;M++){const b=a[_+M+o],w=a[_+M+l]*h,A=a[g+M+o],R=a[g+M]*h;s[M]=y*b+S*w+m*A+p*R}return s}}const XM=new bn;class YM extends gf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return XM.fromArray(s).normalize().toArray(s),s}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zu={9728:Mt,9729:pt,9984:Dd,9985:Oa,9986:Rr,9987:Qn},$u={33071:Nn,33648:qa,10497:Zs},rl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qM={CUBICSPLINE:void 0,LINEAR:Gr,STEP:Vr},al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Jc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),r.DefaultMaterial}function ns(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function ZM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $M(r){let e;const t=r.extensions&&r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ol(t.attributes):e=r.indices+":"+ol(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ol(r.targets[n]);return e}function ol(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function gc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const QM=new Fe;class eS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new af(this.options.manager):this.textureLoader=new H_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ns(s,o,i),jn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Ur.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=rl[i.type],o=Ws[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new kt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=rl[i.type],c=Ws[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(y);S||(_=new c(o,p*f,i.count*f/h),S=new $d(_,f/h),t.cache.add(y,S)),m=new co(S,l,d%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new kt(_,l,g);if(i.sparse!==void 0){const p=rl.SCALAR,y=Ws[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,b=new y(a[1],S,i.sparse.count*p),w=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,R=b.length;A<R;A++){const x=b[A];if(m.setX(x,w[A*l]),l>=2&&m.setY(x,w[A*l+1]),l>=3&&m.setZ(x,w[A*l+2]),l>=4&&m.setW(x,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Zu[d.magFilter]||pt,h.minFilter=Zu[d.minFilter]||Qn,h.wrapS=$u[d.wrapS]||Zs,h.wrapT=$u[d.wrapT]||Zs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Mt&&h.minFilter!==pt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Lt(_);m.needsUpdate=!0,d(m)}),t.load(Ur.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),jn(u,a),u.userData.mimeType=a.mimeType||JM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new $c,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Qd,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Jc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const u=i[Ge.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Vt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=$n);const h=s.alphaMode||al.OPAQUE;if(h===al.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===al.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==cs&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==cs&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==cs){const u=s.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],Vt)}return s.emissiveTexture!==void 0&&a!==cs&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,mt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),jn(u,s),t.associations.set(u,{materials:e}),s.extensions&&ns(i,u,s),u})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ju(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=$M(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Ju(new en,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?jM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const y=c[f];if(m.mode===Dn.TRIANGLES||m.mode===Dn.TRIANGLE_STRIP||m.mode===Dn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new d_(_,y):new dn(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Dn.TRIANGLE_STRIP?p.geometry=ju(p.geometry,kd):m.mode===Dn.TRIANGLE_FAN&&(p.geometry=ju(p.geometry,oc));else if(m.mode===Dn.LINES)p=new v_(_,y);else if(m.mode===Dn.LINE_STRIP)p=new Zc(_,y);else if(m.mode===Dn.LINE_LOOP)p=new y_(_,y);else if(m.mode===Dn.POINTS)p=new ef(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ZM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),jn(p,s),m.extensions&&ns(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&ns(i,u[0],s),u[0];const d=new Ni;s.extensions&&ns(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(Vd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ta(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Fe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let S=0,M=d.length;S<M;S++){const b=d[S],w=f[S],A=g[S],R=_[S],x=m[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const T=n._createAnimationTracks(b,w,A,R,x);if(T)for(let P=0;P<T.length;P++)p.push(T[P])}const y=new uc(s,void 0,p);return jn(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,QM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Jd:c.length>1?h=new Ni:c.length===1?h=c[0]:h=new St,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),jn(h,s),s.extensions&&ns(n,h,s),s.matrix!==void 0){const u=new Fe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ni;n.name&&(s.name=i.createUniqueName(n.name)),jn(s,n),n.extensions&&ns(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof on||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Ii[s.path]===Ii.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ii[s.path]){case Ii.weights:c=tr;break;case Ii.rotation:c=nr;break;case Ii.translation:case Ii.scale:c=ir;break;default:n.itemSize===1?c=tr:c=ir;break}const h=i.interpolation!==void 0?qM[i.interpolation]:Gr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ii[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gc(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof nr?YM:gf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tS(r,e,t){const n=e.attributes,i=new Ti;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const h=gc(Ws[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new U,l=new U;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=gc(Ws[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new ai;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Ju(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=_c[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return We.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),jn(r,e),tS(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?KM(r,e.targets,t):r})}class nS extends B_{constructor(e){super(e),this.type=Xt}parse(e){const a=function(R,x){switch(R){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(x||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(x||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(x||""))}},u=function(R,x,T){x=x||1024;let O=R.pos,L=-1,z=0,G="",B=String.fromCharCode.apply(null,new Uint16Array(R.subarray(O,O+128)));for(;0>(L=B.indexOf(`
`))&&z<x&&O<R.byteLength;)G+=B,z+=B.length,O+=128,B+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(O,O+128)));return-1<L?(R.pos+=z+L+1,G+B.slice(0,L)):!1},d=function(R){const x=/^#\?(\S+)/,T=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,B;for((R.pos>=R.byteLength||!(G=u(R)))&&a(1,"no header found"),(B=G.match(x))||a(3,"bad initial token"),z.valid|=1,z.programtype=B[1],z.string+=G+`
`;G=u(R),G!==!1;){if(z.string+=G+`
`,G.charAt(0)==="#"){z.comments+=G+`
`;continue}if((B=G.match(T))&&(z.gamma=parseFloat(B[1])),(B=G.match(P))&&(z.exposure=parseFloat(B[1])),(B=G.match(O))&&(z.valid|=2,z.format=B[1]),(B=G.match(L))&&(z.valid|=4,z.height=parseInt(B[1],10),z.width=parseInt(B[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||a(3,"missing format specifier"),z.valid&4||a(3,"missing image size specifier"),z},f=function(R,x,T){const P=x;if(P<8||P>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);P!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");const O=new Uint8Array(4*x*T);O.length||a(4,"unable to allocate buffer space");let L=0,z=0;const G=4*P,B=new Uint8Array(4),k=new Uint8Array(G);let q=T;for(;q>0&&z<R.byteLength;){z+4>R.byteLength&&a(1),B[0]=R[z++],B[1]=R[z++],B[2]=R[z++],B[3]=R[z++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=P)&&a(3,"bad rgbe scanline format");let ne=0,ee;for(;ne<G&&z<R.byteLength;){ee=R[z++];const Ee=ee>128;if(Ee&&(ee-=128),(ee===0||ne+ee>G)&&a(3,"bad scanline data"),Ee){const we=R[z++];for(let He=0;He<ee;He++)k[ne++]=we}else k.set(R.subarray(z,z+ee),ne),ne+=ee,z+=ee}const oe=P;for(let Ee=0;Ee<oe;Ee++){let we=0;O[L]=k[Ee+we],we+=P,O[L+1]=k[Ee+we],we+=P,O[L+2]=k[Ee+we],we+=P,O[L+3]=k[Ee+we],L+=4}q--}return O},g=function(R,x,T,P){const O=R[x+3],L=Math.pow(2,O-128)/255;T[P+0]=R[x+0]*L,T[P+1]=R[x+1]*L,T[P+2]=R[x+2]*L,T[P+3]=1},_=function(R,x,T,P){const O=R[x+3],L=Math.pow(2,O-128)/255;T[P+0]=pa.toHalfFloat(Math.min(R[x+0]*L,65504)),T[P+1]=pa.toHalfFloat(Math.min(R[x+1]*L,65504)),T[P+2]=pa.toHalfFloat(Math.min(R[x+2]*L,65504)),T[P+3]=pa.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),y=p.width,S=p.height,M=f(m.subarray(m.pos),y,S);let b,w,A;switch(this.type){case Jt:A=M.length/4;const R=new Float32Array(A*4);for(let T=0;T<A;T++)g(M,T*4,R,T*4);b=R,w=Jt;break;case Xt:A=M.length/4;const x=new Uint16Array(A*4);for(let T=0;T<A;T++)_(M,T*4,x,T*4);b=x,w=Xt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:S,data:b,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){switch(a.type){case Jt:case Xt:a.colorSpace=Vt,a.minFilter=pt,a.magFilter=pt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,i)}}class iS extends nS{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}const gt=new Ln,Na=new U,Qu=new be,ed=new be,td=new be;class sS{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,i=e?e.count/3:t.count/3,s=new Float32Array(i);for(let l=0;l<i;l++){let c=1,h=3*l,u=3*l+1,d=3*l+2;e&&(h=e.getX(h),u=e.getX(u),d=e.getX(d)),n&&(c=n.getX(h)+n.getX(u)+n.getX(d)),gt.a.fromBufferAttribute(t,h),gt.b.fromBufferAttribute(t,u),gt.c.fromBufferAttribute(t,d),c*=gt.getArea(),s[l]=c}const a=new Float32Array(i);let o=0;for(let l=0;l<i;l++)o+=s[l],a[l]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,i){const s=this._sampleFaceIndex();return this._sampleFace(s,e,t,n,i)}_sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){const t=this.distribution;let n=0,i=t.length-1,s=-1;for(;n<=i;){const a=Math.ceil((n+i)/2);if(a===0||t[a-1]<=e&&t[a]>e){s=a;break}else e<t[a]?i=a-1:n=a+1}return s}_sampleFace(e,t,n,i,s){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const l=this.indexAttribute;let c=e*3,h=e*3+1,u=e*3+2;return l&&(c=l.getX(c),h=l.getX(h),u=l.getX(u)),gt.a.fromBufferAttribute(this.positionAttribute,c),gt.b.fromBufferAttribute(this.positionAttribute,h),gt.c.fromBufferAttribute(this.positionAttribute,u),t.set(0,0,0).addScaledVector(gt.a,a).addScaledVector(gt.b,o).addScaledVector(gt.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(gt.a.fromBufferAttribute(this.normalAttribute,c),gt.b.fromBufferAttribute(this.normalAttribute,h),gt.c.fromBufferAttribute(this.normalAttribute,u),n.set(0,0,0).addScaledVector(gt.a,a).addScaledVector(gt.b,o).addScaledVector(gt.c,1-(a+o)).normalize()):gt.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(gt.a.fromBufferAttribute(this.colorAttribute,c),gt.b.fromBufferAttribute(this.colorAttribute,h),gt.c.fromBufferAttribute(this.colorAttribute,u),Na.set(0,0,0).addScaledVector(gt.a,a).addScaledVector(gt.b,o).addScaledVector(gt.c,1-(a+o)),i.r=Na.x,i.g=Na.y,i.b=Na.z),s!==void 0&&this.uvAttribute!==void 0&&(Qu.fromBufferAttribute(this.uvAttribute,c),ed.fromBufferAttribute(this.uvAttribute,h),td.fromBufferAttribute(this.uvAttribute,u),s.set(0,0).addScaledVector(Qu,a).addScaledVector(ed,o).addScaledVector(td,1-(a+o))),this}}const rS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class aS extends na{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof An?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qd.clone(e.uniforms),this.material=new An({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new mf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class nd extends na{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class oS extends na{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new Tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new aS(rS),this.copyPass.material.blending=ni,this.clock=new lf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}nd!==void 0&&(a instanceof nd?n=!0:a instanceof oS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cS extends na{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ae}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class hS extends na{constructor(e,t,n,i={}){super(),this.pixelSize=e,this.scene=t,this.camera=n,this.normalEdgeStrength=i.normalEdgeStrength||.3,this.depthEdgeStrength=i.depthEdgeStrength||.4,this.pixelatedMaterial=this._createPixelatedMaterial(),this._resolution=new be,this._renderResolution=new be,this._normalMaterial=new b_,this._beautyRenderTarget=new Tn,this._beautyRenderTarget.texture.minFilter=Mt,this._beautyRenderTarget.texture.magFilter=Mt,this._beautyRenderTarget.texture.type=Xt,this._beautyRenderTarget.depthTexture=new er,this._normalRenderTarget=new Tn,this._normalRenderTarget.texture.minFilter=Mt,this._normalRenderTarget.texture.magFilter=Mt,this._normalRenderTarget.texture.type=Xt,this._fsQuad=new mf(this.pixelatedMaterial)}dispose(){this._beautyRenderTarget.dispose(),this._normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this._normalMaterial.dispose(),this._fsQuad.dispose()}setSize(e,t){this._resolution.set(e,t),this._renderResolution.set(e/this.pixelSize|0,t/this.pixelSize|0);const{x:n,y:i}=this._renderResolution;this._beautyRenderTarget.setSize(n,i),this._normalRenderTarget.setSize(n,i),this._fsQuad.material.uniforms.resolution.value.set(n,i,1/n,1/i)}setPixelSize(e){this.pixelSize=e,this.setSize(this._resolution.x,this._resolution.y)}render(e,t){const n=this._fsQuad.material.uniforms;n.normalEdgeStrength.value=this.normalEdgeStrength,n.depthEdgeStrength.value=this.depthEdgeStrength,e.setRenderTarget(this._beautyRenderTarget),e.render(this.scene,this.camera);const i=this.scene.overrideMaterial;e.setRenderTarget(this._normalRenderTarget),this.scene.overrideMaterial=this._normalMaterial,e.render(this.scene,this.camera),this.scene.overrideMaterial=i,n.tDiffuse.value=this._beautyRenderTarget.texture,n.tDepth.value=this._beautyRenderTarget.depthTexture,n.tNormal.value=this._normalRenderTarget.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this._fsQuad.render(e)}_createPixelatedMaterial(){return new An({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new ft},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			`})}}function uS(r,e="day"){const t=[];if(e==="night"){const n=new dc(11518719,.5);n.position.set(5,10,5),n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,t.push(n);const i=new xu(789534,.4);t.push(i);const s=new of(16755200,2,10);s.position.set(-.5,.75,-2),t.push(s)}else{const n=new dc(16774624,1.2);n.position.set(5,8,3),t.push(n);const i=new xu(15264496,1);t.push(i)}return t.forEach(n=>r.add(n)),t}const ll=r=>`/${r.replace(/^\/+/,"")}`;class dS{constructor(e){this.name=e.name,this.meshes=e.meshes,this.file=e.url,this.scene=e.scene,this.loader=new MM(e.manager),this.dracoLoader=new vM,this.dracoLoader.setDecoderPath(ll("draco/")),this.loader.setDRACOLoader(this.dracoLoader),this.textureLoader=new af,this.animations=e.animationState||!1,this.replaceMaterials=e.replace||!1,this.defaultMatcap=e.replaceURL?this.textureLoader.load(`${e.replaceURL}`):this.textureLoader.load(ll("mat.png")),this.mixer=null,this.mixers=e.mixers,this.defaultParticle=e.particleURL?this.textureLoader.load(`${e.particleURL}`):this.textureLoader.load(ll("10.png")),this.scale=e.scale||new U(1,1,1),this.position=e.position||new U(0,0,0),this.rotation=e.rotation||new U(0,0,0),this.palette=[new Ae("#FAAD80"),new Ae("#FF6767"),new Ae("#FF3D68"),new Ae("#A73489")],this.callback=e.callback,this.materialType=e.materialType||"packed",this.color=e.color||16777215}init(){this.loader.load(this.file,e=>{this.mesh=e.scene.children[0],console.log(this.name,"| materialType:",this.materialType,"| color:",this.color);let t;this.materialType==="matcap"?t=new w_({matcap:this.defaultMatcap}):this.materialType==="phong"?t=new pu({color:this.color,specular:1118481,emissive:this.color,emissiveIntensity:.15,shininess:8}):this.materialType==="lambert"?t=new T_({color:this.color}):this.materialType==="glass"&&(t=new pu({color:16777215,specular:11184810,shininess:120,transparent:!0,opacity:.4,depthWrite:!1})),t&&e.scene.traverse(n=>{n.isMesh&&(n.material=t)}),this.animations&&(this.mixer=new ig(e.scene),e.animations.forEach(n=>{this.mixer.clipAction(n).play()}),this.mixers.push(this.mixer)),this.meshes[`${this.name}`]=e.scene,this.meshes[`${this.name}`].position.set(this.position.x,this.position.y,this.position.z),this.meshes[`${this.name}`].scale.set(this.scale.x,this.scale.y,this.scale.z),this.meshes[`${this.name}`].rotation.set(this.rotation.x,this.rotation.y,this.rotation.z),this.meshes[`${this.name}`].userData.groupName=this.name,this.callback&&this.callback(this.meshes[`${this.name}`]),this.scene.add(this.meshes[`${this.name}`])},void 0,e=>{console.error(`Failed to load model "${this.name}" from ${this.file}`,e)})}initPoints(){this.loader.load(this.file,e=>{const t=[],n=new Ni;e.scene.traverse(i=>{i.isMesh&&t.push(i)});for(const i of t)n.add(this.createPoints(i));console.log(n),this.meshes[`${this.name}`]=n,this.meshes[`${this.name}`].scale.set(this.scale.x,this.scale.y,this.scale.z),this.meshes[`${this.name}`].position.set(this.position.x,this.position.y,this.position.z),this.meshes[`${this.name}`].rotation.set(this.rotation.x,this.rotation.y,this.rotation.z),this.scene.add(this.meshes[`${this.name}`])})}createPoints(e){const t=new sS(e).build(),n=3e3,i=new Float32Array(n*3),s=new Float32Array(n*3),a=new U;for(let h=0;h<n;h++){t.sample(a);const u=this.palette[Math.floor(Math.random()*this.palette.length)];s.set([u.r,u.g,u.b],h*3),i.set([a.x,a.y,a.z],h*3)}const o=new en;o.setAttribute("position",new Qt(i,3)),o.setAttribute("color",new Qt(s,3));const l=new $c({vertexColors:!0,transparent:!0,alphaMap:this.defaultParticle,alphaTest:.001,depthWrite:!1,blending:xl,size:.12});return new ef(o,l)}}var id=class{target;name;intersected;wasIntersected=!1;wasIntersectedOnMouseDown=!1;distance;constructor(r,e){this.target=r,this.name=e,this.intersected=!1,this.distance=0}},rn=class{type;cancelBubble;originalEvent;coords=new be(0,0);distance=0;intersected=!1;wasIntersected=!1;wasIntersectedOnMouseDown=!1;constructor(r,e=null){this.cancelBubble=!1,this.type=r,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},fS=class{renderer;camera;domElement;bindEventsOnBodyElement;autoAdd;scene;mouse;supportsPointerEvents;interactiveObjects;closestObject;raycaster;treatTouchEventsAsMouseEvents;constructor(r,e,t,n){this.renderer=r,this.camera=e,this.domElement=t,this.bindEventsOnBodyElement=n&&typeof n.bindEventsOnBodyElement<"u"?n.bindEventsOnBodyElement:!0,this.scene=n&&typeof n.scene<"u"?n.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(i=>{this.add(i),i.addEventListener("removed",s=>{this.remove(s.target)})}),this.update()}),this.autoAdd=n&&typeof n.autoAdd<"u"?n.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new be(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new sg,t.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):t.addEventListener("pointermove",this.onDocumentPointerMove),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):t.addEventListener("mousemove",this.onDocumentMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}dispose=()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)};add=(r,e=[])=>{if(r&&!this.interactiveObjects.find(t=>t.target===r))if(e.length>0)e.forEach(t=>{let n=r.getObjectByName(t);if(n){let i=new id(n,t);this.interactiveObjects.push(i)}});else{let t=new id(r,r.name);this.interactiveObjects.push(t)}};remove=(r,e=[])=>{!r||(e.length>0?e.forEach(t=>{let n=r.getObjectByName(t);n&&(this.interactiveObjects=this.interactiveObjects.filter(i=>i.target!==n))}):this.interactiveObjects=this.interactiveObjects.filter(t=>t.target!==r))};update=()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(n=>{n.target&&this.checkIntersection(n)}),this.interactiveObjects.sort(function(n,i){return n.distance-i.distance});let r=this.interactiveObjects.find(n=>n.intersected)??null;if(r!=this.closestObject){if(this.closestObject){let n=new rn("mouseout");this.dispatch(this.closestObject,n)}if(r){let n=new rn("mouseover");this.dispatch(r,n)}this.closestObject=r}let e;this.interactiveObjects.forEach(n=>{!n.intersected&&n.wasIntersected&&(e||(e=new rn("mouseleave")),this.dispatch(n,e))});let t;this.interactiveObjects.forEach(n=>{n.intersected&&!n.wasIntersected&&(t||(t=new rn("mouseenter")),this.dispatch(n,t))})};checkIntersection=r=>{let e=this.raycaster.intersectObjects([r.target],!0);if(r.wasIntersected=r.intersected,e.length>0){let t=e[0].distance;e.forEach(n=>{n.distance<t&&(t=n.distance)}),r.intersected=!0,r.distance=t}else r.intersected=!1};onDocumentMouseMove=r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY);let e=new rn("mousemove",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onDocumentPointerMove=r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY);let e=new rn("pointermove",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onTouchMove=r=>{r.touches.length>0&&this.mapPositionToPoint(this.mouse,r.touches[0].clientX,r.touches[0].clientY);let e=new rn(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onMouseClick=r=>{this.update();let e=new rn("click",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onMouseDown=r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY),this.update();let e=new rn("mousedown",r);this.interactiveObjects.forEach(t=>{t.intersected?(t.wasIntersectedOnMouseDown=!0,this.dispatch(t,e)):t.wasIntersectedOnMouseDown=!1})};onPointerDown=r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY),this.update();let e=new rn("pointerdown",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onTouchStart=r=>{r.touches.length>0&&this.mapPositionToPoint(this.mouse,r.touches[0].clientX,r.touches[0].clientY),this.update();let e=new rn(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onMouseUp=r=>{let e=new rn("mouseup",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onPointerUp=r=>{let e=new rn("pointerup",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onTouchEnd=r=>{r.touches.length>0&&this.mapPositionToPoint(this.mouse,r.touches[0].clientX,r.touches[0].clientY),this.update();let e=new rn(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};dispatch=(r,e)=>{r.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=r.distance,e.intersected=r.intersected,e.wasIntersected=r.wasIntersected,e.wasIntersectedOnMouseDown=r.wasIntersectedOnMouseDown,r.target.dispatchEvent(e))};mapPositionToPoint=(r,e,t)=>{let n=this.renderer.domElement.getBoundingClientRect();r.x=(e-n.left)/n.width*2-1,r.y=-((t-n.top)/n.height)*2+1}};function mi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sr={duration:.5,overwrite:!1,delay:0},ih,zt,_t,Fn=1e8,ct=1/Fn,xc=Math.PI*2,pS=xc/4,mS=0,vf=Math.sqrt,_S=Math.cos,gS=Math.sin,Bt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},Si=function(e){return typeof e=="number"},sh=function(e){return typeof e>"u"},ri=function(e){return typeof e=="object"},ln=function(e){return e!==!1},rh=function(){return typeof window<"u"},Ua=function(e){return Et(e)||Bt(e)},yf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yt=Array.isArray,xS=/random\([^)]+\)/g,vS=/,\s*/g,sd=/(?:-?\.?\d|\.)+/gi,Mf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sf=/[+-]=-?[.\d]+/,yS=/[^,'"\[\]\s]+/gi,MS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,Kn,vc,ah,wn={},eo={},bf,Tf=function(e){return(eo=rr(e,wn))&&fn},oh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yr=function(e,t){return!t&&console.warn(e)},Ef=function(e,t){return e&&(wn[e]=t)&&eo&&(eo[e]=t)||wn},qr=function(){return 0},SS={suppressEvents:!0,isStart:!0,kill:!1},Ha={suppressEvents:!0,kill:!1},bS={suppressEvents:!0},lh={},ki=[],yc={},Af,xn={},hl={},rd=30,Wa=[],ch="",hh=function(e){var t=e[0],n,i;if(ri(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wa.length;i--&&!Wa[i].targetTest(t););n=Wa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zf(e[i],n)))||e.splice(i,1);return e},ds=function(e){return e._gsap||hh(On(e))[0]._gsap},wf=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():sh(n)&&e.getAttribute&&e.getAttribute(t)||n},cn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},xt=function(e){return Math.round(e*1e7)/1e7||0},Xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},TS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},to=function(){var e=ki.length,t=ki.slice(0),n,i;for(yc={},ki.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},uh=function(e){return!!(e._initted||e._startAt||e.add)},Rf=function(e,t,n,i){ki.length&&!zt&&to(),e.render(t,n,!!(zt&&t<0&&uh(e))),ki.length&&!zt&&to()},Cf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yS).length<2?t:Bt(e)?e.trim():e},Pf=function(e){return e},Rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ES=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},rr=function(e,t){for(var n in t)e[n]=t[n];return e},ad=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ri(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},no=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Fr=function(e){var t=e.parent||vt,n=e.keyframes?ES(Yt(e.keyframes)):Rn;if(ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},AS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},If=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},go=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Gi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mc=function(e,t,n,i){return e._startAt&&(zt?e._startAt.revert(Ha):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},RS=function r(e){return!e||e._ts&&r(e.parent)},od=function(e){return e._repeat?ar(e._tTime,e=e.duration()+e._rDelay)*e:0},ar=function(e,t){var n=Math.floor(e=xt(e/t));return e&&n===e?n-1:n},io=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xo=function(e){return e._end=xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},vo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xo(e),n._dirty||fs(n,e)),e},Df=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=io(e.rawTime(),t),(!t._dur||ia(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),fs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},Jn=function(e,t,n,i){return t.parent&&Gi(t),t._start=xt((Si(n)?n:n||e!==vt?In(e,n,t):e._time)+t._delay),t._end=xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),If(e,t,"_first","_last",e._sort?"_start":0),Sc(t)||(e._recent=t),i||Df(e,t),e._ts<0&&vo(e,e._tTime),e},Lf=function(e,t){return(wn.ScrollTrigger||oh("scrollTrigger",t))&&wn.ScrollTrigger.create(t,e)},Nf=function(e,t,n,i,s){if(fh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Af!==yn.frame)return ki.push(e),e._lazy=[s,i],1},CS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Sc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},PS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&CS(e)&&!(!e._initted&&Sc(e))||(e._ts<0||e._dp._ts<0)&&!Sc(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=ia(0,e._tDur,t),h=ar(l,o),e._yoyo&&h&1&&(a=1-a),h!==ar(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||zt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&Nf(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Mc(e,t,n,!0),e._onUpdate&&!n&&Mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Gi(e,1),!n&&!zt&&(Mn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},IS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},or=function(e,t,n,i){var s=e._repeat,a=xt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:xt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&vo(e,e._tTime=e._tDur*o),e.parent&&xo(e),n||fs(e.parent,e),e},ld=function(e){return e instanceof $t?fs(e):or(e,e._dur)},DS={_start:0,endTime:qr,totalDuration:qr},In=function r(e,t,n){var i=e.labels,s=e._recent||DS,a=e.duration()>=Fn?s.endTime(!1):e._dur,o,l,c;return Bt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Yt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Or=function(e,t,n){var i=Si(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;a.immediateRender=ln(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Pt(t[0],a,t[s+1])},qi=function(e,t){return e||e===0?t(e):t},ia=function(e,t,n){return n<e?e:n>t?t:n},Wt=function(e,t){return!Bt(e)||!(t=MS.exec(e))?"":t[1]},LS=function(e,t,n){return qi(n,function(i){return ia(e,t,i)})},bc=[].slice,Uf=function(e,t){return e&&ri(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ri(e[0]))&&!e.nodeType&&e!==Kn},NS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Bt(i)&&!t||Uf(i,1)?(s=n).push.apply(s,On(i)):n.push(i)})||n},On=function(e,t,n){return _t&&!t&&_t.selector?_t.selector(e):Bt(e)&&!n&&(vc||!lr())?bc.call((t||ah).querySelectorAll(e),0):Yt(e)?NS(e,n):Uf(e)?bc.call(e,0):e?[e]:[]},Tc=function(e){return e=On(e)[0]||Yr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return On(t,n.querySelectorAll?n:n===e?Yr("Invalid scope")||ah.createElement("div"):e)}},Ff=function(e){return e.sort(function(){return .5-Math.random()})},Of=function(e){if(Et(e))return e;var t=ri(e)?e:{each:e},n=ps(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Bt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||t).length,m=a[_],p,y,S,M,b,w,A,R,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Fn])[1],!x){for(A=-Fn;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=l?Math.min(x,_)*h-.5:i%x,y=x===Fn?0:l?_*u/x-.5:i/x|0,A=0,R=Fn,w=0;w<_;w++)S=w%x-p,M=y-(w/x|0),m[w]=b=c?Math.abs(c==="y"?M:S):vf(S*S+M*M),b>A&&(A=b),b<R&&(R=b);i==="random"&&Ff(m),m.max=A-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Wt(t.amount||t.each)||0,n=n&&_<0?qf(n):n}return _=(m[d]-m.min)/m.max||0,xt(m.b+(n?n(_):_)*m.v)+m.u}},Ec=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Si(n)?0:Wt(n))}},Bf=function(e,t){var n=Yt(e),i,s;return!n&&ri(e)&&(i=n=e.radius||Fn,e.values?(e=On(e.values),(s=!Si(e[0]))&&(i*=i)):e=Ec(e.increment)),qi(t,n?Et(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Fn,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:a,s||h===a||Si(a)?h:h+Wt(a)}:Ec(e))},kf=function(e,t,n,i){return qi(Yt(e)?!t:n===!0?!!(n=0):!i,function(){return Yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},US=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},FS=function(e,t){return function(n){return e(parseFloat(n))+(t||Wt(n))}},OS=function(e,t,n){return Vf(e,t,0,1,n)},zf=function(e,t,n){return qi(n,function(i){return e[~~t(i)]})},BS=function r(e,t,n){var i=t-e;return Yt(e)?zf(e,r(0,e.length),t):qi(n,function(s){return(i+(s-e)%i)%i+e})},kS=function r(e,t,n){var i=t-e,s=i*2;return Yt(e)?zf(e,r(0,e.length-1),t):qi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},jr=function(e){return e.replace(xS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(vS);return kf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Vf=function(e,t,n,i,s){var a=t-e,o=i-n;return qi(s,function(l){return n+((l-e)/a*o||0)})},zS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Bt(e),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Yt(e)&&!Yt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=rr(Yt(e)?[]:{},e));if(!h){for(l in t)dh.call(o,e,l,"get",t[l]);s=function(g){return _h(g,o)||(a?e.p:e)}}}return qi(n,s)},cd=function(e,t,n){var i=e.labels,s=Fn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Mn=function(e,t,n){var i=e.vars,s=i[t],a=_t,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ki.length&&to(),o&&(_t=o),h=l?s.apply(c,l):s.call(c),_t=a,h},Pr=function(e){return Gi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&Mn(e,"onInterrupt"),e},zs,Gf=[],Hf=function(e){if(e)if(e=!e.name&&e.default||e,rh()||e.headless){var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qr,render:_h,add:dh,kill:nb,modifier:tb,rawVars:0},a={targetTest:0,get:0,getSetter:mh,aliases:{},register:0};if(lr(),e!==i){if(xn[t])return;Rn(i,Rn(no(e,s),a)),rr(i.prototype,rr(s,no(e,a))),xn[i.prop=t]=i,e.targetTest&&(Wa.push(i),lh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ef(t,i),e.register&&e.register(fn,i,hn)}else Gf.push(e)},lt=255,Ir={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},ul=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Wf=function(e,t,n){var i=e?Si(e)?[e>>16,e>>8&lt,e&lt]:0:Ir.black,s,a,o,l,c,h,u,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ir[e])i=Ir[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(sd),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=ul(l+1/3,s,a),i[1]=ul(l,s,a),i[2]=ul(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Mf),n&&i.length<4&&(i[3]=1),i}else i=e.match(sd)||Ir.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/lt,a=i[1]/lt,o=i[2]/lt,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Xf=function(e){var t=[],n=[],i=-1;return e.split(zi).forEach(function(s){var a=s.match(ks)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},hd=function(e,t,n){var i="",s=(e+i).match(zi),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Wf(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Xf(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(zi,"1").split(ks),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(zi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},zi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ir)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),VS=/hsl[a]?\(/,Yf=function(e){var t=e.join(" "),n;if(zi.lastIndex=0,zi.test(t))return n=VS.test(t),e[1]=hd(e[1],n),e[0]=hd(e[0],n,Xf(e[1])),!0},Kr,yn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,g=function _(m){var p=r()-i,y=m===!0,S,M,b,w;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,S=b-a,(S>0||y)&&(w=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=S+(S>=s?4:s-S),M=1),y||(l=c(_)),M)for(f=0;f<o.length;f++)o[f](b,d,w,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){bf&&(!vc&&rh()&&(Kn=vc=window,ah=Kn.document||{},wn.gsap=fn,(Kn.gsapVersions||(Kn.gsapVersions=[])).push(fn.version),Tf(eo||Kn.GreenSockGlobals||!Kn.gsap&&Kn||{}),Gf.forEach(Hf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Kr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Kr=0,c=qr},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,y){var S=p?function(M,b,w,A){m(M,b,w,A),u.remove(S)}:m;return u.remove(m),o[y?"unshift":"push"](S),lr(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u})(),lr=function(){return!Kr&&yn.wake()},Ye={},GS=/^[\d.\-M][\d.\-,\s]/,HS=/["']/g,WS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(HS,"").trim():+c,i=l.substr(o+1).trim();return t},XS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},YS=function(e){var t=(e+"").split("("),n=Ye[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[WS(t[1])]:XS(e).split(",").map(Cf)):Ye._CE&&GS.test(e)?Ye._CE("",e):n},qf=function(e){return function(t){return 1-e(1-t)}},jf=function r(e,t){for(var n=e._first,i;n;)n instanceof $t?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ps=function(e,t){return e&&(Et(e)?e:Ye[e]||YS(e))||t},gs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return cn(e,function(o){Ye[o]=wn[o]=s,Ye[a=o.toLowerCase()]=n;for(var l in s)Ye[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[o+"."+l]=s[l]}),s},Kf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},dl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/xc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*gS((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Kf(o);return s=xc/s,l.config=function(c,h){return r(e,c,h)},l},fl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Kf(n);return i.config=function(s){return r(e,s)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;gs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;gs("Elastic",dl("in"),dl("out"),dl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};gs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);gs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});gs("Circ",function(r){return-(vf(1-r*r)-1)});gs("Sine",function(r){return r===1?1:-_S(r*pS)+1});gs("Back",fl("in"),fl("out"),fl());Ye.SteppedEase=Ye.steps=wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ct;return function(o){return((i*ia(0,a,o)|0)+s)*n}}};sr.ease=Ye["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ch+=r+","+r+"Params,"});var Zf=function(e,t){this.id=mS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wf,this.set=t?t.getSetter:mh},Zr=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,or(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),Kr||yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,or(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(lr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vo(this,n),!s._dp||s.parent||Df(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+od(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+od(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ar(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?io(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(ia(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),xo(this),wS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(lr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=xt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Jn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?io(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bS);var i=zt;return zt=n,uh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ld(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ld(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(In(this,n),ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i)),this._dur||(this._zTime=-ct),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ct)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Et(n)?n:Pf,l=function(){var h=i.then;i.then=null,s&&s(),Et(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Pr(this)},r})();Rn(Zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var $t=(function(r){xf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ln(n.sortChildren),vt&&Jn(n.parent||vt,mi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Lf(mi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Or(0,arguments,this),this},t.from=function(i,s,a){return Or(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Or(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Fr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(i,s,In(this,a),1),this},t.call=function(i,s,a){return Jn(this,Pt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Pt(i,a,In(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Fr(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Fr(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:xt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,y,S,M,b,w,A;if(this!==vt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,M=this._start,S=this._ts,p=!S,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=xt(h%m),h===l?(_=this._repeat,d=c):(b=xt(h/m),_=~~b,_&&_===b&&(d=c,_--),d>c&&(d=c)),b=ar(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),w&&_&1&&(d=c-d,A=1),_!==b&&!this._lock){var R=w&&b&1,x=R===(w&&_&1);if(_<b&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(A?0:xt(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;jf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=IS(this,xt(o),xt(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!b&&(Mn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){y=0,g&&(h+=this._zTime=-ct);break}}f=g}else{f=this._last;for(var T=i<0?i:d;f;){if(g=f._prev,(f._act||T<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,s,a||zt&&uh(f)),d!==this._time||!this._ts&&!p){y=0,g&&(h+=this._zTime=T?-ct:ct);break}}f=g}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-ct)._zTime=d>=o?1:-1,this._ts))return this._start=M,xo(this),this.render(i,s,a);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Gi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Mn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Si(s)||(s=In(this,s,i)),!(i instanceof Zr)){if(Yt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Bt(i))return this.addLabel(i,s);if(Et(i))i=Pt.delayedCall(0,i);else return this}return this!==i?Jn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Fn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Bt(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(i.parent===this&&go(this,i),i===this._recent&&(this._recent=this._last),fs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=In(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Pt.delayedCall(0,s||qr,a);return o.data="isPause",this._hasPause=1,Jn(this,o,In(this,i))},t.removePause=function(i){var s=this._first;for(i=In(this,i);s;)s._start===i&&s.data==="isPause"&&Gi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Fi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=On(i),l=this._first,c=Si(s),h;l;)l instanceof Pt?TS(l._targets,o)&&(c?(!Fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=In(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Pt.to(a,Rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&or(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Rn({startAt:{time:In(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),cd(this,In(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),cd(this,In(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=xt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return fs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Fn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Jn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=xt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;or(a,a===vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(vt._ts&&(Rf(vt,io(i,vt)),Af=yn.frame),yn.frame>=rd){rd+=En.autoSleep||120;var s=vt._first;if((!s||!s._ts)&&En.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},e})(Zr);Rn($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var qS=function(e,t,n,i,s,a,o){var l=new hn(this._pt,e,t,0,1,np,null,s),c=0,h=0,u,d,f,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=jr(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),d=n.match(cl)||[];u=cl.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Xs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=cl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Sf.test(i)||p)&&(l.e=0),this._pt=l,l},dh=function(e,t,n,i,s,a,o,l,c,h){Et(i)&&(i=i(s||0,e,a));var u=e[t],d=n!=="get"?n:Et(u)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Et(u)?c?JS:ep:ph,g;if(Bt(i)&&(~i.indexOf("random(")&&(i=jr(i)),i.charAt(1)==="="&&(g=Xs(d,i)+(Wt(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Ac)return!isNaN(d*i)&&i!==""?(g=new hn(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?eb:tp,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&oh(t,i),qS.call(this,e,t,d,i,f,l||En.stringFilter,c))},jS=function(e,t,n,i,s){if(Et(e)&&(e=Br(e,s,t,n,i)),!ri(e)||e.style&&e.nodeType||Yt(e)||yf(e))return Bt(e)?Br(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Br(e[o],s,t,n,i);return a},$f=function(e,t,n,i,s,a){var o,l,c,h;if(xn[e]&&(o=new xn[e]).init(s,o.rawVars?t[e]:jS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new hn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==zs))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Fi,Ac,fh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!ih,M=e.timeline,b,w,A,R,x,T,P,O,L,z,G,B,k;if(M&&(!d||!s)&&(s="none"),e._ease=ps(s,sr.ease),e._yEase=u?qf(ps(u===!0?s:u,sr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(O=m[0]?ds(m[0]).harness:0,B=O&&i[O.prop],b=no(i,lh),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?Ha:SS),_._lazy=0),a){if(Gi(e._startAt=Pt.set(m,Rn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ln(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!o&&!f)&&e._startAt.revert(Ha),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),A=Rn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ln(l),immediateRender:o,stagger:0,parent:p},b),B&&(A[O.prop]=B),Gi(e._startAt=Pt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(Ha):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ln(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],P=x._gsap||hh(m)[w]._gsap,e._ptLookup[w]=z={},yc[P.id]&&ki.length&&to(),G=y===m?w:y.indexOf(x),O&&(L=new O).init(x,B||b,e,G,y)!==!1&&(e._pt=R=new hn(e._pt,x,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(q){z[q]=R}),L.priority&&(T=1)),!O||B)for(A in b)xn[A]&&(L=$f(A,b,e,G,x,y))?L.priority&&(T=1):z[A]=R=dh.call(e,x,A,"get",b[A],G,y,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),S&&e._pt&&(Fi=e,vt.killTweensOf(x,z,e.globalTime(t)),k=!e.parent,Fi=0),e._pt&&l&&(yc[P.id]=1)}T&&ip(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,d&&t<=0&&M.render(Fn,!0,!0)},KS=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ac=1,e.vars[t]="+=0",fh(e,o),Ac=0,l?Yr(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=At(n)+Wt(u.e)),u.b&&(u.b=h.s+Wt(u.b))},ZS=function(e,t){var n=e[0]?ds(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=rr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},$S=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Yt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Br=function(e,t,n,i,s){return Et(e)?e.call(t,n,i,s):Bt(e)&&~e.indexOf("random(")?jr(e):e},Jf=ch+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qf={};cn(Jf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Qf[r]=1});var Pt=(function(r){xf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Fr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||vt,S=(Yt(n)||yf(n)?Si(n[0]):"length"in i)?[n]:On(n),M,b,w,A,R,x,T,P;if(o._targets=S.length?hh(S):Yr("GSAP target "+n+" not found. https://gsap.com",!En.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Ua(c)||Ua(h)){if(i=o.vars,M=o.timeline=new $t({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:S}),M.kill(),M.parent=M._dp=mi(o),M._start=0,d||Ua(c)||Ua(h)){if(A=S.length,T=d&&Of(d),ri(d))for(R in d)~Jf.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(b=0;b<A;b++)w=no(i,Qf),w.stagger=0,p&&(w.yoyoEase=p),P&&rr(w,P),x=S[b],w.duration=+Br(c,mi(o),b,x,S),w.delay=(+Br(h,mi(o),b,x,S)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),M.to(x,w,T?T(b,x,S):0),M._ease=Ye.none;M.duration()?c=h=0:o.timeline=0}else if(g){Fr(Rn(M.vars.defaults,{ease:"none"})),M._ease=ps(g.ease||i.ease||"none");var O=0,L,z,G;if(Yt(g))g.forEach(function(B){return M.to(S,B,">")}),M.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||$S(R,g[R],w,g.easeEach);for(R in w)for(L=w[R].sort(function(B,k){return B.t-k.t}),O=0,b=0;b<L.length;b++)z=L[b],G={ease:z.e,duration:(z.t-(b?L[b-1].t:0))/100*c},G[R]=z.v,M.to(S,G,O),O+=G.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return f===!0&&!ih&&(Fi=mi(o),vt.killTweensOf(S),Fi=0),Jn(y,mi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===xt(y._time)&&ln(u)&&RS(mi(o))&&y.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-h)||0)),m&&Lf(mi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ct&&!h?l:i<ct?0:i,d,f,g,_,m,p,y,S,M;if(!c)PS(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(d=xt(u%_),u===l?(g=this._repeat,d=c):(m=xt(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(M=this._yEase,d=c-d),m=ar(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(S&&this._yEase&&jf(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(xt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Nf(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!o&&u&&!s&&!m&&(Mn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Mc(this,i,s,a),Mn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Mc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Gi(this,1),!s&&!(h&&!o)&&(u||o||p)&&(Mn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Kr||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||fh(this,c),h=this._ease(c/this._dur),KS(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(vo(this,0),this.parent||If(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Pr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Fi&&Fi.vars.overwrite!==!0)._first||Pr(this),this.parent&&a!==this.timeline.totalDuration()&&or(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?On(i):o,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&AS(o,l))return s==="all"&&(this._pt=0),Pr(this);for(u=this._op=this._op||[],s!=="all"&&(Bt(s)&&(_={},cn(s,function(y){return _[y]=1}),s=_),s=ZS(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&go(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Pr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Or(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Or(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return vt.killTweensOf(i,s,a)},e})(Zr);Rn(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(r){Pt[r]=function(){var e=new $t,t=bc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ph=function(e,t,n){return e[t]=n},ep=function(e,t,n){return e[t](n)},JS=function(e,t,n,i){return e[t](i.fp,n)},QS=function(e,t,n){return e.setAttribute(t,n)},mh=function(e,t){return Et(e[t])?ep:sh(e[t])&&e.setAttribute?QS:ph},tp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},eb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},np=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_h=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},tb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},nb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?go(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ib=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ip=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},hn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||tp,this.d=l||this,this.set=c||ph,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ib,this.m=n,this.mt=s,this.tween=i},r})();cn(ch+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return lh[r]=1});wn.TweenMax=wn.TweenLite=Pt;wn.TimelineLite=wn.TimelineMax=$t;vt=new $t({sortChildren:!1,defaults:sr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=Yf;var ms=[],Xa={},sb=[],ud=0,rb=0,pl=function(e){return(Xa[e]||sb).map(function(t){return t()})},wc=function(){var e=Date.now(),t=[];e-ud>2&&(pl("matchMediaInit"),ms.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Kn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),pl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ud=e,pl("matchMedia"))},sp=(function(){function r(t,n){this.selector=n&&Tc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=rb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Et(n)&&(s=i,i=n,n=Et);var a=this,o=function(){var c=_t,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Tc(s)),_t=a,u=i.apply(a,arguments),Et(u)&&a._r.push(u),_t=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Et?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=_t;_t=null,n(this),_t=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Pt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof $t?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ms.length;a--;)ms[a].id===this.id&&ms.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),ab=(function(){function r(t){this.contexts=[],this.scope=t,_t&&_t.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ri(n)||(n={matches:n});var a=new sp(0,s||this.scope),o=a.conditions={},l,c,h;_t&&!a.selector&&(a.selector=_t.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Kn.matchMedia(n[c]),l&&(ms.indexOf(a)<0&&ms.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(wc):l.addEventListener("change",wc)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),so={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Hf(i)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,t){return vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Bt(e)&&(e=On(e)[0]);var s=ds(e||{}).get,a=n?Pf:Cf;return n==="native"&&(n=""),e&&(t?a((xn[t]&&xn[t].get||s)(e,t,n,i)):function(o,l,c){return a((xn[o]&&xn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=On(e),e.length>1){var i=e.map(function(h){return fn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var a=xn[t],o=ds(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;zs._pt=0,u.init(e,n?h+n:h,zs,0,[e]),u.render(1,u),zs._pt&&_h(1,zs)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=fn.to(e,Rn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,sr.ease)),ad(sr,e||{})},config:function(e){return ad(En,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!xn[o]&&!wn[o]&&Yr(t+" effect requires "+o+" plugin.")}),hl[t]=function(o,l,c){return n(On(o),Rn(l||{},s),c)},a&&($t.prototype[t]=function(o,l,c){return this.add(hl[t](o,ri(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ye[e]=ps(t)},parseEase:function(e,t){return arguments.length?ps(e,t):Ye},getById:function(e){return vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new $t(e),i,s;for(n.smoothChildTiming=ln(e.smoothChildTiming),vt.remove(n),n._dp=0,n._time=n._tTime=vt._time,i=vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Pt&&i.vars.onComplete===i._targets[0]))&&Jn(n,i,i._start-i._delay),i=s;return Jn(vt,n,0),n},context:function(e,t){return e?new sp(e,t):_t},matchMedia:function(e){return new ab(e)},matchMediaRefresh:function(){return ms.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||wc()},addEventListener:function(e,t){var n=Xa[e]||(Xa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:BS,wrapYoyo:kS,distribute:Of,random:kf,snap:Bf,normalize:OS,getUnit:Wt,clamp:LS,splitColor:Wf,toArray:On,selector:Tc,mapRange:Vf,pipe:US,unitize:FS,interpolate:zS,shuffle:Ff},install:Tf,effects:hl,ticker:yn,updateRoot:$t.updateRoot,plugins:xn,globalTimeline:vt,core:{PropTween:hn,globals:Ef,Tween:Pt,Timeline:$t,Animation:Zr,getCache:ds,_removeLinkedListItem:go,reverting:function(){return zt},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return ih=e}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return so[r]=Pt[r]});yn.add($t.updateRoot);zs=so.to({},{duration:0});var ob=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},lb=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ob(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ml=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Bt(s)&&(l={},cn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}lb(o,s)}}}},fn=so.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ml("roundProps",Ec),ml("modifiers"),ml("snap",Bf))||so;Pt.version=$t.version=fn.version="3.14.2";bf=1;rh()&&lr();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;var dd,Oi,Ys,gh,hs,fd,xh,cb=function(){return typeof window<"u"},bi={},rs=180/Math.PI,qs=Math.PI/180,Us=Math.atan2,pd=1e8,vh=/([A-Z])/g,hb=/(left|right|width|margin|padding|x)/i,ub=/[\s,\(]\S/,ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},db=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},rp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ap=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_b=function(e,t,n){return e.style[t]=n},gb=function(e,t,n){return e.style.setProperty(t,n)},xb=function(e,t,n){return e._gsap[t]=n},vb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Mb=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},yt="transform",un=yt+"Origin",Sb=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in bi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=_i(i,o)}):this.tfm[e]=a.x?a[e]:_i(i,e),e===un&&(this.tfm.zOrigin=a.zOrigin);else return ti.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(yt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(un,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},op=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(vh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xh(),(!s||!s.isStart)&&!n[yt]&&(op(n),i.zOrigin&&n[un]&&(n[un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},lp=function(e,t){var n={target:e,props:[],revert:bb,save:Sb};return e._gsap||fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},cp,Cc=function(e,t){var n=Oi.createElementNS?Oi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Oi.createElement(e);return n&&n.style?n:Oi.createElement(e)},Sn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(vh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,cr(t)||t,1)||""},md="O,Moz,ms,Ms,Webkit".split(","),cr=function(e,t,n){var i=t||hs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(md[a]+e in s););return a<0?null:(a===3?"ms":a>=0?md[a]:"")+e},Pc=function(){cb()&&window.document&&(dd=window,Oi=dd.document,Ys=Oi.documentElement,hs=Cc("div")||{style:{}},Cc("div"),yt=cr(yt),un=yt+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cp=!!cr("perspective"),xh=fn.core.reverting,gh=1)},_d=function(e){var t=e.ownerSVGElement,n=Cc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ys.removeChild(n),s},gd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hp=function(e){var t,n;try{t=e.getBBox()}catch{t=_d(e),n=1}return t&&(t.width||t.height)||n||(t=_d(e)),t&&!t.width&&!t.x&&!t.y?{x:+gd(e,["x","cx","x1"])||0,y:+gd(e,["y","cy","y1"])||0,width:0,height:0}:t},up=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hp(e))},Hi=function(e,t){if(t){var n=e.style,i;t in bi&&t!==un&&(t=yt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(vh,"-$1").toLowerCase())):n.removeAttribute(t)}},Bi=function(e,t,n,i,s,a){var o=new hn(e._pt,t,n,0,1,a?ap:rp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},xd={deg:1,rad:1,turn:1},Tb={grid:1,flex:1},Wi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=hs.style,l=hb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||xd[i]||xd[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&up(e),(f||a==="%")&&(bi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],At(f?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Oi||!_.appendChild)&&(_=Oi.body),m=_._gsap,m&&f&&m.width&&l&&m.time===yn.time&&!m.uncache)return At(s/m.width*u);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+i,g=e[h],y?e.style[t]=y:Hi(e,t)}else(f||a==="%")&&!Tb[Sn(_,"display")]&&(o.position=Sn(e,"position")),_===e&&(o.position="static"),_.appendChild(hs),g=hs[h],_.removeChild(hs),o.position="absolute";return l&&f&&(m=ds(_),m.time=yn.time,m.width=_[h]),At(d?g*s/u:g&&s?u/g*s:0)},_i=function(e,t,n,i){var s;return gh||Pc(),t in ti&&t!=="transform"&&(t=ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),bi[t]&&t!=="transform"?(s=Jr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ao(Sn(e,un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ro[t]&&ro[t](e,t,n)||Sn(e,t)||wf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Wi(e,t,s,n)+n:s},Eb=function(e,t,n,i){if(!n||n==="none"){var s=cr(t,e,1),a=s&&Sn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Sn(e,"borderTopColor"))}var o=new hn(this._pt,e.style,t,0,1,np),l=0,c=0,h,u,d,f,g,_,m,p,y,S,M,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Sn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Sn(e,t)||i,_?e.style[t]=_:Hi(e,t)),h=[n,i],Yf(h),n=h[0],i=h[1],d=n.match(ks)||[],b=i.match(ks)||[],b.length){for(;u=ks.exec(i);)m=u[0],y=i.substring(l,u.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,M=_.substr((f+"").length),m.charAt(1)==="="&&(m=Xs(f,m)+M),p=parseFloat(m),S=m.substr((p+"").length),l=ks.lastIndex-S.length,S||(S=S||En.units[t]||M,l===i.length&&(i+=S,o.e+=S)),M!==S&&(f=Wi(e,t,_,S)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?ap:rp;return Sf.test(i)&&(o.e=0),this._pt=o,o},vd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ab=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vd[n]||n,t[1]=vd[i]||i,t.join(" ")},wb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],bi[o]&&(l=1,o=o==="transformOrigin"?un:yt),Hi(n,o);l&&(Hi(n,yt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Jr(n,1),a.uncache=1,op(i)))}},ro={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new hn(e._pt,t,n,0,0,wb);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},$r=[1,0,0,1,0,0],dp={},fp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yd=function(e){var t=Sn(e,yt);return fp(t)?$r:t.substr(7).match(Mf).map(At)},yh=function(e,t){var n=e._gsap||ds(e),i=e.style,s=yd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?$r:s):(s===$r&&!e.offsetParent&&e!==Ys&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ys.appendChild(e)),s=yd(e),l?i.display=l:Hi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ys.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ic=function(e,t,n,i,s,a){var o=e._gsap,l=s||yh(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],S=t.split(" "),M=parseFloat(S[0])||0,b=parseFloat(S[1])||0,w,A,R,x;n?l!==$r&&(A=f*m-g*_)&&(R=M*(m/A)+b*(-_/A)+(_*y-m*p)/A,x=M*(-g/A)+b*(f/A)-(f*y-g*p)/A,M=R,b=x):(w=hp(e),M=w.x+(~S[0].indexOf("%")?M/100*w.width:M),b=w.y+(~(S[1]||S[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(p=M-c,y=b-h,o.xOffset=u+(p*f+y*_)-p,o.yOffset=d+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[un]="0px 0px",a&&(Bi(a,o,"xOrigin",c,M),Bi(a,o,"yOrigin",h,b),Bi(a,o,"xOffset",u,o.xOffset),Bi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+b)},Jr=function(e,t){var n=e._gsap||new Zf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Sn(e,un)||"0",h,u,d,f,g,_,m,p,y,S,M,b,w,A,R,x,T,P,O,L,z,G,B,k,q,ne,ee,oe,Ee,we,He,qe;return h=u=d=_=m=p=y=S=M=0,f=g=1,n.svg=!!(e.getCTM&&up(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),i.scale=i.rotate=i.translate="none"),A=yh(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Ic(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,w=n.yOrigin||0,A!==$r&&(P=A[0],O=A[1],L=A[2],z=A[3],h=G=A[4],u=B=A[5],A.length===6?(f=Math.sqrt(P*P+O*O),g=Math.sqrt(z*z+L*L),_=P||O?Us(O,P)*rs:0,y=L||z?Us(L,z)*rs+_:0,y&&(g*=Math.abs(Math.cos(y*qs))),n.svg&&(h-=b-(b*P+w*L),u-=w-(b*O+w*z))):(qe=A[6],we=A[7],ee=A[8],oe=A[9],Ee=A[10],He=A[11],h=A[12],u=A[13],d=A[14],R=Us(qe,Ee),m=R*rs,R&&(x=Math.cos(-R),T=Math.sin(-R),k=G*x+ee*T,q=B*x+oe*T,ne=qe*x+Ee*T,ee=G*-T+ee*x,oe=B*-T+oe*x,Ee=qe*-T+Ee*x,He=we*-T+He*x,G=k,B=q,qe=ne),R=Us(-L,Ee),p=R*rs,R&&(x=Math.cos(-R),T=Math.sin(-R),k=P*x-ee*T,q=O*x-oe*T,ne=L*x-Ee*T,He=z*T+He*x,P=k,O=q,L=ne),R=Us(O,P),_=R*rs,R&&(x=Math.cos(R),T=Math.sin(R),k=P*x+O*T,q=G*x+B*T,O=O*x-P*T,B=B*x-G*T,P=k,G=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=At(Math.sqrt(P*P+O*O+L*L)),g=At(Math.sqrt(B*B+qe*qe)),R=Us(G,B),y=Math.abs(R)>2e-4?R*rs:0,M=He?1/(He<0?-He:He):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fp(Sn(e,yt)),k&&e.setAttribute("transform",k))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=At(f),n.scaleY=At(g),n.rotation=At(_)+o,n.rotationX=At(m)+o,n.rotationY=At(p)+o,n.skewX=y+o,n.skewY=S+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[un]=ao(c)),n.xOffset=n.yOffset=0,n.force3D=En.force3D,n.renderTransform=n.svg?Cb:cp?pp:Rb,n.uncache=0,n},ao=function(e){return(e=e.split(" "))[0]+" "+e[1]},_l=function(e,t,n){var i=Wt(t);return At(parseFloat(t)+parseFloat(Wi(e,"x",n+"px",i)))+i},Rb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pp(e,t)},is="0deg",Ar="0px",ss=") ",pp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,S=n.zOrigin,M="",b=p==="auto"&&e&&e!==1||p===!0;if(S&&(u!==is||h!==is)){var w=parseFloat(h)*qs,A=Math.sin(w),R=Math.cos(w),x;w=parseFloat(u)*qs,x=Math.cos(w),a=_l(y,a,A*x*-S),o=_l(y,o,-Math.sin(w)*-S),l=_l(y,l,R*x*-S+S)}m!==Ar&&(M+="perspective("+m+ss),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(b||a!==Ar||o!==Ar||l!==Ar)&&(M+=l!==Ar||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ss),c!==is&&(M+="rotate("+c+ss),h!==is&&(M+="rotateY("+h+ss),u!==is&&(M+="rotateX("+u+ss),(d!==is||f!==is)&&(M+="skew("+d+", "+f+ss),(g!==1||_!==1)&&(M+="scale("+g+", "+_+ss),y.style[yt]=M||"translate(0, 0)"},Cb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,S=parseFloat(a),M=parseFloat(o),b,w,A,R,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=qs,c*=qs,b=Math.cos(l)*u,w=Math.sin(l)*u,A=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=qs,x=Math.tan(c-h),x=Math.sqrt(1+x*x),A*=x,R*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),b*=x,w*=x)),b=At(b),w=At(w),A=At(A),R=At(R)):(b=u,R=d,w=A=0),(S&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(S=Wi(f,"x",a,"px"),M=Wi(f,"y",o,"px")),(g||_||m||p)&&(S=At(S+g-(g*b+_*A)+m),M=At(M+_-(g*w+_*R)+p)),(i||s)&&(x=f.getBBox(),S=At(S+i/100*x.width),M=At(M+s/100*x.height)),x="matrix("+b+","+w+","+A+","+R+","+S+","+M+")",f.setAttribute("transform",x),y&&(f.style[yt]=x)},Pb=function(e,t,n,i,s){var a=360,o=Bt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?rs:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*pd)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*pd)%a-~~(c/a)*a)),e._pt=d=new hn(e._pt,t,n,i,c,db),d.e=h,d.u="deg",e._props.push(n),d},Md=function(e,t){for(var n in t)e[n]=t[n];return e},Ib=function(e,t,n){var i=Md({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[yt]=t,o=Jr(n,1),Hi(n,yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yt],a[yt]=t,o=Jr(n,1),a[yt]=c);for(l in bi)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Wt(c),g=Wt(h),u=f!==g?Wi(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new hn(e._pt,o,l,u,d-u,Rc),e._pt.u=g||0,e._props.push(l));Md(o,i)};cn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ro[e>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(g){return _i(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,u)}});var mp={name:"css",register:Pc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,y,S,M,b,w,A,R,x;gh||Pc(),this.styles=this.styles||lp(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(xn[_]&&$f(_,t,n,i,e,s)))){if(f=typeof h,g=ro[_],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=jr(h)),g)g(this,e,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",zi.lastIndex=0,zi.test(c)||(m=Wt(c),p=Wt(h),p?m!==p&&(c=Wi(e,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Bt(c)&&~c.indexOf("random(")&&(c=jr(c)),Wt(c+"")||c==="auto"||(c+=En.units[_]||Wt(_i(e,_))||""),(c+"").charAt(1)==="="&&(c=_i(e,_))):c=_i(e,_),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),_ in ti&&(_==="autoAlpha"&&(d===1&&_i(e,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),Bi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in bi,S){if(this.styles.save(_),x=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Sn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=h,h=Sn(e,"perspective"),T?e.style.perspective=T:Hi(e,"perspective")}u=parseFloat(h)}if(M||(b=e._gsap,b.renderTransform&&!t.parseTransform||Jr(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,M=this._pt=new hn(this._pt,o,yt,0,1,b.renderTransform,b,0,-1),M.dep=1),_==="scale")this._pt=new hn(this._pt,b,"scaleY",b.scaleY,(y?Xs(b.scaleY,y+u):u)-b.scaleY||0,Rc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(un,0,o[un]),h=Ab(h),b.svg?Ic(e,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&Bi(this,b,"zOrigin",b.zOrigin,p),Bi(this,o,_,ao(c),ao(h)));continue}else if(_==="svgOrigin"){Ic(e,h,1,w,0,this);continue}else if(_ in dp){Pb(this,b,_,d,y?Xs(d,y+h):h);continue}else if(_==="smoothOrigin"){Bi(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){Ib(this,h,e);continue}}else _ in o||(_=cr(_)||_);if(S||(u||u===0)&&(d||d===0)&&!ub.test(h)&&_ in o)m=(c+"").substr((d+"").length),u||(u=0),p=Wt(h)||(_ in En.units?En.units[_]:m),m!==p&&(d=Wi(e,_,c,p)),this._pt=new hn(this._pt,S?b:o,_,d,(y?Xs(d,y+u):u)-d,!S&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?mb:Rc),this._pt.u=p||0,S&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=pb):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=fb);else if(_ in o)Eb.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,s);else if(_!=="parseTransform"){oh(_,h);continue}S||(_ in o?R.push(_,0,o[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),a.push(_)}}A&&ip(this)},render:function(e,t){if(t.tween._time||!xh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:_i,aliases:ti,getSetter:function(e,t,n){var i=ti[t];return i&&i.indexOf(",")<0&&(t=i),t in bi&&t!==un&&(e._gsap.x||_i(e,"x"))?n&&fd===n?t==="scale"?vb:xb:(fd=n||{})&&(t==="scale"?yb:Mb):e.style&&!sh(e.style[t])?_b:~t.indexOf("-")?gb:mh(e,t)},core:{_removeProperty:Hi,_getMatrix:yh}};fn.utils.checkPrefix=cr;fn.core.getStyleSaver=lp;(function(r,e,t,n){var i=cn(r+","+e+","+t,function(s){bi[s]=1});cn(e,function(s){En.units[s]="deg",dp[s]=1}),ti[i[13]]=r+","+e,cn(n,function(s){var a=s.split(":");ti[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){En.units[r]="px"});fn.registerPlugin(mp);var Dr=fn.registerPlugin(mp)||fn;Dr.core.Tween;function Db(r,e,t){const n=new lS(t);n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight);const i=new cS(r,e);n.addPass(i);const s=new hS(10,r,e);return n.addPass(s),n}function Lb(r="Sky.hdr"){return new iS().load(r,n=>(n.mapping=Ya,n))}const Xe=r=>`/${r.replace(/^\/+/,"")}`,_p=document.getElementById("video"),gp=document.getElementById("video2"),xp=document.getElementById("video3"),vp=document.getElementById("video4"),Nb={video:"Bearghain_Video.mp4",video2:"Tunnel.mp4",video3:"Chapinero_Alto.mp4",video4:"Rosales.mp4"},Ub={"overlay-Rosales":"Rosales.mp4","overlay-Tunnel":"Tunnel.mp4","overlay-Bearghain":"Bearghain_Video.mp4","overlay-Chapinero_Alto":"Chapinero_Alto.mp4"};Object.entries(Nb).forEach(([r,e])=>{const t=document.getElementById(r);t&&(t.src=Xe(e),t.load())});Object.entries(Ub).forEach(([r,e])=>{const n=document.getElementById(r)?.querySelector("video");n&&(n.src=Xe(e),n.load())});const yp=new uo(_p),Mp=new uo(gp),Sp=new uo(xp),bp=new uo(vp);yp.colorSpace=mt;Mp.colorSpace=mt;Sp.colorSpace=mt;bp.colorSpace=mt;const Fb=[{name:"Butterfly",url:Xe("butterfly.glb"),materialType:"packed"},{name:"Column_1",url:Xe("Column_1.glb"),materialType:"phong",color:16709356},{name:"Column_2",url:Xe("Column_2.glb"),materialType:"phong",color:16709356},{name:"Glass_1",url:Xe("Glass_1.glb"),materialType:"glass"},{name:"Glass_2",url:Xe("Glass_2.glb"),materialType:"glass"},{name:"Gravel_floor_1",url:Xe("Gravel_floor_1.glb"),materialType:"phong",color:14342093},{name:"Gravel_floor_2",url:Xe("Gravel_floor_2.glb"),materialType:"phong",color:15592937},{name:"Lamp",url:Xe("Lamp.glb"),materialType:"packed"},{name:"Rock_1",url:Xe("Rock_1.glb"),materialType:"packed"},{name:"Rock_2",url:Xe("Rock_2.glb"),materialType:"packed"},{name:"Roof",url:Xe("Roof.glb"),materialType:"phong",color:16377308},{name:"Shrubs_Group_1A",url:Xe("Shrubs.glb"),materialType:"packed"},{name:"Stepping_stones_1",url:Xe("Stepping_stones_1.glb"),materialType:"packed"},{name:"Stepping_stones_2",url:Xe("Stepping_stones_2.glb"),materialType:"packed"},{name:"Stepping_stones_3",url:Xe("Stepping_stones_3.glb"),materialType:"packed"},{name:"Stepping_stones_4",url:Xe("Stepping_stones_4.glb"),materialType:"packed"},{name:"Stepping_stones_5",url:Xe("Stepping_stones_5.glb"),materialType:"packed"},{name:"Stepping_stones_6",url:Xe("Stepping_stones_6.glb"),materialType:"packed"},{name:"Three_front",url:Xe("Three_front.glb"),materialType:"packed"},{name:"Tree_back",url:Xe("Tree_back.glb"),materialType:"packed"},{name:"Tsukubai",url:Xe("Tsukubai.glb"),materialType:"packed"},{name:"Vertical_rock_1",url:Xe("Vertical_rock_1.glb"),materialType:"packed"},{name:"Vertical_rock_2",url:Xe("Vertical_rock_2.glb"),materialType:"packed"},{name:"Wall_1",url:Xe("Wall_1.glb"),materialType:"phong",color:16709356},{name:"Wall_2",url:Xe("Wall_2.glb"),materialType:"phong",color:16709356},{name:"Wall_3",url:Xe("Wall_3.glb"),materialType:"phong",color:16709356},{name:"Wall_4",url:Xe("Wall_4.glb"),materialType:"phong",color:16709356},{name:"Wall_5",url:Xe("Wall_5.glb"),materialType:"phong",color:16709356},{name:"Window_1",url:Xe("Window_1.glb"),materialType:"phong",color:16377308},{name:"Wooden_beam",url:Xe("Wooden_beam.glb"),materialType:"phong",color:16377308},{name:"Wooden_floor",url:Xe("Wooden_floor.glb"),materialType:"phong",color:16377308},{name:"Wooden_gate",url:Xe("Wooden_gate.glb"),materialType:"phong",color:16377308}],Sd={Tsukubai:{texture:bp,video:vp,overlayId:"overlay-Rosales"},Lamp:{texture:Sp,video:xp,overlayId:"overlay-Chapinero_Alto"},Vertical_rock_2:{texture:yp,video:_p,overlayId:"overlay-Bearghain"},Stepping_stones_1:{texture:Mp,video:gp,overlayId:"overlay-Tunnel"}},gl=new Set,us=new h_,Wn=new Zt(75,window.innerWidth/window.innerHeight,.1,1e3),Vi=new tM({antialias:!0}),Tp=new U(0,0,5),Ep=new U(0,0,0);Wn.position.copy(Tp);Wn.lookAt(Ep);const Ap=new fS(Vi,Wn,Vi.domElement),It=new iM(Wn,Vi.domElement);It.enableDamping=!0;It.dampingFactor=.8;It.minPolarAngle=Math.PI/2.4;It.maxPolarAngle=Math.PI/2;It.minAzimuthAngle=-Math.PI/20;It.maxAzimuthAngle=Math.PI/10;It.minDistance=4;It.maxDistance=7;const Mh={},wp=[];let bd=[],Dc="day";const Ob=new lf;Bb();function Bb(){Vi.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Vi.domElement),Db(us,Wn,Vi),Lc("day"),console.log(Mh),kb(),zb(),Rp()}function Lc(r){Dc=r,bd.forEach(n=>us.remove(n)),bd=uS(us,r);const t=Lb(Xe(r==="night"?"nightsky.hdr":"Sky.hdr"));us.background=t,us.environment=t}function kb(){Fb.forEach(r=>{new dS({name:r.name,url:r.url,scene:us,meshes:Mh,scale:new U(1,1,1),position:new U(0,0,0),materialType:r.materialType||"matcap",color:r.color||16777215,animationState:!0,mixers:wp,callback:()=>{Vb()}}).init()})}window.addEventListener("keydown",r=>{r.key==="i"&&(Wn.position.set(3,0,-.9),It.target.set(0,0,-.9),It.minAzimuthAngle=Math.PI/4,It.maxAzimuthAngle=Math.PI*3/4,It.minDistance=2,It.maxDistance=4)});window.addEventListener("keydown",r=>{r.key==="o"&&(Wn.position.copy(Tp),Wn.lookAt(Ep),It.minAzimuthAngle=-Math.PI/20,It.maxAzimuthAngle=Math.PI/10,It.minPolarAngle=Math.PI/2.4,It.maxPolarAngle=Math.PI/2,It.minDistance=4,It.maxDistance=7)});window.addEventListener("keydown",r=>{switch(r.key){case"n":Dc!=="night"&&Lc("night");break;case"d":Dc!=="day"&&Lc("day");break}});function zb(){window.addEventListener("resize",()=>{Vi.setSize(window.innerWidth,window.innerHeight),Wn.aspect=window.innerWidth/window.innerHeight,Wn.updateProjectionMatrix()})}function Rp(){const r=Ob.getDelta();for(const e of wp)e.update(r);requestAnimationFrame(Rp),Vi.render(us,Wn),It.update(),Ap.update()}function Vb(){Object.entries(Sd).forEach(([r,{texture:e,video:t,overlayId:n}])=>{if(gl.has(r))return;const i=Mh[r];if(!i)return;let s=null,a=!1;const o=i.position.y,l=document.getElementById(n),c=l?.querySelector("video");if(!l||!c){console.warn(`Overlay ${n} not found for ${r}.`);return}l.addEventListener("click",h=>{h.target===l&&(l.classList.remove("active"),c.pause(),c.currentTime=0)}),i.addEventListener("mouseover",h=>{Dr.to(i.scale,{x:1.1,y:1.1,z:1.1,duration:.75,ease:"bounce"}),Dr.to(i.position,{y:o+.2,duration:.75,ease:"bounce"}),i.traverse(u=>{u.isMesh&&(u.userData.originalMap||(u.userData.originalMap=u.material.map))}),s=setTimeout(()=>{i.traverse(u=>{u.isMesh&&(u.material.map=e,u.material.needsUpdate=!0)}),t.play(),a=!0},2e3)}),i.addEventListener("mouseout",()=>{clearTimeout(s),s=null,a=!1,Dr.to(i.scale,{x:1,y:1,z:1,duration:.75,ease:"bounce"}),Dr.to(i.position,{y:o,duration:.75,ease:"bounce"}),t.pause(),t.currentTime=0,i.traverse(h=>{h.isMesh&&h.userData.originalMap!==void 0&&(h.material.map=h.userData.originalMap,h.material.needsUpdate=!0)})}),i.addEventListener("click",()=>{a&&(l.classList.add("active"),c.play())}),Ap.add(i),gl.add(r)}),gl.size,Object.keys(Sd).length}
