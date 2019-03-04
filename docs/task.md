---
id: task
title: Tasks
sidebar_label: Tasks
---
## Functions

<dl>
<dt><a href="#getListOfTasks">getListOfTasks(clientId, accessToken)</a> ⇒ <code>Promise</code></dt>
<dd><p>Retrieves a full list of tasks</p>
</dd>
<dt><a href="#addTask">addTask(clientId, accessToken, task)</a> ⇒ <code>Promise</code></dt>
<dd><p>Adds new task to the project</p>
</dd>
</dl>

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

