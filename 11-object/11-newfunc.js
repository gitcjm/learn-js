var GodClass = function abc(obj) {
    if (this instanceof abc) {
        Object.assign(this, obj)
    } else {
        alert('不要胡搞');
    }
};

// 直接调用函数时，this代表它的宿主（window）
//GodClass();
// 而通过new实例化的函数，其中的this就代表该函数本身
var God = new GodClass({
    version: '2.5'
});
alert(God.version);
