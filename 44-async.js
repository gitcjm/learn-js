var ajax = ()=>{
    setTimeout("doSth()", 1000);
};

function doSth() {
    alert("Hello, after 1 seconds.")
}

ajax();
