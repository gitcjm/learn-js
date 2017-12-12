var ajax = (func)=>{
    setTimeout(func, 1500);
};

function getData() {
    alert(fetchApi(news.getOne('105')));
}

// 从后台异步获取数据
function fetchApi(data) {
    return data;
}

ajax(getData);

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

    loadCache() {
        if (this.cache_list.length == 0) {
            this.cache_list = this.getList();
        }
    },

    getList() {
        return [
            {newsid: '101', newstitle: '1 天静无风声更干'},
            {newsid: '102', newstitle: '2 华发寻春喜见梅'},
            {newsid: '103', newstitle: '3 送灵澈'},
            {newsid: '104', newstitle: '4 苍苍竹林寺,杳杳钟声晚'},
            {newsid: '105', newstitle: '5 荷笠带斜阳,青山独归远'}
        ];
    },

    getOne(newsid) {
        this.loadCache();   // 加载缓存
        var anews = this.cache_list.find(function (element) {
            return element.newsid === newsid;
        });

        return anews.newstitle;
    }
};

/*
console.log(news.getOne('104'));
console.log(news.getOne('102'));*/
