import axios from"axios";import qs from"querystring";function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}var config=createCommonjsModule(function(t,e){const s="https://api.nozbe.com:3000";t.exports={REGISTER_APP:`${s}/oauth/secret/create`,GET_OAUTH_CLIENT_DATA:`${s}/oauth/secret/data`,LOGIN:`${s}/login`,LIST:`${s}/list`,TASK:`${s}/task`,COMMENT:`${s}/task/comment`}}),config_1=config.REGISTER_APP,config_2=config.GET_OAUTH_CLIENT_DATA,config_3=config.LOGIN,config_4=config.LIST,config_5=config.TASK,config_6=config.COMMENT,registerApp=async(t,e,s)=>{try{return(await axios({method:"POST",url:config.REGISTER_APP,data:qs.stringify({email:t,password:e,redirect_uri:s})})).data}catch(t){return t.response.data}},getOAuthClientData=async(t,e)=>{try{return(await axios({method:"GET",url:config.GET_OAUTH_CLIENT_DATA,data:qs.stringify({email:t,password:e})})).data}catch(t){return t.response.data}},getOAuthLoginURL=t=>{if(!t)throw new Error("No clientId provided");return`${config.LOGIN}/?client_id=${t}`},oauth={registerApp:registerApp,getOAuthClientData:getOAuthClientData,getOAuthLoginURL:getOAuthLoginURL},getListOfTasks=(t,e)=>axios({method:"GET",url:config.LIST,headers:{Authorization:e},data:qs.stringify({client_id:t,type:"task"})}),addTask=async(t,e,s)=>{const{name:a,projectId:r,completed:o,contexts:i,dateTime:n,next:c,user:d,recur:g,time:u}=s;try{return(await axios({method:"POST",url:config.TASK,headers:{Authorization:e},data:qs.stringify({client_id:t,name:a,project_id:r||!1,completed:o||!1,con_list:i||!1,datetime:n||!1,next:c||!1,re_user:d||!1,recur:g||0,time:u||0,comment_unread:!1})})).data}catch(t){return t.response.data}},task={getListOfTasks:getListOfTasks,addTask:addTask},addComment=async(t,e,s)=>{const{taskId:a,type:r,body:o}=s;try{return(await axios({method:"POST",url:config.COMMENT,headers:{Authorization:e},data:qs.stringify({client_id:t,task_id:a,type:r||"markdown",body:o})})).data}catch(t){return t.response.data}},comment={addComment:addComment},src=createCommonjsModule(function(t,e){e.registerApp=t.exports.registerApp=oauth.registerApp,e.getOAuthClientData=t.exports.getOAuthClientData=oauth.getOAuthClientData,e.getOAuthAccessToken=t.exports.getOAuthAccessToken=oauth.getOAuthAccessToken,e.getListOfTasks=t.exports.getListOfTasks=task.getListOfTasks,e.addTask=t.exports.addTask=task.addTask,e.addComment=t.exports.addComment=comment.addComment}),src_1=src.registerApp,src_2=src.getOAuthClientData,src_3=src.getOAuthAccessToken,src_4=src.getListOfTasks,src_5=src.addTask,src_6=src.addComment;export default src;export{src_1 as registerApp,src_2 as getOAuthClientData,src_3 as getOAuthAccessToken,src_4 as getListOfTasks,src_5 as addTask,src_6 as addComment};
//# sourceMappingURL=node-nozbe.mjs.map
