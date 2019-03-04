---
id: api
title: API reference
sidebar_label: API
---

This file contains description of all the functions available along with the parameters they take.

## Functions

<dl>
<dt><a href="#registerApp">registerApp(email, password, redirectUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Registers application to be used with Nozbe</p>
</dd>
<dt><a href="#getOAuthClientData">getOAuthClientData(email, password)</a> ⇒ <code>Promise</code></dt>
<dd><p>Fetches OAuth data of registered application</p>
</dd>
<dt><a href="#getOAuthLoginURL">getOAuthLoginURL(clientId)</a> ⇒ <code>string</code></dt>
<dd><p>Returns URL to login form</p>
</dd>
<dt><a href="#updateOAuthRedirectUri">updateOAuthRedirectUri(clientId, clientSecret, redirectUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Updates OAuth redirect URI</p>
</dd>
<dt><a href="#getListOfTasks">getListOfTasks(clientId, accessToken)</a> ⇒ <code>Promise</code></dt>
<dd><p>Retrieves a full list of tasks</p>
</dd>
<dt><a href="#addTask">addTask(clientId, accessToken, task)</a> ⇒ <code>Promise</code></dt>
<dd><p>Adds new task to the project</p>
</dd>
<dt><a href="#addComment">addComment(clientId, accessToken, comment)</a> ⇒ <code>Promise</code></dt>
<dd><p>Adds comment to particular task</p>
</dd>
<dt><a href="#getProjects">getProjects(clientId, accessToken, options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Retrieves a complete list of projects</p>
</dd>
</dl>

<a name="registerApp"></a>

## registerApp(email, password, redirectUri) ⇒ <code>Promise</code>
Registers application to be used with Nozbe

**Kind**: global function  
**Returns**: <code>Promise</code> - OAuth data for registered application  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | Developer's e-mail |
| password | <code>string</code> | Developer's password |
| redirectUri | <code>string</code> | The application's register URI |

<a name="getOAuthClientData"></a>

## getOAuthClientData(email, password) ⇒ <code>Promise</code>
Fetches OAuth data of registered application

**Kind**: global function  
**Returns**: <code>Promise</code> - OAUth data  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | Developer's e-mail |
| password | <code>string</code> | Developer's password |

<a name="getOAuthLoginURL"></a>

## getOAuthLoginURL(clientId) ⇒ <code>string</code>
Returns URL to login form

**Kind**: global function  
**Returns**: <code>string</code> - Login form URL  

| Param | Type | Description |
| --- | --- | --- |
| clientId | <code>string</code> | Application ID |

<a name="updateOAuthRedirectUri"></a>

## updateOAuthRedirectUri(clientId, clientSecret, redirectUri) ⇒ <code>Promise</code>
Updates OAuth redirect URI

**Kind**: global function  
**Returns**: <code>Promise</code> - OAUth data  

| Param | Type | Description |
| --- | --- | --- |
| clientId | <code>string</code> | Existing Application ID |
| clientSecret | <code>string</code> | Existing Client Secret |
| redirectUri | <code>string</code> | URI to be redirected to after successful login |

<a name="getListOfTasks"></a>

## getListOfTasks(clientId, accessToken) ⇒ <code>Promise</code>
Retrieves a full list of tasks

**Kind**: global function  
**Returns**: <code>Promise</code> - Tasks data  

| Param | Type |
| --- | --- |
| clientId | <code>string</code> | 
| accessToken | <code>string</code> | 

<a name="addTask"></a>

## addTask(clientId, accessToken, task) ⇒ <code>Promise</code>
Adds new task to the project

**Kind**: global function  
**Returns**: <code>Promise</code> - Added task data  

| Param | Type | Description |
| --- | --- | --- |
| clientId | <code>string</code> | Application ID |
| accessToken | <code>string</code> | Users access token |
| task | <code>object</code> | Object containing task parameters |
| task.name | <code>string</code> | Name of the task (**required**) |
| task.projectId | <code>string</code> | ID of the project task should be added to. If not passed, the task will be added to the Inbox |
| task.completed | <code>boolean</code> | Completeness flag for the task |
| task.contexts | <code>array</code> | Array of contexts to be assigned to the task |
| task.dateTime | <code>string</code> | Date and time of the reminder in "Y-m-d H:M:s" format |
| task.next | <code>boolean</code> | Next action flag for the task |
| task.user | <code>string</code> | User ID the task should be assigned for |
| task.time | <code>number</code> | Time needed to accomplish the task (in minutes) |
| task.recur | <code>number</code> | Recurrency of the task where<br> `0`: do not repeat (default)<br> `1`: every day<br> `2`: every week day<br> `3`: every week<br> `4`: every 2 weeks<br> `5`: every month<br> `6`: every half of a year<br> `7`: every year<br> `8`: every 3 weeks<br> `9`: every 2 months<br> `10`: every 3 months<br> `11`: every 2 years<br> `12`: every 2 days<br> `13`: every 4 weeks<br> |

<a name="addComment"></a>

## addComment(clientId, accessToken, comment) ⇒ <code>Promise</code>
Adds comment to particular task

**Kind**: global function  
**Returns**: <code>Promise</code> - Modified task data **with comments**  

| Param | Type | Description |
| --- | --- | --- |
| clientId | <code>string</code> | Application ID |
| accessToken | <code>string</code> | Users access token |
| comment | <code>object</code> | Comment object **(required)** |
| comment.taskId | <code>string</code> | Comments ID **(required)** |
| comment.body | <code>string</code> | Comments content **(required)** |
| comment.type | <code>string</code> | Type of comment, where<br> `markdown`: Comment in Markdown format<br> `checklist`: Comment in following format:<br> (+) marked checklist item<br> (-) unmarked checklist item |

<a name="getProjects"></a>

## getProjects(clientId, accessToken, options) ⇒ <code>Promise</code>
Retrieves a complete list of projects

**Kind**: global function  
**Returns**: <code>Promise</code> - Projects  

| Param | Type | Description |
| --- | --- | --- |
| clientId | <code>string</code> | Application ID |
| accessToken | <code>string</code> | User access token |
| options | <code>object</code> | Request options |
| options.sort | <code>boolean</code> | Sort projects alphabetically. Inbox first. |

