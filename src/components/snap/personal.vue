<template>
    <div id="s_personal">
        <div class="b_top">
            <h4 class="page_title">个人照片管理   <span @click="BackPage()">返回</span>  </h4> 
            <div class="top_content people">
                <span class="t_c_tip">人员状态：</span>
                {{ top.state }}
            </div>
            <div class="top_content sort">
                <span class="t_c_tip">排序：</span>
                 <el-radio-group v-model="top.sort" >
                    <el-radio-button label="按抓拍时间"></el-radio-button>
                    <el-radio-button label="按摄像头来源"></el-radio-button>
                    <el-radio-button label="按照片质量"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="top_content operaty">
                <span class="t_c_tip">操作：</span>
                <div class="operaty_btn look_btmStor" @click.stop="dialogBig( 'look' )">
                    <span></span>
                    查看底库
                </div>
                <div class="operaty_btn add_btmStore" @click.stop="dialogBig( 'add' )">
                    <span></span>
                    加入底库
                </div>
                <div class="operaty_btn add_black" @click.stop="dialogSmall( 'add' )" >
                    <span></span>
                    加入黑名单
                </div>
                <div class="operaty_btn del_pic" @click.stop="dialogSmall( 'del' )" >
                    <span></span>
                    删除照片
                </div>
            </div>

        </div>
        <div class="b_btm"  >  
            <div class="btm_box">
                <div class="all_choose">
                    <el-checkbox class="chk_box" > 全选 </el-checkbox>
                </div>
                <div class="big_box">

                    <div class="pic_all_box"> 
                        <!-- 单个人 S -->
                        <div class="pictrue_box"  >

                            <div class="img_box">
                                <el-checkbox  class="chk_box" >  </el-checkbox>
                                <img src="../../assets/images/a1.jpg" alt="" >
                            </div>
                            <p>时间 ：07年14日 21:11  </p>
                            <p>性别 ：男 </p>
                            <p>年龄 ：14 岁 </p>
                            <p>来自 ：收银机01 </p>
                            <span class="only_add pic_only_icon"></span>
                            <span class="only_del pic_only_icon"></span>
                        </div>
                        <!-- 单个人 S -->
                        <!-- 单个人 S -->
                        <div class="pictrue_box"  >

                            <div class="img_box">
                                <el-checkbox  class="chk_box" >  </el-checkbox>
                                <img src="../../assets/images/a1.jpg" alt="" >
                            </div>
                            <p>时间 ：07年14日 21:11  </p>
                            <p>性别 ：男 </p>
                            <p>年龄 ：14 岁 </p>
                            <p>来自 ：收银机01 </p>
                            <span class="only_add pic_only_icon"></span>
                            <span class="only_del pic_only_icon"></span>
                        </div>
                        <!-- 单个人 S -->
                    </div>
                    <!-- <div class="clickMore"> 点击加载更多 </div> -->
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
            </div>
        </div> 

        <!-- 模态框 小 S -->
        <el-dialog
            :title="dialog.small.title"
            :visible.sync="dialog.small.dialogVisible"
            width="30%">

            <div v-if="dialog.small.state === 'add' " >
                <div class="dialog_content dialog_add_black">
                    <p>确定要把该顾客添加到黑名单吗？</p>
                    <p> （添加黑名单导致人脸识别库发生变化请谨慎操作） </p>
                </div>
                <div slot="footer" class="dialog-footer">
                    <input class="footer_btn sure_btn" type="button" value="确定" @click="toBlackPic()"> 
                    <input class="footer_btn back_btn" type="button" value="取消" @click="dialog.small.dialogVisible = false"> 
                </div>
            </div>
            <div v-else-if = "dialog.small.state === 'black'" >
                <div class="dialog_content dialog_black_ready">
                    <p>该人员已经是黑名单成员，不需要再操作，谢谢！</p>
                </div> 
            </div>
            <div v-else-if ="dialog.small.state === 'del' " >
                <div class="dialog_content dialog_del_pic">
                    您即将删除照片，删除的照片不可恢复，谢谢！
                </div>
                <div slot="footer" class="dialog-footer">
                    <input class="footer_btn sure_btn" type="button" value="确定"> 
                    <input class="footer_btn back_btn" type="button" value="取消" @click="dialog.small.dialogVisible = false"> 
                </div>
            </div>
            <div v-else-if = "dialog.small.state === 'success'" >
                <div class="dialog_content dialog_black_success">
                     <div>
                        <img src="../../assets/images/success.png" alt="">
                     </div>
                    <p>添加成功</p>
                </div> 
            </div>
            <div v-else-if = "dialog.small.state === 'error'" >
                <div class="dialog_content dialog_black_error">
                    <div>
                        <img src="../../assets/images/error.png" alt="">
                     </div>
                    <p>您的“加入黑名单”操作失败，请稍后再试</p>
                </div> 
            </div>
            <div v-else ></div>
        </el-dialog>
        <!-- 模态框 小 E -->
        <!-- 模态框 大 S -->
        <el-dialog
            id="big_dialog"
            :title="dialog.big.title"
            :visible.sync="dialog.big.dialogVisible"
            width="60%">
            <div v-if="dialog.big.state === 'look' " >
                <p class="big_dialog_num"> 会员ID: 0029359 </p>
                <div class="big_dialog_content">

                    <div class="big_dialod_pic">
                        <div class="img_box">
                            <el-checkbox  class="chk_box" >  </el-checkbox>
                            <img src="../../assets/images/a1.jpg" alt="" >
                        </div>
                        <p>更新：2018年06月06日</p>
                    </div>

                </div>
                <div class="big_dialog_footer">
                    <input class="big_d_btn del" type="button" value="删除">
                    <input class="big_d_btn sure" type="button" value="确定">
                </div>
            </div>
            <div v-else-if="dialog.big.state === 'add' " >
                <p class="big_dialog_num"> 会员ID: 0029359 </p>
                <div class="big_dialog_content">
                    
                    <div class="big_dialod_pic">
                        <div class="img_box">
                            <el-checkbox  class="chk_box" >  </el-checkbox>
                            <img src="../../assets/images/a1.jpg" alt="" >
                        </div>
                        <p>更新：2018年06月06日</p>
                    </div>
                    <div class="big_dialod_pic">
                        <div class="img_box">
                            <el-checkbox  class="chk_box" >  </el-checkbox>
                            <img src="../../assets/images/a1.jpg" alt="" >
                        </div>
                        <p>更新：2018年06月06日</p>
                    </div>
                    <div class="big_dialod_pic">
                        <div class="img_box">
                            <el-checkbox  class="chk_box" >  </el-checkbox>
                            <img src="../../assets/images/a1.jpg" alt="" >
                        </div>
                        <p>更新：2018年06月06日</p>
                    </div>
                    <div class="big_dialod_pic">
                        <div class="img_box">
                            <el-checkbox  class="chk_box" >  </el-checkbox>
                            <img src="../../assets/images/a1.jpg" alt="" >
                        </div>
                        <p>更新：2018年06月06日</p>
                    </div>
                    <div class="big_dialod_pic">
                        <div class="img_box">
                            <el-checkbox  class="chk_box" >  </el-checkbox>
                            <img src="../../assets/images/a1.jpg" alt="" >
                        </div>
                        <p>更新：2018年06月06日</p>
                    </div>

                </div>
                <div class="big_dialog_footer">
                    <input class="big_d_btn del" type="button" value="删除">
                    <input class="big_d_btn sure" type="button" value="确定">
                    <input class="big_d_btn back" type="button" value="取消" @click="dialog.big.dialogVisible = false">
                </div>
                 
            </div>
            <div v-else > </div>

             
        </el-dialog>
        <!-- 模态框 大 E -->
    </div>
