(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a54ae"],{"09a0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showTags?a("section",{staticClass:"card mb-3",class:[t.isHome()?"p-3 border-0":null]},[a("h4",{class:[t.isHome()?"font-italic":"card-header"]},[t._v(t._s(t.$t("tagcloud")))]),a("tag-cloud",{attrs:{tags:t.tags},on:{tap:function(e){return t.$router.push({name:"related-posts-page",params:{type:"tag",slug:e.slug}})}}})],1):t._e()},s=[],i=(a("96cf"),a("3040")),c=a("c665"),o=a("dc0a"),r=a("aa9a"),u=a("d328"),l=a("11d9"),p=a("9ab4"),d=a("60a3"),g=a("6011"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tagcloud",staticStyle:{"mix-height":"180px","min-width":"180px"}},t._l(t.tags,function(e,n){return a("b-link",{key:"tag-"+n+"-"+e.name,staticClass:"tagcloud-item",on:{click:function(a){t.$emit("tap",e)}}},[t._v("\n    "+t._s(e.name)+"\n  ")])}))},h=[],b=(a("f751"),function(t){function e(){return Object(c["a"])(this,e),Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,[{key:"mounted",value:function(){var t=this.config;this.$nextTick(function(){window.tagcloud(t)})}},{key:"config",get:function(){return Object.assign(this.options||{},{fontsize:21,radius:80,mspeed:"normal",ispeed:"normal",direction:135,keep:!1})}}]),Object(o["a"])(e,t),e}(d["c"]));p["a"]([Object(d["b"])({default:null})],b.prototype,"options",void 0),p["a"]([Object(d["b"])({default:[]})],b.prototype,"tags",void 0),b=p["a"]([d["a"]],b);var m=b,v=m,j=a("2877"),O=Object(j["a"])(v,f,h,!1,null,null,null);O.options.__file="TagCloud.vue";var k=O.exports,w=function(t){function e(){return Object(c["a"])(this,e),Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,[{key:"mounted",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("tags/".concat(g["i"]));case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"showTags",get:function(){return this.tags&&this.tags.length>0}},{key:"tags",get:function(){return this.$state.tags.tags||[]}}]),Object(o["a"])(e,t),e}(d["c"]);w=p["a"]([Object(d["a"])({components:{TagCloud:k}})],w);var _=w,y=_,x=Object(j["a"])(y,n,s,!1,null,null,null);x.options.__file="TagCloudCard.vue";e["default"]=x.exports}}]);