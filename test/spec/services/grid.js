'use strict';

describe('Service: Grid', function () {

  // load the service's module
  beforeEach(module('turtleCommandApp'));

  // instantiate service
  var Grid;
  beforeEach(inject(function (_Grid_) {
    Grid = _Grid_;
  }));

  it('should have GRID_SIZE initialized', function () {
    expect(Grid.getGridSize()).toBeDefined();
    expect(Grid.getGridSize()).not.toBeGreaterThan(Grid.getMax());
    expect(Grid.getGridSize()).not.toBeLessThan(Grid.getMin());
  });

  it('should generate GRID_SIZE',function(){
    for(var i=0;i<100;i++){
      expect(Grid.generateGridSize().getGridSize()).not.toBeGreaterThan(Grid.getMax());
      expect(Grid.generateGridSize().getGridSize()).not.toBeLessThan(Grid.getMin());
    }
  });

  it('should get min and max',function(){
    expect(Grid.getMin()).toBe(5);
    expect(Grid.getMax()).toBe(30);
  });

  it('should set GRID_SIZE',function(){
    expect(Grid.setGridSize(5).getGridSize()).toBe(5);
  });

  it('should generate blocks',function(){
    for(var i=0;i<1000;i++){
      Grid.generateBlocks();
      expect(Grid.getBlocks().length).toBeLessThan(Math.ceil(Grid.getGridSize()/2)+1);
    }
  });

  it('should check if given coordinate is a block',function(){
    Grid.generateBlocks();
    var test = Grid.getBlocks()[0];
    expect(Grid.isBlock(test)).toBe(true);
    expect(Grid.isBlock({x:0,y:0})).toBe(false);
  });

});
