<template>
<div class="searchTop">
  <i class="bi bi-arrow-left" ></i>
  <input type="text" placeholder="陈奕迅" v-model="searchKey" @keydown.enter="enterKey">
</div>
  <div class="searchHistory">
     <span class="searchSpan">历史</span>
     <span v-for="item in keyWorldList"
           :key="item"
           class="spanKey"
           @click="searchHistory(item)">
       {{item}}
     </span>
    <i class="bi bi-trash" @click="delHistory"></i>
  </div>
  <div class="itemList" @click="updateIndex(item)">
    <div class="item" v-for="(item,i) in searchList" :key="i">
      <div class="itemLeft" >
        <span class="leftSpan" >{{i+1}}</span>
        <div class="name">
          <p class="songsName">{{ item.name}} </p>
          <span v-for="(item1, index) in item.artists" :key="index" class="singersName" >
               {{item1.name}} </span>
        </div>
      </div>
      <div class="itemRight">
        <i class="bi bi-camera-video" v-if='item.mvid !== 0'></i>
        <i class="bi bi-list-nested"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {getSearchMusic} from "@/request/api/home";

export default {

  data(){
    return{
      keyWorldList:[],
      searchKey:"",
      searchList:[],
    };
  },
  mounted() {
    this.keyWorldList= JSON.parse(sessionStorage.getItem('keyWorldList')) ? JSON.parse(sessionStorage.getItem('keyWorldList')) : [];
  },
  methods:{
    enterKey:async function(){
      if((this.searchKey !=="")){
        this.keyWorldList.unshift(this.searchKey);
        //去重
        this.keyWorldList=[...new Set(this.keyWorldList)];
        //固定长度
        if(this.keyWorldList.length>5){
          this.keyWorldList.splice(this.keyWorldList.length-1,1)
        }
        //console.log(new Set(this.keyWorldList));
        sessionStorage.setItem("keyWorldList",JSON.stringify(this.keyWorldList));
        let res= await getSearchMusic(this.searchKey)
        console.log(res);
        this.searchList=res.data.result.songs;
        this.searchKey="";
      }

    },
    delHistory:function () {
      sessionStorage.removeItem("keyWorldList")
      this.keyWorldList=[];
    },
    searchHistory: async function (item) {
      let res = await getSearchMusic(item);
      console.log(res);
      this.searchList=res.data.result.songs;
    },
    updateIndex:function(item){
      //todo
       item.al=item.album
       item.al.picUrl=item.album.artist.img1v1Url
       this.$store.commit("pushPlayList",item)
       this.$store.commit("updatePlayListIndex",this.$store.state.playlist.length-1)

    }
  },
};
</script>

<style lang="less" scoped>
.searchTop{
  width: 100%;
  height: 1rem;
  padding:0 .2rem;
  display: flex;
  align-items: center;
  input{
    margin-left: .2rem;
    border:none;
    border-bottom:1px solid #999999;
    width: 90%;
    padding:.1rem;
  }
}
.searchHistory{
  width: 100%;
  padding:.2rem;
  position: relative;
  .searchSpan{

    font-weight: 700;
  }
  .spanKey{
    padding: .1rem .2rem;
    background-color: rgb(185,159,169);
    border-radius: .4rem;
    margin:5px 10px;
    display: inline-block;
  }
  .bi-trash{
    width:20px;
    height: 20px;
    position: absolute;
    right: 10px;
  }
}

.itemList{
  width:100%;
  padding:10px;
  .item{
    width: 100%;
    height: 1.4rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
    .itemLeft{
      width: 85%;
      height:100%;
      display: flex;
      align-items: center;
      .leftSpan{
        display: inline-block;
        width: 0.2rem;
        text-align: center;
      }
      div{
        p{
          width: 4.54rem;
          height: .4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
        }
        span{
          font-weight: 400;
          font-size: .24rem;
          color:#999999;
        }
        margin-left:0.3rem;
      }
    }
    .itemRight{
      width: 20%;
      height: 100%;
      display: flex;
      align-items:center;
      position: relative;
      .bi{
        fill:#999999;
      }
      .bi-play-circle{
        position: absolute;
        left: 0;
      }
      .bi-list-nested{
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>