# Debug

ググるとnode-inspectorを使うものが多いが、
最新のNode.jsだと上手く動いてくれない。

https://github.com/node-inspector/node-inspector/issues/905

これによると 

* 6.3.1にダウングレードすると動く
* node-inspectorは開発が停滞気味(プルリク投げてもマージされない)
* node本体に同様の機能がマージされそう(expremimental)

```
$ node --inspect --debug-brk app/app.js
Debugger listening on port 9229.
Warning: This is an experimental feature and could change at any time.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/remote/serve_file/@60cd6e859b9f557d2312f5bf532f6aec5f284980/(以下略) kDebugger attached.
```

コード中に

```javascript
debugger;
```

を埋め込むとそこで停止する。
