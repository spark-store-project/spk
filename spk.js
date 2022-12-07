var GetQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

function goSPK(){
    window.location.href=GetQueryString("spk");
}

//调用 
var spk=GetQueryString("spk");
var newspk=spk;
if(!spk.indexOf('spk://'))
{
    newspk = spk.slice(6);
}
var jsonUrl="https://cdn.d.store.deepinos.org.cn/"+newspk+"/app.json";
var titleElement = document.getElementById("title");
var iconElement = document.getElementById("icon");
var moreElement = document.getElementById("more");
var buttonElement = document.getElementById("button1");
var iconUrl="https://cdn.d.store.deepinos.org.cn/"+newspk+"/icon.png";

fetch(jsonUrl)
    .then((response) => response.json())
    .then((json) => {
        titleElement.innerText=json.Name;
        moreElement.innerText=json.More;
        if(json.icons == undefined)
        {
            iconElement.src = iconUrl;
        }else{
            iconElement.src = json.icons;
        }
    });