</template>

<script>
export default {
    name: 'S_personal',
    data () {
        return { 
            page:{
                total: 0 ,      //总条数
                pageSize: 10,    //1页条数
                currentPage:1 , //当前页面位置
                allPages:  0  , //总页数
            },
            personal: "" ,
            top:{
                state:"黑名单",
                sort: "按抓拍时间" ,

            },
            dialog:{
                small:{
                    state: "",
                    title:  "",
                    dialogVisible : false ,

                },
                big :{
                    state: "",
                    title:  "",
                    dialogVisible : false ,
                }
            }
        }
    }, 
    mounted:function() { 
        let _this = this;
        _this.personal = _this.$route.params.personal ? _this.$route.params.personal : sessionStorage.snapPersonal ;
        sessionStorage.snapPersonal = _this.personal ;
        _this.$nextTick(()=>{
            _this.picsMargin();
     
        });

        window.addEventListener("resize", function () { 
             _this.picsMargin();
        });

    },
    watch:{
        "dialog.small.dialogVisible":{
            handler: function(val,oldval){
                let _this = this;
                if(val === false){
                    _this.dialog.small.state = "" ;
                }
            },
            deep: true
        },
        "dialog.big.dialogVisible":{
            handler: function(val,oldval){
                let _this = this;
                if(val === false){
                    _this.dialog.big.state = "" ;
                }
            },
            deep: true
        }
        
    },
    methods:{
         //改变页码
        changePage(val){
            let _this = this;
            _this.page.currentPage = val;
        },
        //首页
        tochagePage(type){
            let _this = this; 
            if(type == "L"){
                _this.page.currentPage = 1;
            }else {
                _this.page.currentPage = _this.page.allPages;
            }
        },
        /**
         * 返回上页面
         */
        BackPage(){
            let _this = this;
            _this.$router.go(-1);
            sessionStorage.removeItem("snapPersonal");
        },
         /**
         * 按位置图片间距
         */
        picsMargin(){
            let pic_all_boxW = $(".pic_all_box ").width();
            let N = 5 ;
            let MarginPic = pic_all_boxW - (150*5)  - 16  ;
            $(".pic_all_box > div").css({
                "marginRight": MarginPic / 4 - 1 + "px",
            });
            for( let i = 0 ; i < $(".pic_all_box > div").length ; i++ ){
                $(".pic_all_box > div:nth-child("+i*5+")").css({
                    "marginRight": "0px",
                });
            };

        },
        /**
         * 添加黑名单 和 删除操作
         */
        dialogSmall(state){
            let _this= this;
            _this.dialog.small.state = state ;
            if( state === "add" ){
                _this.dialog.small.title = "添加黑名单";
            }else if( state === "del"){
                _this.dialog.small.title = "删除照片";
            }else{
                _this.dialog.small.title = "";
            }
            _this.dialog.small.dialogVisible = true ;

        },
        /**
         *添加黑名单按钮点击 获取结果
         */
        toBlackPic(){
            let _this = this;
            // _this.dialog.small.state = "success";
            // _this.dialog.small.state = "error";
            _this.dialog.small.state = "black"; //已经是黑名单状态
            
            
        },
        /**
         * 查看底库 和 加入底库
         */
        dialogBig( state ){
            let _this = this;
            _this.dialog.big.state = state ;
            if( state === "add" ){
                _this.dialog.big.title = "加入底库";
            }else if( state === "look"){
                _this.dialog.big.title = "查看底库";
            }else{
                _this.dialog.big.title = "";
            }
            _this.dialog.big.dialogVisible = true ;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #s_personal{
        width: 100%; 
        color: #fff;
        border-radius: 10px; 
        margin: auto;
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
        min-width: 921px;
        overflow-x: auto;
    }
    #s_personal > div { 
        padding: 20px;
    }
    .b_top {
        background: rgba(255,255,255,0.1);

    }
    .b_btm {
        background: rgba(255,255,255,0.1);
        margin-top: 20px;
        padding: 20px;
    } 
    .page_title {
        font-size: 20px;
        font-weight: 400;
        position:relative;
    }
    .page_title span:before {
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 2px;
        top: 50%;
        transform : translateY(-50%);
        background: url( " ../../assets/images/back.png") no-repeat ;
        background-size: 100% 100%;
    }
    .page_title span {
        width: 55px;
        height: 26px;
        line-height: 28px;
        position: absolute;
        right: 0;
        top: 0; 
        text-align: right;
        cursor: pointer;
        font-size: 13px;
        color: #c5c5c5;
    }
    .page_title span:hover {
        opacity: 0.8;
    }
    .sort .el-radio-group label {
        margin-right: 10px;
    }
    .sort .el-radio-group label .el-radio-button__inner {
        background: rgba(0,0,0,0);
        border: none;
        color: #c5c5c5;
    }
    .sort .el-radio-button__orig-radio:checked+.el-radio-button__inner {
        box-shadow: none;
        color: #fff;
        border-radius: 20px;
        	background-color: #363f68;
    }
    .top_content {
        margin-top: 15px;
        font-size: 14px;
    }
    .top_content > div {
        margin: 0px 10px;
    }
    .operaty_btn {
        display: inline-block;
        width: 110px;
        height: 36px;
        line-height: 36px;
        vertical-align: middle;
        color: #c5c5c5;
        text-align: center;
        border-radius: 20px;
        cursor: pointer;
    }
    .operaty_btn span {
        width: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: middle;
    }

    .add_btmStore > span {
        background: url("../../assets/images/p_ku.png") no-repeat;
        background-size: 100% 100%;
    }
    .look_btmStor > span {
        background: url("../../assets/images/p_look.png") no-repeat;
        background-size: 100% 100%;
    }
    .add_black > span {
        background: url("../../assets/images/browse_black.png") no-repeat;
        background-size: 100% 100%;
    }
    .del_pic > span {
        background: url("../../assets/images/del_btn.png") no-repeat;
        background-size: 100% 100%;
    }

    .operaty_btn:hover {
        background: rgb(54, 63, 104);
        color: #fff;
    }
    .add_btmStore:hover > span{
        background: url("../../assets/images/p_ku_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .look_btmStor:hover > span{
        background: url("../../assets/images/p_look_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .add_black:hover > span{
        background: url("../../assets/images/browse_black_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .del_pic:hover > span{
        background: url("../../assets/images/del_btn_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .operaty_btn:active {
        opacity: 0.8;
    }
    #s_personal > .b_btm  {
        padding: 20px 40px 40px;
    }
    .big_box {
        margin: 0px 20px;
        font-size: 13px;
    }
    .pic_all_box {
        min-width: 750px;
        font-size: 0px;
    }
    .pic_all_box>div {
        margin-bottom: 10px;
        font-size: 13px;
        color: #c5c5c5;
        line-height: 22px;
        display: inline-block;
        vertical-align: middle;
        position: relative ;
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
    .all_choose {
        height: 36px;
    }





    div.clickMore {
        background: #596085;
        color: #d2d8fc;
        text-align: center;
        height: 32px;
        line-height: 32px;
        border: 1px solid #596085; 
    }
    div.clickMore:hover {
        opacity: 0.8;
        border: solid 1px #596085;
        color: #596085;
        background: rgba(0,0,0,0);
    }
    div.clickMore:active {
        opacity: 0.6;
        border: solid 1px #596085;
        color: #596085;
        background: rgba(0,0,0,0);
    }
    .pic_only_icon {
        width: 20px;
        height: 20px;
        position: absolute;
        background: pink;
    }
    .only_add {
        background: url("../../assets/images/only_add.png") no-repeat;
        background-size: 100% 100%;
        right: 5px;
        bottom: 40px;
    }
    .only_del {
        background: url("../../assets/images/only_del.png") no-repeat;
        background-size: 100% 100%;
        bottom: 2px;
        right: 5px;
    }
    .only_add:hover {
        background: url("../../assets/images/only_add_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .only_del:hover {
        background: url("../../assets/images/only_del_hover.png") no-repeat;
        background-size: 100% 100%;
    }
    .only_add:active {
        opacity: 0.8;
    }
    .only_del:active {
        opacity: 0.8;
    }
    .footer_btn  {
       	width: 100px;
        height: 38px;
        background-color: #4b77e5;
        border-radius: 10px;
        border: 1px solid #4b77e5;
        outline: none;
        color: #fff;
        cursor: pointer;
    }
    .footer_btn:hover {
        opacity: 0.8;
    }
    .footer_btn:active {
        opacity: 0.6;
    }
    .footer_btn + .footer_btn  {
        margin-left: 100px;
        background-color: #87a7f6;
        border: 1px solid #87a7f6;
    }
    .big_dialog_content {
        font-size: 0;
    }
    .big_dialod_pic {
        display: inline-block;
        vertical-align: middle;
        font-size: 13px;
        margin-right: 15px;
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
 



</style>
