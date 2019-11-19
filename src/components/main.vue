<template>
  <div class="main-content">
    <div class="room-container">
      <room
        v-bind="{
        messageList: msgList,
        group: group,
        userId: curUserId,
        loadTip: '查看更多...',
        loadingTip: '加载中...'
      }"
        @loadMore="getMoreMsg"
        @revoke="revokeMsg"
      ></room>
    </div>
    <div class="textarea-container">
      <textarea cols="30" rows="10" v-model="txt" @keyup.enter="sendMessage"></textarea>
    </div>
  </div>
</template>

<script>
import Room from "./coms/room";
export default {
  components: {
    Room
  },
  data() {
    return {
      // 人员视角 测试用
      curUserId: "10001",
      txt: "",
      msgList: [
        {
          id: 1,
          type: "1", //1文字  2图片 0系统消息
          message: "这是一条文字消息",
          time: "2019-11-19",
          sender: "10001"
        },
        {
          id: 2,
          type: "2", //1文字  2图片 0系统消息
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574161359253&di=d5299da4daec04f3915649dc59ead0a8&imgtype=0&src=http%3A%2F%2Fs06.lmbang.com%2FM00%2FA3%2FEA%2FecloA1tFv6WAUZ40ABOcQYyS9pE107.gif",
          message: "这是一条文字消息",
          time: "2019-11-19",
          sender: "10002"
        },
        {
          id: 3,
          type: "0", //1文字  2图片 0系统消息
          time: "2019-11-19",
          sysMsg: {
            sysType: "0", //0: 加入群聊， 1：撤回消息
            sysUser: [
              {
                userId: "10003",
                name: "客服2",
                portrait:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574162663523&di=4fcc83095170f490c7e357c1c0131ce7&imgtype=0&src=http%3A%2F%2Fs01.lmbang.com%2FM00%2FA0%2FDD%2FecloD1tZ7mCAOFW6AABeITYTfqM028.jpg"
              }
            ] //消息涉及人,这里可能有多人
          }
        },
        {
          id: 4,
          type: "1", //1文字  2图片 0系统消息
          message: "这是一条文字消息",
          time: "2019-11-19",
          sender: "10003"
        },
        {
          id: 5,
          type: "1", //1文字  2图片 0系统消息
          message: "这是一条文字消息",
          time: "2019-11-19",
          sender: "10003"
        }
      ],
      group: {
        groupName: "测试组",
        groupId: "23123123123",
        members: [
          {
            userId: "10001",
            name: "本人",
            portrait:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574184754717&di=1c592095019f2584d8ba824783efc2a1&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-a3ee17c2edcac644c6cf63b481608a24_hd.jpg"
          },
          {
            userId: "10002",
            name: "客服1",
            portrait:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574162663523&di=2aeb4058d901995538f2a521985aa203&imgtype=0&src=http%3A%2F%2Fs08.lmbang.com%2FM00%2FAF%2F3C%2FecloD1umEbKAI03kAADJc5MjUh8984.jpg"
          },
          {
            userId: "10003",
            name: "客服2",
            portrait:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574184801903&di=fbda2241e862da72bcdbfd67e8778b38&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-2b3ce6f38455053894a3b7349a6b22a1_b.jpg"
          }
        ]
      }
    };
  },
  methods: {
    getMoreMsg() {
      let timeStamp = new Date().getTime();
      for (let i = 0; i < 10; i++) {
        this.msgList.unshift({
          id: "" + timeStamp + i,
          type: "1",
          message: "这是一条文字消息",
          time: "2019-11-19",
          sender: "10001"
        });
      }
    },
    receiveMessage() {
      this.msgList.push({
        id: new Date().getTime(),
        type: "2",
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574161359253&di=d5299da4daec04f3915649dc59ead0a8&imgtype=0&src=http%3A%2F%2Fs06.lmbang.com%2FM00%2FA3%2FEA%2FecloA1tFv6WAUZ40ABOcQYyS9pE107.gif',
        message: "随机收到的一条数据，定时时间15s",
        time: "2019-11-19",
        sender: "10002"
      });
    },
    sendMessage() {
      if (this.txt) {
        this.msgList.push({
          id: new Date().getTime(),
          type: "1",
          message: this.txt,
          time: new Date().toLocaleTimeString(),
          sender: this.curUserId
        });
        this.txt = "";
      }
    },
    revokeMsg(obj) {
      this.msgList.splice(obj.index, 1, {
        id: new Date().getTime(),
        type: "0", //1文字  2图片 0系统消息
        time: new Date().toLocaleTimeString(),
        sysMsg: {
          sysType: "1", //0: 加入群聊， 1：撤回消息
          sysUser: [obj.user] //消息涉及人,这里可能有多人
        }
      });
    }
  },
  created(){
    // 测试用
    setInterval(() => {
      this.receiveMessage();
    }, 15000);
  }
};
</script>

<style lang="less">
.main-content {
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
  .room-container {
    display: flex;
    flex: auto;
    width: 100%;
  }
  .textarea-container {
    width: 100%;
    height: 20vw;
    &::before {
      display: block;
      content: " ";
      height: 1px;
      background: #e0e0e0;
    }
    textarea {
      width: 100%;
      height: 100%;
      padding: 1vw;
      font-size: 3.8vw;
      box-sizing: border-box;
      border: none;
      resize: none;
      outline: none;
    }
  }
}
</style>
