

/**
 END GZIP LIB 
**/
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */

(function() {'use strict';var p=void 0,v=!0,da=this;function fa(f,e){var c=f.split("."),a=da;!(c[0]in a)&&a.execScript&&a.execScript("var "+c[0]);for(var b;c.length&&(b=c.shift());)!c.length&&e!==p?a[b]=e:a=a[b]?a[b]:a[b]={}};var C="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function F(f,e){this.index="number"===typeof e?e:0;this.f=0;this.buffer=f instanceof(C?Uint8Array:Array)?f:new (C?Uint8Array:Array)(32768);if(2*this.buffer.length<=this.index)throw Error("invalid index");this.buffer.length<=this.index&&ga(this)}function ga(f){var e=f.buffer,c,a=e.length,b=new (C?Uint8Array:Array)(a<<1);if(C)b.set(e);else for(c=0;c<a;++c)b[c]=e[c];return f.buffer=b}
F.prototype.b=function(f,e,c){var a=this.buffer,b=this.index,g=this.f,l=a[b],m;c&&1<e&&(f=8<e?(H[f&255]<<24|H[f>>>8&255]<<16|H[f>>>16&255]<<8|H[f>>>24&255])>>32-e:H[f]>>8-e);if(8>e+g)l=l<<e|f,g+=e;else for(m=0;m<e;++m)l=l<<1|f>>e-m-1&1,8===++g&&(g=0,a[b++]=H[l],l=0,b===a.length&&(a=ga(this)));a[b]=l;this.buffer=a;this.f=g;this.index=b};F.prototype.finish=function(){var f=this.buffer,e=this.index,c;0<this.f&&(f[e]<<=8-this.f,f[e]=H[f[e]],e++);C?c=f.subarray(0,e):(f.length=e,c=f);return c};
var ia=new (C?Uint8Array:Array)(256),M;for(M=0;256>M;++M){for(var N=M,S=N,ja=7,N=N>>>1;N;N>>>=1)S<<=1,S|=N&1,--ja;ia[M]=(S<<ja&255)>>>0}var H=ia;function ka(f,e,c){var a,b="number"===typeof e?e:e=0,g="number"===typeof c?c:f.length;a=-1;for(b=g&7;b--;++e)a=a>>>8^T[(a^f[e])&255];for(b=g>>3;b--;e+=8)a=a>>>8^T[(a^f[e])&255],a=a>>>8^T[(a^f[e+1])&255],a=a>>>8^T[(a^f[e+2])&255],a=a>>>8^T[(a^f[e+3])&255],a=a>>>8^T[(a^f[e+4])&255],a=a>>>8^T[(a^f[e+5])&255],a=a>>>8^T[(a^f[e+6])&255],a=a>>>8^T[(a^f[e+7])&255];return(a^4294967295)>>>0}
var la=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,
2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,
2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,
2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,
3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,
936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],T=C?new Uint32Array(la):la;function U(f){this.buffer=new (C?Uint16Array:Array)(2*f);this.length=0}U.prototype.getParent=function(f){return 2*((f-2)/4|0)};U.prototype.push=function(f,e){var c,a,b=this.buffer,g;c=this.length;b[this.length++]=e;for(b[this.length++]=f;0<c;)if(a=this.getParent(c),b[c]>b[a])g=b[c],b[c]=b[a],b[a]=g,g=b[c+1],b[c+1]=b[a+1],b[a+1]=g,c=a;else break;return this.length};
U.prototype.pop=function(){var f,e,c=this.buffer,a,b,g;e=c[0];f=c[1];this.length-=2;c[0]=c[this.length];c[1]=c[this.length+1];for(g=0;;){b=2*g+2;if(b>=this.length)break;b+2<this.length&&c[b+2]>c[b]&&(b+=2);if(c[b]>c[g])a=c[g],c[g]=c[b],c[b]=a,a=c[g+1],c[g+1]=c[b+1],c[b+1]=a;else break;g=b}return{index:f,value:e,length:this.length}};function ma(f,e){this.h=na;this.j=0;this.input=C&&f instanceof Array?new Uint8Array(f):f;this.c=0;e&&(e.lazy&&(this.j=e.lazy),"number"===typeof e.compressionType&&(this.h=e.compressionType),e.outputBuffer&&(this.a=C&&e.outputBuffer instanceof Array?new Uint8Array(e.outputBuffer):e.outputBuffer),"number"===typeof e.outputIndex&&(this.c=e.outputIndex));this.a||(this.a=new (C?Uint8Array:Array)(32768))}var na=2,V=[],$;
for($=0;288>$;$++)switch(v){case 143>=$:V.push([$+48,8]);break;case 255>=$:V.push([$-144+400,9]);break;case 279>=$:V.push([$-256+0,7]);break;case 287>=$:V.push([$-280+192,8]);break;default:throw"invalid literal: "+$;}
ma.prototype.g=function(){var f,e,c,a,b=this.input;switch(this.h){case 0:c=0;for(a=b.length;c<a;){e=C?b.subarray(c,c+65535):b.slice(c,c+65535);c+=e.length;var g=e,l=c===a,m=p,d=p,h=p,s=p,x=p,n=this.a,k=this.c;if(C){for(n=new Uint8Array(this.a.buffer);n.length<=k+g.length+5;)n=new Uint8Array(n.length<<1);n.set(this.a)}m=l?1:0;n[k++]=m|0;d=g.length;h=~d+65536&65535;n[k++]=d&255;n[k++]=d>>>8&255;n[k++]=h&255;n[k++]=h>>>8&255;if(C)n.set(g,k),k+=g.length,n=n.subarray(0,k);else{s=0;for(x=g.length;s<x;++s)n[k++]=
g[s];n.length=k}this.c=k;this.a=n}break;case 1:var q=new F(C?new Uint8Array(this.a.buffer):this.a,this.c);q.b(1,1,v);q.b(1,2,v);var u=oa(this,b),w,aa,z;w=0;for(aa=u.length;w<aa;w++)if(z=u[w],F.prototype.b.apply(q,V[z]),256<z)q.b(u[++w],u[++w],v),q.b(u[++w],5),q.b(u[++w],u[++w],v);else if(256===z)break;this.a=q.finish();this.c=this.a.length;break;case na:var B=new F(C?new Uint8Array(this.a.buffer):this.a,this.c),ra,L,O,P,Q,Ha=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],W,sa,X,ta,ba,ea=Array(19),
ua,R,ca,y,va;ra=na;B.b(1,1,v);B.b(ra,2,v);L=oa(this,b);W=pa(this.n,15);sa=qa(W);X=pa(this.m,7);ta=qa(X);for(O=286;257<O&&0===W[O-1];O--);for(P=30;1<P&&0===X[P-1];P--);var wa=O,xa=P,G=new (C?Uint32Array:Array)(wa+xa),r,I,t,Y,E=new (C?Uint32Array:Array)(316),D,A,J=new (C?Uint8Array:Array)(19);for(r=I=0;r<wa;r++)G[I++]=W[r];for(r=0;r<xa;r++)G[I++]=X[r];if(!C){r=0;for(Y=J.length;r<Y;++r)J[r]=0}r=D=0;for(Y=G.length;r<Y;r+=I){for(I=1;r+I<Y&&G[r+I]===G[r];++I);t=I;if(0===G[r])if(3>t)for(;0<t--;)E[D++]=0,
J[0]++;else for(;0<t;)A=138>t?t:138,A>t-3&&A<t&&(A=t-3),10>=A?(E[D++]=17,E[D++]=A-3,J[17]++):(E[D++]=18,E[D++]=A-11,J[18]++),t-=A;else if(E[D++]=G[r],J[G[r]]++,t--,3>t)for(;0<t--;)E[D++]=G[r],J[G[r]]++;else for(;0<t;)A=6>t?t:6,A>t-3&&A<t&&(A=t-3),E[D++]=16,E[D++]=A-3,J[16]++,t-=A}f=C?E.subarray(0,D):E.slice(0,D);ba=pa(J,7);for(y=0;19>y;y++)ea[y]=ba[Ha[y]];for(Q=19;4<Q&&0===ea[Q-1];Q--);ua=qa(ba);B.b(O-257,5,v);B.b(P-1,5,v);B.b(Q-4,4,v);for(y=0;y<Q;y++)B.b(ea[y],3,v);y=0;for(va=f.length;y<va;y++)if(R=
f[y],B.b(ua[R],ba[R],v),16<=R){y++;switch(R){case 16:ca=2;break;case 17:ca=3;break;case 18:ca=7;break;default:throw"invalid code: "+R;}B.b(f[y],ca,v)}var ya=[sa,W],za=[ta,X],K,Aa,Z,ha,Ba,Ca,Da,Ea;Ba=ya[0];Ca=ya[1];Da=za[0];Ea=za[1];K=0;for(Aa=L.length;K<Aa;++K)if(Z=L[K],B.b(Ba[Z],Ca[Z],v),256<Z)B.b(L[++K],L[++K],v),ha=L[++K],B.b(Da[ha],Ea[ha],v),B.b(L[++K],L[++K],v);else if(256===Z)break;this.a=B.finish();this.c=this.a.length;break;default:throw"invalid compression type";}return this.a};
function Fa(f,e){this.length=f;this.k=e}
var Ga=function(){function f(b){switch(v){case 3===b:return[257,b-3,0];case 4===b:return[258,b-4,0];case 5===b:return[259,b-5,0];case 6===b:return[260,b-6,0];case 7===b:return[261,b-7,0];case 8===b:return[262,b-8,0];case 9===b:return[263,b-9,0];case 10===b:return[264,b-10,0];case 12>=b:return[265,b-11,1];case 14>=b:return[266,b-13,1];case 16>=b:return[267,b-15,1];case 18>=b:return[268,b-17,1];case 22>=b:return[269,b-19,2];case 26>=b:return[270,b-23,2];case 30>=b:return[271,b-27,2];case 34>=b:return[272,
b-31,2];case 42>=b:return[273,b-35,3];case 50>=b:return[274,b-43,3];case 58>=b:return[275,b-51,3];case 66>=b:return[276,b-59,3];case 82>=b:return[277,b-67,4];case 98>=b:return[278,b-83,4];case 114>=b:return[279,b-99,4];case 130>=b:return[280,b-115,4];case 162>=b:return[281,b-131,5];case 194>=b:return[282,b-163,5];case 226>=b:return[283,b-195,5];case 257>=b:return[284,b-227,5];case 258===b:return[285,b-258,0];default:throw"invalid length: "+b;}}var e=[],c,a;for(c=3;258>=c;c++)a=f(c),e[c]=a[2]<<24|
a[1]<<16|a[0];return e}(),Ia=C?new Uint32Array(Ga):Ga;
function oa(f,e){function c(b,e){var a=b.k,c=[],g=0,f;f=Ia[b.length];c[g++]=f&65535;c[g++]=f>>16&255;c[g++]=f>>24;var d;switch(v){case 1===a:d=[0,a-1,0];break;case 2===a:d=[1,a-2,0];break;case 3===a:d=[2,a-3,0];break;case 4===a:d=[3,a-4,0];break;case 6>=a:d=[4,a-5,1];break;case 8>=a:d=[5,a-7,1];break;case 12>=a:d=[6,a-9,2];break;case 16>=a:d=[7,a-13,2];break;case 24>=a:d=[8,a-17,3];break;case 32>=a:d=[9,a-25,3];break;case 48>=a:d=[10,a-33,4];break;case 64>=a:d=[11,a-49,4];break;case 96>=a:d=[12,a-
65,5];break;case 128>=a:d=[13,a-97,5];break;case 192>=a:d=[14,a-129,6];break;case 256>=a:d=[15,a-193,6];break;case 384>=a:d=[16,a-257,7];break;case 512>=a:d=[17,a-385,7];break;case 768>=a:d=[18,a-513,8];break;case 1024>=a:d=[19,a-769,8];break;case 1536>=a:d=[20,a-1025,9];break;case 2048>=a:d=[21,a-1537,9];break;case 3072>=a:d=[22,a-2049,10];break;case 4096>=a:d=[23,a-3073,10];break;case 6144>=a:d=[24,a-4097,11];break;case 8192>=a:d=[25,a-6145,11];break;case 12288>=a:d=[26,a-8193,12];break;case 16384>=
a:d=[27,a-12289,12];break;case 24576>=a:d=[28,a-16385,13];break;case 32768>=a:d=[29,a-24577,13];break;default:throw"invalid distance";}f=d;c[g++]=f[0];c[g++]=f[1];c[g++]=f[2];var h,l;h=0;for(l=c.length;h<l;++h)n[k++]=c[h];u[c[0]]++;w[c[3]]++;q=b.length+e-1;x=null}var a,b,g,l,m,d={},h,s,x,n=C?new Uint16Array(2*e.length):[],k=0,q=0,u=new (C?Uint32Array:Array)(286),w=new (C?Uint32Array:Array)(30),aa=f.j,z;if(!C){for(g=0;285>=g;)u[g++]=0;for(g=0;29>=g;)w[g++]=0}u[256]=1;a=0;for(b=e.length;a<b;++a){g=
m=0;for(l=3;g<l&&a+g!==b;++g)m=m<<8|e[a+g];d[m]===p&&(d[m]=[]);h=d[m];if(!(0<q--)){for(;0<h.length&&32768<a-h[0];)h.shift();if(a+3>=b){x&&c(x,-1);g=0;for(l=b-a;g<l;++g)z=e[a+g],n[k++]=z,++u[z];break}0<h.length?(s=Ja(e,a,h),x?x.length<s.length?(z=e[a-1],n[k++]=z,++u[z],c(s,0)):c(x,-1):s.length<aa?x=s:c(s,0)):x?c(x,-1):(z=e[a],n[k++]=z,++u[z])}h.push(a)}n[k++]=256;u[256]++;f.n=u;f.m=w;return C?n.subarray(0,k):n}
function Ja(f,e,c){var a,b,g=0,l,m,d,h,s=f.length;m=0;h=c.length;a:for(;m<h;m++){a=c[h-m-1];l=3;if(3<g){for(d=g;3<d;d--)if(f[a+d-1]!==f[e+d-1])continue a;l=g}for(;258>l&&e+l<s&&f[a+l]===f[e+l];)++l;l>g&&(b=a,g=l);if(258===l)break}return new Fa(g,e-b)}
function pa(f,e){var c=f.length,a=new U(572),b=new (C?Uint8Array:Array)(c),g,l,m,d,h;if(!C)for(d=0;d<c;d++)b[d]=0;for(d=0;d<c;++d)0<f[d]&&a.push(d,f[d]);g=Array(a.length/2);l=new (C?Uint32Array:Array)(a.length/2);if(1===g.length)return b[a.pop().index]=1,b;d=0;for(h=a.length/2;d<h;++d)g[d]=a.pop(),l[d]=g[d].value;m=Ka(l,l.length,e);d=0;for(h=g.length;d<h;++d)b[g[d].index]=m[d];return b}
function Ka(f,e,c){function a(b){var c=d[b][h[b]];c===e?(a(b+1),a(b+1)):--l[c];++h[b]}var b=new (C?Uint16Array:Array)(c),g=new (C?Uint8Array:Array)(c),l=new (C?Uint8Array:Array)(e),m=Array(c),d=Array(c),h=Array(c),s=(1<<c)-e,x=1<<c-1,n,k,q,u,w;b[c-1]=e;for(k=0;k<c;++k)s<x?g[k]=0:(g[k]=1,s-=x),s<<=1,b[c-2-k]=(b[c-1-k]/2|0)+e;b[0]=g[0];m[0]=Array(b[0]);d[0]=Array(b[0]);for(k=1;k<c;++k)b[k]>2*b[k-1]+g[k]&&(b[k]=2*b[k-1]+g[k]),m[k]=Array(b[k]),d[k]=Array(b[k]);for(n=0;n<e;++n)l[n]=c;for(q=0;q<b[c-1];++q)m[c-
1][q]=f[q],d[c-1][q]=q;for(n=0;n<c;++n)h[n]=0;1===g[c-1]&&(--l[0],++h[c-1]);for(k=c-2;0<=k;--k){u=n=0;w=h[k+1];for(q=0;q<b[k];q++)u=m[k+1][w]+m[k+1][w+1],u>f[n]?(m[k][q]=u,d[k][q]=e,w+=2):(m[k][q]=f[n],d[k][q]=n,++n);h[k]=0;1===g[k]&&a(k)}return l}
function qa(f){var e=new (C?Uint16Array:Array)(f.length),c=[],a=[],b=0,g,l,m,d;g=0;for(l=f.length;g<l;g++)c[f[g]]=(c[f[g]]|0)+1;g=1;for(l=16;g<=l;g++)a[g]=b,b+=c[g]|0,b<<=1;g=0;for(l=f.length;g<l;g++){b=a[f[g]];a[f[g]]+=1;m=e[g]=0;for(d=f[g];m<d;m++)e[g]=e[g]<<1|b&1,b>>>=1}return e};function La(f,e){this.input=f;this.c=this.i=0;this.d={};e&&(e.flags&&(this.d=e.flags),"string"===typeof e.filename&&(this.filename=e.filename),"string"===typeof e.comment&&(this.l=e.comment),e.deflateOptions&&(this.e=e.deflateOptions));this.e||(this.e={})}
La.prototype.g=function(){var f,e,c,a,b,g,l,m,d=new (C?Uint8Array:Array)(32768),h=0,s=this.input,x=this.i,n=this.filename,k=this.l;d[h++]=31;d[h++]=139;d[h++]=8;f=0;this.d.fname&&(f|=Ma);this.d.fcomment&&(f|=Na);this.d.fhcrc&&(f|=Oa);d[h++]=f;e=(Date.now?Date.now():+new Date)/1E3|0;d[h++]=e&255;d[h++]=e>>>8&255;d[h++]=e>>>16&255;d[h++]=e>>>24&255;d[h++]=0;d[h++]=Pa;if(this.d.fname!==p){l=0;for(m=n.length;l<m;++l)g=n.charCodeAt(l),255<g&&(d[h++]=g>>>8&255),d[h++]=g&255;d[h++]=0}if(this.d.comment){l=
0;for(m=k.length;l<m;++l)g=k.charCodeAt(l),255<g&&(d[h++]=g>>>8&255),d[h++]=g&255;d[h++]=0}this.d.fhcrc&&(c=ka(d,0,h)&65535,d[h++]=c&255,d[h++]=c>>>8&255);this.e.outputBuffer=d;this.e.outputIndex=h;b=new ma(s,this.e);d=b.g();h=b.c;C&&(h+8>d.buffer.byteLength?(this.a=new Uint8Array(h+8),this.a.set(new Uint8Array(d.buffer)),d=this.a):d=new Uint8Array(d.buffer));a=ka(s,p,p);d[h++]=a&255;d[h++]=a>>>8&255;d[h++]=a>>>16&255;d[h++]=a>>>24&255;m=s.length;d[h++]=m&255;d[h++]=m>>>8&255;d[h++]=m>>>16&255;d[h++]=
m>>>24&255;this.i=x;C&&h<d.length&&(this.a=d=d.subarray(0,h));return d};var Pa=255,Oa=2,Ma=8,Na=16;fa("Zlib.Gzip",La);fa("Zlib.Gzip.prototype.compress",La.prototype.g);}).call(this);

