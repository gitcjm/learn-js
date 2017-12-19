var ajax = (callback) => {
    var data = [
        {newsid: '101', newstitle: '1 天静无风声更干'},
        {newsid: '102', newstitle: '2 华发寻春喜见梅'},
        {newsid: '103', newstitle: '3 苍苍竹林寺,杳杳钟声晚'},
        {newsid: '104', newstitle: '4 荷笠带斜阳,青山独归远'}
    ];
    // 1秒后将data传给func函数
    setTimeout(() => {
        callback(data)
    }, 1500);
};

/*// 测试
ajax((data)=>{ alert(data) });*/

var news = {
    _cache: {
        list: [],
        detail: {}
    },

    get cache_list() {
        return this._cache.list;
    },

    set cache_list(value) {
        this._cache.list = value;
    },

    loadCache(action) {
        if (this.cache_list.length == 0) {
            ajax((apidata)=>{
                this.cache_list = apidata;  // 设置新闻列表缓存
                action();
            });
        }
    },

    /*getList() {
        return [
            {newsid: '101', newstitle: '1 天静无风声更干'},
            {newsid: '102', newstitle: '2 华发寻春喜见梅'},
            {newsid: '103', newstitle: '3 苍苍竹林寺,杳杳钟声晚'},
            {newsid: '104', newstitle: '4 荷笠带斜阳,青山独归远'}
        ];
    },*/

    getOne(newsid, callback) {
        this.loadCache(() => {
            var anews = this.cache_list.find(function (element) {
                return element.newsid === newsid;
            });

            callback(anews.newstitle);
        });

    }
};

/*
console.log(news.getOne('102'));*/

news.getOne('104', (item) => {
    alert(item);
});
