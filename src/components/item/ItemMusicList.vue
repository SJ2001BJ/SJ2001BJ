<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listLeft">
        <i class="bi bi-play"></i>
        <span>播放全部<span>(共{{itemList.length}}首)</span></span>
      </div>
      <div class="listRight">
        <i class="bi bi-bookmark-plus"></i>
        <span>收藏（{{ subscribedCount }}）</span>
      </div>
    </div>
    <div class="itemList" >
      <div class="item" v-for="(item,i) in itemList" :key="i">
         <div class="itemLeft" @click="playMusic(i)">
           <span class="leftSpan" >{{i+1}}</span>
           <div class="name">
             <p class="songsName">{{ item.name}} </p>
             <span v-for="(item1, index) in item.ar" :key="index" class="singersName" >
               {{item1.name}} </span>
           </div>
         </div>
          <div class="itemRight">
            <i class="bi bi-camera-video" v-if='item.mv != 0'></i>
            <i class="bi bi-list-nested"></i>
          </div>
      </div>
    </div>
    </div>





</template>

<script>
import {mapMutations} from "vuex";

export default {
  setup(props){
    console.log(props);
  },
  props:['itemList','subscribedCount'],
  methods:{
    playMusic:function (i){
     this.updatePlayList(this.itemList)
      this.updatePlayListIndex(i)
    },
        ...mapMutations(['updatePlayList','updatePlayListIndex'])
  },

}
</script>

<style lang="less" scoped>
.itemMusicList{
  width: 100%;
  height: 20rem;
  //background-color: antiquewhite;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
}
.itemListTop{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    font-weight: 700;
    span{
      font-weight: 400;
      font-size:0.24rem;
      color:#999999;
    }
  }
}
.bi-play{
  stroke: #333333;
  stroke-width: 20;
}
.leftSpan{
  font-weight: 400;
  font-size: 0.24rem;
  color:#999999;
}
.listLeft {
  width: 3rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.listRight{
  display: flex;
  align-items: center;
  background-color: red;
  padding:0.2rem;
  border-radius: 0.4rem;
  color:#fff;
  .bi-camera-video,.bi-list-nested{
    width: 0.3rem;
    height: 0.3rem;
    fill:#fff;
    margin-right: 0.1rem;
    stroke:#fff;
    stroke-width: 50;
  }

}

.itemList{
  width:100%;
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
        marigin-left:0.3rem;
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
//.singersName{
//  font-size: 0.1rem;
//  display: flex;
//}
///**
// to do
// */
//
//.leftSpan{
//  line-height: 30px;
//  display: flex;
//}
//.name{
//  width: 3rem;
//  height: 100%;
//  line-height: 30px;
//  float: contour;
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
//}
//.bi-camera-video{
//  position: absolute;
//  right:50px;
//  display: flex;
//  margin-bottom: 10px;
//}
//
//.bi-list-nested{
// position: absolute;
//  right: 50px;
//  display: flex;
//
//}
</style>