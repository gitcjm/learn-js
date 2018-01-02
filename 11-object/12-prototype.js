var GodClass = function abc(obj) {
    /*this.init = function () {
        alert('这也是实例化对象的方法')
    };*/

    if (this instanceof abc) {
        if (obj != undefined) {
            Object.assign(this, obj)
        }
    } else {
        alert('不要胡搞');
    }
};

/*
GodClass.init = function () {
    alert('这是类方法（静态方法）')
};

// prototype功能：方便随时增加实例化对象方法，以扩展类的功能
GodClass.prototype.init = function () {
    alert('这是实例化对象原型方法')
};
*/

// 作业：定义一个静态方法，将 version 传进来
GodClass.init = function (obj) {
    //alert(this);
    if (obj != undefined) {
        Object.assign(this.prototype, obj)
        // 如果assign的目标对象是this,那么obj对象只能为
        // GodClass对象所用, 而非它的后代God对象。
    }
};

// prototype(原型)属性，就是可以被后代继承的属性
// 非原型属性，只能为本对象所用
GodClass.prototype.farewell = function () {
    alert('She turn round and left the room.')
}

//--------------------------------------------

/*var God = new GodClass({
    version: '1.5'
});
alert(God.version);

GodClass.init();
God.init();

var God2 = new GodClass({});
God2.init();*/

GodClass.init({version: '3.0'});
var God3 = new GodClass();
alert(God3.version);
var God4 = new GodClass();
alert(God4.version);
God4.farewell();

