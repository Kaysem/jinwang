webpackJsonp([15],{"4FAa":function(t,e,a){var o=a("yjFM");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("6c2a092c",o,!0)},bZlt:function(t,e,a){"use strict";(function(t){var o=a("mvHQ"),r=a.n(o),i=a("bOdI"),n=a.n(i);e.a={name:"overview",data:function(){var t;return{userinfo:{},msg:"概览",left_top:{title:"门店销售排行榜",echartsData:[],option:{title:{text:"门店销售排行榜( 单位:元 )",textStyle:{color:"#fff",fontWeight:"bold",fontSize:14},top:"0%",left:"2.2%"},backgroundColor:"rgba(0,0,0,0)",color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{opacity:0}}},grid:{left:"5%",right:"2%",bottom:"3%",top:"15%",containLabel:!0},xAxis:[{type:"value",splitLine:{show:!1},axisLabel:{show:!1}}],yAxis:[{data:[],type:"category",axisLine:{lineStyle:{}},axisTick:{show:!1,alignWithLabel:!0},axisLabel:{textStyle:{color:"#fff"},formatter:function(t){return t.length>5?t.substring(0,4)+"...":t}}}],series:[{name:"门店销售排行榜",type:"bar",barWidth:"50%",itemStyle:{normal:{barBorderRadius:40,label:{show:!0,position:"insideLeft",formatter:"{c}元"}}},data:[]}]}},left_btm:{title:"商品销售排行榜",echartsData:[],option:(t={title:{text:"商品销售排行榜( 单位:元)",textStyle:{color:"#fff",fontWeight:"bold",fontSize:14},top:"0%",left:"2.2%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{orient:"vertical",right:10,top:10,textStyle:{color:"#1a1f37",fontWeight:"bold",fontSize:12},data:["已售","剩余"]},grid:{y:80,y2:30}},n()(t,"grid",{left:"5%",right:"2%",bottom:"5%",top:"15%",containLabel:!0,z:22}),n()(t,"xAxis",[{type:"value",position:"top",splitLine:{show:!1},axisLabel:{show:!1}}]),n()(t,"yAxis",[{type:"category",splitLine:{show:!1},axisLabel:{interval:"auto",color:"#fff",formatter:function(t){return t.length>5?t.substring(0,4)+"...":t}},data:[]}]),n()(t,"series",[{type:"bar",stack:"总量",barWidth:"50%",itemStyle:{normal:{barBorderRadius:30,barBorderColor:"#a65de3",color:"#a65de3",label:{show:!0,position:"insideLeft",formatter:"{c}元"}}},data:[]}]),t)},center:{cnt:"",amt:[],amt_rate:"",perSale:"",echartsData:[],option:{title:{text:"",left:"center",textStyle:{color:"#fff"}},tooltip:{formatter:function(t){return t.data.name+"<br/>今日销售金额："+t.data.money+"元"}},bmap:{center:[],zoom:13,roam:!0,mapStyle:{styleJson:[{featureType:"land",elementType:"geometry",stylers:{color:"#08304B"}},{featureType:"building",elementType:"geometry",stylers:{color:"#fff"}},{featureType:"highway",elementType:"all",stylers:{lightness:-42,saturation:-91}},{featureType:"arterial",elementType:"geometry",stylers:{lightness:-77,saturation:-94}},{featureType:"green",elementType:"geometry",stylers:{color:"#1b1b1b"}},{featureType:"water",elementType:"geometry",stylers:{color:"#181818"}},{featureType:"subway",elementType:"geometry.stroke",stylers:{color:"#181818"}},{featureType:"railway",elementType:"geometry",stylers:{lightness:-52}},{featureType:"all",elementType:"labels.text.stroke",stylers:{color:"#313131"}},{featureType:"all",elementType:"labels.text.fill",stylers:{color:"#8b8787"}},{featureType:"manmade",elementType:"geometry",stylers:{color:"#1b1b1b"}},{featureType:"local",elementType:"geometry",stylers:{lightness:-75,saturation:-91}},{featureType:"subway",elementType:"geometry",stylers:{lightness:-65}},{featureType:"railway",elementType:"all",stylers:{lightness:-40}},{featureType:"boundary",elementType:"geometry",stylers:{color:"#8b8787",weight:"1",lightness:-29}}]}},series:[{name:"所在位置",type:"effectScatter",coordinateSystem:"bmap",showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"red",shadowBlur:10,shadowColor:"#333",fontSize:10}},zlevel:1,data:[]}]}},right_top:{title:"会员概览",echartsData:[],option:{center:["50%","55%"],title:{text:"会员概要",x:"25%",y:"center",textStyle:{color:"#fff",fontSize:14,fontFamily:"微软雅黑",fontWeight:"bolder"}},legend:{data:[],orient:"vertical",right:"1%",y:0,itemGap:12,textStyle:{color:"#fff",fontSize:12}},series:[{label:{normal:{show:!1}},name:"",type:"pie",clockWise:!1,center:["38%","50%"],radius:[55,70],itemStyle:{normal:{color:"#82e1de"}},data:[{value:"",name:""},{value:"",name:"",itemStyle:{normal:{color:"rgba(0,0,0,0)",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}}}]},{label:{normal:{show:!1}},name:"",type:"pie",clockWise:!1,center:["38%","50%"],radius:[40,55],itemStyle:{normal:{color:"#eccb48"}},data:[{value:"",name:""},{value:"",name:"",itemStyle:{normal:{color:"rgba(0,0,0,0)",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}}}]},{label:{normal:{show:!1}},name:"",type:"pie",clockWise:!1,center:["38%","50%"],radius:[25,40],itemStyle:{normal:{color:"#916cc7"}},data:[{value:"",name:""},{value:"",name:"",itemStyle:{normal:{color:"rgba(0,0,0,0)",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}}}]}]}},right_btm:{title:"收银方式分类",echartsData:[],option:{title:{text:"支付方式分类( 单位:次数 )",left:"left",textStyle:{color:"#fff",fontWeight:"bold",fontSize:14}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{show:!1},calculable:!0,series:[{name:"支付方式分类",type:"pie",radius:[25,70],center:["50%","55%"],roseType:"area",label:{normal:{show:!0,textStyle:{fontSize:10,color:"#fff"},formatter:function(t){t=t.data.name;var e="",a=t.length,o=Math.ceil(a/4);if(a>4)for(var r=0;r<o;r++){var i="",n=4*r,s=n+4;i=r==o-1?t.substring(n,a):t.substring(n,s)+"\n",e+=i}else e=t;return e}}},color:["#82e1de","#c97c61","#edca47","#9d68d9","#e64f37"],labelLine:{normal:{length:.001,lineStyle:{color:"#fff"}}},data:[]}]}},intervalid:{},menuList:[],menuoperate:[]}},beforeCreate:function(){},mounted:function(){var t=this;t.userinfo=JSON.parse(sessionStorage.getItem("userinfo")),t.M_List(),this.intervalid=setInterval(function(){t.getMaps()},6e4)},beforeDestroy:function(){clearInterval(this.intervalid)},methods:{menu:function(t,e){var a=this,o={};return t.forEach(function(t,r,i){t.url===e&&(o=t),void 0!=t.children&&0!=t.children.length&&a.menu(t.children,e)}),o},M_List:function(){var t=this;t.menuList=[],t.menuList=JSON.parse(sessionStorage.getItem("menus"));var e=t.menu(t.menuList,t.$route.path);t.menuoperate=e.operate,t.getMaps()},getMaps:function(){var t=this,e=t.time_month()[0],a=t.time_month()[1],o=t.time_month()[2],r={vid:t.userinfo.store_root_id,startDate:e,endDate:a},i=t.$config.formData(r);t.$axios.post(t.$url.getVenderSaleSort,i).then(function(e){if(200==e.status)if(""!=e.data&&e.data.length>0){var a=e.data.reverse();t.left_top.echartsData=a,t.Left_Top(t.left_top.echartsData)}else t.$message.success("    暂无信息 ， 请及时接入相关数据 ! "),t.left_top.echartsData=[],t.Left_Top(t.left_top.echartsData);else t.left_top.echartsData=[],t.Left_Top(t.left_top.echartsData)}),t.$axios.post(t.$url.getStoreSaleSort,i).then(function(e){if(200==e.status)if(""!=e.data&&e.data.length>0){var a=e.data.reverse();t.left_btm.echartsData=a,t.Left_Btm(t.left_btm.echartsData)}else t.left_btm.echartsData=[],t.Left_Btm(t.left_btm.echartsData);else t.left_btm.echartsData=[],t.Left_Btm(t.left_btm.echartsData)}),t.$axios.post(t.$url.seeSaleToday,i).then(function(e){if(200==e.status){var a=e.data;t.center.cnt=a.cnt,t.center.amt=t.RetainedDecimalPlaces(a.amt,0).split("")}else t.center.cnt="",t.center.amt=[]}).catch(function(){t.center.cnt="",t.center.amt=[]}),t.$axios.post(t.$url.seeMemCount,i).then(function(e){if(200==e.status){var a=e.data;t.right_top.echartsData=a,t.Right_Top(t.right_top.echartsData)}else t.right_top.echartsData={mem_heretoday:0,mem_total:0,mem_regtoday:0},t.Right_Top(t.right_top.echartsData)}).catch(function(){t.right_top.echartsData={mem_heretoday:0,mem_total:0,mem_regtoday:0},t.Right_Top(t.right_top.echartsData)}),t.$axios.post(t.$url.payStyleType,i).then(function(e){if(200==e.status){var a=e.data;t.right_btm.echartsData=a,t.Right_Btm(t.right_btm.echartsData)}else t.right_btm.echartsData={},t.Right_Btm(t.right_btm.echartsData)}).catch(function(){t.right_btm.echartsData={},t.Right_Btm(t.right_btm.echartsData)}),t.$axios.post(t.$url.getStoreMapSaleData,i).then(function(e){if(200==e.status)if(e.data.length>0){var a=e.data;t.center.echartsData=a,t.Center(t.center.echartsData)}else t.center.echartsData=[],t.Center(t.center.echartsData);else t.center.echartsData=[],t.Center(t.center.echartsData)});var n={vid:t.userinfo.store_root_id,st1:e,et1:a,st2:o,et2:e},s=t.$config.formData(n);t.$axios.post(t.$url.getAllYibiaoPan,s).then(function(e){if(200==e.status){var a=e.data.data;t.center.amt_rate=t.RetainedDecimalPlaces(a[0].amt_rate,0).split(""),t.center.perSale=t.RetainedDecimalPlaces(a[0].perSale,0).split("")}else t.center.amt_rate="",t.center.perSale=""}).catch(function(e){t.center.amt_rate="",t.center.perSale=""})},time_month:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,o=t.getDate(),r=e+"-"+(a<10?"0"+a:a)+"-"+(o<10?"0"+o:o),i=new Date;i=+i+864e5,i=new Date(i);var n=i.getFullYear(),s=i.getMonth()+1,l=i.getDate(),c=n+"-"+(s<10?"0"+s:s)+"-"+(l<10?"0"+l:l),d=new Date;d=+d-864e5,d=new Date(d);var p=d.getFullYear(),m=d.getMonth()+1,h=d.getDate(),f=p+"-"+(m<10?"0"+m:m)+"-"+(h<10?"0"+h:h),g=[];return g[0]=r,g[1]=c,g[2]=f,g},RetainedDecimalPlaces:function(t,e){0!=e&&(t=parseFloat(t).toFixed(e));var a=String(t).split(".");return a[0]=a[0].replace(new RegExp("(\\d)(?=(\\d{3})+$)","ig"),"$1,"),a.join(".")},Left_Top:function(t){var e=this,a=[],o=[];if(t.length>0?(t.forEach(function(t,e,r){a.push(t.orderStoreName);var i={};i.name=t.orderStoreName,i.value=t.amt,i.orderStore=t.orderStore,o.push(i)}),e.left_top.option.yAxis[0].data=a,e.left_top.option.series[0].data=o):(e.left_top.option.yAxis[0].data=[],e.left_top.option.series[0].data=[]),void 0==e.myChartLeftTop){var i=document.getElementById("left_top");null!=i&&(e.myChartLeftTop=e.$echarts.init(i),e.myChartLeftTop.clear(),e.myChartLeftTop.setOption(e.left_top.option))}else e.myChartLeftTop.clear(),e.myChartLeftTop.setOption(e.left_top.option);window.addEventListener("resize",function(){void 0!=e.myChartLeftTop&&e.myChartLeftTop.resize()}),e.menuoperate.forEach(function(t,a,o){if(7==t)return void e.myChartLeftTop.on("click",function(t){e.$router.push({name:"ShopInfo",params:{name:t.data}});var a=r()(t.data);sessionStorage.removeItem("tempShopInfo"),sessionStorage.setItem("tempShopInfo",a)})})},Left_Btm:function(t){var e=this,a=[],o=[];if(t.length>0){for(var r=0;r<t.length;r++)a.push(t[r].skuName),o.push(t[r].amt);e.left_btm.option.yAxis[0].data=a,e.left_btm.option.series[0].data=o}else e.left_btm.option.yAxis[0].data=[],e.left_btm.option.series[0].data=[];if(void 0==e.myChartLeftBtm){var i=document.getElementById("left_btm");null!=i&&(e.myChartLeftBtm=e.$echarts.init(i),e.myChartLeftBtm.clear(),e.myChartLeftBtm.setOption(e.left_btm.option))}else e.myChartLeftBtm.clear(),e.myChartLeftBtm.setOption(e.left_btm.option);window.addEventListener("resize",function(){void 0!=e.myChartLeftBtm&&e.myChartLeftBtm.resize()})},Right_Top:function(t){var e=this;e.right_top.option.series[0].data[0].value=t.mem_total,e.right_top.option.series[0].data[1].value=t.mem_total,e.right_top.option.series[1].data[0].value=t.mem_heretoday,e.right_top.option.series[1].data[1].value=t.mem_total,e.right_top.option.series[2].data[0].value=t.mem_regtoday,e.right_top.option.series[2].data[1].value=t.mem_total;var a=[];if(a[0]="会员总数:"+t.mem_total,a[1]="今日会员到店数:"+t.mem_heretoday,a[2]="今日注册数:"+t.mem_regtoday,e.right_top.option.legend.data=a,e.right_top.option.series[0].name=a[0],e.right_top.option.series[1].name=a[1],e.right_top.option.series[2].name=a[2],void 0==e.myChartRightTop){var o=document.getElementById("right_top");null!=o&&(e.myChartRightTop=e.$echarts.init(o),e.myChartRightTop.clear(),e.myChartRightTop.setOption(e.right_top.option))}else e.myChartRightTop.clear(),e.myChartRightTop.setOption(e.right_top.option);window.addEventListener("resize",function(){void 0!=e.myChartRightTop&&e.myChartRightTop.resize()})},Right_Btm:function(t){var e=this,a=[];for(var o in t){var r={};r.value=t[o],o="cashPay"==o?"现金支付":"wxPay"==o?"微信支付":"aliPay"==o?"支付宝支付":"intePay"==o?"积分支付":"couponPay"==o?"礼券支付":"posPay"==o?"pos机刷卡支付":"cardPay"==o?"储值卡支付":"maLingPay"==o?"抹零支付":"chequePay"==o?"支票支付":"cibPay"==o?"威富通":"cibZfbPay"==o?"威富通-支付宝":"cibWxPay"==o?"威富通-微信":"其他",r.name=o,a.push(r)}if(e.right_btm.option.series[0].data=a,void 0==e.myChartRightBtm){var i=document.getElementById("right_btm");null!=i&&(e.myChartRightBtm=e.$echarts.init(i),e.myChartRightBtm.clear(),e.myChartRightBtm.setOption(e.right_btm.option))}else e.myChartRightBtm.clear(),e.myChartRightBtm.setOption(e.right_btm.option);window.addEventListener("resize",function(){void 0!=e.myChartRightBtm&&e.myChartRightBtm.resize()})},Center:function(t){var e=this;if(t.length>0){var a=[];t.forEach(function(t,e,o){var r={};r.money=t.amt_dy,r.name=t.storeName,r.orderStore=t.storeCode,r.value=[t.lon,t.lat],a.push(r)});var o=a.slice(0,1);e.center.option.bmap.center=o[0].value,e.center.option.series[0].data=a}else e.center.option.bmap.center=[116.46,39.92],e.center.option.series[0].data=[];if(void 0==e.myChartCenter){var i=document.getElementById("center_box");null!=i&&(e.myChartCenter=e.$echarts.init(i),e.myChartCenter.clear(),e.myChartCenter.setOption(e.center.option))}else e.myChartCenter.clear(),e.myChartCenter.setOption(e.center.option);window.addEventListener("resize",function(){void 0!=e.myChartCenter&&e.myChartCenter.resize()}),e.menuoperate.forEach(function(t,a,o){if(7==t)return void e.myChartCenter.on("click",function(t){e.$router.push({name:"ShopInfo",params:{name:t.data}});var a=r()(t.data);sessionStorage.removeItem("tempShopInfo"),sessionStorage.setItem("tempShopInfo",a)})})},setNumber:function(e,a){var o=String(a),r=o.length;e.find("i").length>r&&e.find("i:gt("+(r-1)+")").remove(),e.find("b").remove();for(var i=0;i<r;++i){e.find("i").length<r&&e.append("<i></i>");var n=e.find("i").eq(i),s=-40*parseInt(o.charAt(i),10);i<r-1&&(r-i-1)%3==0&&t("<b></b>").insertAfter(n),n.animate({backgroundPositionY:s+"px"},500)}},getTime:function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())}},watch:{$route:function(t,e){}}}}).call(e,a("7t+N"))},ekZu:function(t,e,a){"use strict";function o(t){a("4FAa")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("bZlt"),i=a("k7sd"),n=a("VU/8"),s=o,l=n(r.a,i.a,!1,s,"data-v-13420c36",null);e.default=l.exports},k7sd:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"overview"}},[a("div",{staticClass:"background clearfix"},[a("div",{staticClass:"left fl"},[a("div",{staticClass:"left_box"},[a("div",{staticClass:"top"},[a("p",[t._v(t._s(t.left_top.title))]),t._v(" "),a("div",{attrs:{id:"left_top"}})]),t._v(" "),a("div",{staticClass:"bottom"},[a("p",[t._v(t._s(t.left_btm.title))]),t._v(" "),a("div",{attrs:{id:"left_btm"}})])])]),t._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"center_box"},[a("p",[t._v("正在监控"+t._s(t.center.cnt)+"个订单")]),t._v(" "),a("div",{staticClass:"center_cont"},[a("div",{staticClass:"c_c_left"},[a("p",[t._v("今日销售总额")]),t._v(" "),a("div",{staticClass:"num_box"},[a("div",[t._l(t.center.amt,function(e){return a("span",{key:e.id},[t._v(t._s(e))])}),t._v(" "),a("span",[t._v("元")])],2)])]),t._v(" "),a("div",{staticClass:"c_c_center"},[a("p",[t._v("昨日同比")]),t._v(" "),a("div",{staticClass:"num_box"},[a("div",[t._l(t.center.amt_rate,function(e){return a("span",{key:e.id},[t._v(t._s(e))])}),t._v(" "),a("span",[t._v("%")])],2)])]),t._v(" "),a("div",{staticClass:"c_c_right"},[a("p",[t._v("客单价")]),t._v(" "),a("div",{staticClass:"num_box"},[a("div",[t._l(t.center.perSale,function(e){return a("span",{key:e.id},[t._v(t._s(e))])}),t._v(" "),a("span",[t._v("元")])],2)])])]),t._v(" "),a("div",{attrs:{id:"center_box"}})])]),t._v(" "),a("div",{staticClass:"right fr"},[a("div",{staticClass:"right_box"},[a("div",{staticClass:"top"},[a("p",[t._v(t._s(t.right_top.title))]),t._v(" "),a("div",{attrs:{id:"right_top"}})]),t._v(" "),a("div",{staticClass:"bottom"},[a("p",[t._v(t._s(t.right_btm.title))]),t._v(" "),a("div",{attrs:{id:"right_btm"}})])])])])])},r=[],i={render:o,staticRenderFns:r};e.a=i},yjFM:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"#overview[data-v-13420c36]{height:100%;text-align:left;overflow:hidden;background:hsla(0,0%,100%,.1);border-radius:10px;font-size:0}.background[data-v-13420c36]{width:100%;height:100%;background:url("+a("SQmh")+");background-size:100% 100%;font-size:0}.background>div[data-v-13420c36]{font-size:16px}p[data-v-13420c36]{font-size:14px;text-align:center}.left[data-v-13420c36]{display:inline-block;width:25%;height:100%;padding:0 10px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.center[data-v-13420c36]{display:inline-block;width:50%;height:100%}.right[data-v-13420c36]{display:inline-block;width:25%;height:100%;padding:0 10px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.center_box[data-v-13420c36]{margin-top:30px;height:90%;background:url("+a("dfh2")+");background-size:100% 100%}.left_box[data-v-13420c36],.right_box[data-v-13420c36]{margin-top:31px;padding-top:34px;height:90%;position:relative;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.top[data-v-13420c36]{position:absolute;height:45%;width:100%}.top>p[data-v-13420c36]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.bottom[data-v-13420c36]{position:absolute;bottom:0;height:45%;width:100%}.bottom>p[data-v-13420c36]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media screen and (min-height:800px){.bottom>p[data-v-13420c36],.top>p[data-v-13420c36]{top:2.5%}.center_box>p[data-v-13420c36]{top:1.5%}}@media screen and (max-height:800px){.bottom>p[data-v-13420c36],.top>p[data-v-13420c36]{top:1%}.center_box>p[data-v-13420c36]{top:.5%}}.left_box>div[data-v-13420c36]{background:url("+a("HPt+")+");background-size:100% 100%}.right_box>div[data-v-13420c36]{background:url("+a("HPt+")+");background-size:100% 100%}.center_box>p[data-v-13420c36]{padding-top:1%}#left_btm[data-v-13420c36],#left_top[data-v-13420c36],#right_btm[data-v-13420c36],#right_top[data-v-13420c36]{height:88%;width:100%;position:absolute;bottom:0}.center_cont[data-v-13420c36]{font-size:0}.center_cont>div[data-v-13420c36]{display:inline-block;font-size:14px}.center_box>p[data-v-13420c36]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media screen and (min-width:1300px){.center_cont>div[data-v-13420c36]:first-child{width:40%;margin-left:10px}.center_cont>div[data-v-13420c36]:nth-child(2){width:30%;margin-left:10px}.center_cont>div[data-v-13420c36]:last-child{width:25%}.center_cont[data-v-13420c36]{padding-top:60px}}@media screen and (max-width:1300px){.center_cont>div[data-v-13420c36]:first-child{width:40%;margin-left:10px}.center_cont>div[data-v-13420c36]:nth-child(2){width:30%;margin-left:10px}.center_cont>div[data-v-13420c36]:last-child{width:25%}.center_cont[data-v-13420c36]{padding-top:38px}}.center_cont>div p[data-v-13420c36]{text-align:left}.num_box>div[data-v-13420c36]{border:1px solid #18376a;padding:2px 4px 0;display:inline-block}.num_box>div>span[data-v-13420c36]{display:inline-block;width:21px;height:30px;text-align:center;line-height:30px;background:url("+a("jJtv")+") no-repeat;background-size:100% 100%;font-size:20px}.center_box[data-v-13420c36]{position:relative}#center_box[data-v-13420c36]{width:100%;position:absolute;height:70%;bottom:0;padding:1px;-webkit-box-sizing:border-box;box-sizing:border-box}",""])}});