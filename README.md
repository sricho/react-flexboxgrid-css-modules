# React Flexbox Grid

http://flexboxgrid.com/ ported to react components.

## Installation

```
npm install react-flexboxgrid --save
```

## Usage

```react
<Grid fluid>
  <Row>
    <Col xs={12} md={6}>
      Grid Column!
    </Col>
    <Col xs={12} md={6}>
      Grid Column!
    </Col>
  </Row>
</Grid>
```

## Grid Props

* `fluid` *(bool)* : responsive grid or not
* `nodeName` *(string)* : the element's node name (default `'div'`)

All other props applied directly to the grid element.


## Row Props

* `xsHAlign` *(string)* : horizontal alignment : `start`, `center`, or `end`
* `smHAlign` *(string)* : horizontal alignment : `start`, `center`, or `end`
* `mdHAlign` *(string)* : horizontal alignment : `start`, `center`, or `end`
* `lgHAlign` *(string)* : horizontal alignment : `start`, `center`, or `end`
* `xsVAlign` *(string)* : vertical alignment : 'top', 'middle', or 'bottom'
* `smVAlign` *(string)* : vertical alignment : 'top', 'middle', or 'bottom'
* `mdVAlign` *(string)* : vertical alignment : 'top', 'middle', or 'bottom'
* `lgVAlign` *(string)* : vertical alignment : 'top', 'middle', or 'bottom'
* `xsDistribution` *(string)* : distribution : 'around', or 'between'
* `smDistribution` *(string)* : distribution : 'around', or 'between'
* `mdDistribution` *(string)* : distribution : 'around', or 'between'
* `lgDistribution` *(string)* : distribution : 'around', or 'between'
* `reverse` *(bool)* : reverse ordering of all columns
* `nodeName` *(string)* : the element's node name (default `'div'`)

All other props applied directly to the grid element.


## Col Props

* `xs` *(number|bool)* : the column size : `1`...`12`, or `true`
* `sm` *(number|bool)* : the column size : `1`...`12`, or `true`
* `md` *(number|bool)* : the column size : `1`...`12`, or `true`
* `lg` *(number|bool)* : the column size : `1`...`12`, or `true`
* `xsOffset` *(number)* : offset column : `1`...`12`
* `smOffset` *(number)* : offset column : `1`...`12`
* `mdOffset` *(number)* : offset column : `1`...`12`
* `lgOffset` *(number)* : offset column : `1`...`12`
* `xsReorder` *(string)* : reorder column : 'first', or 'last'
* `smReorder` *(string)* : reorder column : 'first', or 'last'
* `mdReorder` *(string)* : reorder column : 'first', or 'last'
* `lgReorder` *(string)* : reorder column : 'first', or 'last'
* `reverse` *(bool)* : reverse ordering for this column
* `nodeName` *(string)* : the element's node name (default `'div'`)

All other props applied directly to the grid element.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License

The MIT License
