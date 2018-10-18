<template>
    <div id="blacklist" @click="bigShow = false">
      <div class="bg" >
            <p class="tip">黑名单库</p>
            <div class="top">
                <div class="top_right">
                    <el-input  placeholder="请输入内容" v-model="SearchInput" class="input-with-select searchinput">
                        <el-button slot="append" icon="el-icon-search" ></el-button>
                    </el-input>
                </div>
            </div>
            <!-- 表格 S -->
            <div class="table_box">
                <el-table
                    ref="multipleTable"
                    :data="table.tableData"
                    style="width: 100%"
                    stripe>

                    </el-table-column>
                    <el-table-column
                    label="序号"
                    :index="typeIndex"
                    type="index"
                    >
                    </el-table-column>
                    <el-table-column
                    label="门店编号"
                    prop="storecode"
                    >
                    </el-table-column>
                    <el-table-column
                    label="备注"
                    prop="rmark"
                    >
                    </el-table-column>
                    <el-table-column
                    label="创建时间"
                    prop="modifytime"
                    >
                    </el-table-column>
                    <el-table-column
                    label="监控状态"
                    prop="state"
                    >
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <span class="table_todo table_look" @click.stop="handleLook(scope.$index, scope.row , $event)"></span>
                            <span class="table_todo table_del" @click.stop="handleDelete(scope.$index, scope.row)"></span>
                        </template>
                    </el-table-column>

                </el-table>
                <div id="big_picture"  v-show="bigShow == true"  @click.stop="bigShow = true">
                    <img :src="table.chooseImg" alt="">
                </div>
            </div>
            <!-- 表格 E -->

           <!-- 分页 S -->
            <div class="add_pages">
                <span @click="tochagePage('L')">首页</span>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size = "page.pageSize"
                    :total= "page.total"
                    :current-page = "page.currentPage"
                    @current-change="changePage"
                    >
                </el-pagination>
                <span @click="tochagePage('R')">尾页</span>
            </div>
            <!-- 分页 E -->
        </div>
        <!-- 提示框 S -->
        <el-dialog
            class="dialog_box"
            title="黑名单删除"
            :visible.sync="Dialog.del.show"
            width="30%"
            center>
                <p> 删除黑名单会导致该用户进入正常顾客体系，是否</p>
                <p>确认要删除黑名单？</p>
                <span slot="footer" class="dialog-footer">
                    <el-button class="gosure"  type="primary" @click="sureDelRow()">确 定</el-button>
                    <el-button class="goback" @click="Dialog.del.show = false">取 消</el-button>
                </span>
        </el-dialog>
        <!-- 提示框 E -->
        
    </div>
</template>

