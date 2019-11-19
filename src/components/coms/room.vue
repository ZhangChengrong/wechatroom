<template>
  <div class="chat-room">
    <div class="room-header">
      <h3>{{group.groupName || '聊天室'}}({{group.members.length}})</h3>
    </div>
    <div class="room-content">
      <div class="room-message-wrap scroll">
        <ul class="room-message-list">
          <span class="load-tip" @click="loadMore" v-if="!isAll">{{loadingShow?loadingTip:loadTip}}</span>
          <li class="room-message-list-item" v-for="(msg,mi) in messageList" :key="msg.id">
            <message-box
              v-bind="{
                message: msg,
                user: userJson[msg.sender],
                userId: userId
            }"
              @revoke="revoke(msg,mi)"
            ></message-box>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MessageBox from "./messageBox";
export default {
  name: "room",
  components: {
    MessageBox
  },
  props: {
    messageList: {
      default() {
        return [];
      }
    },
    userId: {
      // 当前用户的观看角度
      default: "10001"
    },
    group: {
      default() {
        return {
          groupName: "空空如也",
          members: []
        };
      }
    },
    loadTip: {
      default: "查看更多"
    },
    loadingTip: {
      default: "加载中"
    },
    isAll: {
      default: false
    }
  },
  data() {
    return {
      timer: null,
      directionY: 0,
      dom: null,
      loadingShow: false
    };
  },
  computed: {
    userJson() {
      let j = {};
      this.group.members.forEach(member => {
        j[member.userId + ""] = member;
      });
      console.log(j);
      return j;
    }
  },
  mounted() {
    this.dom = document.querySelector(".scroll");
    this.dom.addEventListener("scroll", e => {
      this.directionY = e.target.scrollTop;
    });
    this.dom.addEventListener("mousewheel", e => {
      if (e.wheelDelta > 0) {
        // 向上滚动
        if (this.directionY === 0) {
          // 滚动在最顶部,加载更多
          this.loadMore();
        }
      }
    });
  },
  methods: {
    loadMore() {
      if (this.isAll || this.loadingShow) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.loadingShow = true;
      this.timer = setTimeout(() => {
        this.$emit("loadMore");
        this.loadingShow = false;
      }, 800);
    },
    revoke(message, index) {
      this.$emit("revoke", {
        messsage: message,
        index: index,
        user: this.userJson[this.userId]
      });
    }
  },
  beforeDestroy() {
    this.dom.removeEventListener("scroll");
    this.dom.removeEventListener("mousewheel");
  }
};
</script>
<style lang="less">
.chat-room {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .room-header {
    width: 100%;
    h3 {
      margin: 0;
      line-height: 5vw;
    }
  }
  .room-content {
    position: relative;
    flex: auto;
    width: 100%;
    padding: 0.5vw 1vw 0;
    box-sizing: border-box;
    overflow: auto;
    .room-message-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      padding-top: 3vw;
      box-sizing: border-box;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      .room-message-list {
        padding: 0;
        list-style: none;
        .room-message-list-item {
          margin-bottom: 10px;
        }
      }
      .load-tip {
        position: absolute;
        top: 1vw;
        left: 50%;
        margin-left: -10vw;
        display: inline-block;
        width: 20vw;
        text-align: center;
        line-height: 2vw;
        font-size: 1.5vw;
        color: rgb(82, 82, 228);
        cursor: pointer;
      }
    }
  }
}
</style>