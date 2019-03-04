---
id: comment
title: Comments
sidebar_label: Comments
---
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

