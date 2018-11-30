## Usage

```js
const style = { border: "1px solid #3F007B", height: '150px', width: '150px', margin: '.5rem' };

<div className="d-flex justify-content-around">
  <div style={style} className="p-3"><div className="w-100 h-100 bg-primary d-flex justify-content-center align-items-center">All paddings</div></div>
  <div style={style} className="pt-3"><div className="w-100 h-100 bg-primary d-flex justify-content-center align-items-center">Top padding</div></div>
  <div style={style} className="pr-3"><div className="w-100 h-100 bg-primary d-flex justify-content-center align-items-center">Right padding</div></div>
  <div style={style} className="pb-3"><div className="w-100 h-100 bg-primary d-flex justify-content-center align-items-center">Bottom padding</div></div>
  <div style={style} className="pl-3"><div className="w-100 h-100 bg-primary d-flex justify-content-center align-items-center">Left padding</div></div>
  <div style={style} className="px-3"><div className="w-100 h-100 bg-primary d-flex justify-content-center align-items-center">X-axis paddings</div></div>
  <div style={style} className="py-3"><div className="w-100 h-100 bg-primary d-flex justify-content-center align-items-center">Y-axis paddings</div></div>
</div>

```
The exact same rules apply for margin. Just replace the `p` by `m`.

>>> You also have access to responsive variations.
