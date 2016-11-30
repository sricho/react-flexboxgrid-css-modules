import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import flexboxgrid from 'flexboxgrid';
import Col from '../src/Col';


describe('Testing Column', function () {

  const renderer = TestUtils.createRenderer();

  it("should render a Col", function () {
    renderer.render(<Col xs={12} sm={8} md={6} lg={4} />);

    const { type, props: { className } } = renderer.getRenderOutput();
    expect(type).toBe('div');
    expect(className).toContain(flexboxgrid['col-xs-12']);
    expect(className).toContain(flexboxgrid['col-sm-8']);
    expect(className).toContain(flexboxgrid['col-md-6']);
    expect(className).toContain(flexboxgrid['col-lg-4']);
  });

});
