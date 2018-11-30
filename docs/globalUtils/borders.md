Remove all or some borders from an element.

```js

const style = { background: "#f5f5f5", border: "2px solid #3F007B", display: "flex", alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '.25rem', height: '175px', width: '175px' };

<div className="d-flex justify-content-around">
  <div style={style} className="border-0">className=<br />"border-0"</div>
  <div style={style} className="border-top-0">className=<br />"border-top-0"</div>
  <div style={style} className="border-right-0">className=<br />"border-right-0"</div>
  <div style={style} className="border-bottom-0">className=<br />"border-bottom-0"</div>
  <div style={style} className="border-left-0">className=<br />"border-left-0"</div>
</div>


```