/**
 END GZIP LIB 
**/


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 *
 * @author didierfred@gmail.com
 * @version 0.2
 */

"use strict";


var nb_request=0;
var byte_total = 0;

var quantiles_dom = [0, 47, 75, 159, 233, 298, 358, 417, 476, 537, 603, 674, 753, 843, 949, 1076, 1237, 1459, 1801, 2479, 594601];
var quantiles_req = [0, 2, 15, 25, 34, 42, 49, 56, 63, 70, 78, 86, 95, 105, 117, 130, 147, 170, 205, 281, 3920];
var quantiles_size = [0, 1.37, 144.7, 319.53, 479.46, 631.97, 783.38, 937.91, 1098.62, 1265.47, 1448.32, 1648.27, 1876.08, 2142.06, 2465.37, 2866.31, 3401.59, 4155.73, 5400.08, 8037.54, 223212.26];
  

localStorage.setItem('started',"off");

// listen for start/stop and results
browser.runtime.onMessage.addListener(notify);


function calculQuantile(quantiles,value)
{
for (var i=1;i<quantiles.length;i++)
	{
	if (value<quantiles[i]) return (i + (value-quantiles[i-1])/(quantiles[i] -quantiles[i-1]));
	}
return quantiles.length;
}

function calculEcoIndex(dom,req,size)
{
var q_dom= calculQuantile(quantiles_dom,dom);
var q_req= calculQuantile(quantiles_req,req);
var q_size= calculQuantile(quantiles_size,size);

return Math.round(100 - 5 * (3*q_dom + 2*q_req + q_size)/6);
}

