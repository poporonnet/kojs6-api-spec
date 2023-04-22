# KOJSv6 API Document version 2
KOJSv6のAPIドキュメントです。  
最新のAPIバージョンはv2です。

## 凡例
### 制限
エンドポイント名に"[A]"がついている場合は、  
Adminユーザーのみアクセス可能なエンドポイントです。  
Adminユーザーでログインする必要があります。

エンドポイント名に"[R]"がついている場合は、認証が必要であることを示します。  
エンドポイント名に"[p]"が付く場合は、条件によっては認証が必要になることを示します。

## 認証方式について
KOJSはJWT(JWS)方式によるトークン認証方式を採用しています。
### トークンの種類について
#### アクセストークン
ログインしていることを証明するためのトークンです。  
有効期限は30分(1800 Sec.)に設定されます。  
エンドポイントへリクエストする際、Bearer Tokenとして送信する必要があります。
#### リフレッシュトークン
アクセストークンの有効期限が切れると、アクセストークンの再発行が必要です。  
リフレッシュトークンはアクセストークンを払い出すのに必要です。  
アクセストークンの再発行要求は、再発行用のエンドポイントにBearer Tokenとして送信することで可能です。  
有効期限は30日(43,200 min.)に設定されます。  
リフレッシュトークンの再発行はできません。ログインする必要があります。