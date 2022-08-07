import { createStore } from 'vuex'
import {getMusicLyric} from "@/request/api/item";

export default createStore({
  state: {
    playList:[{
      al: {
        id: 147696189,
        name: "差一个时辰",
        pic: 109951167631005310,
        picUrl: "https://p1.music.126.net/6wcP-SN3ojMQnMyPqT0k2g==/109951167631005308.jpg",
        pic_str: "109951167631005308"

    },
      id: 1961729084,
      name: "差一个时辰"

    }],
    playListIndex:0,//默认下标为0
    isbtnShow:true,//播放按钮的显示
    detailShow:false,//歌曲详情页的显示
    lyricList:{},//歌词
    currentTime:0//当前时间
},
  getters: {
  },
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value
    },
    updatePlayList:function(state,value){
      state.playList=value
      console.log(state.playList)
    },
    updatePlayListIndex:function(state,value){
      state.playListIndex=value
    },
    updateDetailShow:function (state) {
      state.detailShow=!state.detailShow
    },
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    updateCurrentTime:function (state,value){
      console.log(state.currentTime)
      state.currentTime=value
    }
  },
  actions: {
    getLyric:async function (context,value){
      let res=await getMusicLyric(value)
      console.log(res);
      context.commit("updateLyricList",res.data.lrc)
    }
  },
  modules: {
  }
})
