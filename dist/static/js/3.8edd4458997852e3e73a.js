webpackJsonp([3],{Czi9:function(e,t,a){"use strict";function i(e){a("hvgk")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("lOTL"),l=a("L9/b"),s=a("VU/8"),r=i,d=s(o.a,l.a,!1,r,"data-v-fdfc7bdc",null);t.default=d.exports},"L9/b":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"user"}},[a("div",{staticClass:"bg"},[a("p",{staticClass:"tip"},[e._v("用户管理")]),e._v(" "),a("div",{staticClass:"top"},[a("div",{staticClass:"top_left"},[a("el-button",{staticClass:"btn_add",attrs:{disabled:e.btn_isdisabled,size:"small",round:""},on:{click:function(t){e.handleEdit()}}},[e._v("新增")]),e._v(" "),a("el-button",{staticClass:"btn_del",attrs:{size:"small",round:"",disabled:e.disabled.disabled_del},on:{click:function(t){e.handleDelete()}}},[e._v("删除")]),e._v(" "),a("el-button",{staticClass:"btn_password",attrs:{size:"small",round:"",disabled:e.disabled.disabled_password},on:{click:function(t){e.RestorePassword()}}},[e._v("恢复密码")])],1),e._v(" "),a("div",{staticClass:"top_right"},[a("el-input",{staticClass:"input-with-select searchinput",attrs:{placeholder:"请输入内容"},model:{value:e.SearchInput,callback:function(t){e.SearchInput=t},expression:"SearchInput"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){e.SearchBtn()}},slot:"append"})],1)],1)]),e._v(" "),a("div",[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.table.tableData,stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),a("el-table-column",{attrs:{label:"序号",index:e.typeIndex,type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户ID",prop:"id"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户名",prop:"user_name",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"用户角色",prop:"role_name"}}),e._v(" "),a("el-table-column",{attrs:{label:"手机号",prop:"phone_num"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建日期",prop:"create_time",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"table_todo table_look",on:{click:function(a){e.handleLook(t.$index,t.row)}}}),e._v(" "),a("span",{staticClass:"table_todo table_write",on:{click:function(a){e.handleEdit(t.$index,t.row)}}}),e._v(" "),t.row.id==e.userinfo.id?a("span",{staticClass:"table_todo table_del_no"}):a("span",{staticClass:"table_todo table_del",on:{click:function(a){e.handleDelete(t.$index,t.row)}}})]}}])})],1)],1),e._v(" "),a("div",{staticClass:"add_pages"},[a("span",{on:{click:function(t){e.tochagePage("L")}}},[e._v("首页")]),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":e.page.pageSize,total:e.page.total,"current-page":e.page.currentPage},on:{"current-change":e.changePage}}),e._v(" "),a("span",{on:{click:function(t){e.tochagePage("R")}}},[e._v("尾页")])],1),e._v(" "),a("el-dialog",{staticClass:"Look",attrs:{title:e.dialog.look.title,visible:e.dialog.look.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.$set(e.dialog.look,"dialogVisible",t)}}},[a("div",{staticClass:"look_box"},[a("div",{staticClass:"L_B_row"},[a("div",{staticClass:"L_B_R_left"},[e._v("角色：")]),e._v(" "),a("div",{staticClass:"L_B_R_right"},[a("span",{domProps:{textContent:e._s(e.dialog.look.user.role)}})])]),e._v(" "),a("div",{staticClass:"L_B_row"},[a("div",{staticClass:"L_B_R_left"},[e._v("用户名：")]),e._v(" "),a("div",{staticClass:"L_B_R_right"},[a("span",{domProps:{textContent:e._s(e.dialog.look.user.name)}})])]),e._v(" "),a("div",{staticClass:"L_B_row"},[a("div",{staticClass:"L_B_R_left"},[e._v("手机号：")]),e._v(" "),a("div",{staticClass:"L_B_R_right"},[a("span",{domProps:{textContent:e._s(e.dialog.look.user.phone)}})])]),e._v(" "),a("div",{staticClass:"L_B_row"},[a("div",{staticClass:"L_B_R_left"},[e._v("邮箱：")]),e._v(" "),a("div",{staticClass:"L_B_R_right"},[a("span",{domProps:{textContent:e._s(e.dialog.look.user.email)}})])]),e._v(" "),a("div",{staticClass:"L_B_row"},[a("div",{staticClass:"L_B_R_left"},[e._v("创始人：")]),e._v(" "),a("div",{staticClass:"L_B_R_right"},[a("span",{domProps:{textContent:e._s(e.dialog.look.user.creatpeople)}})])]),e._v(" "),a("div",{staticClass:"L_B_row"},[a("div",{staticClass:"L_B_R_left"},[e._v("创建时间：")]),e._v(" "),a("div",{staticClass:"L_B_R_right"},[a("span",{domProps:{textContent:e._s(e.dialog.look.user.date)}})])])]),e._v(" "),a("div",{staticClass:"dialog_footer"},[a("el-button",{staticClass:"goback",attrs:{size:"small"},on:{click:function(t){e.dialog.look.dialogVisible=!1}}},[e._v("返 回")])],1)]),e._v(" "),a("el-dialog",{staticClass:"Write",attrs:{title:e.dialog.write.title,visible:e.dialog.write.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.$set(e.dialog.write,"dialogVisible",t)}}},[a("div",{staticClass:"write_box"},[a("el-form",{ref:"form",attrs:{model:e.dialog.write.user,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户名："}},[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.dialog.write.user.name,callback:function(t){e.$set(e.dialog.write.user,"name",t)},expression:"dialog.write.user.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱："}},[a("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.dialog.write.user.email,callback:function(t){e.$set(e.dialog.write.user,"email",t)},expression:"dialog.write.user.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号："}},[a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.dialog.write.user.phone,callback:function(t){e.$set(e.dialog.write.user,"phone",t)},expression:"dialog.write.user.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色："}},[a("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.dialog.write.user.role,callback:function(t){e.$set(e.dialog.write.user,"role",t)},expression:"dialog.write.user.role"}},e._l(e.dialog.write.user.rolelist,function(e,t){return a("el-option",{attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog_footer"},[a("el-button",{staticClass:"gosure",attrs:{size:"small",type:"primary"},on:{click:function(t){e.Write_sure()}}},[e._v("确 定")]),e._v(" "),a("el-button",{staticClass:"goback",attrs:{size:"small"},on:{click:function(t){e.dialog.write.dialogVisible=!1}}},[e._v("返 回")])],1)]),e._v(" "),a("el-dialog",{staticClass:"Del",attrs:{title:e.dialog.del.title,visible:e.dialog.del.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.$set(e.dialog.del,"dialogVisible",t)}}},[a("div",{staticClass:"write_box"},[a("p",{staticClass:"del_tit",domProps:{textContent:e._s(e.dialog.del.content)}},[e._v("确认删除此用户吗？")])]),e._v(" "),a("div",{staticClass:"dialog_footer"},[a("el-button",{staticClass:"gosure",attrs:{size:"small",type:"primary"},on:{click:function(t){e.del_sure()}}},[e._v("确 定")]),e._v(" "),a("el-button",{staticClass:"goback",attrs:{size:"small"},on:{click:function(t){e.dialog.del.dialogVisible=!1}}},[e._v("返 回")])],1)]),e._v(" "),a("el-dialog",{staticClass:"Password",attrs:{title:e.dialog.Restore.title,visible:e.dialog.Restore.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.$set(e.dialog.Restore,"dialogVisible",t)}}},[a("div",{staticClass:"write_box"},[a("p",{staticClass:"del_tit"},[e._v("确认为"),a("span",{domProps:{textContent:e._s(e.dialog.Restore.content.name)}}),e._v("("),a("span",{domProps:{textContent:e._s(e.dialog.Restore.content.role)}}),e._v(")恢复密码？")])]),e._v(" "),a("div",{staticClass:"dialog_footer"},[a("el-button",{staticClass:"gosure",attrs:{size:"small",type:"primary"},on:{click:function(t){e.Restore_sure()}}},[e._v("确 定")]),e._v(" "),a("el-button",{staticClass:"goback",attrs:{size:"small"},on:{click:function(t){e.dialog.Restore.dialogVisible=!1}}},[e._v("取 消")])],1)])],1)])},o=[],l={render:i,staticRenderFns:o};t.a=l},hvgk:function(e,t,a){var i=a("iSxh");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("276ba83c",i,!0)},iSxh:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"#user[data-v-fdfc7bdc]{text-align:left;overflow:hidden;background:hsla(0,0%,100%,.1);border-radius:10px}.bg[data-v-fdfc7bdc]{padding:0 20px}.tip[data-v-fdfc7bdc]{font-size:24px;margin-top:20px}.el-button+.el-button[data-v-fdfc7bdc]{margin-left:0}.top[data-v-fdfc7bdc]{position:relative;height:34px;margin:20px 0 30px}.top_left[data-v-fdfc7bdc]{top:0;left:0;position:absolute}.top_right[data-v-fdfc7bdc]{top:0;right:0;position:absolute;width:270px}.top_right>.el-input[data-v-fdfc7bdc]{width:100%}.el-input-group__append[data-v-fdfc7bdc]{border-top-right-radius:16px;border-bottom-right-radius:16px}.dialog_footer[data-v-fdfc7bdc]{text-align:center}.add_pages[data-v-fdfc7bdc]{text-align:right;margin-top:20px;margin-bottom:30px}.add_pages>span[data-v-fdfc7bdc]{display:inline-block;width:28.5px;height:28px;background:hsla(0,0%,100%,.2);color:#fff;font-size:10px;text-align:center;line-height:28px;border-radius:5px;vertical-align:text-top;cursor:pointer}.add_pages>span[data-v-fdfc7bdc]:hover{background:#91a2eb}.add_pages>span[data-v-fdfc7bdc]:last-child{margin-left:-5px}.table_todo[data-v-fdfc7bdc]{display:inline-block;width:16px;height:18px;margin:0 5px;vertical-align:middle}.btn_add[data-v-fdfc7bdc]{background-color:#6477c8;color:#fff;width:80px;font-size:14px}.btn_del[data-v-fdfc7bdc]{background-color:#d88350;color:#fff;width:80px;font-size:14px}.btn_password[data-v-fdfc7bdc]{background-color:#4e7cc8;color:#fff;width:100px;font-size:14px}#user .el-button[data-v-fdfc7bdc]{border:none;height:34px}#user .top_left .el-button+.el-button[data-v-fdfc7bdc]{margin-left:10px}#user .el-dialog__wrapper .el-button+.el-button[data-v-fdfc7bdc]{margin-left:50px}.table_look[data-v-fdfc7bdc]{background:url("+a("f1l/")+") no-repeat;background-size:100% 100%}.table_write[data-v-fdfc7bdc]{background:url("+a("pPZ2")+") no-repeat;background-size:100% 100%}.table_write_no[data-v-fdfc7bdc]{background:url("+a("odxq")+") no-repeat;background-size:100% 100%}.table_del[data-v-fdfc7bdc]{background:url("+a("0I13")+") no-repeat;background-size:100% 100%}.table_del_no[data-v-fdfc7bdc]{background:url("+a("stew")+") no-repeat;background-size:100% 100%}.L_B_row[data-v-fdfc7bdc]{font-size:0;color:#bdc0d4;margin:10px 0}.L_B_row>div[data-v-fdfc7bdc]{display:inline-block}.L_B_row>div[data-v-fdfc7bdc]:first-child{width:35%;font-size:16px;text-align:right}.L_B_row>div[data-v-fdfc7bdc]:last-child{width:65%;font-size:16px;padding-left:40px;-webkit-box-sizing:border-box;box-sizing:border-box}.goback[data-v-fdfc7bdc]{width:120px;height:38px;background-color:#6477c8;border-radius:6px;color:#fff}.write_box[data-v-fdfc7bdc]{color:#fff;margin-top:6px}#user .write_box .el-input[data-v-fdfc7bdc]{width:100%}#user .write_box .el-select>.el-input[data-v-fdfc7bdc]{width:100%!important}.gosure[data-v-fdfc7bdc]{width:120px;height:38px;background-color:#2f67c2;border-radius:6px}.write_box .goback[data-v-fdfc7bdc]{margin-left:55px}#user .dialog_footer[data-v-fdfc7bdc]{margin-bottom:20px}.del_tit[data-v-fdfc7bdc]{text-align:center;font-size:16px;margin:22px 0 40px}",""])},lOTL:function(e,t,a){"use strict";(function(e){var i=a("mvHQ"),o=a.n(i);t.a={name:"User",data:function(){return{userinfo:{},SearchInput:"",disabled:{disabled_del:!0,disabled_password:!0},table:{tableData:[],multipleSelection:[]},page:{total:0,pageSize:8,currentPage:1,allPages:1},dialog:{look:{title:"查看",dialogVisible:!1,user:{role:"",name:"",phone:"",creatpeople:"",date:"",email:""}},write:{title:"用户",dialogVisible:!1,user:{lineinfo:{},name:"",phone:"",email:"",role:"",rolelist:{}}},del:{title:"删除用户",dialogVisible:!1,id:"",listid:[]},Restore:{all_index:0,title:"恢复密码",dialogVisible:!1,content:{name:"",role:""}}},btn_isdisabled:!1,menuList:[],menuoperate:[]}},methods:{typeIndex:function(e){return e+8*(this.page.currentPage-1)+1},RestorePassword:function(){var e=this;if(1==e.table.multipleSelection.length){e.dialog.Restore.dialogVisible=!0;var t=e.table.multipleSelection[0];e.dialog.Restore.content.name=t.user_name,e.dialog.Restore.content.role=t.role_name}else this.$message({message:"只能为一个用户恢复密码",type:"warning"})},Restore_sure:function(){var e=this;e.table.multipleSelection[0].pass_word="123456";var t=e.table.multipleSelection[0],a=e.$config.formData(t);e.$axios.post(e.$url.User_upt,a).then(function(t){200==t.status?1==t.data.infocode&&(e.getTable(e.page.currentPage),e.$message.success(t.data.message),e.dialog.Restore.dialogVisible=!1):e.$message.error(t.data.message)})},handleSelectionChange:function(e){this.table.multipleSelection=e},handleLook:function(e,t){var a=this;a.dialog.look.dialogVisible=!0,a.dialog.look.user.role=t.role_name,a.dialog.look.user.name=t.user_name,a.dialog.look.user.phone=t.phone_num,a.dialog.look.user.creatpeople=t.create_pepole,a.dialog.look.user.date=t.create_time,a.dialog.look.user.email=t.mailbox},User_role:function(){var e=this,t={data:o()({id:e.userinfo.role_id})},a=e.$config.formData(t);e.$axios.post(e.$url.User_role,a).then(function(t){if(200==t.status){var a=t.data;e.dialog.write.user.rolelist=[];var i=[];a.forEach(function(e,t,a){var o={};o.label=e.role_name,o.value=e.id.toString(),o.role_rank=e.role_rank,i.push(o)}),e.dialog.write.user.rolelist=i}})},handleEdit:function(e,t){var a=this;a.User_role(),a.$nextTick(function(){if(void 0==e){var i=void 0;a.menuoperate.forEach(function(e,t,a){if(2==e)return void(i=e)}),2==i&&(a.dialog.write.dialogVisible=!0,a.dialog.write.title="新增用户",a.dialog.write.user.lineinfo={},a.dialog.write.user.name="",a.dialog.write.user.role="",a.dialog.write.user.phone="",a.dialog.write.user.email="")}else{var o=void 0;a.menuoperate.forEach(function(e,t,a){if(3==e)return void(o=e)}),3==o&&(a.userinfo.id==t.id?(a.$message.warning("不能编辑自己"),a.dialog.write.dialogVisible=!1):(a.dialog.write.dialogVisible=!0,a.dialog.write.title="编辑用户",a.dialog.write.user.lineinfo=t,a.dialog.write.user.name=t.user_name,a.dialog.write.user.phone=t.phone_num,a.dialog.write.user.email=t.mailbox,a.dialog.write.user.role=t.role_id.toString()))}})},Write_sure:function(){var e=this,t=e.dialog.write.title,a={};a=e.dialog.write.user.rolelist.find(function(t){if(t.value===e.dialog.write.user.role)return t});var i=/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,o=/^1[34578]\d{9}$/;if(""!=e.dialog.write.user.name&&""!=e.dialog.write.user.role&&""!=e.dialog.write.user.phone&&""!=e.dialog.write.user.email){var l=!1;if(i.test(e.dialog.write.user.email)?o.test(e.dialog.write.user.phone)?l=!0:e.$message.error("请填写正确手机号！"):e.$message.error("请填写正确邮箱信息！"),1==l){var s=void 0,r=void 0;"新增用户"==t?(r=e.$url.User_add,s={role_name:a.label,role_id:a.value,role_rank:a.role_rank,phone_num:e.dialog.write.user.phone,user_name:e.dialog.write.user.name,pass_word:"123456",mailbox:e.dialog.write.user.email,create_pepole:e.userinfo.user_name,create_pepole_id:e.userinfo.id,create_pepole_rank:e.userinfo.role_rank,create_role_id:e.userinfo.role_id,create_role_name:e.userinfo.role_name,store_name:e.userinfo.store_name,store_root_id:e.userinfo.store_root_id}):(r=e.$url.User_upt,s={id:e.dialog.write.user.lineinfo.id,role_name:a.label,role_id:a.value,role_rank:a.role_rank,phone_num:e.dialog.write.user.phone,user_name:e.dialog.write.user.name,pass_word:e.dialog.write.user.lineinfo.pass_word,mailbox:e.dialog.write.user.email,create_pepole:e.userinfo.user_name,create_pepole_id:e.userinfo.id,create_pepole_rank:e.userinfo.role_rank,create_role_id:e.userinfo.role_id,create_role_name:e.userinfo.role_name,store_name:e.userinfo.store_name,store_root_id:e.userinfo.store_root_id});var d=e.$config.formData(s);e.$axios.post(r,d).then(function(t){200==t.status?1==t.data.infocode?(e.getTable(e.page.currentPage),e.$message.success(t.data.message),e.dialog.write.dialogVisible=!1):3==t.data.infocode?e.$message.error(t.data.message):4==t.data.infocode?e.$message.error(t.data.message):(t.data.infocode,e.$message.error(t.data.message)):e.$message.error(t.data.message)})}}else e.$message.error("请填写完整信息！")},handleDelete:function(e,t){var a=this,i=void 0;if(a.menuoperate.forEach(function(e,t,a){if(4==e)return void(i=e)}),4==i)if(a.dialog.del.dialogVisible=!0,void 0!=e)0==t.role_rank?a.dialog.del.dialogVisible=!1:(a.dialog.del.dialogVisible=!0,a.dialog.del.content="确认删除用户吗？",a.dialog.del.id=t.id);else{a.dialog.del.content="确认删除选中用户吗？",a.dialog.del.listid=[];var o=!0;a.table.multipleSelection.forEach(function(e,t,i){if(a.userinfo.id==e.id)return a.$message.error("选中用户中不能包含自己！"),void(o=!1);0!=e.role_rank&&a.dialog.del.listid.push(e.id)}),a.dialog.del.dialogVisible=0!=o}},del_sure:function(){var e=this,t=void 0,a=void 0;"确认删除用户吗？"==e.dialog.del.content?(t={id:e.dialog.del.id},a=e.$url.User_del):(t={data:o()({ids:e.dialog.del.listid})},a=e.$url.User_listdel);var i=e.$config.formData(t);e.$axios.post(a,i).then(function(t){200==t.status&&1==t.data.infocode?(e.$message.success(t.data.message),e.getTable(e.page.currentPage),e.dialog.del.dialogVisible=!1):e.$message.error(t.data.message)}).catch(function(t){e.$message.error("删除失败！")}),e.$refs.multipleTable.clearSelection()},changePage:function(e){this.getTable(e)},Look_sure:function(){this.dialog.look.dialogVisible=!1},tochagePage:function(e){var t=this,a=1;a="L"==e?1:t.page.allPages,t.getTable(a)},SearchBtn:function(){this.getTable()},getTable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",t=this,a=void 0,i=void 0;""!=t.SearchInput?(a={data:o()({page:""+e,id:t.userinfo.role_id,like:t.SearchInput})},i=t.$url.Usermanagelike):(a={data:o()({page:""+e,id:t.userinfo.role_id})},i=t.$url.Usermanagelist);var l=t.$config.formData(a);t.$axios.post(i,l).then(function(e){if(200==e.status){var a=e.data;t.page.total=a.totalCount,t.page.currentPage=a.curPage,t.page.allPages=a.allPages;var i=a.datas;i.forEach(function(e,a,i){e.page_index=8*(t.page.currentPage-1)+(a+1)}),t.table.tableData=i}})},menu_test:function(t,a){var i=this;e.each(t,function(t,o){if(o.url==a)return void(i.menuoperate=k.operate);void 0!=o.children&&e.each(o.children,function(e,t){if(t.url==a)return void(i.menuoperate=t.operate)})})},M_List:function(){var e=this;e.menuList=[],e.menuList=JSON.parse(sessionStorage.getItem("menus")),e.menu_test(e.menuList,e.$route.path);var t=void 0;e.menuoperate.forEach(function(e,a,i){if(8==e)return void(t=e)}),e.disabled.disabled_password=8!=t,e.getTable(e.page.currentPage)}},mounted:function(){var e=this;e.userinfo=""!=sessionStorage.getItem("userinfo")?JSON.parse(sessionStorage.getItem("userinfo")):"",e.M_List()},watch:{"table.multipleSelection":{handler:function(e,t){var a=this,i=void 0;a.menuoperate.forEach(function(e,t,a){if(4==e)return void(i=e)}),4==i&&0!=e.length?a.disabled.disabled_del=!1:a.disabled.disabled_del=!0},deep:!0}}}}).call(t,a("7t+N"))}});