## Usage

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.


```js
<React.Fragment>
  <div>
    <div className="d-flex p-2 bg-primary">I’m a flexbox container!</div>
  </div>
  <div>
    <div className="d-inline-flex p-2 bg-info">I’m an inline flexbox container!</div>
  </div>
</React.Fragment>

```

Responsive variations also exist for `.d-flex` and `.d-inline-flex`.

```js
<React.Fragment>
  <div className="d-flex p-2 bg-primary">.d-flex</div>
  <div className="d-inline-flex p-2 bg-primary">.d-inline-flex</div>
  <div className="d-sm-flex p-2 bg-primary">.d-sm-flex</div>
  <div className="d-sm-inline-flex p-2 bg-primary">.d-sm-inline-flex</div>
  <div className="d-md-flex p-2 bg-primary">.d-md-flex</div>
  <div className="d-md-inline-flex p-2 bg-primary">.d-md-inline-flex</div>
  <div className="d-lg-flex p-2 bg-primary">.d-lg-flex</div>
  <div className="d-lg-inline-flex p-2 bg-primary">.d-lg-inline-flex</div>
  <div className="d-xl-flex p-2 bg-primary">.d-xl-flex</div>
  <div className="d-xl-inline-flex p-2 bg-primary">.d-xl-inline-flex</div>
</React.Fragment>
```

## Direction

### Horizontal

```js
<React.Fragment>
  <div className="d-flex flex-row mb-3 bg-info p-2">
    .flex-row
  </div>
  <div className="d-flex flex-row-reverse bg-success p-2">
    .flex-row-reverse
  </div>
</React.Fragment>
```

### Vertical

```js
<React.Fragment>
  <div className="d-flex flex-column mb-3 bg-info p-2">
    .flex-column
  </div>
  <div className="d-flex flex-column-reverse bg-success p-2">
    .flex-column-reverse
  </div>
</React.Fragment>
```

###  Responsive

Use like described in Usage.

```js static
  .flex-row
  .flex-row-reverse
  .flex-column
  .flex-column-reverse
  .flex-sm-row
  .flex-sm-row-reverse
  .flex-sm-column
  .flex-sm-column-reverse
  .flex-md-row
  .flex-md-row-reverse
  .flex-md-column
  .flex-md-column-reverse
  .flex-lg-row
  .flex-lg-row-reverse
  .flex-lg-column
  .flex-lg-column-reverse
  .flex-xl-row
  .flex-xl-row-reverse
  .flex-xl-column
  .flex-xl-column-reverse
```

## Justify-content

```js
const styleExample = { border: "1px solid #3F007B"};

<React.Fragment>
  <div className="d-flex justify-content-start mb-3 p-1 bg-primary">
    <div style={styleExample} className="p-2">.justify</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">start</div>
  </div>
  <div className="d-flex justify-content-end mb-3 p-1 bg-info">
    <div style={styleExample} className="p-2">.justify</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">end</div>
  </div>
  <div className="d-flex justify-content-center mb-3 p-1 bg-success">
    <div style={styleExample} className="p-2">.justify</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">center</div>
  </div>
  <div className="d-flex justify-content-between mb-3 p-1 bg-primary">
    <div style={styleExample} className="p-2">.justify</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">between</div>
  </div>
  <div className="d-flex justify-content-around p-1 bg-info">
    <div style={styleExample} className="p-2">.justify</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">around</div>
  </div>
    <div className="d-flex justify-content-evenly p-1 bg-info">
      <div style={styleExample} className="p-2">.justify</div>
      <div style={styleExample} className="p-2">content</div>
      <div style={styleExample} className="p-2">evenly</div>
    </div>
</React.Fragment>
```
>>> And, like all other flexbox options, you also have access to responsive variations.

## Align-items

```js
const styleExample = { border: "1px solid #3F007B", height: "50px"};
const exampleContainer = { height: "150px"};

<React.Fragment>
  <div className="d-flex align-items-start mb-3 p-1 bg-primary" style={exampleContainer}>
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">items</div>
    <div style={styleExample} className="p-2">start</div>
  </div>
  <div className="d-flex align-items-end mb-3 p-1 bg-info" style={exampleContainer}>
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">items</div>
    <div style={styleExample} className="p-2">end</div>
  </div>
  <div className="d-flex align-items-center mb-3 p-1 bg-success" style={exampleContainer}>
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">items</div>
    <div style={styleExample} className="p-2">center</div>
  </div>
  <div className="d-flex align-items-baseline mb-3 p-1 bg-primary" style={exampleContainer}>
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">items</div>
    <div style={styleExample} className="p-2">baseline</div>
  </div>
  <div className="d-flex align-items-stretch p-1 bg-success" style={exampleContainer}>
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">items</div>
    <div style={styleExample} className="p-2">stretch</div>
  </div>
</React.Fragment>
```

>>> And, like all other flexbox options, you also have access to responsive variations.

## Align-content

