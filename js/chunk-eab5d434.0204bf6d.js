(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eab5d434"],{"669f":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"initial-state-ens"},[t("form",{staticClass:"send-form"},[t("div",{staticClass:"title-container"},[t("div",{staticClass:"title"},[t("h4",[a._v(a._s(a.$t("interface.registerEns")))]),t("p",[a._v(a._s(a.$t("interface.registerEnsDesc")))])])]),t("div",{staticClass:"the-form domain-name"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.localDomainName,expression:"localDomainName"}],class:[a.domainNameErr?"errored":""],attrs:{placeholder:a.$t("dapps.registerEnsPlaceholder"),type:"text",name:""},domProps:{value:a.localDomainName},on:{input:function(e){e.target.composing||(a.localDomainName=e.target.value)}}}),t("span",[a._v("."+a._s(a.tld))])]),t("div",{staticClass:"error-message-container"},[t("p",{directives:[{name:"show",rawName:"v-show",value:!1===a.contractInitiated,expression:"contractInitiated === false"}],staticClass:"contract-loading-warning"},[a._v("\n        "+a._s(a.$t("dapps.registerEnsContractNotReady"))+"\n      ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:a.domainNameErr,expression:"domainNameErr"}],staticClass:"erroredMsg"},[a.localDomainName.length<7&&""!==a.localDomainName?t("span",[a._v("\n          "+a._s(a.$t("dapps.registerEnsWarn1"))+"\n        ")]):t("span",[a._v(" "+a._s(a.$t("dapps.registerEnsWarn2"))+" ")])])]),t("div",{staticClass:"submit-button-container"},[t("button",{class:[a.domainNameErr||""===a.localDomainName?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:function(e){return e.preventDefault(),a.checkDomain(e)}}},[t("span",{directives:[{name:"show",rawName:"v-show",value:!a.loading,expression:"!loading"}]},[a._v(" "+a._s(a.$t("interface.checkDomain"))+" ")]),t("i",{directives:[{name:"show",rawName:"v-show",value:a.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),t("interface-bottom-text",{attrs:{"link-text":a.$t("interface.helpCenter"),question:a.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],s=t("539d"),o={components:{"interface-bottom-text":s["a"]},props:{checkDomain:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},contractInitiated:{type:Boolean,default:!1},domainName:{type:String,default:""},tld:{type:String,default:""},domainNameErr:{type:Boolean,default:!1}},data:function(){return{localDomainName:this.domainName}},watch:{localDomainName:function(a){this.$emit("domainNameChange",a)},domainName:function(a){this.localDomainName=a}},methods:{expendDomainCheckForm:function(){this.$refs["checkForm"].classList.toggle("hidden"),this.$refs["domainList"].classList.add("hidden")},domainAvailabilityCheck:function(){this.$refs["domainList"].classList.add("hidden")}}},r=o,l=(t("ab42"),t("2877")),c=Object(l["a"])(r,n,i,!1,null,"4922f3d4",null),d=c.exports;t.d(e,"default",function(){return d})},"81d4":function(a,e,t){},ab42:function(a,e,t){"use strict";var n=t("81d4"),i=t.n(n);i.a}}]);
//# sourceMappingURL=chunk-eab5d434.0204bf6d.js.map