/**
 * User: shixiaoxuan
 * Date: 13-3-12
 * Time: 上午9:43
 * To change this template use File | Settings | File Templates.
 */
var Box = {
    openBox : (function (){
        if (document.getElementById('testDiv')) {
            document.body.removeChild(document.getElementById('testDiv'));
        }
        var divObj = document.createElement('div');
        divObj.id = 'testDiv';
        divObj.style.width = '620px';
        divObj.style.top = '10%';
        divObj.style.left = '30%';
        divObj.style.height = '540px';
        divObj.style.backgroundColor = '#888888';
        divObj.style.position = 'absolute';
        divObj.style.zIndex = 9999;
        //alert(document.body);
        document.body.appendChild(divObj);
        var frameObj = document.createElement('IFRAME');
        frameObj.src ="http://sandbox.runjs.cn/show/sdo0no5b";
        frameObj.style.border = '0px';
        frameObj.style.width = '100%';
        frameObj.style.height = '100%';
        var closeObj = document.createElement('A');
        closeObj.style.float = 'right';
        closeObj.href = "javascript:document.body.removeChild(document.getElementById('testDiv'))";
        closeObj.innerHTML = '关闭';
        divObj.appendChild(closeObj);
        divObj.appendChild(frameObj);
    })
}

Box.openBox();
