export const BaseNews = function bn() {

    this.display = function () {
        console.log('新闻基类的display()');
    };
};

// 这个 extends 函数到底该放在哪儿?!
Function.prototype.extends = function (base) {
    // 子类的原型对象调用父类的构造函数
    base.call(this.prototype);
    // 定义一个子对象的父对象属性
    this.prototype.father = this.prototype;
};