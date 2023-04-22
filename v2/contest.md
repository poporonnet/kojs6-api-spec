# コンテスト

## 操作一覧

- [A] コンテストを作成
- コンテストを取得
- [A] コンテストを更新
- [R] コンテストに参加
- [pR pA] コンテストの問題リストを取得
- ランキングを取得
- [pR] 提出一覧を取得

## [A] コンテストを作成 (POST `/contests)

コンテストを作成します。

### リクエスト

```json
{
    "title": "Test Contest",
    "description": "# Test Contest\nWelcome to Test Contest!\n",
    "startAt": "2022-12-02T10:10:00+09:00",
    "endAt": "2022-12-02T13:10:00+09:00"
}
```

### レスポンス

`201 Created`  

```json
{
    "id": "1231565165459845",
    "title": "Test Contest",
    "description": "# Test Contest\nWelcome to Test Contest!\n",
    "startAt": "2022-12-02T10:10:00+09:00",
    "endAt": "2022-12-02T13:10:00+09:00"
}
```

## コンテストを取得 (GET `/contests/:id`)

コンテストを取得します。

### レスポンス

`200 OK`  

```json
{
    "id": "1048181503206625340",
    "title": "Test Contest",
    "description": "# Test Contest\nWelcome to Test Contest!\n",
    "startAt": "2022-12-02T10:10:00+09:00",
    "endAt": "2022-12-02T13:10:00+09:00"
}
```

## [A] コンテストを更新 (PUT `/contests/:id`)

### リクエスト

```json
{
  "title": "hello contest",
  "description": "# hello contest",
  "startAt": "2023-04-23T00:00:00+09:00",
  "endAt": "2023-04-23T01:00:00+09:00"
}
```

### レスポンス

`201 Accepted`

```json
{
    "id": "1048181503206625340",
    "title": "Test Contest",
    "description": "# Test Contest\nWelcome to Test Contest!\n",
    "startAt": "2022-12-02T10:10:00+09:00",
    "endAt": "2022-12-02T13:10:00+09:00"
}
```

`400 invalid request`

## [R] コンテストに参加 (POST `/contests/:id/join/`)

コンテストに参加します。

### リクエスト

必要ありません。

### レスポンス

`204 No Content`

## [pR pA] コンテストの問題リストを取得 (GET `/contests/:id/problems)

コンテストの問題リストを取得します。  

コンテスト開始前は管理者のみ取得できます。  
コンテスト開催中は参加者も取得できるようになります。  
コンテスト終了後はログインしなくても取得できるようになります。

### レスポンス

`200 OK`

```json
[
  {
    "id": "154654648645",
    "title": "A - とりかご",
    "text": "問題文",
    "point": 100,
    "limits": {
      "memory": 1024,
      "time": 2000
    }
  }
]
```

## ランキングを取得 (GET `/contests/:id/ranking`)

ランキングを取得します。

### レスポンス

`200 OK`

```json
[
  {
    "id": "156156465415231",
    "name": "Chiaki",
    "point": 3600
  }
]
```

## [pR] 提出一覧を取得

提出の一覧を取得します。  

- コンテスト開催中
  - 管理者はすべての提出を取得できます。
  - 参加者は自分の提出のみ取得できます。
- コンテスト終了後
  - ログインしなくてもすべての提出を取得できます。

### レスポンス

`200 OK`

```json
[
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
    "memory": 6542
  }
]
```