function getNote(eco_index)
{
if (eco_index > 75) return "A";
if (eco_index > 65) return "B";
if (eco_index > 50) return "C";
if (eco_index > 35) return "D";
if (eco_index > 20) return "E";
if (eco_index > 5) return "F";
return "G";
}


/*
* Count the number of request
*
*/
function countRequest(e) 
{

// do not count url starting with data  
if (!e.url.startsWith("data")) 
	{
	nb_request++;
	console.log("url N° " + nb_request+ ",id= " + e.requestID  + ",url= " + e.url);
	}
}

function mesureSize(details) {


let filter = browser.webRequest.filterResponseData(details.requestId);
 
var gzip_header=false;
details.responseHeaders.forEach(function(header){
    if (header.name.toLowerCase() == "content-encoding")
 	{
      	if (header.value.toLowerCase()== "gzip") gzip_header=true;
    	}
    });

// if the data have been gzip 
if (gzip_header)
	{
  	filter.ondata = event => {
    	
	// Gzip data to know the real transfer Kb 
	var gzip = new Zlib.Gzip(new Uint8Array(event.data));
	var compressed = gzip.compress();    	
	//console.log ("Mesure size after gzip  id=" +  details.requestId + ",url = " + details.url + " size=" + event.data.byteLength + " gzipsize=" + compressed.length);
	byte_total = byte_total + compressed.length;
	filter.write(event.data);
  		}
	}

else 
	{
  	filter.ondata = event => {
    	byte_total = byte_total + event.data.byteLength;
    	//console.log("Mesure size  id=" +  details.requestId + ",url = " + details.url + ",size=" + event.data.byteLength);
	filter.write(event.data);
  		}
	}

  filter.onstop = event => {
    filter.disconnect();
  } 

  return {};
}

