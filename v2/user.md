# User

## 操作一覧

- [R] 自分のユーザー情報を取得
- [R] 自分のパスワードを変更
- ユーザー詳細情報を取得
- ユーザーのリストを取得
- ユーザーを登録
- ユーザーを有効化
- ログイン
- [R] ログアウト

## [R] 自分のユーザー情報を取得 (GET `/users/me`)

自分のユーザー情報を取得します。

### レスポンス

`200 OK`

```json
{
  "id": "1235156545648",
  "name": "Chiaki",
  "email": "me@example.jp",
  "role": 0
}
```

`role`が`0`であれば管理者ユーザーです。

## [R] 自分のパスワードを変更 (PUT `/users/me/password`)

自分のパスワードを変更します。

### リクエスト

```json
{
  "password": "hello-world"
}
```

### レスポンス

`204 No Content`

## ユーザー詳細情報を取得 (GET `/users/:id`)

ユーザーの情報を取得します。

### レスポンス

`200 OK`  

```json
{
  "id": "1235156545648",
  "name": "Chiaki",
  "role": 0
}
```

## ユーザーのリストを取得

ユーザーのリストを取得します。

### レスポンス

`200 OK`  

```json
[
  {
    "id": "1235156545648",
    "name": "Chiaki",
    "role": 0
  }
]
```

## ユーザーを登録 (POST `/users/`)

新規ユーザー登録を行います。

### リクエスト

```json
{
  "name": "Chiaki",
  "email": "me@example.jp",
  "password": "hello-world"
}
```

### レスポンス

`201 Created`  
ユーザー登録に成功すると、メールアドレス宛にメールを送信します。  
ユーザーを有効化するまではログインできません。  
`409 Conflict`
すでにユーザー登録されています。

## ユーザーを有効化 (POST `/users/verify/:token`)

ユーザーアカウントを有効化します。

### リクエスト

必要ありません。

### レスポンス

`200 OK`  
ログインが可能になります。  

`400 invalid token`  
有効化トークンが不正です。

## ログイン (POST `/login`)

ログインします。

### リクエスト

```json
{
  "email": "me@example.jp",
  "password": "hello-world"
}
```

### レスポンス

`200 OK`  

```json
{
  "access_token": "token",
  "refresh_token": "token"
}
```

`400 login failed`  
ログインに失敗しました。

## [R] ログアウト (POST `/logout`)

ログアウトします。**リフレッシュトークンが**無効化されます。

### レスポンス

`204 No Content`
