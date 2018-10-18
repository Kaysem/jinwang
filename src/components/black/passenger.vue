<template>
    <div id="blackadd">
        <div class="b_top">
            <h4 class="page_title">客流报表</h4>
            <div class="top_content inline_block time">
                <span>时间：</span>
                <el-radio-group v-model="top.valueTimeS" @change="changeTimes()">
                    <el-radio label="half">最近半小时</el-radio>
                    <el-radio label="hour">最近一小时</el-radio>
                    <el-radio class="custom" label="custom">自定义
                        <el-date-picker 
                            v-model="top.valueTime"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </el-radio>
                </el-radio-group>
            </div>
            <div class="top_content inline_block sex">
                <span>性别：</span>
                <el-radio-group v-model="top.valueSex" @change="changeSex()">
                    <el-radio label="ALL">全部</el-radio>
                    <el-radio label="男">男性</el-radio>
                    <el-radio label="女">女性</el-radio>
                </el-radio-group>
            </div>
            <div class="top_content inline_block sex">
                <span>身份：</span>
                <el-radio-group v-model="top.valueStatus" @change="changeSex()">
                    <el-radio label="ALL">全部</el-radio>
                    <el-radio label="vip">VIP</el-radio>
                    <el-radio label="buy">消费顾客</el-radio>
                    <el-radio label="notBuy">未消费顾客</el-radio>
                </el-radio-group>
            </div>
            <div class="top_content inline_block age">
                <span>年龄：</span>
                <div>
                    <div class="startage">
                        <input type="text" id="startage" v-model="top.age.startAge" placeholder="" >
                    </div>
                    <span class="age_line"></span>
                    <div class="endage">
                        <input type="text" id="endage" v-model="top.age.endAge" placeholder="" >
                    </div>
                </div>
            </div>
            <!-- <div class="top_content kind">
                <span>查看方式：</span>
                <el-radio-group v-model="top.kind" @change="changeKind()">
                    <el-radio-button label="按位置"></el-radio-button>
                    <el-radio-button label="按时间"></el-radio-button>
                </el-radio-group>
            </div> -->
            <div class="top_content inline_block operaty">
                <span>操作：</span>
                <div class="todo_search" @click.stop="usercomein_list()"> <span class="search_icon"></span> 查询 </div>
            </div>
        </div>
        <div class="b_btm">
            <div class="passenger_top">
                <div class="passenger_top_name">客流分析</div>
                <div class="passenger_top_content">
                    <div class="passenger_top_content_charts"></div>
                    <div class="passenger_top_content_charts"></div>
                    <div class="passenger_top_content_charts"></div>
                </div>
            </div>
            <div class="passenger_bottom">
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">年龄</div>
                    <div class="passenger_bottom_content_charts"></div>
                </div>
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">月</div>
                    <div class="passenger_bottom_content_charts"></div>
                </div>
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">类型</div>
                    <div class="passenger_bottom_content_charts"></div>
                </div>
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">性别</div>
                    <div class="passenger_bottom_content_charts"></div>
                </div>
                <div class="passenger_bottom_content">
                    <div class="passenger_bottom_content_name">性格</div>
                    <div class="passenger_bottom_content_charts"></div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "Passenger",
  data() {
    return {
      top: {
        valueTimeS: "half",
        valueTime: [], //时间
        valueSex: "ALL", //性别
        valueStatus: "ALL", //身份
        age: {
          startAge: "1",
          endAge: "99"
        },
        kind: "按时间" //位置按时不需要
      }
    };
  },
  beforeMount() {
    let _this = this;
    console.log("挂载前执行");
  },
  mounted: function() {
    let _this = this;
  },
  watch: {
    "top.valueTime": {
      handler: function(val, oldval) {
        let _this = this;
        if (val === null) {
          val = [];
        }
        if (val != null && val.length != 0) {
          _this.top.valueTimeS = "custom";
        }
      },
      deep: true
    }
  },
  methods: {
    /**
     *时间改变
     */
    changeTimes() {
      let _this = this;
      if (_this.top.valueTimeS != "custom") {
        _this.top.valueTime = [];
      }
    },
    /**
     * 时间更改事件
     */
    ClickTime(e, state) {
      let _this = this;
      if ($(e.target).prop("tagName") != "LI") {
        $(".timeLis li")
          .eq(2)
          .addClass("active")
          .siblings("li")
          .removeClass("active");
      } else {
        $(e.target)
          .addClass("active")
          .siblings("li")
          .removeClass("active");
      }
    },
    /**
     * 更改性别
     */
    changeSex(val) {
      let _this = this;
    },

    /**
     * 按时间多选框
     */
    checkBoxChange_T(item, index) {
      let _this = this;
    },
    getMyDate(str) {
      let _this = this;
      var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime =
          oYear +
          "-" +
          _this.getzf(oMonth) +
          "-" +
          _this.getzf(oDay) +
          " " +
          _this.getzf(oHour) +
          ":" +
          _this.getzf(oMin) +
          ":" +
          _this.getzf(oSen); //最后拼接时间
      return oTime;
    },
    //补0操作
    getzf(num) {
      if (parseInt(num) < 10) {
        num = "0" + num;
      }
      return num;
    },
    /**
     * 列表数据
     */
    usercomein_list(p = 1) {
      let _this = this;
      let timestamp = new Date().getTime(); //当前时间
      let timeStart = "";
      let timeEnd = "";
      if (_this.top.valueTimeS == "half") {
        timeStart = _this.getMyDate((timestamp / 1000 - 1800) * 1000);
        timeEnd = _this.getMyDate(timestamp);
      } else if (_this.top.valueTimeS == "hour") {
        timeStart = _this.getMyDate((timestamp / 1000 - 3600) * 1000);
        timeEnd = _this.getMyDate(timestamp);
      } else {
        timeStart = _this.top.valueTime[0];
        timeEnd = _this.top.valueTime[1];
      }
      let json = {
        page: p,
        sex: _this.top.valueSex,
        ageStart: _this.top.age.startAge,
        ageEnd: _this.top.age.endAge,
        timeStart: timeStart,
        timeEnd: timeEnd
      };
      let formdata = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.usercomein_list, formdata)
        .then(res => {
          console.log("列表重新渲染了");
          if (res.status == 200) {
            let data = res.data;
            _this.page.currentPage = data.start;
            _this.page.total = data.count;
            _this.page.allPages = data.pages;
            let List = [];
            List = data.datas;
            for (let i = 0; i < List.length; i++) {
              List[i]["checked"] = false;
              List[i]["ts"] = _this.getMyDate(parseInt(List[i]["time"]));
            }
            _this.btm.times.listContent = List;
            _this.$nextTick(() => {
              _this.Time_picsMargin();
            });
          }
        })
        .catch(err => {
          // _this.$message("请求出错，请稍后重试！");
          _this.btm.times.listContent = [];
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#passenger {
  width: 100%;
  /* min-height: 539px; */
  color: #fff;
  border-radius: 10px;
  /* padding: 2%; */
  margin: auto;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  min-width: 1021px;
  overflow-x: auto;
}
#browse > div {
  /* width: 98%; */
  padding: 20px;
}
.b_top {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
}
.b_btm {
  background: rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  padding: 20px;
}
.page_title {
  font-size: 20px;
  font-weight: 400;
}

.timeLis {
  display: inline-block;
  vertical-align: middle;
}
.timeLis > li {
  float: left;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  margin: 0px 10px;
  color: #c5c5c5;
  cursor: pointer;
}
.timeLis > li.active {
  color: #fff;
}
.top_content {
  margin-top: 15px;
  margin-right: 60px;
}
.age > div {
  display: inline-block;
  vertical-align: middle;
  margin: 0px 10px;
}
.startage input {
  border: 1px solid #91a2eb;
  background: rgba(0, 0, 0, 0);
  border-radius: 20px;
  color: #c5c5c5;
  outline: none;
  width: 100%;
  height: 100%;
  padding-left: 24px;
  box-sizing: border-box;
}
.endage input {
  border: 1px solid #91a2eb;
  background: rgba(0, 0, 0, 0);
  border-radius: 20px;
  color: #c5c5c5;
  outline: none;
  width: 100%;
  height: 100%;
  padding-left: 24px;
  box-sizing: border-box;
}
.age_line {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 1px;
  background: #91a2eb;
}
.startage {
  display: inline-block;
  position: relative;
  width: 78px;
  height: 36px;
}
.endage {
  display: inline-block;
  position: relative;
  width: 78px;
  height: 36px;
}
.startage:after {
  content: "岁";
  display: block;
  position: absolute;
  right: 15px;
  top: 47%;
  transform: translateY(-50%);
  color: #c5c5c5;
  font-size: 13px;
}
.endage:after {
  content: "岁";
  display: block;
  position: absolute;
  right: 15px;
  top: 47%;
  transform: translateY(-50%);
  color: #c5c5c5;
  font-size: 13px;
}
.operaty > div {
  display: inline-block;
  color: #c5c5c5;
  font-size: 14px;
  margin: 0px 10px;
  width: 110px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 20px;
  text-align: center;
}
.operaty > div:hover {
  background: rgb(54, 63, 104);
  color: #fff;
  cursor: pointer;
}
.operaty > div:active {
  opacity: 0.8;
}
.search_icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background: url("../../assets/images/search_icon.png") no-repeat;
  background-size: 100% 100%;
}
.todo_search:hover .search_icon {
  background: url("../../assets/images/search_icon_hover.png") no-repeat;
  background-size: 100% 100%;
}

/* 设置元素为行内块元素 */
.inline_block {
  display: inline-block;
}

/* 分析内容详情部分 */
.passenger_top {
  margin-left: 30px;
}
/*客流分析标题*/
.passenger_top_name {
  margin: 20px 0 0 40px;
}

.passenger_top_content {
}
.passenger_top_content_charts {
  width: 98%;
  height: 409px;
  background-color: #313856;
  box-shadow: 1px 1px 18px 0px rgba(64, 128, 255, 0.2);
  border-radius: 16px;
  margin-top: 21px;
  margin-bottom: 42px;
}
.passenger_bottom_content {
    display: inline-block;
    margin: 0 40px;
}
.passenger_bottom_content_name {
    margin: 0 0 22px 14px;
}
.passenger_bottom_content_charts {
  width: 458px;
  height: 360px;
  background-color: #313856;
  box-shadow: 1px 1px 18px 0px rgba(64, 128, 255, 0.2);
  border-radius: 16px;
  margin-top: 21px;
  margin-bottom: 42px;
}
</style>
