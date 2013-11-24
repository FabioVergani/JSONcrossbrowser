//EvalError,ReferenceError,SyntaxError,TypeError,URIError
function Exceptions(a,b){var o=new Error();switch(typeof a){case "string":o.name=a;o.message=b;break;default:o=new a;if(!!b){o.message=b}};throw(o)};
//
function classOf(x){var o={is:function(s){return this.s==s}};o.s=(o.kind=o.toString.call(x)).slice(8,-1);return o};
/*
console.log(classOf(true).is("Boolean"));//true
console.log(classOf(0).is("Number"));//true
console.log(classOf("").is("String"));//true
console.log(classOf(undefined).is("Undefined"));//true
console.log(classOf().is("Undefined"));//true
console.log(classOf(null).is("Null"));//true
console.log(classOf([]).is("Array"));//true
console.log(classOf({}).is("Object"));//true
console.log(classOf(function (){}).is("Function"));//true
*/
(function(o,p0,p1,p2,p3,p4){
 var op=o.prototype,chk1=function(e,f,g,k){'use strict';var ft='function';if(e==null||typeof f!==ft){Exceptions(TypeError,ft)};for(var i=0,t=Object(e),l=(t.length>>>0);i<l;i++){if((i in t)&&f.call(g,t[i],i,t)==k){return k}};return !k};
 if(!op[p1]){op[p1]=function(f,s){'use strict';for(var i=0,e=this,j=e.length;i<j;++i){if(i in e){f.call(s,e[i],i,e)}}}};//forEach
 if(!op[p2]){op[p2]=function(f,g){return chk1(this,f,g,true)}};//some
 if(!op[p3]){op[p3]=function(f,g){return chk1(this,f,g,false)}};//every
 if(!op[p4]){op[p4]=function(s,j){var e=this,l=e.length,g=-1,q=(j)?j:0;if(!e){Exceptions(TypeError,e)};if(l===0||q>=l){return g};if(q<0){q=l-Math.abs(q)};for(var i=q;i<l;i++){if(e[i]===s){return i}};return g}};//indexOf
 //...
 (op.contain=function(s){return this.indexOf(s)!=-1}).enumerable=0;
 if(!o[p0]){o[p0]=function(s){return s&&classOf(s).is("Array")}};
 //...
})(Array,"isArray","forEach","some","every","indexOf");
/*
function isBigEnough(element, index, array) {return (element >= 10)};
console.log("2,5,8,1,4 some >=10? "+[2, 5, 8, 1, 4].somezz(isBigEnough));//is false
console.log("12,5,8,1,4 some >=10? "+[12, 5, 8, 1, 4].somezz(isBigEnough));//is true
console.log("12,5,8,130,44 every>=10? "+[12, 5, 8, 130, 44].everyzz(isBigEnough));//is false
console.log("12,54,18,130,44 every >= 10? "+[12, 54, 18, 130, 44].everyzz(isBigEnough));//is true
var array = [2, 5, 9];
console.log(array.indexOf(2));
console.log(array.indexOf(7));
console.log(["string","boolean","number",3].contain("3"));
console.log(["string","boolean","number",3].contain(3));
console.log(["string","boolean","number",3].contain("string"));
//
[null,undefined,"","testo",9,1,0,true,false,Array,[],Object,{},Function,function(){}].forEach(
	function(x, i, array){
		var xlit=['null','undefined','""','"testo"','9','1','0','true','false','Array','[]','Object','{}','Function','function(){}'][i],k=typeof x;
		console.log("typeof "+xlit+" is "+k );
});
//
*/
function KindOf(x){var k=typeof x;return{v:k,valueOf:function(){return this.v},isBasic:["string","boolean","number"].contain(k)}};//(k=="string"||k=="boolean"||k=="number")
function BasicKind(x,s){var r=false,k=KindOf(x);if(k.isBasic){r=(k==s)};return r};
/*
var type=KindOf(33);console.log("type:"+type+", isBasic:"+type.isBasic);
//
[null,undefined,"","testo",9,1,0,true,false,Array,[],Object,{},Function,function(){}].forEach(
	function(x,i){
		var xlit=['null','undefined','""','"testo"','9','1','0','true','false','Array','[]','Object','{}','Function','function(){}'][i],k=KindOf(x);
		console.log("typeof "+xlit+" is "+k + (k.isBasic?"(basic)":""));
});
//
typeof null						object
typeof undefined				undefined
typeof ""							string(basic)
typeof "testo"					string(basic)
typeof 9							number(basic)
typeof 1							number(basic)
typeof 0							number(basic)
typeof true						boolean(basic)
typeof false						boolean(basic)
typeof Array					function
typeof []							object
typeof Object					function
typeof {}							object
typeof Function				function
typeof function(){}			function
*/
function isString(x){return BasicKind(x,"string")};
function isBoolean(x){return BasicKind(x,"boolean")};
function isNumber(x){return BasicKind(x,"number")};
function isUndefined(x){return x==void(0)};
function isNull(x){return x==null};
function isArray(x){return Array.isArray(x)};
function isObject(x){return x && classOf(x).is("Object")};
function isFunction(x){return x && classOf(x).is("Function")};
/*
[null,undefined,"","testo",9,1,0,true,false,Array,[],Object,{},Function,function(){}].forEach(function(x,i){console.log(x,zzzz(x))});
//
string,number,boolean,function,object,undefined | undefined,object,string,boolean,function,number
//
var Ternary={Vero:[],Falso:[]};
[true,false,new Boolean,1,0,"0","1",9,null,undefined,"","testo",Array,[],Object,{},Function,function(){}].forEach(
	function(x, i, array){
		var xlit=['true','false','new Boolean','1','0',"'0'","'1'","'9'",'null','undefined','""','"testo"','Array','[]','Object','{}','Function','function(){}'][i];
		console.group("#"+xlit);
		[undefined,null,String,Number,Boolean,Array,Function,Object].some(function(x2, i2, m){
			try{
				if(x instanceof x2){
					var xlit2=['Undefined','Null','String','Number','Boolean','Array','Function','Object'][i2];
					console.log("'"+xlit+"' is instanceof "+xlit2);
					return true
				};
			}catch(err){
			 //console.log(err);
			};
		});
		//
		console.debug((x!=null)?("\ttypeof: " + typeof x+" ;\n\tconstructor: "+x.constructor):"")
		console.warn("\tclass: "+classOf(x).kind);
		//Ternary[(x?'Vero':'Falso')].push(xlit);
		console.groupEnd();console.log("\n");
});
//console.log(JSON.stringify(Ternary));
è Vero: true,new Boolean,1,'0','1','9',"testo",Array,[],Object,{},Function,function(){}
è Falso: false,0,"",null,undefined]}
*/
//
(function(N,P,S){'use strict';
	var w=window,A=false,op=Object.prototype,oph=op.hasOwnProperty,U=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	if(!w[N]){w[N]={};A=true};
	(function(pn,o){
		var G,R,J;
		if(A||!isFunction(op[pn])){
			var quote=function(s){var q='"',C={'\b': '\\b','\t': '\\t','\n': '\\n','\f': '\\f','\r': '\\r','"' : '\\"','\\': '\\\\'},e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;e.lastIndex=0;return e.test(s)?q+s.replace(e,function(a){var c=C[a];return isString(c)?c:'\\u'+('0000'+a.charCodeAt(0).tostring(16)).slice(-4)})+q:q+s+q};
			var str=function(K,H){
				var hk=H[K],p="toJSON",nl='null';
				if(isObject(hk)&&isFunction(hk[p])){hk=hk[p](K)};
				if(isFunction(R)){hk=R.call(H,K,hk)};
				switch(typeof hk){
				 case 'string':return quote(hk);
				 case 'number':return isFinite(hk)?String(hk):nl;
				 case nl:return String(hk);
				 case 'object':
					if(!hk){return nl};
					G+=J;
					var Z=G,v,k,m=[],f1=function(a,b,c,d){var c=',',d='\n';v=m.length===0?(a+b):G?(a+d)+G+m.join(c+d+G)+d+Z+b:a+m.join(c)+b},f2=function(a,b){v=str(a,b);if(v){m.push(quote(a)+(G?':':':')+v)}};
					if(isArray(op.toString.apply(hk))){
						for(var i=0,l=hk.length;i<l;i++){m[i]=str(i,hk)||nl};f1('[',']');G=Z;return v;
					};
					if(isObject(R)){
						for(var i=0,l=R.length;i<l;i++){k=R[i];if(isString(k)){f2(k,hk)}};
					}else{
						for(k in hk){if(oph.call(hk,k)){f2(k,hk)}};
					};
					f1('{','}');G=Z;
					return v;
				};
			};
		 op[pn]=function(a,b,c){G="";J="";R=b;if(isNumber(c)){for(var i=0;i<c;i++){J+=' '}}else if(isString(c)){J=c};if(b&&!isFunction(b)&&(!isObject(b)||!isNumber(b.length))){Exceptions(ReferenceError,o+pn)};return str("",{"": a})}//a:value,b:replacer,c:space
		};
	})("stringify",N);
	(function(pn,o){
		if(A||!isFunction(op[pn])){
		 op[pn]=function(t,g){//t:text,g:reviver
			function walk(a,b){var k,v,q=a[b];if(isObject(q)){for(k in q){if(oph.call(q,k)){v=walk(q,k);if(!isUndefined(v)){q[k]=v}else{delete q[k]}}}};return g.call(a,b,value)};//a:holder,b:key
			t=String(t);U.lastIndex=0;
			if(U.test(t)){t=t.replace(U,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})};
			if(/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){var j=eval('('+t+')');return isFunction(g)?walk({'':j},''):j};
			Exceptions(SyntaxError,N+pn);
		 };
		};
	})(P,N);
	(function(a,b,o,p){
		if(A||!op[a]){
		 op[a]=function(x){return o[p](this,x)};
		 op[b+N]=function(x){return o[b](this,x)};
		};
	})("toJSONString",P,N,S);
})('JSON',"parse","stringify");
/*
console.log(JSON.stringify([1,2,4]));
console.log([1,2,4].toJSONString())
console.log(JSON.parse('{"a":1,"b":2,"c":4}'));
*/

