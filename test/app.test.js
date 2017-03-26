describe('Help turtle decide a direction to navigate', function() {
	var Direction;
	beforeEach(function() {
    	Direction = window.contexts['DirectionContext'];
  	});

	it('should help turtle goRight and goLeft',function(){
		var direction = new Direction();
		expect(direction.goRight().getCurrentDirection()).toBe('E');
		expect(direction.goRight().getCurrentDirection()).toBe('S');
		expect(direction.goRight().getCurrentDirection()).toBe('W');
		expect(direction.goRight().getCurrentDirection()).toBe('N');

		expect(direction.goLeft().getCurrentDirection()).toBe('W');
		expect(direction.goLeft().getCurrentDirection()).toBe('S');
		expect(direction.goLeft().getCurrentDirection()).toBe('E');
		expect(direction.goLeft().getCurrentDirection()).toBe('N');
	});

});
