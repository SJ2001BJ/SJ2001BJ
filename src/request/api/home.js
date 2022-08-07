import service from "@/request";
//获取首页轮播图的数据
export function getBanner(){
    return service({
        method:'get',
        url:'/banner?type=2',
    })
}
//获取发现好歌单
export function getMusicList(){
    return service({
        method:'get',
        url:'/personalized?limit=10',
    })
}

//搜索
export function getSearchMusic(data){
    return service({
        method:'get',
        url:`/cloudsearch?keywords=${data}`
    })
}