var BaseNews = function bn() {
    // 基类方法
    this.description = function () {
        alert('新闻新闻新闻')
    };
    // 被覆盖的方法
    this.display = function () {
        alert('新闻基类');
    };
};

Function.prototype.extends = function (base) {
    // 子类的原型对象调用父类的构造函数
    // 每个类只要实例化后，就默认有一个原型对象，哪怕这个原型对象没有任何属性和方法
    base.call(this.prototype);
    // 定义一个子对象的父对象属性
    this.prototype.father = this.prototype;
};

///////////////////////////////////////////////////////// 华丽的分割线

var SportsNews = function () {
    this.version = '1.0';
    this.display = function () {
        alert('体育新闻');
    };
    // var 定义的为私有变量,this 对象无法访问
    var prefix = '[程序员在囧途]';
    var title = '新闻标题';
    this.getTitle = () => {
        return prefix + title;
    };
    this.setTitle = newTitle => {
        title = newTitle;
    }
};

// 继承
SportsNews.extends(BaseNews);

var sn = new SportsNews();

/*sn.display();
sn.father.display();
sn.description();

alert(sn.getTitle());
sn.setTitle('中国女子花样滑冰夺冠');
alert(sn.getTitle());
alert(sn.prefix);   // undefined
*/

///////////////////////////////////////////////////////// 华丽的分割线

// Proxy 代理对象

var p = new Proxy(sn, {
    // 属性检验
    get: function (target, prop) {
        return prop in target ? target[prop] :
            prop + ' ；< 这个属性从哪儿冒出来的？!';
    },
    // 属性设置预审
    set: function (target, prop, value) {
        if (prop === 'version') {
            throw new Error('不要胡搞!')
        }
        if (prop === 'display') {
            throw new Error('你还真要跟方法赋值!');
        }
        // The default behavior to store the value
        target[prop] = value;
    }
});

//alert(p.version);
//alert(p.prefix);
//p.version = '4.0';
//p.display = 'Hi~';
alert(p.a);
p.a = 42;
alert('p.a = ' + p.a);
alert('sn.a = ' + sn.a);
