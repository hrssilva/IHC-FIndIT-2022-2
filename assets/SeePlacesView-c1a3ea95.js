import{_ as l,o as e,c as s,F as c,e as _,a as o,t as i}from"./index-1fd2e2ff.js";const p={data(){return{places:[]}},mounted(){const t=localStorage.getItem("places");this.places=t?JSON.parse(t):[]}};const d=o("h1",{class:"see-places-title"},"Mapas",-1),h={key:0,class:"container"},u=o("span",null,"Nenhum mapa criado!",-1),m=[u],f={key:1},g=["href"];function k(t,y,S,v,a,x){return e(),s(c,null,[d,a.places.length===0?(e(),s("div",h,m)):(e(),s("div",f,[(e(!0),s(c,null,_(a.places,(r,n)=>(e(),s("a",{class:"container home-link",href:`see/${n}`,key:n},i(r.name),9,g))),128))]))],64)}const N=l(p,[["render",k]]);export{N as default};