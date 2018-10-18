<template>
    <div id="camera" @click="gorupRelode()">
        <div class="bg">
            <p class="tip">摄像头管理</p>
            <div class="top">
                <div class="top_left">
                    <input class="creat" type="button" value="新增" @click="dialogBigEdit(  -1 , {} , 'creat')">
                    <input class="write" type="button" value="编辑" @click="dialogBigEdit(  -1 , {} , 'write')">
                    <input class="write_col" type="button" value="编辑分组" @click="dialogBigEdit(  -1 , {} , 'writeGroup')">
                    <input class="delCamera" type="button" value="删除摄像头" @click="dialogSmallDelete( -1 , {} , 'del' )">
                </div>
                <div class="top_right">
                    <el-input   placeholder="请输入内容"  class="input-with-select searchinput">
                        <el-button slot="append" icon="el-icon-search" ></el-button>
                    </el-input>
                </div>
            </div>
            <!-- 表格 S -->
            <div>
                <el-table
                    stripe
                    ref="multipleTable"
                    :data="table.tableData" 
                    style="width: 100%"
                    @selection-change="tableSelectCahnge" >

                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>

                    <el-table-column
                    prop="id"
                    label="ID" >
                    </el-table-column>

                    <el-table-column
                    prop="group"
                    label="分组" 
                    sortable>
                    </el-table-column>

                    <el-table-column
                    prop="name"
                    label="名称" 
                    sortable>
                    </el-table-column>

                    <el-table-column 
                    label="运行状态" 
                    sortable>
                        <template slot-scope="scope"> 
                            {{ scope.row.state }} 
                        </template>
                    </el-table-column>

                    <el-table-column
                    prop="ip"
                    label="IP地址" >
                    </el-table-column>

                    <el-table-column
                    prop="brand"
                    label="品牌" >
                    </el-table-column>

                    <el-table-column
                    label="操作" >
                        <template slot-scope="scope">
                            <span class="table_todo table_write" @click="dialogBigEdit(scope.$index , scope.row , 'write')"></span>
                            <span class="table_todo table_del" @click="dialogSmallDelete(scope.$index , scope.row , 'del' )"></span>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
            <!-- 表格 E -->

           <!-- 分页 S -->
            <div class="add_pages">
                <span  >首页</span>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size = "page.pageSize"
                    :total= "page.total"
                    :current-page = "page.currentPage"
                    @current-change="changePage"
                    >
                </el-pagination>
                <span  >尾页</span>
            </div>
            <!-- 分页 E -->
            <!-- 模态框 大 编辑 S -->
            <el-dialog
                id="big_dialog"
                :title="dialog.big.write.title"
                :visible.sync="dialog.big.write.dialogVisible"
                width="60%">
                <!-- 编辑 S -->
                <div v-if="dialog.big.state === 'write' ">
                    <div class="write_content">
                        <div class="w_c_top">
                            <div>IP地址</div>
                            <div>用户名</div>
                            <div>密码</div>
                            <div>品牌</div>
                            <div>名称</div>
                            <div>分组</div>
                        </div>
                        <div class="w_c_btm" v-if="dialog.big.write.writeList.length > 0">
                            <!-- <div class="w_c_btm_row" v-for="( item , index ) in dialog.big.write.writeList"> -->
                            <div class="w_c_btm_row" v-for="( item , index ) in dialog.big.write.writeList" :key="index">
                                <div>
                                    <input type="text" v-model="item.ip">
                                </div>
                                <div>
                                    <input type="text" v-model="item.username">
                                </div>
                                <div>
                                    <input type="text" v-model="item.password">
                                </div>
                                <div>
                                    <el-select placeholder="请选择品牌" v-model="item.brand">
                                        <!-- <el-option v-for="(item , index) in dialog.brandOption" 
                                            :key="item.value" 
                                            :label="item.label" 
                                            :value="item.value">
                                        </el-option> -->
                                        <el-option v-for="item in dialog.brandOption" 
                                            :key="item.value" 
                                            :label="item.label" 
                                            :value="item.value">
                                        </el-option>
                                        
                                    </el-select>
                                </div>
                                <div>
                                    <input type="text" v-model="item.name">
                                </div>
                                <div>
                                    <el-select placeholder="请选择分组" v-model="item.group">
                                        <!-- <el-option v-for="(item , index) in dialog.groupOption" 
                                            :key="item.value" 
                                            :label="item.label" 
                                            :value="item.value">
                                        </el-option> -->
                                        <el-option v-for="item in dialog.groupOption" 
                                            :key="item.value" 
                                            :label="item.label" 
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_btn">
                        <input type="button" class="f_B_btn test" value="测试">
                        <input type="button" class="f_B_btn sure" value="确定">
                        <input type="button" class="f_B_btn back" value="取消" @click="dialog.big.write.dialogVisible = false">
                    </div>  
                </div>
                <!-- 编辑 E -->
                <!-- 新增 S -->
                <div v-else-if="dialog.big.state === 'creat' ">
                    <div class="creat_content">
                        <div class="w_c_top">
                            <div>IP地址</div>
                            <div>用户名</div>
                            <div>密码</div>
                            <div>品牌</div>
                            <div>名称</div>
                            <div>分组</div>
                        </div>
                        <div class="w_c_btm" v-if="dialog.big.write.creatList.length > 0">
                            <div class="w_c_btm_row" v-for="( item , index ) in dialog.big.write.creatList" :key="index">
                                <div>
                                    <input type="text" v-model="item.ip">
                                </div>
                                <div>
                                    <input type="text" v-model="item.username">
                                </div>
                                <div>
                                    <input type="text" v-model="item.password">
                                </div>
                                <div>
                                    <el-select placeholder="请选择品牌" v-model="item.brand">
                                        <!-- <el-option v-for="(item , index) in dialog.brandOption" 
                                            :key="item.value" 
                                            :label="item.label" 
                                            :value="item.value">
                                        </el-option> -->
                                        <el-option v-for="item in dialog.brandOption" 
                                            :key="item.value" 
                                            :label="item.label" 
                                            :value="item.value">
                                        </el-option>
                                        
                                    </el-select>
                                </div>
                                <div>
                                    <input type="text" v-model="item.name">
                                </div>
                                <div>
                                    <el-select placeholder="请选择分组" v-model="item.group">
                                        <!-- <el-option v-for="(item , index) in dialog.groupOption" 
                                            :key="item.value" 
                                            :label="item.label" 
                                            :value="item.value">
                                        </el-option> -->
                                        <el-option v-for="item in dialog.groupOption" 
                                            :key="item.value" 
                                            :label="item.label" 
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div>
                                    <span class="camera_less" @click.stop="creat_less(index,item)"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add_center" @click.stop="creat_add()">
                        <span class="camera_add"></span>
                    </div>
                    <div class="footer_btn">
                        <input type="button" class="f_B_btn test" value="测试">
                        <input type="button" class="f_B_btn sure" value="确定">
                        <input type="button" class="f_B_btn back" value="取消" @click="dialog.big.write.dialogVisible = false">
                    </div>  
                </div>
                <!-- 新增 E -->
                <!-- 编辑分组 S -->
                <div v-else-if="dialog.big.state === 'writeGroup' ">
                    <div class="groups_box" v-if=" dialog.big.write.writeGroup.length > 0">
                        <div class="groups" v-for="( item , index ) in dialog.big.write.writeGroup" :key="index" >
                            <input type="text"  
                                class="group_input" 
                                v-model="item.value" 
                                :disabled="item.disabled" 
                                @click.stop="groupInput( item.value , index)" 
                                @keyup.enter.stop="enterGroup()">

                            <span class="g_icon_write" @click.stop="changeGroupWrite( index ,  item , $event )"></span>
                            <span class="g_icon_del"></span>
                            {{item.value}}
                        </div>
                        <!-- <div class="groups">
                            <input type="text" class="group_input">
                            <span class="g_icon_del"></span>
                        </div>
                        <div class="groups">
                            <input type="text" class="group_input">
                            <span class="g_icon_del"></span>
                        </div>
                        <div class="groups">
                            <input type="text" class="group_input">
                            <span class="g_icon_del"></span>
                        </div>
                        <div class="groups">
                            <input type="text" class="group_input">
                            <span class="g_icon_del"></span>
                        </div> -->
                    </div>

                    <div class="add_center" @click="GroupAdd()">
                        <span class="camera_add"></span>
                    </div>
                    <div class="footer_btn">
                        <input class="f_B_btn sure" type="button" value="确定" @click="dialog.big.write.dialogVisible = false">
                        <input class="f_B_btn back" type="button" value="取消" @click="dialog.big.write.dialogVisible = false"> 
                    </div>
                </div>
                <!-- 编辑分组 E -->
                <div v-else > </div>

            </el-dialog>
            <!-- 模态框 大 编辑 E -->
            <!-- 模态框 小 S -->
            <el-dialog
                :title="dialog.small.title"
                :visible.sync="dialog.small.dialogVisible"
                width="30%">
                <div v-if="dialog.small.state === 'del' " >
                    <div class="dialog_content dialog_del">
                        <p>该操作将删除摄像头xxx，系统将不再收到该摄像头抓拍的人脸</p>
                        <p>点击“确定”继续删除操作！</p>
                    </div>
                    <div class="footer_btn">
                        <input class="f_B_btn sure" type="button" value="确定" @click="del_sure()"> 
                        <input class="f_B_btn back" type="button" value="取消" @click="dialog.small.dialogVisible = false"> 
                    </div>
                </div>
                <div v-else ></div>
            </el-dialog>
            <!-- 模态框 小 E -->
            
        </div>

    </div>
