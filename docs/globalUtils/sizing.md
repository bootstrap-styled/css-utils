## Usage

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.


```js
const styleExample = { border: "1px solid #3F007B"};

<React.Fragment>
  <div className="w-25 p-3" style={styleExample}>Width 25%</div>
  <div className="w-50 p-3" style={styleExample}>Width 50%</div>
  <div className="w-75 p-3" style={styleExample}>Width 75%</div>
  <div className="w-100 p-3" style={styleExample}>Width 100%</div>
</React.Fragment>

```

```js
const styleExample = { border: "1px solid #3F007B"};
const styleWrapper = { height: "150px"};

<div className="d-flex flex-row" style={styleWrapper}>
  <div className="h-25 p-3" style={styleExample}>Height 25%</div>
  <div className="h-50 p-3" style={styleExample}>Height 50%</div>
  <div className="h-75 p-3" style={styleExample}>Height 75%</div>
  <div className="h-100 p-3" style={styleExample}>Height 100%</div>
</div>

```
