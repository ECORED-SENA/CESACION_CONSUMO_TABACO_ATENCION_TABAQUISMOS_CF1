(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0206bfa0"],{ab14:function(t,e,i){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const i=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},e0a3:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"acordion"},[t._l(t.elements,(function(e,s){return i("div",{key:e.id,staticClass:"p-3 pb-0 p-md-4 pb-md-0",class:[t.cardClass,"mb-3"]},[i("div",{staticClass:"acordion__header mb-3 mb-md-4",on:{click:function(i){t.selected=t.selected!=e.id?e.id:0},mouseover:function(e){t.mostrarIndicador=(!t.mostrarIndicador||1!==s)&&t.mostrarIndicador}}},[i("div",{staticClass:"d-flex align-items-center"},["a"===t.tipo?i("div",{staticClass:"acordion__accion"},[i("div",{staticClass:"acordion__accion__btn--a h3 mb-0 me-3"},[t.selected===e.id?i("i",{staticClass:"fas fa-minus"}):i("i",{staticClass:"fas fa-plus"}),t.mostrarIndicador&&1===s?i("div",{staticClass:"indicador__container"},[i("div",{staticClass:"indicador--click indicador--sm"})]):t._e()])]):t._e(),i("div",{staticClass:"acordion__titulo"},[i("h3",{staticClass:"mb-0"},[t._v(t._s(e.titulo))])])]),"b"===t.tipo?i("div",{staticClass:"acordion__accion"},[i("div",{staticClass:"acordion__accion__btn--b h3 mb-0"},[t.selected===e.id?i("i",{staticClass:"fas fa-angle-up"}):i("i",{staticClass:"fas fa-angle-down"}),t.mostrarIndicador&&1===s?i("div",{staticClass:"indicador__container indicador--left"},[i("div",{staticClass:"indicador--click indicador--sm"})]):t._e()])]):t._e()]),i("div",{staticClass:"acordion__contenido",style:{height:t.rendered&&t.selected===e.id?t.getActiveHeight(e.id):0}},[i("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"elm.elm"}],ref:e.id,refInFor:!0,staticClass:"acordion__contenido__item pb-3 pb-md-4"})])])})),i("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},a=[],d=i("ab14"),n={name:"AcordionA",mixins:[d["a"]],props:{claseTarjeta:{type:String,default:""},tipo:{type:String,default:"a"}},data:function(){return{mostrarIndicador:!0}},computed:{cardClass:function(){return this.claseTarjeta.length?this.claseTarjeta:"tarjeta tarjeta--blanca mb-3"}},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.domUpdated()}),5e3)}))}},r=n,c=i("2877"),o=Object(c["a"])(r,s,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-0206bfa0.d1df1a8a.js.map