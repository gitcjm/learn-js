/*var str = new Object("字符串");
var num = new Object(12);
var b = new Object(true);

console.log(str);
console.log(num);
console.log(b);

/!*
var arr = ['字符串', 12, true];
arr.forEach(function (item) {
    console.log(item);
});*!/

var obj = {
    'str': '字符串',
    'num': 12,
    'b': false,
};
console.log(obj.b);*/

// part 1

/*const type = '人类';
var employee = {
    name: '崔军明',
    /!*age: function(birth) {
        return 2017 - birth;
    },*!/
    /!*age: (birth)=>{
        return 2017 - birth;
    },*!/
    age(birth) {
        return 2017 - birth;
    },
    salary: 9000,
    type,
};

console.log(employee.age(2002), employee.salary, employee.type);*/

// part 2

var news = {
    // 新闻列表
    getList() {
        return [
            {newsid: '101', newstitle: '测试标题1'},
            {newsid: '102', newstitle: '测试标题2'},
            {newsid: '103', newstitle: '测试标题3'},
            {newsid: '105', newstitle: '我的奋斗'}
        ];
    },

    // 获取单条新闻
    /*getOne(newsid) {  // version 1
        var result;

        this.getList().forEach(function(element) {
            if (element.newsid === newsid) {
                result = element.newstitle;
            }
        });

        return result;
    }*/
    
    getOne(newsid) {    // version 2
        /*var anews = this.getList().find(function (element) {
            return element.newsid === newsid;
        });

        return anews.newstitle;*/

        return this.getList().find((element)=>{
            return element.newsid === newsid;
        }).newstitle;
    }
    
    /*getOne(newsid) {    // version 3
        var result;

        this.getList().map(/!*function (item) {
            if (item.newsid === newsid) {
                result = item.newstitle;
            }*!/
            (item)=>{
                if (item.newsid === newsid) {
                    result = item.newstitle;
                }
        });

        return result;
    }*/

    // getOne方法，版本2最为简洁
};

console.log(news.getOne('104'));