</template>
<script>
export default {
    name:"Camera",
    data(){
        return{
            table:{
                tableData: [
                    {
                    id:"1001",
                    group: "一分店",
                    name: "名称",
                    state: "在线",
                    ip: "192.393.3.494",
                    brand: "大华",
                    username: "yonghuming",
                    password: "12342"
                }, {
                    id: "1002",
                    group:"二分店",
                    name: "收银机01",
                    state: "在线",
                    ip: "192.384.3.394",
                    brand: "大华",
                    username: "yonghuming3",
                    password: "1234342"
                }, {
                    id: "1003",
                    group:"三分店",
                    name: "收银机02",
                    state: "在线",
                    ip: "192.384.3.354",
                    brand: "海康",
                    username: "yonghuming1",
                    password: "1234245"
                } 
                ],
                multipleSelection: [],
            },
            page:{
                total: 0,      //总条数
                pageSize: 8,    //1页条数
                currentPage: 1, //当前页面位置
                allPages: 1,
            },
            dialog: {
                brandOption: [
                    {
                        value: '海康',
                        label: '海康'
                    }, {
                        value: '大华',
                        label: '大华'
                    }, {
                        value: '中维',
                        label: '中维'
                    } 
                ], //品牌下拉框
                groupOption: [
                    {
                        value: '一分组',
                        label: '一分组'
                    }, {
                        value: '二分组',
                        label: '二分组'
                    }, {
                        value: '三分组',
                        label: '三分组'
                    } 
                ],//分组下拉框
                big:{
                    state: "",
                    write:{
                        title: "",
                        dialogVisible: false,
                        writeList:  [], //编辑有行内，有多条，所以用数组存放
                        creatList: [
                            {
                                // id:"1001",
                                group: "",
                                name: "",
                                // state: "在线",
                                ip: "",
                                brand: "",
                                username: "",
                                password: ""
                            }
                        ], //新建数组
                        writeGroup: [],
                        writeGroupIndex : "",
                    }, 
                },
                small:{
                    state: "",
                    title: "",
                    dialogVisible: false,
                    delList: [] , ////删除有行内，有多条，所以用数组存放
                }
            }
        }
    },
    methods:{
        typeIndex(index) {
            return index + (this.page.currentPage - 1) * 8 + 1;
        },
        //改变页码
        changePage(val){
            let _this = this; 
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        tableSelectCahnge(val) {
            let _this= this;
            _this.table.multipleSelection = val;
        },
        /** 
         * 编辑  
         */
        dialogBigEdit(index , item , state ){
            let _this = this;
            _this.dialog.big.state = state ;

            if ( state == "creat" ){
                _this.dialog.big.write.title = "新建摄像头"
            }else if ( state == "write"){
                _this.dialog.big.write.title = "编辑摄像头"
            }else if ( state == "writeGroup"){
                _this.dialog.big.write.title = "编辑分组"
            }else {
                _this.dialog.big.write.title = ""
            }
            _this.dialog.big.write.writeList = []
            let itemARR = JSON.parse( JSON.stringify( [item] ) ) ;
            let multipleSelection =  JSON.parse( JSON.stringify( _this.table.multipleSelection ) )  ;
            if( state == "write" ){
                if(  index == -1 ){
                    _this.dialog.big.write.writeList = multipleSelection ;
                }else {
                    _this.dialog.big.write.writeList = itemARR ;
                }
            }else {
                _this.dialog.big.write.writeList = [];
            }

            let groupList = JSON.parse( JSON.stringify( _this.dialog.groupOption ) );
            for( let i = 0 ; i < groupList.length ; i++ ){
                groupList[i]["disabled"] = true ; //赋值禁止点击分组 点击编辑改变状态
            }
            _this.dialog.big.write.writeGroup = groupList ;
            
            if( state == "write" && _this.dialog.big.write.writeList.length != 0 ){
                _this.dialog.big.write.dialogVisible  = true ;
            }else if ( state == "creat"){
                _this.dialog.big.write.dialogVisible  = true ;
            }else if ( state == "writeGroup" && _this.dialog.big.write.writeGroup.length != 0 ){
                _this.dialog.big.write.dialogVisible  = true ;
            }else {
                _this.dialog.big.write.dialogVisible  = false ;
                _this.$message.error("请选择您要编辑的摄像头！");
            }

        },
        /** 
         * 删除摄像头  
         */
        dialogSmallDelete( index , item , state ){
            let _this = this;
            
            let multipleSelection = JSON.parse( JSON.stringify( _this.table.multipleSelection ) );
            let itemArr = JSON.parse( JSON.stringify([item]) );
            _this.dialog.small.delList = [];
            if( index == -1 ){
                _this.dialog.small.delList = multipleSelection ;
            }else {
                _this.dialog.small.delList = itemArr ;
            }
 
            if( _this.dialog.small.delList.length != 0 ){
                _this.dialog.small.state = state ;
                _this.dialog.small.title = "删除摄像头";
                _this.dialog.small.dialogVisible = true ;
            }else {
                 _this.dialog.small.dialogVisible = false ;
                _this.$message.error("请选择您要删除的摄像头！")
            }
            
        },
        /**@augments
         * 确定删除摄像头
         */
        del_sure(){
            let _this =this;
            _this.dialog.small.dialogVisible = false ;
            _this.$message.warning("该摄像头已被您删除，历史照片将保留30天。") ;
        },
        /**@augments
         * 新建摄像头 删除
         */
        creat_less( index , item ){
            let _this = this;
            if ( _this.dialog.big.write.creatList.length > 1 ){
                _this.dialog.big.write.creatList.splice( index , 1 );
            }else {
                _this.$message.error("至少保留一条！");
            }
        },
        /**@augments
         * 新建摄像头 添加
         */
        creat_add(){
            let _this = this;
            let creatlist = JSON.parse( JSON.stringify( _this.dialog.big.write.creatList[_this.dialog.big.write.creatList.length-1] ) ) ;
            _this.dialog.big.write.creatList.push(creatlist) ;
        },
        /**@augments
         * 点击编辑分组
         */
        changeGroupWrite( index , item , e){
            let _this = this; 

            _this.dialog.big.write.writeGroupIndex = index ;
            
            //当前点击input的状态

            if ( _this.dialog.big.write.writeGroup[index]["disabled"] === false ){
                //发送ajax
                $(e.target).parent(".groups").removeClass("active");
                _this.dialog.big.write.writeGroup[index]["disabled"] = true ;

            } else {
                _this.gorupRelode();
                _this.dialog.big.write.writeGroup[index]["disabled"] = false ;
                $(e.target).parent(".groups").addClass("active");
                $(e.target).siblings("input").focus() ;
            }

        },
        /**@augments
         * 分组回车事件 提交
         */
        enterGroup(){
            let _this = this;
            $(".groups").removeClass("active");
            let N = Number(_this.dialog.big.write.writeGroupIndex) ;
            _this.dialog.big.write.writeGroup[N]["disabled"] = true ;
        },
        /**@augments
         * 点击其他地方
         */
        gorupRelode(){
            let _this = this;
            let groupList = JSON.parse( JSON.stringify( _this.dialog.groupOption ) );
            for( let i = 0 ; i < groupList.length ; i++ ){
                groupList[i]["disabled"] = true ; //赋值禁止点击分组 点击编辑改变状态
            }
            _this.dialog.big.write.writeGroup = groupList ;
            
            let groups = $(".groups") ;
            for( let i = 0 ; i < groups.length ; i++){
                $(groups[i]).removeClass("active");
            }
        },
        /**@augments
         * GroupAdd
         */
        GroupAdd(){
            let _this = this;
            let Last = JSON.parse( JSON.stringify( _this.dialog.groupOption[_this.dialog.groupOption.length-1] ) );
            _this.dialog.groupOption.push(Last);
        },
        /**
         * input点击事件
         * 禁止事件冒泡  阻止点击其他地方事件
         */
        groupInput( item , index){
            let _this = this;
        },
         
        

    },
    mounted: function() {
        let _this = this;
         
        
        
    },
    watch: {
        'dialog.big.write.dialogVisible':{
            handler: function(val,oldval){
                let _this = this;
                if( val === false){
                    _this.dialog.big.state = "";
                    _this.dialog.big.write.title = "" ;
                    _this.dialog.big.write.writeList = [] ;
                    _this.dialog.big.write.creatList = [{
                        // id:"1001",
                        group: "",
                        name: "",
                        // state: "在线",
                        ip: "",
                        brand: "",
                        username: "",
                        password: ""
                    }]; //新建数组
                    _this.dialog.big.write.writeGroup = [];
                    _this.dialog.big.write.writeGroupIndex = "";
                    
                }
            },
            deep: true,
        },
        'dialog.small.dialogVisible':{
            handler: function(val,oldval){
                let _this = this;
                if( val === false){
                    _this.dialog.small.state = "" ;
                    _this.dialog.small.title = "" ;
                    _this.dialog.small.delList = [] ;
                }
            },
            deep: true,
        },
        "dialog.big.write.writeGroupIndex":{
            handler: function(val,oldval){
                let _this = this;
                if( oldval != "" ){
                    // let BeforeItem = JSON.parse( JSON.stringify( _this.dialog.groupOption[oldval] ) )
                    // BeforeItem["disabled"] = true ;
                    // _this.dialog.big.write.writeGroup[oldval] = BeforeItem ;
                }
                
                
            },
            deep: true,
        },
    }
}
</script>
<style scoped>
    #camera{
        /* height: 100% ; */
        text-align: left;
        overflow: hidden;
        background: rgba(255,255,255,0.1);
        border-radius:10px;
    }
    .bg {
        padding:0px 20px;
    }
    .tip {
        font-size: 24px;
        margin-top: 20px;
    }
    .el-button+.el-button {
        margin-left: 0px;
    }
    .top {
        position: relative;
        height: 34px;
        margin: 20px 0px 30px
    }
    .top_left {
        top: 0 ;
        left: 0;
        position: absolute;
    }
    .top_right {
        top: 0 ; 
        right: 0;
        position: absolute;
        width: 270px;
    } 
    .top_right>.el-input {
        width: 100%;
    }
    .el-input-group__append {
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
    }
    .dialog_footer {
        text-align: center;
    }
    .add_pages{
        text-align: right;
        margin-top: 20px;  
        margin-bottom: 30px;
    }
    .add_pages>span {
        display: inline-block;
        width: 28.5px;
        height: 28px;
        background: rgba(255,255,255,0.2);
        color: #fff;
        font-size: 10px;
        text-align: center;
        line-height: 28px;
        border-radius: 5px; 
        vertical-align: text-top;
        cursor: pointer;
    }
    .add_pages>span:hover{
        background: #91a2eb;
    }
    .add_pages>span:last-child {
        margin-left: -5px;
    }
    .table_todo {
        display: inline-block;
        width: 16px;
        height: 18px;
        margin: 0 5px;
        vertical-align: middle;

    }
    .btn_add {
        background-color: #6477c8;
        color: #fff;
        width: 80px;
        font-size: 14px;
    }
    .btn_del {
        background-color: #d88350;
        color: #fff;
        width: 80px;  
        font-size: 14px;      
    }
    .btn_password {
        background-color: #4e7cc8;
        color: #fff;
        width: 100px;
        font-size: 14px;      
    }
    #camera .el-button {
        border: none;
        height: 34px;
    } 
    #camera .el-dialog__wrapper .el-button+.el-button {
        margin-left: 50px;
    }
    .top_left > input {
        width: 110px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 20px;
        border: none;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        margin-right: 10px;
    }
    .top_left > input:hover {
        opacity: 0.8;
    }
    .top_left > input:active {
        opacity: 0.6;
    }
    .top_left .creat {
        background: #6477c8;
    }
    .top_left .write {
        background: #d88350;

    }
    .top_left .write_col {
        background: #50aad8;

    }
    .top_left .delCamera {
        background: #da521e;

    }
    .table_todo {
        display: inline-block;
        width: 16px;
        height: 18px;
        margin: 0 5px;
        vertical-align: middle;
    }
    .table_look {
        background: url("../../assets/images/look_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .table_write {
        background: url("../../assets/images/write_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .table_del {
        background: url("../../assets/images/del_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .w_c_top {
        font-size: 0;
        width: 100%;
        color: #bdc0d4;
        margin: 10px 0px 5px ;
    }
    .w_c_top > div {
        vertical-align: middle;
        width: 16.6% ;
        font-size: 13px;
        display: inline-block;
    }
    .w_c_btm_row {
        font-size: 0;
        margin-bottom: 5px;
    }
    .w_c_btm_row > div {
        vertical-align: middle;
        width: 16.6% ;
        font-size: 13px;
        display: inline-block;
        color: #a8a8a8;
    }
    .w_c_btm_row>div>input {
        width: 90%;
        box-sizing: border-box;
        height: 36px;
        border: 1px solid #4b5377;
        background-color: #202641;
        border-radius: 5px;
        padding: 5px;
        color: #a8a8a8;
        outline: none;
    }
    .w_c_btm_row>div>.el-select {
        width: 90%;
        box-sizing: border-box;
        height: 36px;
        border: 1px solid #4b5377;
        background-color: #202641;
        border-radius: 5px;
        color: #a8a8a8;
        outline: none;
    }
    .footer_btn {
        text-align: center;
        margin-top: 15px;
    }
    .f_B_btn {
        height: 36px;
        border: none;
        outline: none;
        width: 110px;
        border-radius: 20px;
        color:#fff;
    }
    .f_B_btn:hover {
        opacity: 0.8;
    }
    .f_B_btn:active {
        opacity: 0.6;
    }
    .f_B_btn + .f_B_btn {
        margin-left: 15px;
    }
    .test {
        background-color: #c58829;
    }
    .sure {
        background-color:  #2f67c2;
    }
    .back {
        background-color: #6477c8;
    }
    .creat_content .w_c_top > div {
        width: 15.5%;
    }
    .creat_content .w_c_btm_row > div {
        width: 15.5%;
    }
    .creat_content .w_c_btm_row > div:last-child {
        width: 20px;
        
        height: 20px;
    }
    .camera_less {
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url("../../assets/images/camera_less.png") no-repeat;
        background-size: 100% 100%;
    }
    .camera_less:hover {
        opacity: 0.8;
    }
    .camera_less:active {
        opacity: 0.6;
    }
    .add_center {
        width: 80px;
        height: 40px;
        border: 1px dashed #b8b9bb;
        margin: 30px auto 50px;
        text-align: center;
        line-height: 51px;
    }
    .camera_add {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("../../assets/images/camera_add.png") no-repeat;
        background-size: 100% 100%;
    }
    .add_center:hover {
        opacity: 0.8;
    }
    .add_center:active {
        opacity: 0.6;
    }
    .dialog_del {
	    letter-spacing: 1px;
	    color: #bdc0d4;
        margin: 24px auto 54px;
        text-align: center;
    }
    .groups {
        width: 19%;
        display: inline-block;
        vertical-align: middle;
        height: 36px;
        margin-right: 6px;  
        margin-bottom: 10px;
        position: relative;      
    }
    .groups:nth-child(5n){
        margin-right: 0px;
    }
    .groups > input {
        width: 89%;
        height: 100%;
        box-sizing: border-box;
        padding: 0px 5px;
        border: 1px solid #4b5377;
        background-color: #202641;
	    border-radius: 4px;
        color: #999ca2;
        outline: none;
        padding-right: 35px;
    }
    .g_icon_del {
        position: absolute;
        right: 7% ;
        top: -9px ;
        width: 20px ;
        height: 20px ;
        background: url("../../assets/images/group_del.png") no-repeat ;
        background-size: 100% 100% ;
        cursor: pointer;
    }
    .g_icon_del:hover {
        opacity: 0.8;
    }
    .g_icon_del:active {
        opacity: 0.6;
    }
    .g_icon_write {
        background: url("../../assets/images/write.png") no-repeat;
        background-size: 100% 100%;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 22%;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        
    }
    /* .g_icon_write:hover {
        opacity: 0.8;
    }
    .g_icon_write:active {
        opacity: 0.6;
    } */
    .groups.active .g_icon_write{
        background: url("../../assets/images/write_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .groups.active input {
        color: #fff;
    }
    
    


   

    

   

</style>
