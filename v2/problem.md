# 問題

## 操作一覧

- [pR] 問題の詳細を取得
- [A] 問題を作成
- [A] 問題内容を更新
- [A] ケースセットを設定
- [A] ケースセットを変更
- [A] ケースセットを削除
- [A] テストケースを設定
- [A] テストケースを変更
- [A] テストケースを削除

## [pR pA] 問題の詳細を取得 (GET `/problems/:id`)

問題の詳細を取得します。  
コンテスト開催前は、管理者のみ取得可能です。  
コンテスト開催中は、参加者の取得可能です。  
コンテスト開催後は、ログインしていなくても取得可能です。

### レスポンス

`200 OK`

```json
{
  "id": "556598977794",
  "title": "A - 鳥かご",
  "text": "問題文",
  "points": 300,
  "limits": {
    "memory": 1024,
    "time": 2000
  }
}
```

## [A] 問題を作成 (POST `/problems/`)

問題を作成します。

### リクエスト

```json
{
    "problemID": "464532156",
    "title": "A - 鳥かご",
    "text": "問題文",
    "points": 300,
    "limits": {
        "memory": 1024,
        "time": 2000
    }
}
```

### レスポンス

`201 Created`

```json
{
  "id": "556598977794",
  "title": "A - 鳥かご",
  "text": "問題文",
  "points": 300,
  "limits": {
    "memory": 1024,
    "time": 2000
  }
}
```

## [A] 問題内容を更新 (PUT `/problems/:id`)

問題を更新します。  
問題が紐づいているコンテストが開催中のときは更新できません。

### リクエスト

```json
{
    "title": "A - 鳥かご",
    "text": "問題文",
    "points": 300,
    "limits": {
        "memory": 1024,
        "time": 2000
    }
}
```

### レスポンス

`200 OK`

```json
{
    "id": "556598977794",
    "contestID": "456421315465431", 
    "title": "A - 鳥かご",
    "text": "問題文",
    "points": 300,
    "limits": {
        "memory": 1024,
        "time": 2000
    }
}
```

## [A] ケースセットを設定 (POST `/problems/:id/sets/`)

ケースセット(部分点)を設定します。

### リクエスト

```json
{
  "name": "test0",
  "point": 300
}
```

### レスポンス

`201 Created`

```json
{
  "id": "12356435465498561313",
  "name": "test0",
  "point": 300
}
```

## [A] ケースセットを変更 (PUT `/problems/:id/sets/:id`)

ケースセットを変更します。

### リクエスト

```json
{
  "name": "test0",
  "point": 300
}
```

### レスポンス

`200 OK`

```json
{
  "id": "12356435465498561313",
  "name": "test0",
  "point": 300
}
```

## [A] ケースセットを削除 (DELETE `/problems/:id/sets/:id`)

ケースセットを削除します。

### レスポンス

`204 No Content`

## [A] テストケースを設定 (POST `/problems/:id/sets/:id/cases/`)

テストケースを設定します。

### リクエスト

```json
{
    "input": "123456789\n",
    "output": "0\n"
}
```

### レスポンス

`201 Created`

```json
{
  "id":"54645131",
  "input": "123456789\n",
  "output": "0\n"
}
```

## [A] テストケースを変更 (PUT `/problems/:id/sets/:id/cases/:id`)

テストケースを変更します。

### リクエスト

```json
{
    "input": "ABBBCC\n",
    "output": "YES\n"
}
```

### レスポンス

`200 OK`

```json
{
  "id":"54645131",
  "input": "ABBBCC\n",
  "output": "YES\n"
}
```

## [A] テストケースを削除 (DELETE `/problems/:id/sets/:id/cases/:id`)

テストケースを削除します。

### レスポンス

`204 No Content`
