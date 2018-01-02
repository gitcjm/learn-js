var BaseNews = function () {
    this.display = function () {
        alert('新闻基类');
    }
};

var SportsNews = function () {
    //BaseNews.call(this);
    this.version = '1.0';
};

Function.prototype.extends = function (base) {
    //alert(this);
    base.call(this.prototype);
};

SportsNews.extends(BaseNews);

var sn = new SportsNews();
sn.display();
alert(sn.version);
