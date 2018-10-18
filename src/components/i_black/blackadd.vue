<template>
    <div id="blackadd" @click="bigShow = false">
        <p class="tip">黑名单添加</p>
        <div class="clearfix todo_tips">
            <div class="fl">
                <div class="todo">
                    <div>
                        <span>店铺ID</span>
                        <div class="shopname">
                            <el-autocomplete
                                class="inline-input select_input"
                                v-model="searchState"
                                :fetch-suggestions="querySearch"
                                placeholder="请输入内容"
                                @select="handleSelect"
                            ></el-autocomplete>
                        </div>
                    </div>
                </div>
                <div class="todo">
                    <div class="block">
                    <span class="demonstration">进店时间</span>
                        <el-date-picker
                            v-model="timesValue"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <input class="search" type="button" value="查询" @click="scarch_btn()">
            </div>
            <div class="fr">
                <input class="add_blacklist" type="button" :disabled="toDisabled" value="加入黑名单" @click="toAdd()">
            </div>
           
        </div>
        <div class="table_box">
            <div class="box"  v-show="content_isShow">
                <div v-for="( item , index ) in lists" :key="index" class="pictures" @click.stop="choose($event,item)" @dblclick.stop="bigPic($event,item)"> <img :src="item.imgPath" alt="" > </div>
                <!-- 
                    <div class="pictures" @click.stop="choose($event)" @dblclick.stop="bigPic($event)"> <img src="../../assets/images/2.jpg" alt=""> </div>
                    <div class="pictures" @click.stop="choose($event)" @dblclick.stop="bigPic($event)"> <img src="../../assets/images/3.jpg" alt=""> </div>
                -->
            </div>
            <!-- 双击放大 S -->
        <div id="big_picture" v-show="bigShow == true"  @click.stop="bigShow = true">
            <img src="" alt="">
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
        
        <!-- 双击放大 E -->

        <!-- 提示框 S -->
        <el-dialog
            class="dialog_box"
            title="黑名单添加"
            :visible.sync="Dialog.tips.Box"
            width="30%"
            center>
            <!-- 备注信息 不显示 -->
            <div v-if="Dialog.tips.prompt == false " class="change_box">
                <p> {{ Dialog.tips.content }} </p>
                <span slot="footer" class="dialog-footer">
                    <el-button class="gosure" v-if="Dialog.tips.kind == 0 " type="primary" @click="sure_add()">确 定</el-button>
                    <el-button class="gosure" v-else-if="Dialog.tips.kind == 1" type="primary" @click="toLook()">预 览</el-button>
                    <el-button class="gosure" v-else  type="primary" >错误</el-button>
                    
                    <el-button class="goback" @click="Dialog.tips.Box = false">取 消</el-button>
                </span>
            </div>
            <!-- 提示备注信息 -->
            <div v-else class="change_box">
                <p> 确定添加黑名单请输入备注信息 </p>
                <p>备注：<input class="remarks" type="text" v-model="Dialog.tips.prompt_input"> </p>
                <span slot="footer" class="dialog-footer">
                    <el-button class="gosure" type="primary" @click="sure_add()">确 定</el-button>
                    <el-button class="goback" @click="Dialog.tips.Box = false">取 消</el-button>
                </span>
            </div>

        </el-dialog>
        <!-- 提示框 E -->
        <!-- 提示框 S -->
        <el-dialog
            class="dialog_look"
            title="预览"
            :visible.sync="Dialog.look.Box"
            width="800px"
            center>
            <div class="look_center">
                <div class="l_c_top">
                    <div class="l_c_t_left">
                        <img v-if="Dialog.look.content.baseInfoImage.imgPath" :src="Dialog.look.content.baseInfoImage.imgPath" alt="">
                    </div>
                    <div class="l_c_t_right">
                        <p>会员名： <span> 张胜男 </span> </p>
                        <p class="clearfix"> 
                            <span class="fl">会员生日：
                                <i v-if="Dialog.look.content.baseInfo.birthday"> {{ Dialog.look.content.baseInfo.birthday }}</i> 
                                <i v-else> </i>
                            </span>
                            <span class="fr"> 工作地址：
                                <i v-if="Dialog.look.content.baseInfo.work_city"> {{  Dialog.look.content.baseInfo.work_city }} </i> 
                                <i v-else> </i>
                            </span>
                        </p> 
                        <p class="clearfix"> 
                            <span class="fl">累计积分：<i>{{  Dialog.look.content.baseInfo.memPointAmount }}</i> </span>
                            <span class="fr">会员来源：
                                <i v-if="Dialog.look.content.baseInfo.memberSource == 0  "> 微信 </i> 
                                <i v-if="Dialog.look.content.baseInfo.memberSource == 1  "> 微博 </i> 
                                <i v-if="Dialog.look.content.baseInfo.memberSource == 2  "> 逛街路过 </i> 
                                <i v-if="Dialog.look.content.baseInfo.memberSource == 3  "> 朋友推荐 </i> 
                                <i v-if="Dialog.look.content.baseInfo.memberSource == 4  "> 其他媒体 </i> 
                                <i v-else> </i>
                            </span>
                        </p>
                    </div>
                </div>
                <div class="l_c_center">
                    <div class="buy_pic">
                        <img src="../../assets/images/buys.png" alt="">
                    </div>
                </div>
                <div class="l_c_btm">
                    <p class="clearfix">
                        <span class="fl">月平均消费： ￥<i>384.38</i>元 </span>
                        <span class="fr">最高支付费用： ￥<i v-if="Dialog.look.content.baseBehaviour.mst_payAmount"> {{ Dialog.look.content.baseBehaviour.mst_payAmount }} </i>元 </span>
                    </p>
                    <p>最爱购买的商品名称：<span v-if="Dialog.look.content.baseBehaviour.fav_skuName"> {{ Dialog.look.content.baseBehaviour.fav_skuName }} </span> </p>
                    <p>最爱购买的商品类型：<span v-if="Dialog.look.content.baseBehaviour.fav_skuType"> {{ Dialog.look.content.baseBehaviour.fav_skuType }} </span> </p>
                    <p>购买最昂贵的商品：<span v-if="Dialog.look.content.baseBehaviour.mst_expsku"> {{ Dialog.look.content.baseBehaviour.mst_expsku }}  </span> </p>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button class="gosure" type="primary" @click="look_add()">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 提示框 E -->
        
    </div>
