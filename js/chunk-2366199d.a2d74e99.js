(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2366199d"],{"322b":function(t,e,a){},"411f":function(t,e,a){t.exports=a.p+"img/hourglass.b1ced30d.svg"},"539d4":function(t,e,a){"use strict";var s=a("eee43"),n=a.n(s);n.a},8874:function(t,e,a){"use strict";var s=a("322b"),n=a.n(s);n.a},c065:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("json-string-modal",{ref:"jsonStringModal",attrs:{"update-json-string":t.updateJson}}),a("div",{staticClass:"name-available-container"},[t.$route.fullPath.includes("auction")?a("div",{staticClass:"content-header"},[a("div",[a("h3",[t._v(t._s(t.domainName)+"."+t._s(t.tld))]),a("p",[t._v(t._s(t.$t("dapps.domainIsAvailable")))])])]):t._e(),t.$route.fullPath.includes("bid")?a("div",{staticClass:"auction-started"},[a("div",[a("h3",[t._v(t._s(t.$t("dapps.auctionStarted"))+" "+t._s(t.domainName)+"."+t._s(t.tld))])])]):t._e(),t.$route.fullPath.includes("reveal")?a("div",{staticClass:"auction-started"},[a("h3",[t._v("\n        "+t._s(t.$t("dapps.revealBid"))+" "+t._s(t.domainName)+"."+t._s(t.tld)+"\n        "+t._s(t.$t("dapps.revealBidCont"))+". "),a("br"),t._v("\n        "+t._s(t.highestBidder)+" "+t._s(t.networkName)+" ("+t._s(t.$t("dapps.currentHighestBid"))+")\n      ")])]):t._e(),a("div",{staticClass:"timer-container"},[t.$route.fullPath.includes("bid")?a("timer",{attrs:{"date-number":t.auctionDateEnd,"date-type":"reveal"}}):t._e(),t.$route.fullPath.includes("bid")||t.$route.fullPath.includes("reveal")?a("timer",{style:{width:t.$route.fullPath.includes("reveal")?"100%":""},attrs:{"date-number":t.auctionDateEnd,"date-type":"auction"}}):t._e()],1),a("div",{attrs:{role:"tablist"}},[a("b-card-header",{class:[t.showDetail?"done":"","accordion-header"],attrs:{"header-tag":"header"}},[a("div",[a("span",[t._v(" 1 ")]),t._v("   "+t._s(t.$t("dapps.bidInfo")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"edit",on:{click:t.editInputs}},[t._v("\n          "+t._s(t.$t("dapps.edit"))+"\n        ")])]),a("b-collapse",{attrs:{id:"bidAccordion",accordion:"bidAccordionCollection",role:"tabpanel"},model:{value:t.showInfo,callback:function(e){t.showInfo=e},expression:"showInfo"}},[a("div",{staticClass:"inputs-container"},[a("div",{staticClass:"input-container"},[a("label",{attrs:{for:"localBidAmount"}},[t._v(t._s(t.$t("dapps.actualBid")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.localBidAmount,expression:"localBidAmount"}],class:[t.localBidAmount<t.MIN_BID?"errored":""],attrs:{type:"number",name:"localBidAmount"},domProps:{value:t.localBidAmount},on:{input:function(e){e.target.composing||(t.localBidAmount=e.target.value)}}})]),a("div",{staticClass:"input-container"},[a("label",{attrs:{for:"localBidMask"}},[t._v(t._s(t.$t("dapps.bidMask")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.localBidMask,expression:"localBidMask"}],class:[t.localBidAmount>=t.localBidMask?"errored":""],attrs:{type:"number",name:"localBidMask"},domProps:{value:t.localBidMask},on:{input:function(e){e.target.composing||(t.localBidMask=e.target.value)}}}),a("p",{directives:[{name:"show",rawName:"v-show",value:t.localBidAmount>=t.localBidMask,expression:"localBidAmount >= localBidMask"}],staticClass:"erroredMsg"},[t._v("\n              "+t._s(t.$t("dapps.bidMaskDesc"))+"\n            ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"secret-phrase-label",attrs:{for:"localSecretPhrase"}},[a("span",{staticClass:"input-title"},[t._v("\n                "+t._s(t.$t("dapps.secretPhrase"))+"\n              ")]),a("button",{staticClass:"title-button",on:{click:function(e){return e.preventDefault(),t.generateKeyPhrase(e)}}},[a("i",{staticClass:"fa fa-lg fa-refresh"}),t._v(" "+t._s(t.$t("dapps.random"))+"\n              ")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.localSecretPhrase,expression:"localSecretPhrase"}],attrs:{type:"text",name:"localSecretPhrase"},domProps:{value:t.localSecretPhrase},on:{input:function(e){e.target.composing||(t.localSecretPhrase=e.target.value)}}})])])]),a("b-card-header",{class:[t.showInfo?"disable":"","accordion-header-details"],attrs:{"header-tag":"header"}},[a("div",[a("span",[t._v(" 2 ")]),t._v("   "+t._s(t.$t("dapps.details")))])]),a("b-collapse",{attrs:{id:"detailAccordion",accordion:"bidAccordionCollection",role:"tabpanel"},model:{value:t.showDetail,callback:function(e){t.showDetail=e},expression:"showDetail"}},[a("div",{staticClass:"inputs-container"},[t.$route.fullPath.includes("reveal")?t._e():a("div",{staticClass:"confirmation-warning"},[t._v("\n            "+t._s(t.$t("dapps.detailWarning"))+"\n          ")]),a("div",{staticClass:"detail-info",attrs:{id:"printableData"}},[a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.actualBid")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.raw.bidAmount)+" "+t._s(t.networkName))])]),a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.secretPhrase")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.raw.secretPhrase))])]),a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.revealDate")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.formatDate(t.raw.revealDate)))])]),a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.bidMask")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.raw.bidMask)+" "+t._s(t.networkName))])]),a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.auctionEnd")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.formatDate(t.raw.auctionDateEnd)))])]),a("div",{staticClass:"json-container"},[a("div",{staticClass:"json-label-container"},[a("span",{staticClass:"json-title"},[t._v(t._s(t.$t("dapps.jsonString")))]),a("button",{staticClass:"title-button",on:{click:t.copyString}},[t._v("\n                  "+t._s(t.$t("common.copy"))+"\n                ")])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jsonText,expression:"jsonText"}],ref:"json",staticClass:"json-content",domProps:{value:t.jsonText},on:{input:function(e){e.target.composing||(t.jsonText=e.target.value)}}})])])])]),a("div",{staticClass:"buttons-container"},[t.$route.fullPath.includes("reveal")?a("button",{staticClass:"json-string",on:{click:function(e){return e.preventDefault(),t.openJsonModal(e)}}},[t._v("\n          "+t._s(t.$t("dapps.jsonString"))+"\n        ")]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showInfo,expression:"showInfo"}],class:[t.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:function(e){e.preventDefault(),t.$route.fullPath.includes("auction")?t.startAuctionAndBid():t.$route.fullPath.includes("bid")?t.sendBid():t.revealBid()}}},[t._v("\n          Next\n        ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"submit",attrs:{role:"tab"},on:{click:function(e){return e.preventDefault(),t.downloadAndSend(e)}}},[t._v("\n          "+t._s(t.$t("dapps.saveAndNext"))+"\n        ")])])],1)])],1)},n=[],i=(a("6762"),a("2fdb"),a("6b54"),a("7f7f"),a("f499")),o=a.n(i),l=(a("a481"),a("cebc")),r=(a("c5f6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer"},[s("div",{staticClass:"actual-timer"},[s("div",[s("img",{attrs:{src:a("411f"),alt:""}}),s("span",{directives:[{name:"show",rawName:"v-show",value:"reveal"===t.dateType,expression:"dateType === 'reveal'"}]},[t._v("\n        "+t._s(t.$t("dapps.revealsBid"))+"\n      ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"auction"===t.dateType,expression:"dateType === 'auction'"}]},[t._v("\n        "+t._s(t.$t("dapps.auctionCloses"))+"\n      ")])]),s("b",[t._v(t._s(t.time))])]),s("span",{staticClass:"deadline"},[t._v(t._s(t.dateToText()))])])}),d=[],c=a("ce96"),u={props:{dateType:{type:String,default:""},dateNumber:{type:Number,default:0}},data:function(){return{text:"",time:"0 Day(s) --:--:--",timer:function(){}}},mounted:function(){0!==this.dateNumber&&this.startClock()},destroyed:function(){var t=this;clearInterval(t.timer)},methods:{dateToText:function(){var t=new Date(this.dateNumber),e=t.setDate(t.getDate()-2);return"reveal"===this.dateType?c["d"].formatDate(e):c["d"].formatDate(this.dateNumber)},startClock:function(){var t,e,a=this,s=new Date(this.dateNumber),n=s.setDate(s.getDate()-2),i="reveal"===this.dateType?new Date(n).getTime():new Date(this.dateNumber),o=0,l=0,r=0,d=0;this.timer=setInterval(function(){if(t=(new Date).getTime(),e=i-t,l=Math.floor(e%6e4/1e3),r=Math.floor(e%36e5/6e4),o=Math.floor(e%864e5/36e5),d=Math.floor(e/864e5),a.time="".concat(d," Day(s) ").concat(o<10?"0"+o:o,":").concat(r<10?"0"+r:r,":").concat(l<10?"0"+l:l),l<0){var s=a;a.time="Reveal bids on going.",clearInterval(s.timer)}},1e3)}}},p=u,m=(a("539d4"),a("2877")),v=Object(m["a"])(p,r,d,!1,null,"ff8f2a96",null),f=v.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"jsonString",staticClass:"bootstrap-modal json-string-modal",attrs:{title:t.$t("dapps.jsonString"),"hide-footer":"",centered:""}},[a("form",{staticClass:"json-string-form"},[a("div",{staticClass:"input-container"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jsonText,expression:"jsonText"}],attrs:{placeholder:"{\n          'address': '0xf6827a968275bd62c8ca5fc08cf498b8711491c1',\n          'msg': 'hellow',\n          'sig': '0x32e4c6b54fb88487b1ea6b0bd41509aec82eb98969eec7127ecc8a1f1a8275724f3e97283ca3beb4692dd093150216cf602cd7a915605bfc3fb56f74f6e065d31c',\n          'version': '3',\n          'signer': 'MEW'\n        }"},domProps:{value:t.jsonText},on:{input:function(e){e.target.composing||(t.jsonText=e.target.value)}}})]),a("button",{staticClass:"submit-button large-round-button-green-filled",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitJson(e)}}},[t._v("\n      "+t._s(t.$t("dapps.confirm"))+"\n    ")]),a("interface-bottom-text",{attrs:{link:"mailto:support@myetherwallet.com","link-text":"https://kb.myetherwallet.com",question:"Having issues?"}})],1)])},b=[],_=a("539d"),w={components:{"interface-bottom-text":_["a"]},props:{updateJsonString:{type:Function,default:function(){return{}}}},data:function(){return{jsonText:""}},methods:{submitJson:function(){this.updateJsonString(this.jsonText),this.jsonText="",this.$refs.jsonString.hide()}}},g=w,C=(a("c08e"),Object(m["a"])(g,h,b,!1,null,null,null)),$=C.exports,y=a("add5"),B=a.n(y),S=a("2f62"),k=a("901e"),x=a.n(k),D={components:{timer:f,"json-string-modal":$},props:{domainName:{type:String,default:""},bidAmount:{type:Number,default:.01},bidMask:{type:Number,default:.02},loading:{type:Boolean,default:!1},generateKeyPhrase:{type:Function,default:function(){}},secretPhrase:{type:String,default:"random strings generated"},startAuctionAndBid:{type:Function,default:function(){}},sendBid:{type:Function,default:function(){}},revealBid:{type:Function,default:function(){}},auctionDateEnd:{type:Number,default:0},highestBidder:{type:String,default:""},tld:{type:String,default:""},networkName:{type:String,default:""},step:{type:Number,default:1},raw:{type:Object,default:function(){return{}}}},data:function(){return{localSecretPhrase:this.secretPhrase,localBidAmount:this.bidAmount,localBidMask:this.bidMask,localStep:this.step,showDetail:!1,showInfo:!0,formatDate:c["d"].formatDate,jsonText:"",MIN_BID:.01}},computed:Object(l["a"])({},Object(S["b"])({web3:"web3"}),{validInputs:function(){return this.secretPhrase.length>0&&new x.a(this.bidAmount).gte(this.MIN_BID)&&new x.a(this.bidMask).gte(this.bidAmount)}}),watch:{localSecretPhrase:function(t){this.$emit("updateSecretPhrase",t)},localBidAmount:function(t){this.$emit("updateBidAmount",+t)},localBidMask:function(t){this.$emit("updateBidMask",+t)},secretPhrase:function(t){this.localSecretPhrase=t},localStep:function(t){this.showDetail=1!==t,this.showInfo=2!==t,this.$emit("updateStep",t)},step:function(t){this.localStep=t},raw:function(t){this.parseRaw(t)}},mounted:function(){""===this.domainName&&this.$router.replace("/interface/dapps/register-domain")},methods:{openJsonModal:function(){this.$refs.jsonStringModal.$refs.jsonString.show()},updateJson:function(t){var e=JSON.parse(t);this.localSecretPhrase=e["secretPhrase"],this.localBidAmount=e["bidAmount"],this.localBidMask=e["bidMask"]},parseRaw:function(t){this.jsonText=o()({name:t.name,nameSHA3:t.nameSHA3,bidAmount:t.bidAmount,bidMask:t.bidMask,value:this.web3.utils.toWei(t.bidAmount.toString(),"ether"),secretPhrase:t.secretPhrase,secretPhraseSHA3:t.secretPhraseSHA3})},editInputs:function(){this.localStep=1},copyString:function(){this.$refs["json"].select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},downloadAndSend:function(){var t={data:this.raw["data"],from:this.raw["from"],to:this.raw["to"],value:this.raw["value"],gasPrice:this.raw["gasPrice"],gas:this.raw["gas"],nonce:this.raw["nonce"]};this.$route.fullPath.includes("reveal")||B()({printable:"printableData",type:"html",header:"MyEtherWallet - ENS reveal bid"}),this.web3.eth.sendTransaction(t).catch(function(t){c["e"].responseHandler(t,!1)})}}},P=D,A=(a("8874"),Object(m["a"])(P,s,n,!1,null,"73cd1a7f",null)),j=A.exports;a.d(e,"default",function(){return j})},c08e:function(t,e,a){"use strict";var s=a("dc2a"),n=a.n(s);n.a},dc2a:function(t,e,a){},eee43:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2366199d.a2d74e99.js.map