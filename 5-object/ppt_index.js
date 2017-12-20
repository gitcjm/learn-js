/**
 * Created by Administrator on 2016/12/18.
 */

var God={
    version:"1.0",
    extends(name,obj)
    {
        this.init();
        if("data" in obj && "methods" in obj && typeof obj.data=="function" && typeof obj.methods=="object" )
        {
            var getData=obj.data();
            if(typeof  getData=="object")
            {
                Object.assign(obj.methods,getData,this);//把传入对象的Data 合并进入对象的methods
                this[name]=obj; //给GOD对象设置一个属性 （根据参数和参数值)
            }
        }
    },
    init() //初始化
    {
        Object.defineProperty(this,"init",{
            enumerable:false  //设置属性为不可枚举
        })
        Object.defineProperty(this,"extends",{
            enumerable:false
        })

        var keys=Object.keys(this);
        this.$global={};
        keys.forEach((key)=>{
            this.$global[key]=this[key];
        });
    }
};


var news={
  data(){
      return {
          id:101,
          title:"新闻标题"
      }
  },
    methods:{
        show()
        {
            
           alert(Object.keys(this.$global));
            //alert(this.title)
        }
    }
};

 God.extends("news",news);
 God.news.methods.show()


