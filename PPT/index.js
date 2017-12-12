

var news={
  getList(){
      return [
          {newsid:"101",newstitle:"测试标题1"},
          {newsid:"102",newstitle:"测试标题2"},
          {newsid:"103",newstitle:"测试标题3"}
      ];
  },
    getOne(newsid) //获取单条新闻
    {
         var index=-1;
         var getRet= this.getList().map((item,i)=>{
         if(item.newsid==newsid)
         {
             index=i;
             return item;
         }

     });
        if(index>=0)
        {
            return getRet[index];
        }
        else
            return null;
    }



};

alert(news.getOne(103).newstitle)
alert(news.getOne(101).newstitle)