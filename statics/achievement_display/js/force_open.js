/**
 * Created by changzhao619 on 5/19/16.
 */

function close_ele(id){
    //var obj = document.getElementById(id);
    //obj.style.display = "none";
    $("#card").hide();
}

function show_ele(id, par, res_content_left){
    //var obj = document.getElementById(id);
    //obj.style.display = "block";
    //$("#card").show();

    $("#card").show();
    clear_card_content();
    var more_name = document.getElementById("more-name");
    var more_paper = document.getElementById("more-paper");

    if(par == "more"){//如果更多数据
        var content = document.getElementById("card-p");   //内容
        var name = document.getElementById("card-title-content");   //姓名
        var str_a = "";
        var str_p = "";
        for(var n=0; n<res_content_left.length; n++ ){
            var id_get = res_content_left[n]._type + "/" + res_content_left[n]._id + "|" + res_content_left[n]._source.name;
            if(head_workfor.indexOf(id_get) < 0 ) {
                if(res_content_left[n]._type == "Perso8n"){
                    str_a += '<a class="more-a-link" href="/force_open?id=' + id_get + '" onmouseover="more_content_display(\'' + id_get + '\');" target="_blank">' + res_content_left[n]._source.name + '</a>';
                }else{
                    str_p += '<a class="more-p-link" href="/force_open?id=' + id_get + '" onmouseover="more_content_display(\'' + id_get + '\');" target="_blank">' + res_content_left[n]._source.name + '</a>';
                }

            }
        }
        document.getElementById("card-img").innerHTML = '<i id="op-icon" >&#xe61b;</i>';
        more_name.innerHTML = str_a;
        more_paper.innerHTML = str_p;
        more_name.style.height = more_name.offsetHeight + 'px';
        more_paper.style.height = more_paper.offsetHeight + 'px';
        name.innerHTML =  "更多相关数据";
    }else{//如果为正常显示数据
            //数据处理开始
        var type ; //ES查询数据类型
        var id; //ES查询ID
        type = par.split("|")[0].split("/")[0];
        id = par.split("|")[0].split("/")[1]

        var res = get_node_info_ajax(id, type)[0]; //返回的结果


        var name = document.getElementById("card-title-content");   //姓名
        var content = document.getElementById("card-p");   //内容
        var img = document.getElementById("card-img");
        name.innerHTML = "<a href='/force_open?id="+par+"' target='_blank'>"+res._source.name+"</a>";   // 插入姓名

        if(res._type == "Person"){//如果该实体为人
            if(res._source.worksFor){
                content.innerHTML = "<font color='red'>就职单位:</font>"+res._source.worksFor.split("|")[1];
                img.innerHTML = '<i id="op-icon" >&#xe619;</i>';
            }
            img.innerHTML = '<i id="op-icon" >&#xe619;</i>';
        }else if(res._type == "ResearchOrganization" || res._type == "EducationalOrganization" || res._type == "Corporation"){ //实体为机构
            if(res._source.description){
                content.innerHTML = "<font color='red'>简介:</font>"+res._source.description;    //组织实体简介
                img.innerHTML = '<i id="op-icon" >&#xe617;</i>';
            }
            if(res._source.keyDiscipline){
                document.getElementById("direction").innerHTML = "<font color='red'>研究方向:</font>"+res._source.keyDiscipline;    //组织实体简介
            }

            //细节描述
            var str_card = "";
            if(res._source['location']){
                str_card += '<span class="org-tips">地点:</span><span class="org-context">'+res._source['location']+'</span>&nbsp;&nbsp;';
            }
            if(res._source.level){
                str_card += '<span class="org-tips">等级:</span><span class="org-context">'+res._source.level+'</span>&nbsp;&nbsp;';
            }
            if(res._source.foundingDate){
                str_card += '<span class="org-tips">成立时间:</span><span class="org-context">'+res._source.foundingDate+'</span>';
            }
            if(res._source.head[0]){
                document.getElementById("card-head").innerHTML = '<span class="org-tips">负责人:</span><span class="org-context"><a href="/force_open?id='+res._source.head[0]+'" target="_blank">'+res._source.head[0].split("|")[1]+'</a></span>';
            }
            document.getElementById("card-b-desc").innerHTML = str_card;
            img.innerHTML = '<i id="op-icon" >&#xe617;</i>';

        }else if(res._type == "weapon"){
            var str_card = "";
            if(res._source['launchMass']){
                str_card += '<span class="org-tips">速度:</span><span class="org-context">'+res._source['launchMass']+'</span>&nbsp;&nbsp;';
            }
            if(res._source.state){
                str_card += '<span class="org-tips">状态:</span><span class="org-context">'+res._source.state+'</span>&nbsp;&nbsp;';
            }
            if(res._source.diameter){
                str_card += '<span class="org-tips">直径:</span><span class="org-context">'+res._source.diameter+'</span>';
            }
            document.getElementById("card-b-desc").innerHTML = str_card;

            var str_card = "";
            if(res._source['militaryEquipment']){
                str_card += '<span class="org-tips">所属军队:</span><span class="org-context">'+res._source['militaryEquipment']+'</span>&nbsp;&nbsp;';
            }
            if(res._source.enginePower){
                str_card += '<span class="org-tips">马力:</span><span class="org-context">'+res._source.enginePower+'</span>&nbsp;&nbsp;';
            }
            document.getElementById("m-e").innerHTML = str_card;

            var str_card = "";
            if(res._source['vehicle_range']){
                str_card += '<span class="org-tips">射程:</span><span class="org-context">'+res._source['vehicle_range']+'</span>&nbsp;&nbsp;';
            }
            if(res._source.category){
                str_card += '<span class="org-tips">类别:</span><span class="org-context">'+res._source.category+'</span>&nbsp;&nbsp;';
            }
            if(res._source.length){
                str_card += '<span class="org-tips">长度:</span><span class="org-context">'+res._source.length+'</span>&nbsp;&nbsp;';
            }
            document.getElementById("v-c").innerHTML = str_card;


            if(res._source.guidance){
                document.getElementById("card-gu").innerHTML = '<span class="org-tips">引导方式:</span><span class="org-context">'+res._source.guidance+'</span>&nbsp;&nbsp;';
            }
            if(res._source.feed){
                document.getElementById("card-feed").innerHTML = '<span class="org-tips">子弹:</span><span class="org-context">'+res._source.feed+'</span>&nbsp;&nbsp;';
            }
            if(res._source.description){
                document.getElementById("card-p").innerHTML = "<font color='red'>简介:</font>"+res._source.description;
            }

            img.innerHTML = '<i id="op-icon" >&#xe60e;</i>';

        }else {
            //document.getElementById("").innerHTML = "";
            if(res._source['author']){
                var str_au = '<span class="org-tips">作者:</span>';
                for(var au_i=0; au_i<res._source['author'].length; au_i++){
                    str_au += '<span class="org-context"><a href="/force_open?id='+res._source['author'][au_i]+'" target="_blank">'+res._source['author'][au_i].split("|")[1]+'</a></span>&nbsp;&nbsp;';
                }
                str_au += '</span>';
                document.getElementById("card-b-desc").innerHTML = str_au;

            }
            if(res._source.abstract){
                content.innerHTML = "<font color='red'>摘要:</font>"+res._source.abstract;
                img.innerHTML = '<i id="op-icon" >&#xe618;</i>';
            }
            img.innerHTML = '<i id="op-icon" >&#xe618;</i>';

        }
    }
}


