# 提出

## 操作一覧

- [R] 回答の提出
- [pR pA] 提出詳細を取得

## [R] 回答の提出 (POST `/contests/:id/submissions`)

問題に対する回答を提出します。

### リクエスト

`code`はBase64エンコードする必要があります。

```json
{
    "problemID": "4456548877",
    "code": "cCAiSGVsbG8gV29ybGQi",
    "lang": "Ruby"
}
```

### レスポンス

`201 Created`

```json
{
  "id": "123453153131",
  "problemID": "456412354621",
  "code": "cCAiSGVsbG8gV29ybGQi",
  "lang": "Ruby"
}
```

`400 Bad Request`
問題ごとに自動で設定される提出上限を超過すると、提出できなくなります。  
提出不可である場合は、`Rejected`がステータスとして返却されます。

## [pR pA] 提出詳細を取得 (GET `/contests/:id/submissions/:id`)

提出の詳細を取得します。

- コンテスト開催中
  - 管理者はすべての提出を取得できます。
  - 参加者は自分の提出のみ取得できます。
- コンテスト終了後
  - ログインしなくてもすべての提出を取得できます。

### レスポンス

`200 OK`

```json
  {
  "id": "1546513215463",
  "submittedAt": "2023-04-23T00:00:00+09:00",
  "user": {
    "id": "4564123155",
    "name": "Chiaki"
  },
  "problem": {
    "id": "415616121354654",
    "name": "A - とりかご"
  },
  "lang": "G++",
  "points": 120,
  "status": "AC",
  "time": 1300,
  "memory": 6542,
  "sets": [
    {
      "id": "1523215463",
      "name": "test1",
      "points": 300,
      "earned": 300
    }
  ],
  "results": [
    {
      "name": "65464213486343123.txt",
      "status": "AC",
      "time": 1300,
      "memory": 8000
    }
  ]
}
```
