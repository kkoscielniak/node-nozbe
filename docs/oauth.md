---
id: oauth
title: Authorization
sidebar_label: Authorization
---
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
**Returns**: <code>Promise</code> - OAuth data  

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

