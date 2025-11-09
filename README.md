# AI-
？がいっぱい

## Gitリポジトリの使い方

このリポジトリはGitHubにアップロード準備が完了しています。

### 初回セットアップ

リポジトリがまだローカルにない場合：
```bash
git clone https://github.com/nawaken/AI-.git
cd AI-
```

### ファイルを追加してアップロード

1. **ファイルを編集または追加**
   ```bash
   # 新しいファイルを作成
   echo "新しいコンテンツ" > myfile.txt
   ```

2. **変更をステージング**
   ```bash
   # 全ての変更をステージング
   git add .
   
   # または特定のファイルのみ
   git add myfile.txt
   ```

3. **コミット**
   ```bash
   git commit -m "変更の説明をここに記述"
   ```

4. **GitHubへプッシュ**
   ```bash
   git push origin main
   ```

### よく使うGitコマンド

- **状態確認**: `git status`
- **変更内容確認**: `git diff`
- **コミット履歴**: `git log`
- **リモートから最新取得**: `git pull origin main`

### ブランチ作業

新しい機能を開発する場合：
```bash
# 新しいブランチを作成
git checkout -b feature/new-feature

# 作業後、GitHubへプッシュ
git push origin feature/new-feature
```

### トラブルシューティング

**問題**: `git push`が拒否される場合
```bash
# リモートの変更を取得してマージ
git pull origin main
# 競合を解決後、再度プッシュ
git push origin main
```

**問題**: 間違ったファイルをコミットした場合
```bash
# 最後のコミットを取り消し（変更は保持）
git reset --soft HEAD^
```

### 注意事項

- `.gitignore`ファイルで不要なファイル（ビルド成果物、依存関係など）を除外しています
- センシティブな情報（パスワード、APIキーなど）は絶対にコミットしないでください
- 大きなファイル（100MB以上）はGitHubにプッシュできません