function insert_content(JSONObject){
    //document.getElementById('card-title-content').
}

  function get_node_info_ajax(id, type) //ajax 获取节点信息
{
    var JSONObject;
    var txt;
    var url = "get_node_info?id=" + id + "&type=" + type + "&";
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
    }
    else {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {

                txt = xmlhttp.responseText; //获取ajax请求的数据；
                JSONObject = eval ("(" + txt + ")"); //将json数据转换为js对象；
                return JSONObject;
            }
    }
    xmlhttp.open("GET",url+"rand="+Math.random(),false);
    xmlhttp.send();
    return JSONObject;

}






function generate_node(id, head_workfor,  head_workfor_relationship, res, res_content_left){
     /*
        * id 为主接点
        *  res 为界面显示的节点
        *  res_content_left 为更多显示的节点,如果该变量不为零则显示更多,如果为零则不显示更多节点
        *
        *
    */


    var node_link = new Array();
    var node = new Array();
    var link = new Array();

    var head_workfor_len = head_workfor.length;

    if(res_content_left != "0"){
        for(var i=0; i<res.length+2+head_workfor_len; i++){
        node[i] = {};
        link[i] = {};
        }
    }else{
        for(var i=0; i<res.length+1+head_workfor_len; i++){
        node[i] = {};
        link[i] = {};
        }

    }


    node[0].id = 0;
    node[0].category = 0;
    node[0].name = id;
    node[0].label = id.split("|")[1];
    node[0].symbolSize = 40;
    node[0].ignore = false;
    node[0].flag = true;
    node[0]['symbol'] = display_img_type(id.split("/")[0]);


    //node[1].id = 1;
    //node[1].category = 0;
    //node[1].name = "2";
    //node[1].label = "22";
    //node[1].symbolSize = 60;
    //node[1].ignore = false;
    //node[1].flag = true;
    //node[1]['symbol'] = 'heart';


    for(var n=0; n<head_workfor_len; n++){

        node[n+1].id = n+1;
        node[n+1].category = 1;
        node[n+1].name = head_workfor[n];
        node[n+1].label = head_workfor[n].split("|")[1]+"("+head_workfor_relationship+")";
        node[n+1].symbolSize = 25;
        node[n+1].ignore = false
        node[n+1].flag = true;
        if(head_workfor[n].split("/")[0] == "Person"){
            node[n+1].symbol = "image://statics/achievement_display/img/lead.png";
        }else{
            node[n+1].symbol = "image://statics/achievement_display/img/work.png";
        }




        link[n].source = n+1;
        link[n].target = 0;

    }


    for(var n=0; n<res.length; n++){
        var type_id_name = res[n]._type+"/"+res[n]._id+"|"+res[n]._source.name;
        //for(var i=0; n<head_workfor_len; n++){
        if(head_workfor.indexOf(type_id_name) < 0 ){
            node[n+1+head_workfor_len].id = n+1;
            node[n+1+head_workfor_len].category = 1;
            node[n+1+head_workfor_len].name = type_id_name;
            node[n+1+head_workfor_len].label = res[n]._source.name;
            node[n+1+head_workfor_len].symbolSize = 25;
            node[n+1+head_workfor_len].ignore = false
            node[n+1+head_workfor_len].flag = true;
            node[n+1+head_workfor_len].symbol = display_img_type(res[n]._type);

            link[n+head_workfor_len].source = n+1+head_workfor_len;
            link[n+head_workfor_len].target = 0;
        }else{
            //node.splice(n+1+head_workfor_len, 1);
            delete node[n+1+head_workfor_len];
            //link.splice(n+head_workfor_len, 1);
        }
       // }


    }
    if(res_content_left != "0"){

            node[n+1+head_workfor_len].id = n+1;
            node[n+1+head_workfor_len].category = 1;
            node[n+1+head_workfor_len].name = "more";
            node[n+1+head_workfor_len].label = "更多";
            node[n+1+head_workfor_len].symbolSize = 30;
            node[n+1+head_workfor_len].ignore = false;
            node[n+1+head_workfor_len].flag = true;
            node[n+1+head_workfor_len].symbol = 'circle';

            link[n+head_workfor_len].source = n+1+head_workfor_len;
            link[n+head_workfor_len].target = 0;

    }

    node_link['node'] = node;
    node_link['link'] = link;
    console.log(node_link);
    return node_link;
}


function display_img_type(type){
    if(type == "Person"){
        return "image://statics/achievement_display/img/user.png";
    }else if(type == "ResearchOrganization" || type == "EducationalOrganization" || type == "Corporation"){
        return 'image://statics/achievement_display/img/force-icon/org.jpg';
    }else if(type == "weapon"){
        return 'image://statics/achievement_display/img/weapon.png';
    }else{
        return 'image://statics/achievement_display/img/paper.png';
    }
}

function clear_card_content(){
    document.getElementById("card-title-content").innerHTML = "";
    document.getElementById("card-b-desc").innerHTML = "";
    document.getElementById("card-p").innerHTML = "";
    document.getElementById("card-key").innerHTML = "";
    document.getElementById("direction").innerHTML = "";
    document.getElementById("card-head").innerHTML = "";
}

function more_content_display(val){
     close_ele("card");
     show_ele("card", val, "none");

}