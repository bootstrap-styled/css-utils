Applies a clearfix.

The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.
```js

const style = { background: "#f5f5f5", border: "2px solid #3F007B", display: "flex", alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '.25rem', height: '175px', width: '175px' };

<div className="bg-info clearfix">
  <button className="btn btn-secondary float-left">Example Button floated left</button>
  <button className="btn btn-secondary float-right">Example Button floated right</button>
</div>


```
