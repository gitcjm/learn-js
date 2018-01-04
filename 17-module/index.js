// 最新语法要通过 babel-node 来运行
import { BaseNews } from "./BaseNews";

var SportsNews = function () {
    this.version = '1.0';
    this.display = function () {
        console.log('新闻子类的display()');
    };
    // var 定义的为私有变量,this 对象无法访问
    var prefix = '[程序员在囧途]';
    var title = '体育新闻';
    this.getTitle = () => {
        return prefix + title;
    };
    this.setTitle = newTitle => {
        title = newTitle;
    }
};

SportsNews.extends(BaseNews);

var sn = new SportsNews();

console.log('version: ' + sn.version);
sn.display();
sn.father.display();
console.log(sn.getTitle());
