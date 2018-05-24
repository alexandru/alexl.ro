function SHA256(r){function t(r,t){var n=(65535&r)+(65535&t);return(r>>16)+(t>>16)+(n>>16)<<16|65535&n}function n(r,t){return r>>>t|r<<32-t}function e(r,t){return r>>>t}function a(r,t,n){return r&t^~r&n}function o(r,t,n){return r&t^r&n^t&n}function u(r){return n(r,2)^n(r,13)^n(r,22)}function f(r){return n(r,6)^n(r,11)^n(r,25)}function i(r){return n(r,7)^n(r,18)^e(r,3)}function c(r){return n(r,17)^n(r,19)^e(r,10)}function s(r,n){var e,s,l,h,g,v,d,C,m,A,p,$,w=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),y=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),S=new Array(64);r[n>>5]|=128<<24-n%32,r[15+(n+64>>9<<4)]=n;for(var m=0;m<r.length;m+=16){e=y[0],s=y[1],l=y[2],h=y[3],g=y[4],v=y[5],d=y[6],C=y[7];for(var A=0;A<64;A++)S[A]=A<16?r[A+m]:t(t(t(c(S[A-2]),S[A-7]),i(S[A-15])),S[A-16]),p=t(t(t(t(C,f(g)),a(g,v,d)),w[A]),S[A]),$=t(u(e),o(e,s,l)),C=d,d=v,v=g,g=t(h,p),h=l,l=s,s=e,e=t(p,$);y[0]=t(e,y[0]),y[1]=t(s,y[1]),y[2]=t(l,y[2]),y[3]=t(h,y[3]),y[4]=t(g,y[4]),y[5]=t(v,y[5]),y[6]=t(d,y[6]),y[7]=t(C,y[7])}return y}function l(r){for(var t=Array(),n=(1<<v)-1,e=0;e<r.length*v;e+=v)t[e>>5]|=(r.charCodeAt(e/v)&n)<<24-e%32;return t}function h(r){r=r.replace(/\r\n/g,"\n");for(var t="",n=0;n<r.length;n++){var e=r.charCodeAt(n);e<128?t+=String.fromCharCode(e):e>127&&e<2048?(t+=String.fromCharCode(e>>6|192),t+=String.fromCharCode(63&e|128)):(t+=String.fromCharCode(e>>12|224),t+=String.fromCharCode(e>>6&63|128),t+=String.fromCharCode(63&e|128))}return t}function g(r){for(var t=d?"0123456789ABCDEF":"0123456789abcdef",n="",e=0;e<4*r.length;e++)n+=t.charAt(r[e>>2]>>8*(3-e%4)+4&15)+t.charAt(r[e>>2]>>8*(3-e%4)&15);return n}var v=8,d=0;return r=h(r),g(s(l(r),r.length*v))}var salt="hello world";jQuery(document).ready(function(){function r(r){r.preventDefault();var t=$("#secretkey").attr("value")||"",n=$("#domain").attr("value")||"",e="",a="";if(t&&n){e=SHA256(salt+t+n+t+n+salt);var o=0,u=0;"skype.com"!=n&&"rohost.com"!=n?(o=e.length/2,u=e.length):(o=20,u=40),e=e.substring(o,u),letters=n.replace(/[^a-zA-Z]+/g,"");for(var f=0;f<e.length;f++)a+=e[f],f<letters.length&&(a+=letters[f].toUpperCase());a=a.substring(0,u-o)}return $("#sitepassword1").attr("value",e),$("#sitepassword2").attr("value",a),$("#sitepassword2").focus(),$("#sitepassword2").select(),!1}$("#form").submit(r),$("#form #generate").click(r),$("#form input").attr("value","")});