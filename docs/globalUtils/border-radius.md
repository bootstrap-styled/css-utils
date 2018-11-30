Round corners of an element.

```js
const style = { background: "#f5f5f5", border: "1px solid #3F007B", display: "flex", alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '.25rem', height: '100px', width: '100px' };

<div className="d-flex justify-content-around">
  <div style={style} className="rounded-top">className=<br />"rounded-top"</div>
  <div style={style} className="rounded-right">className=<br />"rounded-right"</div>
  <div style={style} className="rounded-bottom">className=<br />"rounded-bottom"</div>
  <div style={style} className="rounded-left">className=<br />"rounded-left"</div>
  <div style={style} className="rounded">className=<br />"rounded"</div>
  <div style={style} className="rounded-circle">className=<br />"rounded-circle"</div>
  <div style={style} className="rounded-0">className=<br />"rounded-0"</div>
</div>

```

Remove rounded corners of an element.

```js
const style = { background: "#f5f5f5", border: "1px solid #3F007B", display: "flex", alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '.25rem', height: '100px', width: '100px' };

<div className="d-flex justify-content-around">
  <div style={style} className="rounded">className=<br />"rounded"</div>
  <div style={style} className="rounded rounded-top-0">className=<br />"rounded rounded-top-0"</div>
  <div style={style} className="rounded rounded-right-0">className=<br />"rounded rounded-right-0""</div>
  <div style={style} className="rounded rounded-bottom-0">className=<br />"rounded rounded-bottom-0"</div>
  <div style={style} className="rounded rounded-left-0">className=<br />"rounded rounded-left-0"</div>

</div>

```
