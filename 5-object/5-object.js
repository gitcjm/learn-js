var God = {
    version: '1.0',
    extends(name, obj) {
        if ('data' in obj && 'methods' in obj &&
            typeof obj.data == 'function' && typeof obj.methods == 'object') {
            var getData = obj.data();
            if (typeof getData == 'object') {
                Object.assign(obj.methods, getData);
                this[name] = obj;   // 给God对象设置一个属性
            }
        }
    }
};

var news = {
    data() {
        return {
            id: 101,
            title: "新闻标题"
        }
    },

    methods: {
        show() {
            //alert(this.$global.version);
            alert(this.title)
        }
    }
};

/*Object.assign(news.methods, news.data());
news.methods.show();*/

God.extends('news', news);
God.news.methods.show();
