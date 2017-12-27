var God = {
    version: '1.0',

    extends(name, obj) {
        this.init();

        if ('data' in obj && 'methods' in obj &&
            typeof obj.data == 'function' && typeof obj.methods == 'object') {
            var getData = obj.data();
            if (typeof getData == 'object') {
                Object.assign(obj.methods, getData, this);
                this[name] = obj;   // 给God对象设置一个属性
            };
            // 监控obj.methods里面的属性
            for (var prop in getData) {
                this.watch(prop, obj.methods, ()=>{this.display(name)})
            }
        };
    },

    init() {
        // 设置属性不可枚举
        Object.defineProperties(this, {
            'init': {
                enumerable: false
            },
            'extends': {
                enumerable: false
            },
            'watch': {
                enumerable: false
            },
            'render': {
                enumerable: false
            },
            'display': {
                enumerable: false
            }
        });

        var keys = Object.keys(this);
        this.$global = {};
        // function中的this代表这个函数，而箭头函数中的this却能代表所属的对象
        /*keys.forEach(function (key) {
            if (typeof key != 'function') {
                this.$global[key] = this[key];  // this代表这个函数
            }
        })
        // 我的方法
        keys.forEach((key) => {
            if (typeof this[key] != 'function') {
                this.$global[key] = this[key];
            }
        })*/
        // 沈逸的方法：在获取keys前，设置this的不可枚举属性
        keys.forEach((key) => {
            this.$global[key] = this[key];
        });
        /*// 为什么这样不能冻结$global属性，而要用freeze方法
        Object.defineProperty(this, '$global', {
            writable: false
        });*/
        //Object.freeze(this.$global);
        this.watch('version', this.$global, ()=>{this.render()});
    },

    watch(keyName, obj, func) {
        // 为什么要使用_key这个局部变量（或叫私有变量）呢？
        // 错误：too much recursion，先不研究这个！
        var _key = '_' + keyName;
        if(!(_key in obj)) {
            obj[_key] = obj[keyName]
        }

        Object.defineProperty(obj, keyName, {
            set: (value) => {
                obj[_key] = value;
                func();
            },
            get: () => {
                return obj[_key];
            }
        })
    },

    render() {
        document.getElementById('version').innerHTML = '当前版本是' + this.$global.version;
    },

    display(objName) {
        var getTpl = this[objName].template;
        for (var prop in this[objName].methods) {
            getTpl = getTpl.replace('{{' + prop + '}}', this[objName].methods[prop]);
        };
        document.getElementById('news').innerHTML = getTpl;
    }
};

var news = {
    template: "<a href='/news/{{id}}'>{{title}}</a>",

    data() {
        return {
            id: 101,
            title: "自由平等民主"
        }
    },

    methods: {
        show() {
            /*alert(this.$global.version);
            this.$global.version = '2.0';
            alert(this.$global.version);*/
            alert(this.title);
        },
        // 沈逸在这儿写了一个changeProp方法,我写在网页中了,一样！
        changeProp() {
            this.id = '103';
            this.title = '周星驰电影《美人鱼》'
        }
    }
};

/*Object.assign(news.methods, news.data());
news.methods.show();*/
God.extends('news', news);
//God.news.methods.show();