/*
* Listen for message form ecoindex.js
* if message is on : start the record 
* if message is off : stop the record
*
**/
function notify(message) 
	{
	var json_message = JSON.parse(message);
	if (json_message.status=="off")
		{
		removeListener();
		browser.browserAction.setIcon({ path: "icons/ecoindex-32.png"});
		console.log("Stop the analyse : nb_request="+ nb_request);
		console.log("Stop the analyse : byte_total="+ byte_total);
		localStorage.setItem('nb_request',nb_request);
		localStorage.setItem('byte_total',byte_total);
		browser.tabs.executeScript({
					file: "dom_size.js"
					});
		return;
		}

	if (json_message.status=="on")
		{
		addListener();
		browser.browserAction.setIcon({ path: "icons/ecoindex-green-32.png"});
		nb_request=0;
		byte_total = 0;
		console.log("Start the analyse");
		return 	
		}
	if (json_message.dom_size)
		{
	    console.log("Dom Size received: "+ json_message.dom_size);
		localStorage.setItem("dom_size",json_message.dom_size);
	    console.log("url: " + json_message.url);
		localStorage.setItem("url",json_message.url);

		var eco_index= calculEcoIndex(json_message.dom_size,nb_request,Math.round(byte_total/1000));

		console.log("ecoindex=" + eco_index);
		localStorage.setItem("eco_index",eco_index);
		localStorage.setItem("note",getNote(eco_index));
		storeInHistory(json_message.url,nb_request,Math.round(byte_total/1000),json_message.dom_size,eco_index,getNote(eco_index));
		}
  	}

/*

*/
function storeInHistory(url,req,kbyte,domsize,eco_index,note)
{
var analyse_history;
var string_analyse_history = localStorage.getItem("analyse_history");

if (string_analyse_history)
	{
	analyse_history =JSON.parse(string_analyse_history);
	analyse_history.reverse();
	analyse_history.push({result_date:new Date(),url:url,req:req,kbyte:kbyte,domsize:domsize,eco_index:eco_index,note:note});
	analyse_history.reverse();
	}
else analyse_history = [{result_date:new Date(),url:url,req:req,kbyte:kbyte,domsize:domsize,eco_index:eco_index,note:note}];

localStorage.setItem("analyse_history",JSON.stringify(analyse_history));
}


function addListener()
	{
	var target ="<all_urls>";
	
	browser.webRequest.onBeforeRequest.addListener(countRequest,
                                          {urls: [target]});

	browser.webRequest.onHeadersReceived.addListener(
									mesureSize,
									{urls: [target]},
									["blocking", "responseHeaders"]
									);

	}




/*
* Remove the two listener 
*
*/
function removeListener()
	{
	browser.webRequest.onBeforeRequest.removeListener(countRequest);
	browser.webRequest.onBeforeRequest.removeListener(mesureSize);
	}


