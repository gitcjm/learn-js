var BaseNews = function bn() {
    if (this instanceof bn) {
        alert('父类初始化');
    }
    this.display = function () {
        alert('新闻基类');
    };
};

Function.prototype.extends = function (base) {
    // 这儿的 this 指子类 SportsNews，而其 prototype 指的原型对象
    // 每个类只要实例化后，就默认有一个原型对象，哪怕这个原型对象没有任何属性和方法
    // 执行 base 构造函数,约等价于 this.prototype = new base();
    base.call(this.prototype);
    //this.prototype = new base();
    // 定义一个子对象的父对象
    this.prototype.father = new base();
    // 这样基类构造函数就不会再次执行了
    //this.prototype.father = this.prototype;
};

//////////////////////////////////////////////////////华丽的分割线

var SportsNews = function () {
    this.version = '1.0';
    this.display = function () {
        alert('体育新闻');
    };
};

SportsNews.extends(BaseNews);

var sn = new SportsNews();
sn.display();
sn.father.display();