var GetQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

function goSPK(){
    window.location.href=GetQueryString("spk");
}

function copySPK(){
    const el = document.createElement('input')
    // 给input元素赋值需要复制的文本
    el.setAttribute('value', GetQueryString("spk"))
    // 将input元素插入页面
    document.body.appendChild(el)
    // 选中input元素的文本
    el.select()
    // 复制内容到剪贴板
    document.execCommand('copy')
    // 删除input元素
    document.body.removeChild(el)
    alert('复制成功')
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