Change the display.

```js

const style = { background: "#f5f5f5", display: "flex", alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '.25rem 0', height: '175px', width: '175px' };
<React.Fragment>
  <div>
    <div style={style} className="d-inline bg-success">Inline</div>
    <div style={style} className="d-inline bg-success">Inline</div>
  </div>
  <div>
    <span className="d-block bg-primary">Block</span>
  </div>
  <div>
    <div style={style} className="d-inline-block bg-warning">
      inline-block
    </div>
    <div style={style} className="d-inline-block bg-warning">
      inline-block
    </div>
  </div>
</React.Fragment>


```
