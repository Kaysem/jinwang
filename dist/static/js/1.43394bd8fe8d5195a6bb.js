webpackJsonp([1],{"1jSe":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"blackadd"}},[i("div",{staticClass:"b_top"},[i("h4",{staticClass:"page_title"},[t._v("抓拍照片浏览")]),t._v(" "),i("div",{staticClass:"top_content inline_block searChstore"},[i("span",[t._v("门店：")]),t._v(" "),i("el-select",{attrs:{clearable:"",placeholder:"请选择",size:"medium"},model:{value:t.top.searChstore,callback:function(e){t.$set(t.top,"searChstore",e)},expression:"top.searChstore"}},t._l(t.top.storeOptions,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("div",{staticClass:"top_content time"},[i("span",[t._v("时间：")]),t._v(" "),i("el-radio-group",{on:{change:function(e){t.changeTimes()}},model:{value:t.top.valueTimeS,callback:function(e){t.$set(t.top,"valueTimeS",e)},expression:"top.valueTimeS"}},[i("el-radio",{attrs:{label:"half"}},[t._v("最近半小时")]),t._v(" "),i("el-radio",{attrs:{label:"hour"}},[t._v("最近一小时")]),t._v(" "),i("el-radio",{staticClass:"custom",attrs:{label:"custom"}},[t._v("自定义\n                    "),i("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.top.pickerOptions0},model:{value:t.top.valueTime,callback:function(e){t.$set(t.top,"valueTime",e)},expression:"top.valueTime"}})],1)],1)],1),t._v(" "),i("div",{staticClass:"top_content sex"},[i("span",[t._v("性别：")]),t._v(" "),i("el-radio-group",{on:{change:function(e){t.changeSex()}},model:{value:t.top.valueSex,callback:function(e){t.$set(t.top,"valueSex",e)},expression:"top.valueSex"}},[i("el-radio",{attrs:{label:"ALL"}},[t._v("全部")]),t._v(" "),i("el-radio",{attrs:{label:"男"}},[t._v("男性")]),t._v(" "),i("el-radio",{attrs:{label:"女"}},[t._v("女性")])],1)],1),t._v(" "),i("div",{staticClass:"top_content age"},[i("span",[t._v("年龄：")]),t._v(" "),i("div",[i("div",{staticClass:"startage"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.top.age.startAge,expression:"top.age.startAge"}],attrs:{type:"text",id:"startage",placeholder:""},domProps:{value:t.top.age.startAge},on:{input:function(e){e.target.composing||t.$set(t.top.age,"startAge",e.target.value)}}})]),t._v(" "),i("span",{staticClass:"age_line"}),t._v(" "),i("div",{staticClass:"endage"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.top.age.endAge,expression:"top.age.endAge"}],attrs:{type:"text",id:"endage",placeholder:""},domProps:{value:t.top.age.endAge},on:{input:function(e){e.target.composing||t.$set(t.top.age,"endAge",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"top_content operaty"},[i("span",[t._v("操作：")]),t._v(" "),i("div",{staticClass:"todo_search",on:{click:function(e){e.stopPropagation(),t.usercomein_list()}}},[i("span",{staticClass:"search_icon"}),t._v(" 查询 ")]),t._v(" "),i("div",{staticClass:"add_black",on:{click:function(e){e.stopPropagation(),t.dialogShow("add")}}},[i("span",{staticClass:"black_icon"}),t._v(" 加入黑名单 ")]),t._v(" "),i("div",{staticClass:"del_btn",on:{click:function(e){e.stopPropagation(),t.dialogShow("del")}}},[i("span",{staticClass:"del_icon"}),t._v(" 删除照片 ")])])]),t._v(" "),"按位置"==t.top.kind?i("div",{staticClass:"b_btm"},[i("ul",{staticClass:"add_store clearfix"},t._l(t.btm.add.list,function(e,a){return i("li",{key:a,class:0===a?"active":"",on:{click:function(e){e.stopPropagation(),t.ClickAddStore(e)}}},[t._v("\n                "+t._s(e.name)+"\n                "+t._s(a)+"\n            ")])})),t._v(" "),i("el-collapse",{on:{change:function(e){t.collapseChange()}},model:{value:t.btm.add.collapse,callback:function(e){t.$set(t.btm.add,"collapse",e)},expression:"btm.add.collapse"}},t._l(t.btm.add.listContent,function(e,o){return i("el-collapse-item",{key:o,attrs:{name:""+o}},[i("template",{attrs:{slot:"title"},slot:"title"},[i("el-checkbox",{attrs:{"v-model":e.checked}},[t._v(" "+t._s(e.name)+" ")])],1),t._v(" "),i("div",{staticClass:"pic_all_box"},t._l(e.children,function(s,n){return i("div",{key:n,staticClass:"pictrue_box"},[i("div",{staticClass:"img_box"},[i("el-checkbox",{staticClass:"chk_box",on:{change:function(a){t.checkBoxChange_A(e,o,s,n)}},model:{value:s.checked,callback:function(e){t.$set(s,"checked",e)},expression:"item2.checked"}}),t._v(" "),i("img",{attrs:{src:a("FkQF"),alt:""},on:{click:function(e){e.stopPropagation(),t.toPersonal(s)}}})],1),t._v(" "),i("p",[t._v("时间 ："+t._s(s.time)+"   \n                            "),i("i",{staticClass:"pic_icons pic_vip"}),t._v(" "),i("i",{staticClass:"pic_icons pic_black"}),t._v(" "),i("i",{staticClass:"pic_icons "})]),t._v(" "),i("p",[t._v("性别 ："+t._s(s.sex)+" ")]),t._v(" "),i("p",[t._v("年龄 ："+t._s(s.age)+" 岁 ")])])})),t._v(" "),i("div",{staticClass:"clickMore"},[t._v(" 点击加载更多 ")])],2)}))],1):i("div",{staticClass:"b_btm"},[i("ul",{staticClass:"add_store clearfix"},[i("li",{staticClass:"active",on:{click:function(e){e.stopPropagation(),t.ClickAddStore(e)}}},[t._v(t._s(this.top.storTab))])]),t._v(" "),i("div",{staticClass:"times_pic"},[0!=t.btm.times.listContent.length?i("div",{staticClass:"times_pic_box"},t._l(t.btm.times.listContent,function(e,a){return i("div",{key:a,staticClass:"pictrue_box"},[i("div",{staticClass:"img_box"},[i("el-checkbox",{staticClass:"chk_box",on:{change:function(i){t.checkBoxChange_T(e,a)}},model:{value:e.checked,callback:function(a){t.$set(e,"checked",a)},expression:"item.checked"}}),t._v(" "),i("img",{attrs:{src:e.url,alt:""},on:{click:function(a){a.stopPropagation(),t.toPersonal(e)}}})],1),t._v(" "),i("p",[t._v("时间："),i("i",{staticClass:"pic_font"},[t._v(t._s(e.ts)+" ")]),t._v(" "),"金王会员库"==e.repoName?i("i",{staticClass:"pic_icons pic_vip"}):"金王黑名单库"==e.repoName?i("i",{staticClass:"pic_icons pic_black"}):i("i",{staticClass:"pic_icons "})]),t._v(" "),i("p",[t._v("性别："),i("i",{staticClass:"pic_font"},[t._v(t._s(e.gender)+" ")])]),t._v(" "),i("p",[t._v("年龄："),i("i",{staticClass:"pic_font"},[t._v(t._s(e.age)+" 岁")])])])})):t._e(),t._v(" "),i("div",{staticClass:"add_pages"},[i("span",{on:{click:function(e){t.tochagePage("L")}}},[t._v("首页")]),t._v(" "),i("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.page.pageSize,total:t.page.total,"current-page":t.page.currentPage},on:{"current-change":t.changePage}}),t._v(" "),i("span",{on:{click:function(e){t.tochagePage("R")}}},[t._v("尾页")])],1)])]),t._v(" "),i("el-dialog",{attrs:{title:t.tip.title,visible:t.tip.dialogVisible,width:"30%","show-close:false":""},on:{"update:visible":function(e){t.$set(t.tip,"dialogVisible",e)}}},["add"===t.tip.state?i("div",{staticClass:"dialog_text_center"},[i("div",{staticClass:"dialog_content dialog_add_black"},[i("p",{attrs:{id:"isBlack"}},[t._v("是否确定添加该人员到黑名单？")]),t._v(" "),i("p",{attrs:{id:"black_commit"}},[i("span",{attrs:{id:"beiZhu"}},[t._v("备注  : ")]),t._v(" "),i("el-autocomplete",{attrs:{"popper-class":"my-autocomplete","fetch-suggestions":t.querySearch,placeholder:"对人员描述型总结"},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[i("div",{staticClass:"name"},[t._v(t._s(a.value))])]}}]),model:{value:t.state3,callback:function(e){t.state3=e},expression:"state3"}},[i("i",{staticClass:"el-icon-edit el-input__icon",attrs:{slot:"suffix"},on:{click:t.handleIconClick},slot:"suffix"})])],1)]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("input",{staticClass:"footer_btn sure_btn",attrs:{type:"button",value:"确定"},on:{click:function(e){t.toBlackPic()}}}),t._v(" "),i("input",{staticClass:"footer_btn back_btn",attrs:{type:"button",value:"取消"},on:{click:function(e){t.tip.dialogVisible=!1}}})])]):t._e(),t._v(" "),"repoName_vip"===t.tip.state?i("div",{staticClass:"dialog_text_center"},[i("div",{staticClass:"dialog_content dialog_add_black"},[i("p",{attrs:{id:"isBlack"}},[t._v("小主,该人员是"),i("span",{staticStyle:{color:"#FFB90F"}},[t._v(" VIP会员 ")]),t._v(",请再次确认是否要加入到黑名单？")]),t._v(" "),i("p",{attrs:{id:"black_commit"}},[i("span",{attrs:{id:"beiZhu"}},[t._v("备注  : ")]),t._v(" "),i("el-autocomplete",{attrs:{"popper-class":"my-autocomplete","fetch-suggestions":t.querySearch,placeholder:"对人员描述型总结"},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[i("div",{staticClass:"name"},[t._v(t._s(a.value))])]}}]),model:{value:t.state3,callback:function(e){t.state3=e},expression:"state3"}},[i("i",{staticClass:"el-icon-edit el-input__icon",attrs:{slot:"suffix"},on:{click:t.handleIconClick},slot:"suffix"})])],1)]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("input",{staticClass:"footer_btn sure_btn",attrs:{type:"button",value:"确定"},on:{click:function(e){t.toBlackPic()}}}),t._v(" "),i("input",{staticClass:"footer_btn back_btn",attrs:{type:"button",value:"取消"},on:{click:function(e){t.tip.dialogVisible=!1}}})])]):"repoName_black"===t.tip.state?i("div",[i("div",{staticClass:"dialog_content dialog_black_error"},[i("p",[t._v("小主,该人员已是黑名单人员,无需重复添加!")])])]):"greater_addBlackPic"===t.tip.state?i("div",[i("div",{staticClass:"dialog_content dialog_black_error"},[i("p",[t._v("小主,每次仅可勾选一张照片添加至黑名单哦!")])])]):"del"===t.tip.state?i("div",{staticClass:"dialog_content_center"},[i("div",{staticClass:"dialog_content dialog_del_pic"},[t._v("\n                您即将删除照片，删除的照片不可恢复，谢谢！\n            ")]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("input",{staticClass:"footer_btn sure_btn",attrs:{type:"button",value:"确定"},on:{click:function(e){t.delList()}}}),t._v(" "),i("input",{staticClass:"footer_btn back_btn",attrs:{type:"button",value:"取消"},on:{click:function(e){t.tip.dialogVisible=!1}}})])]):"greater_delPic"===t.tip.state?i("div",[i("div",{staticClass:"dialog_content dialog_black_error"},[i("p",[t._v("小主,每次仅可勾选一张照片进行删除哦!")])])]):i("div")])],1)},o=[],s={render:i,staticRenderFns:o};e.a=s},"6EO7":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,'#browse[data-v-9a2b4dfc]{width:100%;color:#fff;border-radius:10px;margin:auto;overflow:hidden;position:relative;margin-bottom:20px;min-width:1021px;overflow-x:auto}#browse>div[data-v-9a2b4dfc]{padding:20px}.b_btm[data-v-9a2b4dfc],.b_top[data-v-9a2b4dfc]{background:hsla(0,0%,100%,.1);padding:20px}.b_btm[data-v-9a2b4dfc]{margin-top:20px}.page_title[data-v-9a2b4dfc]{font-size:20px;font-weight:400}.timeLis[data-v-9a2b4dfc]{display:inline-block;vertical-align:middle}.timeLis>li[data-v-9a2b4dfc]{float:left;height:40px;line-height:40px;vertical-align:middle;margin:0 10px;color:#c5c5c5;cursor:pointer}.timeLis>li.active[data-v-9a2b4dfc]{color:#fff}.top_content[data-v-9a2b4dfc]{margin-top:15px}.el-select[data-v-9a2b4dfc]{width:138px;height:38px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.searChstore span[data-v-9a2b4dfc]{margin-right:10px}.age>div[data-v-9a2b4dfc]{display:inline-block;vertical-align:middle;margin:0 10px}.endage input[data-v-9a2b4dfc],.startage input[data-v-9a2b4dfc]{border:1px solid #91a2eb;background:transparent;border-radius:20px;color:#c5c5c5;outline:none;width:100%;height:100%;padding-left:24px;-webkit-box-sizing:border-box;box-sizing:border-box}.age_line[data-v-9a2b4dfc]{display:inline-block;vertical-align:middle;width:30px;height:1px;background:#91a2eb}.endage[data-v-9a2b4dfc],.startage[data-v-9a2b4dfc]{display:inline-block;position:relative;width:78px;height:36px}.endage[data-v-9a2b4dfc]:after,.startage[data-v-9a2b4dfc]:after{content:"\\5C81";display:block;position:absolute;right:15px;top:47%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#c5c5c5;font-size:13px}.operaty>div[data-v-9a2b4dfc]{display:inline-block;color:#c5c5c5;font-size:14px;margin:0 10px;width:110px;height:40px;line-height:40px;border:none;border-radius:20px;text-align:center}.search_icon[data-v-9a2b4dfc]{display:inline-block;vertical-align:middle;width:20px;height:20px;background:url('+a("JbUR")+") no-repeat;background-size:100% 100%}.todo_search:hover .search_icon[data-v-9a2b4dfc]{background:url("+a("1vEd")+") no-repeat;background-size:100% 100%}.black_icon[data-v-9a2b4dfc]{display:inline-block;vertical-align:middle;width:20px;height:20px;background:url("+a("KyOs")+") no-repeat;background-size:100% 100%}.add_black:hover .black_icon[data-v-9a2b4dfc]{background:url("+a("L3iZ")+") no-repeat;background-size:100% 100%}.operaty>div[data-v-9a2b4dfc]:hover{background:#363f68;color:#fff;cursor:pointer}.operaty>div[data-v-9a2b4dfc]:active{opacity:.8}.del_icon[data-v-9a2b4dfc]{display:inline-block;vertical-align:middle;width:20px;height:20px;vertical-align:sub;background:url("+a("16st")+") no-repeat;background-size:100% 100%}.del_btn:hover .del_icon[data-v-9a2b4dfc]{background:url("+a("3G2G")+") no-repeat;background-size:100% 100%}.add_store>li[data-v-9a2b4dfc]{float:left;color:#c5c5c5;padding:5px 5px 10px 0;margin-right:10px;cursor:pointer}.add_store>li.active[data-v-9a2b4dfc]{color:#fff;border-bottom:1px solid #fff}#browse>.b_btm[data-v-9a2b4dfc]{padding:20px 40px 40px}div.clickMore[data-v-9a2b4dfc]{background:#596085;color:#d2d8fc;text-align:center;height:32px;line-height:32px;border:1px solid #596085}div.clickMore[data-v-9a2b4dfc]:hover{opacity:.8;border:1px solid #596085;color:#596085;background:transparent}div.clickMore[data-v-9a2b4dfc]:active{opacity:.6;border:1px solid #596085;color:#596085;background:transparent}.img_box[data-v-9a2b4dfc]{width:150px;height:180px;margin-bottom:7px;position:relative}.img_box>.chk_box[data-v-9a2b4dfc]{position:absolute;left:10px;top:10px}.img_box img[data-v-9a2b4dfc]{width:100%;height:100%}input[type=checkbox][data-v-9a2b4dfc]{width:16px;height:16px;position:absolute;left:10px;top:10px}.pictrue_box[data-v-9a2b4dfc]{display:inline-block;vertical-align:middle;width:180px}.pic_all_box[data-v-9a2b4dfc],.times_pic_box[data-v-9a2b4dfc]{font-size:0}.times_pic_box p[data-v-9a2b4dfc]{font-size:13px}.pic_all_box>div[data-v-9a2b4dfc]{margin-bottom:10px;font-size:13px}.times_pic[data-v-9a2b4dfc]{margin-top:30px;padding:0 20px;color:#c5c5c5;font-size:13px}.times_pic>div>.pictrue_box[data-v-9a2b4dfc]{margin-bottom:10px}.el-range-editor.el-input__inner[data-v-9a2b4dfc]{background:#1a1f37;border-radius:20px;border-color:#91a2eb}.el-pagination[data-v-9a2b4dfc]{display:inline-block}.pictrue_box p[data-v-9a2b4dfc]{font-size:13px;line-height:1.769230769230769}.footer_btn[data-v-9a2b4dfc]{width:100px;height:38px;background-color:#4b77e5;border-radius:10px;border:1px solid #4b77e5;outline:none;color:#fff;cursor:pointer}.footer_btn[data-v-9a2b4dfc]:hover{opacity:.8}.footer_btn[data-v-9a2b4dfc]:active{opacity:.6}.footer_btn+.footer_btn[data-v-9a2b4dfc]{margin-left:100px;background-color:#87a7f6;border:1px solid #87a7f6}.pic_icons[data-v-9a2b4dfc]{width:16px;height:16px;display:inline-block;vertical-align:text-bottom}.pic_vip[data-v-9a2b4dfc]{background:url("+a("EGpb")+") no-repeat;background-size:100% 100%}.pic_black[data-v-9a2b4dfc]{background:url("+a("ZY8H")+") no-repeat;background-size:100% 100%}.add_pages[data-v-9a2b4dfc]{text-align:right;margin-top:20px;margin-bottom:30px}.add_pages>span[data-v-9a2b4dfc]{display:inline-block;width:28.5px;height:28px;background:hsla(0,0%,100%,.2);color:#fff;font-size:10px;text-align:center;line-height:28px;border-radius:5px;vertical-align:text-top;cursor:pointer}.add_pages>span[data-v-9a2b4dfc]:hover{background:#91a2eb}.add_pages>span[data-v-9a2b4dfc]:last-child{margin-left:-5px}.pic_font[data-v-9a2b4dfc]{font-size:10px;white-space:nowrap}inline_block[data-v-9a2b4dfc]{display:inline-block}.dialog_black_success[data-v-9a2b4dfc]{height:200px}.dialog_black_error p[data-v-9a2b4dfc],.dialog_black_success p[data-v-9a2b4dfc]{color:#fff;text-align:center}.dialog_text_center[data-v-9a2b4dfc]{text-align:center}.el-dialog[data-v-9a2b4dfc]{height:275px}.dialog-footer[data-v-9a2b4dfc]{margin:30px 0 20px}#isBlack[data-v-9a2b4dfc]{margin-top:30px;margin-bottom:20px}#black_commit[data-v-9a2b4dfc],#isBlack[data-v-9a2b4dfc]{color:#bdc0d4;font-size:14px}#beiZhu[data-v-9a2b4dfc]{margin-right:22px}.el-dialog__body .el-input__inner[data-v-9a2b4dfc]{width:310px;height:38px;border-radius:20px}.add_pages .el-pagination[data-v-9a2b4dfc]{text-align:right;padding:2px 0}.el-dialog__body .dialog_content_center[data-v-9a2b4dfc]{margin:0 0 0 70px}",""])},JHpM:function(t,e,a){"use strict";function i(t){a("Ktu4")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("y5z4"),s=a("1jSe"),n=a("VU/8"),l=i,c=n(o.a,s.a,!1,l,"data-v-9a2b4dfc",null);e.default=c.exports},Ktu4:function(t,e,a){var i=a("6EO7");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("16cd6cba",i,!0)},y5z4:function(t,e,a){"use strict";(function(t){e.a={name:"Browse",data:function(){return{top:{storeOptions:[{value:"",label:"全部门店"}],searChstore:"",valueTimeS:"half",valueTime:[],pickerOptions0:{disabledDate:function(t){return t.getTime()>Date.now()-864e4}},valueSex:"ALL",age:{startAge:"1",endAge:"99"},kind:"按时间",storTab:"全部门店"},page:{total:0,pageSize:10,currentPage:1,allPages:0},btm:{add:{collapse:[],checked:[!0,!1],list:[{name:"一分店"},{name:"二分店"},{name:"三分店"}],listContent:[{name:"入口（在线）",checked:!1,children:[{img:"",time:"12:20",sex:"男",age:"23",checked:!1}]},{name:"收银口（在线）",checked:!1,children:[{img:"",time:"12:20",sex:"男",age:"23",checked:!1}]}]},times:{list:[{name:"全部"},{name:"一分店"}],listContent:[]}},tip:{state:"",title:"",dialogVisible:!1},restaurants:[],state3:""}},beforeMount:function(){var t=this;console.log("挂载前执行"),t.usercomein_list()},mounted:function(){for(var e=this,a=0;a<e.btm.add.listContent.length;a++)e.btm.add.collapse.push(a.toString());t("#startage").keyup(function(){var a=t(this);if(/[^\d]/.test(a.val())){var i=a.val().replace(/[^\d]/g,"");t(this).val(i)}t(this).val().length>=3&&t(this).val(t(this).val().substr(0,3)),e.top.age.startAge=t(this).val()}),t("#endage").keyup(function(){var a=t(this);if(/[^\d]/.test(a.val())){var i=a.val().replace(/[^\d]/g,"");i.length>=3&&(i=i.slice(0,3)),t(this).val(i)}t(this).val().length>=3&&t(this).val(t(this).val().substr(0,3)),e.top.age.endAge=t(this).val()}),t("#startage").blur(function(){t("#endage").focus()}),t("#endage").blur(function(){}),window.addEventListener("resize",function(){e.Address_picsMargin(),e.Time_picsMargin()}),e.restaurants=this.loadAll();for(var i=JSON.parse(sessionStorage.getItem("storeInfo_list")),o={value:"",label:""},s=0;s<i.length;s++){o={value:i[s].storeCode,label:i[s].storeName},e.top.storeOptions.push(o)}},watch:{"top.kind":{handler:function(e,a){var i=this;"按时间"===e?i.$nextTick(function(){i.Time_picsMargin()}):i.$nextTick(function(){i.Address_picsMargin()}),e!=a&&t(".add_store > li ").eq(0).addClass("active").siblings("li").removeClass("active")},deep:!0},"tip.dialogVisible":{handler:function(t,e){var a=this;if(!1===t){a.tip.title="",a.tip.state="";for(var i=0;i<a.btm.times.listContent.length;i++)a.btm.times.listContent[i].checked=!1}},deep:!0},"top.valueTime":{handler:function(t,e){var a=this;if(null===t&&(t=[]),null!=t&&0!=t.length){a.top.valueTimeS="custom";var i=a.getMyDate((new Date).getTime());console.log(a.top.valueTime[1].substring(0,10),i,a.top.valueTime[1].substring(0,10)==i.substring(0,10)),a.top.valueTime[1].substring(0,10)==i.substring(0,10)?a.top.valueTime[1]=i:a.top.valueTime[1]=a.top.valueTime[1].substring(0,10)+" 23:59:59"}else"custom"==a.top.valueTimeS&&a.$message.success("请选择时间!")},deep:!0}},methods:{changePage:function(t){var e=this;e.page.currentPage=t,e.usercomein_list(e.page.currentPage)},tochagePage:function(t){var e=this;e.page.currentPage="L"==t?1:e.page.allPages,e.usercomein_list(e.page.currentPage)},changeTimes:function(){var t=this;"custom"!=t.top.valueTimeS&&(t.top.valueTime=[])},ClickTime:function(e,a){"LI"!=t(e.target).prop("tagName")?t(".timeLis li").eq(2).addClass("active").siblings("li").removeClass("active"):t(e.target).addClass("active").siblings("li").removeClass("active")},changeSex:function(t){},changeKind:function(t){},ClickAddStore:function(e){t(e.target).addClass("active").siblings("li").removeClass("active")},collapseChange:function(t){var e=this;e.$nextTick(function(){e.Address_picsMargin()})},Address_picsMargin:function(){var e=t(".pic_all_box ").width(),a=e-900-16;t(".pic_all_box > div").css({marginRight:a/4-1+"px"});for(var i=0;i<t(".pic_all_box > div").length;i++)t(".pic_all_box > div:nth-child("+5*i+")").css({marginRight:"0px"})},Time_picsMargin:function(){var e=t(".times_pic_box ").width(),a=e-900;t(".times_pic_box > div").css({marginRight:a/4-1+"px"});for(var i=0;i<t(".times_pic_box > div").length;i++)t(".times_pic_box > div:nth-child("+5*i+")").css({marginRight:"0px"})},checkBoxChange_A:function(t,e,a,i){},checkBoxChange_T:function(t,e){},getMyDate:function(t){var e=this,a=new Date(t),i=a.getFullYear(),o=a.getMonth()+1,s=a.getDate(),n=a.getHours(),l=a.getMinutes(),c=a.getSeconds();return i+"-"+e.getzf(o)+"-"+e.getzf(s)+" "+e.getzf(n)+":"+e.getzf(l)+":"+e.getzf(c)},getzf:function(t){return parseInt(t)<10&&(t="0"+t),t},usercomein_list:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;"custom"==e.top.valueTimeS&&0==e.top.valueTime.length&&e.$message.warning("请选择时间!"),console.log("所有选项",e.top.storeOptions);for(var a=0;a<e.top.storeOptions.length;a++)e.top.searChstore==e.top.storeOptions[a].value&&(e.top.storTab=e.top.storeOptions[a].label);var i=(new Date).getTime(),o="",s="";"half"==e.top.valueTimeS?(o=e.getMyDate(1e3*(i/1e3-1800)),s=e.getMyDate(i)):"hour"==e.top.valueTimeS?(o=e.getMyDate(1e3*(i/1e3-3600)),s=e.getMyDate(i)):(o=e.top.valueTime[0],s=e.top.valueTime[1]);var n={page:t,rows:10,sex:e.top.valueSex,ageStart:e.top.age.startAge,ageEnd:e.top.age.endAge,timeStart:o,timeEnd:s,storeId:e.top.searChstore},l=e.$config.formData(n);e.$axios.post(e.$url.usercomein_list,l).then(function(t){if(console.log("列表重新渲染了"),200==t.status){console.log("返回200");var a=t.data.data;console.log(a),e.page.currentPage=a.start,e.page.total=a.count,e.page.allPages=a.pages;var i=[];i=a.datas,console.log(i.length);for(var o=0;o<i.length;o++)i[o].checked=!1,i[o].ts=e.getMyDate(parseInt(i[o].time));e.btm.times.listContent=i,e.$nextTick(function(){e.Time_picsMargin()})}}).catch(function(t){e.btm.times.listContent=[]})},delList:function(){for(var t=this,e="",a=(t.btm.times.listContent.length,0);a<t.btm.times.listContent.length;a++)!0===t.btm.times.listContent[a].checked&&(e+=t.btm.times.listContent[a].id+",");e=e.substring(0,e.length-1),t.$axios.get(t.$url.browse_del+"/"+e).then(function(e){200==e.status&&1==e.data.code?t.$message.success("删除成功！"):t.$message.error("删除失败，请稍后再试！"),t.usercomein_list(),t.tip.dialogVisible=!1}).catch(function(e){t.$message.error("请求失败，请稍后再试！"),t.tip.dialogVisible=!1})},dialogShow:function(t){var e=this;e.tip.state=t;var a=0,i="";if("add"===t){for(var o=!1,s=0;s<e.btm.times.listContent.length;s++)!0===e.btm.times.listContent[s].checked&&(console.log("====",e.btm.times.listContent[s].repoName),o=!0,a+=1,i=e.btm.times.listContent[s].repoName);1==a?!0===o&&("金王会员库"==i?(e.tip.title="黑名单添加",e.tip.state="repoName_vip"):"金王黑名单库"==i?e.tip.state="repoName_black":(e.tip.state="add",e.tip.title="黑名单添加"),e.tip.dialogVisible=!0):a>1?(e.tip.state="greater_addBlackPic",e.tip.dialogVisible=!0,e.tip.title="黑名单添加"):e.$message.warning("请选择要添加至黑名单的照片！")}else if("del"===t){for(var n=!1,l=0;l<e.btm.times.listContent.length;l++)!0===e.btm.times.listContent[l].checked&&(n=!0,a+=1);1==a?!0===n&&(e.tip.dialogVisible=!0,e.tip.title="删除照片"):a>1?(e.tip.state="greater_delPic",e.tip.dialogVisible=!0,e.tip.title="删除照片"):e.$message.warning("请选择要删除的照片！")}else e.tip.title="",e.tip.dialogVisible=!1},toBlackPic:function(){for(var t=this,e="",a=(t.btm.times.listContent.length,0);a<t.btm.times.listContent.length;a++)!0===t.btm.times.listContent[a].checked&&(e+=t.btm.times.listContent[a].id+",");e=e.substring(0,e.length-1);var i=t.$config.formData({rmark:t.state3});t.$axios.post(t.$url.browse_blackAdd+"/"+e,i).then(function(e){200==e.status?(t.$message.success("添加成功！"),t.tip.dialogVisible=!1,t.usercomein_list()):(t.$message.error("添加失败, 请稍后重试！"),t.tip.dialogVisible=!1),t.tip.title="",t.state3=""}).catch(function(e){t.$message.error("请求失败，请稍后再试！")})},toPersonal:function(t){t.age},querySearch:function(t,e){var a=this.restaurants;e(t?a.filter(this.createFilter(t)):a)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},loadAll:function(){return[{value:"附近小偷"},{value:"警方通缉"},{value:"会员偷东西"}]},handleSelect:function(t){console.log(t)},handleIconClick:function(t){console.log(t)}}}}).call(e,a("7t+N"))}});