<script>
import imgsrc from "../../assets/images/1.jpg" ;

  export default {
    name:"Blacklist",
    data () {
      return {
            userinfo: {},
            SearchInput: "",
            table:{
                tableData: [ ],
                chooseImg: "",
            },
            page:{
                total: 0 ,      //总条数
                pageSize: 8,    //1页条数
                currentPage: 1, //当前页面位置
                allPages:  0  ,
            },
            Dialog:{
              del:{
                show: false,
                row: {},
              }
            },
            bigShow: false ,
      };
    },
    methods: {
        getMyDate(str){  
            let _this = this;
            var oDate = new Date(str),  
            oYear = oDate.getFullYear(),  
            oMonth = oDate.getMonth()+1,  
            oDay = oDate.getDate(),  
            oHour = oDate.getHours(),  
            oMin = oDate.getMinutes(),  
            oSen = oDate.getSeconds(),  
            oTime = oYear +'-'+ _this.getzf(oMonth) +'-'+ _this.getzf(oDay) +' '+ _this.getzf(oHour) +':'+ _this.getzf(oMin) +':'+_this.getzf(oSen);//最后拼接时间  
            return oTime;  
        },
        //补0操作
        getzf(num){  
          if(parseInt(num) < 10){  
              num = '0'+num;  
          }  
          return num;  
        },
        //请求列表
        getPics( n = 1 ){
            let _this = this;
            let json = {
                "rows" : 8 , 
                "page" : n,
            };
            let formdata = _this.$config.formData(json); 
            _this.$axios.post( _this.$url.blacklist_list , formdata).then((res)=>{
                 _this.table.tableData = [] ;
                if( res.status == 200 && res.data.code == 1 ) {
                    let data = res.data.data;
                    _this.page.total = data.count ; 
                    _this.page.currentPage = data.start ;
                    _this.page.allPages = data.pages ;
                    _this.table.tableData = data.datas ;
                    for( let i = 0 ; i <  _this.table.tableData.length ;i++ ){
                        _this.table.tableData[i]['modifytime'] = _this.getMyDate(_this.table.tableData[i]['modifytime'])
                    }
                }else {
                    _this.$message.error("请求失败！");
                }
            }).catch(()=>{
                 _this.table.tableData = [] ;
                _this.$message.error("服务器繁忙，请稍后再试");
            });
        },
       //改变页码
        changePage(val){
            let _this = this;
            _this.page.currentPage = val;
            _this.getPics(_this.page.currentPage);
        },
        //首页
        tochagePage(type){
            let _this = this; 
            if(type == "L"){
                _this.page.currentPage = 1;
            }else {
                _this.page.currentPage = _this.page.allPages;
            }
            _this.getPics(_this.page.currentPage);
        },
        // 搜索
        SearchBtn(){
            let _this = this ;
        },
        typeIndex(index) {
            return index + (this.page.currentPage - 1) * 8 + 1;
        },
        handleDelete(index,row){
            let _this = this;
            _this.Dialog.del.show = true ;
            _this.Dialog.del.row = row;
        },
        sureDelRow(){
            let _this = this;
            _this.$axios.get( _this.$url.blacklist_del+"/"+_this.Dialog.del.row.id ).then((res)=>{
                if( res.status == 200 && res.data.code == 1 ) {
                    _this.$message.success("删除成功！");
                    _this.getPics(_this.page.currentPage);
                }else {
                    _this.$message.error(res.data.msg);
                }
                _this.Dialog.del.show = false ;
                
            }).catch((err)=>{
                _this.$message.error("请求失败，请稍后再试！");
            })
        },
        handleLook(index,row ,e){
            let _this = this;
            _this.table.chooseImg = "";
            let table_top = $(".table_box").offset().top ;
            let Table_Height = $(".table_box").height();
            let TOP = $(e.target).offset().top - table_top ;
            if( Table_Height - TOP <= $("tbody tr:last-child").height() ){
                TOP = TOP - 180 ;
            }else if (  Table_Height - TOP <= $("tbody tr:last-child").height()*2  ){
                TOP = TOP - 200 ;                
            }else {
                TOP = TOP + 20 ;
            }
            $("#big_picture").css({
                "top": TOP
            })

            // $("#big_picture img").attr("src" , row.img);
            _this.table.chooseImg = row.imageurl ;
            _this.bigShow = true ;
        }
    },
    beforeDestroy () {
        let _this = this;
    },
    mounted(){
        let _this = this; 
        _this.userinfo = sessionStorage.getItem('userinfo') != "" ? JSON.parse(sessionStorage.getItem('userinfo')) : "" ;
        _this.getPics(); //下拉数据
       
        
    },
    watch:{
       "Dialog.del.show": {
            handler: function( val, oldval ){
                let _this = this;
                if( val === false ){
                    _this.Dialog.del.row = {};
                }
            },
            deep: true
        },
    }
  }
</script>
<style scoped>
    #blacklist {
        width: 96%;
        /* min-height: 539px; */
        background: rgba(255,255,255,0.1);
        color: #fff;
        border-radius: 10px;
        padding: 2%;
        margin: auto;
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
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
    #blacklist .el-button {
        border: none;
        height: 34px;
    }
    #blacklist .top_left .el-button+.el-button {
        margin-left: 10px;
    }
    #blacklist .el-dialog__wrapper .el-button+.el-button {
        margin-left: 50px;
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
    .table_todo {
        display: inline-block;
        width: 16px;
        height: 18px;
        margin: 0 5px;
        vertical-align: middle;
    }
    .gosure {
        width: 120px;
        height: 38px;
        background-color: #2f67c2;
        border-radius: 6px;
        border: none;
    }
    .goback {
        width: 120px;
        height: 38px;
        background-color: #6477c8;
        border-radius: 6px;
        color: #fff;
        border: none;
    }
    .table_box {
        position: relative;
        min-height: 423px;
    }
    #big_picture {
        position: absolute;
        top: 0;
        right: 16%;
        width: 160px;
        height: 200px;
    }
    #big_picture img {
        width: 160px;
        height: 200px;
        box-shadow: -1px 5px 19px #5a5858;
    }
</style>