</template>

<script>
  export default {
    name:"Blackadd",
    data () {
      return {
        userinfo: {},
        restaurants: [ ], //下拉数据
        searchState: '',  //店铺名称
        timesValue: [], //起始时间
        content_isShow: false , //中心内容
        lists:[], //用户列表
        addpeople: {}, //只能添加一个用户
        page:{
            total: 0,      //总条数
            pageSize: 21,    //1页条数
            currentPage: 1, //当前页面位置
            allPages: 0, //总页数
        },
        Dialog : {
            tips:{
                Box: false,
                kind: 1 , //0为无法识别  1为识别了的
                content: "" , //中心内容
                prompt: false , //提示 无法识别及已经识别，  false 为备注信息
                prompt_input : "", 
            },
            look:{
                Box: false,
                content: {
                    baseBehaviour: {}, 
                    baseInfo: {}, 
                    baseInfoImage: {}, 
                    baseTrait: {}, 
                },

            }
        },
        bigShow: false ,  
        toDisabled: true , // 添加黑名单按钮


      };
    },
    methods: {
        /*
        * 将一个数组分成几个同等长度的数组
        * array[分割的原数组]
        * size[每个子数组的长度]搜索
        */
        sliceArray(array, size) {
            var result = [];
            for (var x = 0; x < Math.ceil(array.length / size); x++) {
                var start = x * size;
                var end = start + size;
                result.push(array.slice(start, end));
            }
            return result;
        },
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        //自动匹配下拉列表值
        handleSelect(item) {
        },
        //店铺id列表
        getStoreId(){
            let _this = this;
            let json = { "vid" : _this.userinfo.store_root_id , "storeCode" : ""};
            let formdata = _this.$config.formData(json); 
            _this.$axios.post( _this.$url.getStoreIds , formdata).then((res)=>{
                if(res.data.code == 1){
                    let data = res.data.data;
                    _this.restaurants = [];
                    for(let i = 0 ; i < data.length ; i++){
                        let val = {};
                        val["value"] = data[i]["storeCode"];
                        _this.restaurants.push(val);
                    }
                }
            });
        },
        pictures(){
            let _this = this;
            let table_box_W = $(".table_box").width();
            let pictures_W = 160;
            let N = parseInt(table_box_W/pictures_W) ; //一行的个数
            let line_picture_W = pictures_W * N ; //一行的图片总宽度
            let all_M_W = table_box_W - line_picture_W ; //剩余宽度
            let M_W = all_M_W / (N-1) ;
            $(".pictures").css({
                "marginRight": M_W + "px"
            });
            for( let i = 1 ; i <= $(".pictures").length ; i ++){
                $(".pictures:nth-child(" + i * N +")").css("marginRight" , "0px");
            };
        },
        //搜索
        scarch_btn(){
            let _this = this;
            if ( _this.searchState == "" || _this.timesValue instanceof Array === false  || _this.timesValue.length === 0  ){
                _this.$message.error("请填写店铺ID及进店时间！");
                _this.content_isShow = false ;
                // _this.page.total = 0 ; //总条数
                // _this.page.allPages = 0 ; //页数
                // _this.page.currentPage =  0 ;   //当前页
                // _this.lists = [] ;
                _this.addpeople = {} ;
            }else {
                _this.getPics( _this.page.currentPage );
            }
        },
        //请求列表
        getPics( n = 1 ){
            let _this = this;
            _this.lists = [] ;
            _this.addpeople = {} ;
            let json = {
                "venderId" : _this.userinfo.store_root_id ,
                "storeCode" : _this.searchState ,
                "st" : _this.timesValue[0],
                "et" : _this.timesValue[1],
                "rows" : 21, //每页条数
                "sidx" : "", //排序字段
                "sord" : "", //ASC|DESC
                "page" : n,
            };
            let formdata = _this.$config.formData(json); 
            _this.$axios.post( _this.$url.listReachVip , formdata).then((res)=>{
                if( res.status == 200 ) {
                    let data = res.data;
                    _this.page.total = data.records; //总条数
                    _this.page.allPages = data.total; //页数
                    _this.page.currentPage = data.page ;   //当前页
                    _this.lists = data.rows ;
                    if( _this.lists.length > 0 ){
                        _this.content_isShow = true ;
                        _this.$nextTick(()=>{
                            _this.pictures();
                        });
                    }else {
                        _this.content_isShow = false ;
                        _this.$message.error("暂无数据！");
                    }
                }else {
                    _this.$message.error("请求失败！");
                    _this.page.total = 0 ; //总条数
                    _this.page.allPages = 0 ; //页数
                    _this.page.currentPage =  0 ;   //当前页
                    _this.lists = [] ;
                    _this.content_isShow = false ;
                }

            }).catch(()=>{
                _this.page.total = 0 ; //总条数
                _this.page.allPages = 0 ; //页数
                _this.page.currentPage =  0 ;   //当前页
                _this.lists = [] ;
                _this.content_isShow = false ;
                _this.$message.error("服务器繁忙，请稍后再试");
            });
        },
        //改变页码
        changePage(val){
            let _this = this;
            _this.getPics(val);
        },
        //改变页码
        tochagePage(type){
            let _this = this;
            let num = 1;
            if(type == "L"){
                num = 1;
            }else {
                num = _this.page.allPages;
            }
            _this.getPics(num)
        },
        bigPic:function(event , item){
            let table_left = $(".table_box").offset().left ;
            let table_top = $(".table_box").offset().top ;
            
            let Table_Width = $(".table_box").width();
            let Table_Height = $(".table_box").height();
            
            let LEFT = $(event.target).offset().left - table_left ;
            let TOP = $(event.target).offset().top - table_top ;


            if( Table_Width - LEFT <= 200 ){
                LEFT = LEFT - 250 ;
            }else if( Table_Width - LEFT <= 400 ){
                LEFT = LEFT - 300 ;
            }else {
                LEFT = LEFT + 160 ;
            }

            if( Table_Height - TOP <= 206 ){
                TOP = TOP - 400 ;
            }
            else if( Table_Height - TOP <= 406 ){
                TOP = TOP - 300 ;
            }
            else {
                TOP = TOP + 160 ;
            }


            $("#big_picture").css({
                "left": LEFT + "px" ,
                "top": TOP + "px" ,
            });
            
            let _this = this;
            $("#big_picture img").attr("src" , item.imgPath );
            _this.bigShow = true;
            
        },
        choose(e , item ){
            let _this = this;
            _this.addpeople = {} ; 
            $(e.target).parent("div").addClass("choose_active").siblings("div").removeClass("choose_active");
            $(".box").removeClass("choose_active");
            _this.addpeople = item ;
        },
        toAdd(){
            let _this = this;
            _this.Dialog.tips.Box = true ;
            //通过 _this.Dialog.tips.kind 判断是否为会员 ;
            if( _this.Dialog.tips.kind == 0 ) {
                _this.Dialog.tips.content = "通过后台识别暂无发现该人员身份，加入黑名单请慎重选择，是否确认要加入黑名单？"
            }else if (_this.Dialog.tips.kind == 1){
                _this.Dialog.tips.content = "该人员身份为超市VIP会员/匿名会员，加入黑名单后无法再识别为VIP会员，请预览后再次确认要加入黑名单？"
            }else {
                _this.Dialog.tips.content = "";
            }

        },
        toLook(){
            let _this = this;
            _this.Dialog.tips.Box = false;
            _this.Dialog.look.Box = true;
            // 查询详细信息
            let json = {
                "memNo" :_this.addpeople.memNo ,
            };
            let formdata = _this.$config.formData(json); 
            _this.$axios.post( _this.$url.getMemInfo , formdata).then((res)=>{
                if( res.status == 200 ){
                    let data = res.data;
                    _this.Dialog.look.content.baseBehaviour = data.baseBehaviour ;
                    _this.Dialog.look.content.baseInfo = data.baseInfo ;
                    _this.Dialog.look.content.baseInfoImage = data.baseInfoImage ;
                    _this.Dialog.look.content.baseTrait = data.baseTrait ;
                };
            }).catch(()=>{
                _this.$message.error("请求失败！");
                _this.Dialog.look.content.baseBehaviour = {} ;
                _this.Dialog.look.content.baseInfo = {} ;
                _this.Dialog.look.content.baseInfoImage = {} ;
                _this.Dialog.look.content.baseTrait = {} ;
            });


        },
        look_add(){
            let _this = this;
            _this.Dialog.tips.Box = true ;
            _this.Dialog.look.Box = false ;
            _this.Dialog.tips.prompt = true ;

        },
        //添加黑名单
        sure_add(){
            let _this = this;
            // let json = {
            //     // "venderId" :  ,
            //     // "storeCode" :  ,
            //     // "memNo" :  ,
            //     // "icon" :  ,
            // };
            // let formdata = _this.$config.formData(json); 
            // _this.$axios.post( _this.$url.blacklist_add , formdata).then((res)=>{
            // })

        },
        
    },
    beforeDestroy () {
        let _this = this;
        // clearInterval(_this.intervalid_picture)
    },
    mounted(){
        let _this = this; 
        _this.userinfo = sessionStorage.getItem('userinfo') != "" ? JSON.parse(sessionStorage.getItem('userinfo')) : "" ;
        _this.getStoreId(); //下拉数据
        
        window.addEventListener("resize", function () {
            let table_box_W = $(".table_box").width();
            let pictures_W = 160;
            let N = parseInt(table_box_W/pictures_W) ; //一行的个数
            let line_picture_W = pictures_W * N ; //一行的图片总宽度
            let all_M_W = table_box_W - line_picture_W ; //剩余宽度
            let M_W = all_M_W / (N-1) ;
            $(".pictures").css({
                "marginRight": M_W + "px",
                "width" : "160px"
            });
            for( let i = 1 ; i <= $(".pictures").length ; i ++){
                $(".pictures:nth-child(" + i * N +")").css({
                    "marginRight" : "0px" ,
                    "width": "160px"
                });
            }
            $(".box").height("100%");
        });

        // function zoomImg(o) {  
        //     var zoom = parseInt(o.style.zoom, 10) || 100;  
        //     zoom += event.wheelDelta / 2; //可适合修改  
        //     if (zoom > 0)  
        //     o.style.zoom = zoom + '%';  
        // }  
        // $(document).ready(function() {  
        //     $("#big_picture img").bind("mousewheel", function() {  
        //         zoomImg(this);  
        //         return false;  
        //     });  
        // });



    },
    watch:{
        "Dialog.tips.Box": {
            handler:function(val,oldval){
                let _this = this;
                if(val == false){
                    _this.Dialog.tips.prompt = false ;
                    _this.Dialog.tips.prompt_input = "";
                    _this.Dialog.look.content.baseBehaviour = {} ;
                    _this.Dialog.look.content.baseInfo = {} ;
                    _this.Dialog.look.content.baseInfoImage = {} ;
                    _this.Dialog.look.content.baseTrait = {} ;
                }
            },
            deep: true
        },
        "addpeople": {
            handler:function(val,oldval){
                let _this = this; 
                if( (JSON.stringify(val) == "{}") === false ){
                    _this.toDisabled = false ;
                }else {
                    _this.toDisabled = true ;
                }

            },
            deep: true
        },
        // "lists": {
        //     handler:function(val,oldval){
        //         let _this = this; 
        //         // if( val.length == 0 ){
        //         //     _this.addpeople = {} ;

        //         // }
        //         // if( (JSON.stringify(val) == "{}") === false ){
        //         //     _this.toDisabled = false ;
        //         // }else {
        //         //     _this.toDisabled = true ;
        //         // }
        //     },
        //     deep: true
        // },
    }
  }