```js
const styleExample = { border: "1px solid #3F007B"};

<React.Fragment>
  <div className="d-flex align-content-start mb-3 p-1 bg-primary">
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">start</div>
  </div>
  <div className="d-flex align-content-end mb-3 p-1 bg-info">
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">end</div>
  </div>
  <div className="d-flex align-content-center mb-3 p-1 bg-success">
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">center</div>
  </div>
  <div className="d-flex align-content-between mb-3 p-1 bg-primary">
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">between</div>
  </div>
  <div className="d-flex align-content-around p-1 bg-info">
    <div style={styleExample} className="p-2">.align</div>
    <div style={styleExample} className="p-2">content</div>
    <div style={styleExample} className="p-2">around</div>
  </div>
    <div className="d-flex align-content-evenly p-1 bg-success">
      <div style={styleExample} className="p-2">.align</div>
      <div style={styleExample} className="p-2">content</div>
      <div style={styleExample} className="p-2">stretch</div>
    </div>
</React.Fragment>
```
>>> And, like all other flexbox options, you also have access to responsive variations.

## Align-self

```js
const styleExample = { border: "1px solid #3F007B", width: "150px"};
const exampleContainer = { height: "100px"};

<React.Fragment>
  <div className="d-flex mb-3 bg-primary" style={exampleContainer}>
    <div style={styleExample} className="p-2 ">Flex item</div>
    <div style={styleExample} className="align-self-start p-2 ">.align-self-start</div>
    <div style={styleExample} className="p-2 ">Flex item</div>
  </div>
  <div className="d-flex mb-3 bg-info" style={exampleContainer}>
    <div style={styleExample} className="p-2 ">Flex item</div>
    <div style={styleExample} className="align-self-end p-2 ">.align-self-end</div>
    <div style={styleExample} className="p-2 ">Flex item</div>
  </div>
  <div className="d-flex mb-3 bg-success" style={exampleContainer}>
    <div style={styleExample} className="p-2 ">Flex item</div>
    <div style={styleExample} className="align-self-center p-2 ">.align-self-center</div>
    <div style={styleExample} className="p-2 ">Flex item</div>
  </div>
  <div className="d-flex mb-3 bg-primary" style={exampleContainer}>
    <div style={styleExample} className="p-2 ">Flex item</div>
    <div style={styleExample} className="align-self-baseline p-2 ">.align-self-baselinem</div>
    <div style={styleExample} className="p-2 ">Flex item</div>
  </div>
  <div className="d-flex bg-info" style={exampleContainer}>
    <div style={styleExample} className="p-2 ">Flex item</div>
    <div style={styleExample} className="align-self-stretch p-2 ">.align-self-stretch</div>
    <div style={styleExample} className="p-2 ">Flex item</div>
  </div>
    <div className="d-flex bg-success" style={exampleContainer}>
      <div style={styleExample} className="p-2 ">Flex item</div>
      <div style={styleExample} className="align-self-auto p-2 ">.align-self-auto</div>
      <div style={styleExample} className="p-2 ">Flex item</div>
    </div>
</React.Fragment>
```
>>> And, like all other flexbox options, you also have access to responsive variations.

## Auto-margins
Flexbox can do some pretty awesome things when you mix flex alignments with auto margins.

### With justify-content

```js
const styleExample = { border: "1px solid #3F007B", width: "150px"};

<React.Fragment>
  <div className="d-flex justify-content-end mb-3 bg-primary">
    <div style={styleExample} className="mr-auto p-2">.mr-auto</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
  </div>

  <div className="d-flex justify-content-start bg-info">
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="ml-auto p-2">.ml-auto</div>
  </div>
</React.Fragment>
```

### With align-items
```js
const styleExample = { border: "1px solid #3F007B", width: "150px"};
const exampleContainer = { height: "150px"};

<React.Fragment>
  <div style={exampleContainer} className="d-flex align-items-start flex-column mb-3 bg-primary">
    <div style={styleExample} className="mb-auto p-2">.mb-auto</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
  </div>

  <div style={exampleContainer} className="d-flex align-items-end flex-column bg-info">
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="mt-auto p-2">.mt-auto</div>
  </div>
</React.Fragment>
```

## Wrap

```js
const styleExample = { border: "1px solid #3F007B", width: "150px"};

<React.Fragment>
  <div className="d-flex flex-wrap">
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
  </div>
</React.Fragment>
```

## Nowrap

```js
const styleExample = { border: "1px solid #3F007B", width: "150px"};

<React.Fragment>
  <div className="d-flex flex-nowrap">
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
  </div>
</React.Fragment>
```

## Wrap reverse

```js
const styleExample = { border: "1px solid #3F007B", width: "150px"};

<React.Fragment>
  <div className="d-flex flex-wrap-reverse">
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
    <div style={styleExample} className="p-2">Flex item</div>
  </div>
</React.Fragment>
```
>>> And, like all other flexbox options, you also have access to responsive variations.

## Order

```js
const styleExample = { border: "1px solid #3F007B"};

<React.Fragment>
  <div className="d-flex">
    <div style={styleExample} className="flex-last p-2">.flex-last</div>
    <div style={styleExample} className="flex-unordered p-2">.flex-unordered</div>
    <div style={styleExample} className="flex-first p-2">.flex-first</div>
  </div>
</React.Fragment>
```
>>> And, like all other flexbox options, you also have access to responsive variations.
