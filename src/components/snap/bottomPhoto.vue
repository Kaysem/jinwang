<template>
    <div id="bottomPhoto">
        <div class="bg">
            <p class="tip">底库照片管理 </p>
            <div class="btm">
                <div class="table" v-if="list.length != 0">
                    <!-- <div class="table_pics" v-for="(item , index) in list"> -->
                    <div class="table_pics" v-for="(item , index) in list" :key="index">
                        <div class="img_box">
                            <img :src="item['Images'][0]['ImageUrl']" alt=""  @click.stop="toLook( 'look' , item )">
                        </div>
                        <p>底库ID：</p> 
                        <p>{{item['Register']['RegisterID']}}</p>
                    </div>
                </div>
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
                <!-- 模态框 大 S -->
                <el-dialog
                    id="big_dialog"
                    :title="dialog.big.title"
                    :visible.sync="dialog.big.dialogVisible"
                    width="60%">
                    <div v-if="dialog.big.state === 'look' " >
                        <p class="big_dialog_num"> 会员ID: {{ dialog.big.faceId }} </p>
                        <div class="big_dialog_content" v-if="listOnly.length != 0">
                            <el-scrollbar style="height: 100%;">
                            <!-- <div class="big_dialod_pic"  v-for="(item,index) in listOnly" > -->
                            <div class="big_dialod_pic"  v-for="(item,index) in listOnly" :key="index" >
                                <div class="img_box">
                                    <img :src="item['ImageUrl']" alt="">
                                </div>
                            </div>
                            </el-scrollbar> 
                        </div>
                         <div class="big_dialog_footer">
                            <input class="big_d_btn back" type="button" value="取消" @click="dialog.big.dialogVisible = false">
                        </div>
                    </div> 
                   
                    <div v-else > </div>
                </el-dialog>
                <!-- 模态框 大 E -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BottomPhoto',
    data () {
        return { 
            page:{
                total: 0,      //总条数
                pageSize: 10,    //1页条数
                currentPage: 1, //当前页面位置
                allPages: 1,
            },
            dialog : {
                big: {
                    state: "",
                    title: "",
                    dialogVisible: false ,
                    faceId: "",
                }
            },
            list: [] , //底库列表
            listOnly:[] ,//个人照片

        }
    }, 
    mounted:function() { 
        let _this = this;
        _this.register_list();

        

        window.addEventListener("resize", function () { 
             _this.picMargin();
        });

    },
    watch:{
        "dialog.big.dialogVisible":{
            handler: function( val , oldval ){
                let _this = this;
                if( val === false ){
                    _this.dialog.big.state = "";
                    _this.dialog.big.title = "";
                    _this.dialog.big.faceId = "" ;
                    _this.listOnly = [] ;
                }
            },
            deep: true
        }
    },
    methods:{
        picMargin(){
            let tableW = $(".table").width();
            $(".table_pics").css({
                "marginRight": (tableW - 150 * 5) /4 + 'px'
            });
            $(".table_pics:nth-child(5n)").css({
                "marginRight": 0 + 'px'
            });
        },
        //改变页码
        changePage(val){
            let _this = this;
            _this.page.currentPage = val;
            _this.register_list(_this.page.currentPage);
            _this.$nextTick(()=>{  
                _this.picMargin(); 
            });
        },
        tochagePage(type){
            let _this = this;
            let num = 1;
            if(type == "L"){
                num = 1;
            }else {
                num = _this.page.allPages;
            }
            _this.page.currentPage = num;
            _this.register_list(_this.page.currentPage);
            _this.$nextTick(()=>{  
                _this.picMargin(); 
            });
        },
        /**
         * 浏览底库
         */
        toLook(state,item){
            let _this = this;
            _this.dialog.big.state = state ;
            _this.dialog.big.faceId = item['Register']['RegisterID'] ;            
            if( state == "look" ){
                _this.dialog.big.title = "浏览底库";
                _this.dialog.big.dialogVisible = true ; 
            }
            _this.listOnly = item['Images']
        },
        //列表 list
        register_list(page=1){
            let _this = this;
            let json = {
                "page": ""+page+"" ,
                "rows": "10"
            }
            let formdata = _this.$config.formData(json); 
            _this.$axios.post(_this.$url.register_list,formdata).then((res)=>{
                if( res.status == 200 ){
                    let data = res.data.data;
                    console.log(data)
                    _this.page.total = data.count ;
                    _this.page.allPages = data.pages ;
                     _this.page.currentPage = data.start ;
                    
                    _this.list = data.datas ;
                    _this.$nextTick(()=>{  
                        _this.picMargin(); 
                    });
                }else{
                    _this.list = [] ;
                }
            }).catch((err)=>{
                _this.list = [] ;
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #bottomPhoto{
        text-align: left;
        overflow: hidden;
        background: rgba(255,255,255,0.1);
        border-radius: 10px;
        min-width: 921px;
        overflow-x: auto;
    }
    .bg {
        padding:0px 20px;
    }
    .tip {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 20px;
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
        bottom: 12px ; 
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
    .table {
        margin: 0px 20px;
        font-size: 0;
        min-width: 800px;
        overflow-x: auto;
        overflow-y: hidden ;
        height: 538px;
    }
    .table_pics {
        display: inline-block;
        vertical-align: middle;
        font-size: 13px;
        color: #c5c5c5;
        margin-bottom: 13px;
        width: 150px;
        word-wrap: break-word;
    }
    .table_pics p {
        line-height: 1.769230769230769;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    }
    .img_box {
        width: 160px;
        height: 190px;
        margin-bottom: 7px;
    }
    .img_box > img {
        width: 100%;
        height: 100%;
    }
    .big_dialog_content {
        font-size: 0;
        height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .big_dialod_pic {
        display: inline-block;
        vertical-align: middle;
        font-size: 13px;
        margin-right: 12px;
        color: #c5c5c5;
    }
    .big_dialod_pic:last-child{
        margin-right: 0;
    }
    .big_dialod_pic>p {
        text-align: center;
    }
    #big_dialog .big_dialog_num {
        color:#c5c5c5;
        margin-bottom: 10px;
    }
    .big_dialog_footer {
        text-align: right;
    }
    .big_d_btn {
        width: 110px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color:#fff;
	    border-radius: 15px;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 20px; 
    }
    .big_d_btn + .big_d_btn {
        margin-left: 20px;
    }
    .big_dialog_footer .del {
        background-color: #da531e;
    }
    .big_dialog_footer .sure {
        background-color: #4d7cfe;
    }
    .big_dialog_footer .back {
        background-color: #88a7f7;
    }
    .big_d_btn:hover {
        opacity: 0.8;
    }
    .big_d_btn:active {
        opacity: 0.6;
    }
    .img_box {
        width: 150px;
        height: 180px;
        margin-bottom: 7px;
        position: relative;
    }
    .img_box > .chk_box {
        position: absolute;
        left: 10px;
        top: 10px;
    }
    .img_box img {
        width: 100%;
        height: 100%;
    }
    .add_pic {
        display: inline-block;
        vertical-align: middle;
        width: 150px;
        height: 211px;
        position: relative;
    }
    .add_pic img {
        width: 76px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50% , -50%);
    }
    .add_pic img:hover {
        opacity: 0.8;
    }
    .add_pic img:active {
        opacity: 0.6;
    }
    .carousel_row {
        width: 100%;
        height: 100%;
        font-size: 0px;
    }
    .carousel_row > div {
        width: 19%;
        height: 100%;
        display: inline-block;
        vertical-align:middle;
        font-size: 13px;
        margin-right: 10px;   
        color: #c5c5c5;     
    }
    .carousel_row > div:nth-child(5n){
        margin-right: 0;
    }
    .c_img_box {
        width: 100%;
        height: 180px;
        position: relative;
    }
    .c_img_box .chk_box {
        position: absolute;
        left: 10px;
        top: 10px;

    }
    .c_img_box img {
        width: 100%;
        height: 100%;
    }
    .big_dialog_col {
        margin-top: 10px;
    }
    .btm {
        margin-top: 20px;
    }


</style>
