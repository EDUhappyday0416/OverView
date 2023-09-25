<template>
    <div>
      <a-popover placement="bottom" trigger="click">
        <template #title> 消息通知 </template>
        <template #content>
          <div style="width: 600px; height: 500px">
            <div style="width: 100%; height: 100%; display: flex; margin-left: 3px">
              <div style="height: 450px; overflow-y: auto">
                <div v-for="(item, index) in messageList" :key="index" :class="selectMsg == index ? 'messageitemselect' : 'messageitem'
                  ">
                  <div>
                    <div class="msgTitle" @click="clickMsg(item, index)">
                      <div class="status-point" :style="item.isRead == 'Y'
                          ? { 'background-color': '#67C23A' }
                          : { 'background-color': 'red' }
                        "></div>
                      {{ item.message_title }}
                      <a v-show="item.message_url" @click="clickMsg(item, index, 'url')">
                        <i class="fa fa-cloud-download" aria-hidden="true" style="color: green"></i>
                      </a>
                      <span class="msgTime" v-show="isshowtime">
                        {{ item.message_time }}
                      </span>
                    </div>
                  </div>
                  <div class="msgContent">
                    {{ item.message_content }}
                  </div>
                  <a-divider></a-divider>
                </div>
              </div>
              <div class="showContent" v-show="showDiv">
                <span class="msgTitle">{{ showTitle }} </span>
                <span class="msgTime"> {{ showTime }} </span>
                <div class="showContent" v-html="showContent"></div>
              </div>
            </div>
          </div>
        </template>
  
        <a-badge :count="messageList.filter((item) => item.isRead == 'N').length" :offset="[-3, 5]" :number-style="{
          boxShadow: '0 0 0 1px #d9d9d9 inset',
        }">
          <i class="far fa-bell" style="font-size: 24px"></i>
        </a-badge>
      </a-popover>
    </div>
  </template>
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  const ws = ref(null)
  const wsUrl = ref('')
  const tt = ref('')
  const messageList = ref([])
  const showTitle = ref('')
  const showTime = ref('')
  const showContent = ref('')
  const lockReconnect = ref(false)
  const showDiv = ref(false)
  const isshowtime = ref(true)
  const selectMsg = ref(null)
  
  let moment = require('moment')
  moment.suppressDeprecationWarnings = true
  
  onMounted(() => {
    const userinfo = sessionStorage.getItem('user-info')
    const user_id = JSON.parse(userinfo).authorization[0].UserId
  
    wsUrl.value = `ws://${location.host}/wsapi/${user_id}/GSG/`
    if (window.WebSocket) {
      createWebSocket()
    } else {
      console.log('error:no websocket')
    }
  })
  
  onBeforeUnmount(() => {
    clearTimeout(tt.value)
    ws.value.close()
  })
  
  const createWebSocket = () => {
    try {
      ws.value = new WebSocket(wsUrl.value)
      initWebScoketFun()
    } catch (e) {
      console.log('Error', e)
      reconnect(wsUrl.value)
    }
  }
  
  const initWebScoketFun = () => {
    ws.value.onmessage = (event) => {
      console.log('Connection 成功:', wsUrl.value)
      let newmessagelist = JSON.parse(event.data).message
      newmessagelist.forEach((element) => {
        let temp = messageList.value.find(
          (item) => item.message_id == element.message_id
        )
        if (temp == undefined) {
          messageList.value.splice(0, 0, element)
        }
      })
    }
  
    ws.value.close = () => {
      console.log('Connection 關閉:', wsUrl.value)
      messageList.value.splice(0, messageList.value.length)
    }
    ws.value.onerror = () => {
      console.log('Connection 失敗', wsUrl.value)
      messageList.value.splice(0, messageList.value.length)
      reconnect(wsUrl.value)
    }
  
  }
  
  const reconnect = (url) => {
    if (lockReconnect.value) {
      return
    }
    lockReconnect.value = true
    //設置延遲避免請求過多 
    tt.value && window.clearTimeout(tt.value)
    tt.value = setTimeout(() => {
      createWebSocket(url)
      lockReconnect.value = false
    }, 10000)
  }
  
  const clickMsg = (item, index, url) => {
    console.log('messageList', messageList.value)
    isshowtime.value = false
    console.log('item', item)
    if (item.isRead === 'N') {
      ws.value.send(JSON.stringify(item))
  
      var foundIndex = messageList.value.findIndex(
        (x) => x.message_id === item.message_id
      )
      console.log('foundIndex', foundIndex)
      console.log('messageList[foundIndex]', messageList.value[foundIndex])
      messageList.value[foundIndex].isRead = 'Y'
      console.log(messageList.value)
    }
  
    selectMsg.value = index
    // showDiv.value = true
    showDiv.value = !showDiv.value
    showTitle.value = item.message_title
    showTime.value = localTime(item.message_time)
    showContent.value = item.message_content
  
    if (url) {
      console.log('item.message_url', item.message_url)
      if (item.message_url != null && item.message_url != '') {
        download(item.message_url)
      }
    }
  }
  const transTimestamp = (datetime, dateSeprator = '/', timeSeprator = ':') => {
    if (datetime) {
      const date = new Date(datetime)
      const year = `${date.getUTCFullYear()}`
      let month = `${date.getUTCMonth() + 1}`
      let day = `${date.getUTCDate()}`
      let hour = `${date.getUTCHours()}`
      let minute = `${date.getUTCMinutes()}`
      let second = `${date.getUTCSeconds()}`
  
      if (month.length === 1) {
        month = `0${month}`
      }
      if (day.length === 1) {
        day = `0${day}`
      }
      if (day.length === 1) {
        day = `0${day}`
      }
      if (hour.length === 1) {
        hour = `0${hour}`
      }
      if (minute.length === 1) {
        minute = `0${minute}`
      }
      if (second.length === 1) {
        second = `0${second}`
      }
      return `${year}${dateSeprator}${month}${dateSeprator}${day} ${hour}${timeSeprator}${minute}${timeSeprator}${second}`
    }
  }
  console.log(transTimestamp('2023-09-14 09:19:32'))
  
  
  const download = (url) => {
    let a = document.createElement('a')
    a.style = 'display: none' // <a> tag 
    a.href = url
    a.download = '111'
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  
  const localTime = (inputTime) => {
    // const utcTime = moment(inputTime);
    // const utcPlus8Time = utcTime.utcOffset('+08:00').format('YYYY-MM-DD HH:mm:ss');
    console.log('inputTime' , inputTime)
    const nowDate = new Date(inputTime)
    console.log('nowDate',moment(nowDate).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'))
    console.log(moment(inputTime).utc())
    console.log(moment(inputTime, 'YYYY/MM/DD HH:mm:ss Z').toDate())
    console.log(moment(inputTime).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'))
    return moment(inputTime).utcOffset(8).format('YYYY-MM-DD HH:mm:ss');
  }
  </script>
  
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .status-point {
    display: inline-block;
    width: 7px;
    margin-right: 3px;
    height: 7px;
    border-radius: 50%;
  }
  
  
  
  /* 内容 */
  .msgContent {
    margin-right: 2%;
    font-size: 13px;
    line-height: 1.5;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .messageitem:hover {
    background-color: aliceblue;
    width: 100%;
  }
  
  .messageitemselect {
    background-color: aliceblue;
    width: 100%;
  }
  
  .showContent {
    width: 350px;
    height: 450px;
    word-break: break-all;
    word-wrap: break-word;
  }
  
  /* 標題*/
  .msgTitle {
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  /* 時間*/
  .msgTime {
    font-size: 13px;
    height: 20px;
    color: #dac5cc;
    float: right;
    margin-right: 5px;
  }
  
  .ant-divider-horizontal {
    margin: 12px 0 !important;
  }
  </style>
  