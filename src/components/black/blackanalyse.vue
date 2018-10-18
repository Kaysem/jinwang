<template>
    <div id="blackadd">
        <div class="b_top">
            <h4 class="page_title">黑名单分析</h4>
            <div class="top_content inline_block searChstore">
                <span>门店：</span>
                <el-select v-model="searChstore" clearable placeholder="请选择" size="medium">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </div>
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
            <div class="top_content inline_block times">
                <span>次数：</span>
                <div>
                    <el-radio-group v-model="top.valueSex" @change="changeSex()">
                        <el-radio label="ALL">全部</el-radio>
                        <el-radio label="once">1次</el-radio>
                        <el-radio label="two">2次</el-radio>
                        <el-radio label="twoAll">2次以上</el-radio>
                    </el-radio-group>   
                </div>
            </div>
            
            <div class="top_content inline_block operaty">
                <span>操作：</span>
                <div class="todo_search" @click.stop="usercomein_list()"> <span class="search_icon"></span> 查询 </div>
            </div>
        </div>
        <div class="b_btm">
            
        </div>
    </div>
</template>

<script>
export default {
  name: "Browse",
  data() {
    return {
      // 门店下拉选择框 s
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      searChstore: "全部",

      // 门店下拉选择框 end

      top: {
        valueTimeS: "half",
        valueTime: [], //时间
        valueSex: "ALL", //性别
        age: {
          startAge: "1",
          endAge: "99"
        },
        kind: "按时间" //位置按时不需要
      },
    };
  },
  beforeMount() {
    let _this = this;
    console.log("挂载前执行");
  },
  mounted: function() {
    let _this = this;
    
    window.addEventListener("resize", function() {
      
      
    });
  },
  watch: {
    "top.kind": {
      handler: function(val, oldval) {
        let _this = this;
        if (val === "按时间") {
          _this.$nextTick(() => {
            _this.Time_picsMargin();
          });
        } else {
          _this.$nextTick(() => {
            
          });
        }
        if (val != oldval) {
          $(".add_store > li ")
            .eq(0)
            .addClass("active")
            .siblings("li")
            .removeClass("active");
        }
      },
      deep: true
    },
  },
  methods: {
    
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
     * 按位置 点击门店切换
     */
    ClickAddStore(e) {
      let _this = this;
      $(e.target)
        .addClass("active")
        .siblings("li")
        .removeClass("active");
    },
    /**@augments
     * 折叠面板
     */
    collapseChange(val) {
      let _this = this;
      _this.$nextTick(() => {
        
      });
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
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#browse {
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

.top_content {
  margin-top: 15px;
  /* display: inline-block;
    margin-right: 134px; */
}

/* 设置元素为行内块元素 */
.inline_block {
  display: inline-block;
  margin-right: 120px;
}

/* 门店下拉框*/
.el-select {
  width: 138px;
  height: 38px;
  justify-content: flex-start;
}
.searChstore span {
  margin-right: 10px;
}
/* 出现次数 */ 
.times > div {
  display: inline-block;
  vertical-align: middle;
  margin: 0px 10px;
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
/* 查询操作按钮 */ 
.operaty > div:hover {
  background: rgb(54, 63, 104);
  color: #fff;
  cursor: pointer;
}

/* 虚拟操作日期选择框DOM样式 */
/* .el-range-editor.el-input__inner {
  background: #1a1f37;
  border-radius: 20px;
  border-color: #91a2eb;
} */

</style>
