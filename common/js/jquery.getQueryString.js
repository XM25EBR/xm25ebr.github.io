/**
 * Created by A.J on 2018/7/12.
 */
(function($){var re=/([^&=]+)=?([^&]*)/g,decodeRE=/\+/g,decode=function(str){return decodeURIComponent(str.replace(decodeRE," "))};var getQueryObj=function(exclude){var exclude=exclude||null;var params={},e,query=location.href.split('?')[1]||'',arr=[];if(typeof exclude=="string"){arr.push(exclude)}else if(typeof exclude=="object"){$.each(exclude,function(key,value){arr[key]=value})}while(e=re.exec(query)){if($.inArray(decode(e[1]),arr)==-1){params[decode(e[1])]=decode(e[2])}}return params};$.extend({getQueryObject:function(exclude){return getQueryObj(exclude)},getQueryString:function(exclude){var obj=getQueryObj(exclude),reStr="";$.each(obj,function(key,value){reStr+=reStr==""?key+"="+value:"&"+key+"="+value});return reStr}})})(jQuery);