</script>
<style scoped>
    #blackadd {
        width: 96%;
        background: rgba(255,255,255,0.1);
        color: #fff;
        border-radius: 10px;
        padding: 2%;
        margin: auto;
        /* overflow: hidden; */
        position: relative;
        margin-bottom: 20px;
    }
    .tip  {
        font-size: 24px;
    }
    .todo {
        display: inline-block;
        vertical-align: middle;
        margin-right: 20px;
    }
    #blackadd .search {
        width: 80px;
	    border-radius: 23px;
        color: #fff;
        border:none;
        outline: none;
	    height: 34px;
        background-color: #4e7cc8;
    }
    .add_blacklist {
        width: 100px;
        height: 34px;
	    border-radius: 23px;
        color: #fff;
        border:none;
        outline: none;
	    background-color: #da544d;
    }
    .search:hover {
        opacity: 0.8;
    }   
    .search:active {
        opacity: 0.7;
    } 
    .add_blacklist:hover {
        opacity: 0.8;
    }   
    .add_blacklist:active {
        opacity: 0.7;
    } 
    .todo_tips {
        margin: 20px 0px;
    }
    .box {
        width: 100%;

    }
    .table_box {
        width: 100%;
        font-size: 0;
        min-height: 500px;
        position: relative;
    }
    .pictures {
        width: 160px;
        height: 185px;
        margin-bottom: 20px;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;

        position: relative;
        box-sizing: border-box;
        overflow: hidden;
    }
    .pictures img {
        width: 160px;
        height: 185px;
        position: absolute;
        left: 0;
        top: 0;
        
    }
    #big_picture {
        position: absolute;
        top: 50%;
        /* transform: translateY(-50%); */
        right: 16%;
        width: 300px;
        height: 400px;
        background: aqua;
    }
    #big_picture img {
        width: 300px;
        height: 400px;
        box-shadow: -1px 5px 19px #5a5858;
    }
    .choose_active {
        border: 6px solid #2dd1ff;
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
    .l_c_top {
        width: 450px;
        margin: auto;
        height: 135px;
        font-size: 0;
    }
    .l_c_top > div {
        display: inline-block;
        vertical-align: top ;
        height: 100%;
        font-size: 16px;
    } 
    .l_c_t_left {
        width: 27%;
    }   
    .l_c_t_right {
        width: 73%;
        box-sizing: border-box;
        font-size: 16px;
        color: #fff;
        padding-left: 20px;
    }
    .l_c_top > div > img {
        width: 100%;
        height: 100%;
    }
    .l_c_t_right>p:nth-child(2) {
        margin: 33px 0px;
    }
    .l_c_center {
        height: 38px;
        margin: 30px 0px;
    }
    .buy_pic img {
        width: 100%;
        height: 100%;
    }
    .buy_pic {
        height: 100%;
        width: 38px;
        margin: auto;
    }
    .l_c_btm {
        font-size: 16px;
        color: #fff;
    }
    .l_c_btm > p {
        margin-bottom: 30px;
    }    
    .l_c_btm > p:last-child {
        margin-bottom: 0px;
    }
    .change_box {
        text-align: center;
    }
    .change_box .dialog-footer {
        margin-top: 30px;
        display: inline-block;
    }
    .remarks {
        height: 40px;
        line-height: 40px;
        border: 1px solid #464f73;
        background: rgba(0,0,0,0.3);
        color: #fff;
        width: 280px;
        margin-top: 20px;
        border-radius: 5px;
        padding-left: 20px;
        margin-left: 20px;
        font-size: 16px;
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
    #blackadd input.add_blacklist:disabled { 
        background-color: #dddddd;
    }
    
    
</style>

