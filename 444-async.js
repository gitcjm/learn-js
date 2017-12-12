var ajax = ()=>{
    setTimeout("fetchApi()", 1500);
};

function fetchApi() {
    alert(getApi("news title 1"));
}

function getApi(data) {
    alert(data);
}

ajax();