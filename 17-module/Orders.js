const MainOrder = {     //主订单
    OrderNo: '0000',
    OrderUser: 0,
    ProdsNum: 0,
    OrderTime: "",
    OrderDetail: []
};

const DetailOrder = {   //子订单
    ProdID: 0,
    ProdName: 'apple',
    ProdPrice: 0.00
};

//export { MainOrder, DetailOrder }

export default {    // 简单工厂模式
    create(name) {  // 创建一个实体类
        if (name === 'main') {
            return MainOrder;
        }
        else if (name === 'detail') {
            return DetailOrder;
        }
    }
}

