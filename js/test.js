/**
 * Created with JetBrains WebStorm.
 * User: shixiaoxuan
 * Date: 13-3-7
 * Time: 上午11:15
 * To change this template use File | Settings | File Templates.
 */

window.Page = (function(){
    var Dom = Page.Dom = function(name){
        this.name = name;
    }

    Dom.prototype = getValue = function(){
        alert(this.name);
    }

    function test(Dom){
        if(Dom instanceof Page.Dom)
            alert(Dom.name);
    }

    return Page;
})()