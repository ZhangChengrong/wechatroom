<template>
  <div class="message-box">
    <!-- 展示时间 -->
    <div class="message-header">
      <span class="message-time"></span>
    </div>
    <!-- 文字，图片信息布局 -->
    <div
      class="message-body"
      :class="{reverse: user && userId === user.userId}"
      v-if="['1','2'].includes(message.type)"
    >
      <div class="message-sender">
        <div class="potrait-img">
          <img :src="user.portrait" alt />
        </div>
      </div>
      <div class="message-info">
        <div class="messsage-username" v-if="userId !== user.userId">
          <span>{{user.name}}</span>
        </div>
        <div class="message-content" @contextmenu="messageClick">
          <p v-if="message.type === '1'">{{message.message}}</p>
          <img :src="message.url" alt v-else-if="message.type === '2'" />
        </div>
      </div>
    </div>
    <!-- 系统信息布局 -->
    <div class="message-body" v-else>
      <div class="message-sys" v-if="message.sysMsg">
        <!-- 0: 加入群聊， 1：撤回消息 -->
        <span v-if="message.sysMsg.sysType === '0'">{{userStr}}加入群聊。</span>
        <span v-else-if="message.sysMsg.sysType === '1'">{{userStr}}撤回了一条消息。</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      default: null
    },
    user: {
      default: null
    },
    userId: {
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    userStr() {
      if (
        this.message.sysMsg.sysUser.length === 1 &&
        this.message.sysMsg.sysUser[0].userId === this.userId
      ) {
        return "你";
      }
      return this.message.sysMsg.sysUser
        .map(ele => {
          return ele.name;
        })
        .join(",");
    }
  },
  created() {
    console.log(this.user);
  },
  methods: {
    messageClick(e) {
      e.preventDefault();
      //   右键本人发送的消息才可撤回，目前暂不做时间限制和重新编辑
      if (e.button === 2 && this.userId === this.user.userId) {
        this.$emit("revoke");
      }
    }
  }
};
</script>
<style lang="less">
.message-box {
  .message-body {
    display: flex;
    &.reverse {
      flex-direction: row-reverse;
      .messsage-username {
        text-align: right;
      }
    }
    .message-sender {
      display: flex;
      justify-content: center;
      width: 15vw;
      .potrait-img {
        width: 10vw;
        height: 10vw;
        border-radius: 2vw;
        border: 1px solid #f0f0f0;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .messsage-username {
      margin-bottom: 1vw;
      font-size: 1.6vw;
      line-height: 1;
      text-align: left;
    }
    .message-content {
      max-width: 40vw;
      padding: 1.5vw;
      border-radius: 10px;
      background: rgb(156, 221, 156);
      img {
        max-width: 25vw;
        max-height: 30vw;
      }
      p {
        margin: 0;
        line-height: 1.5;
        font-size: 5vw;
        text-align: left;
        word-break: break-all;
      }
    }
    .message-sys {
      margin: 0 auto;
      font-size: 2vw;
      text-align: center;
      span {
        display: inline-block;
        padding: 1vw 2vw;
        line-height: 1.2;
        background: #f0f0f0;
        border-radius: 1vw;
      }
    }
  }
}
</style>