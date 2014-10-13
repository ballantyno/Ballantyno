/**
 * BallantynoCanvas extends Canvas
 *  > Ballantyno Site Canvas Starting Level.
 *
 * Created by Andrew on 12/10/14.
 *
 * @requires ClassVehicle
 * @extends Canvas
 */
var BallantynoCanvas = (function (ParentClass, isAbstract) {
	/* Setup Extend Link and Setup Class Defaults */
	ClassVehicle.setupClassExtend(_BallantynoCanvas, ParentClass, isAbstract);

	/**
	 * @constructor
	 *
	 */
	function BallantynoCanvasConstructor() {
		ParentClass.call(this); // super call

		_drawTickTacToeBoard.call(this);
	}

	/* ----- Public Variables ----- */

	/* ----- Protected Variables ----- */

	/* ----- Public Methods ----- */

	/* ----- Protected Methods ----- */

	/* ----- Private Variables ----- */

	/* ----- Private Methods ----- */
	function _drawTickTacToeBoard() {
		var tickTacToeBoard = new TickTacToeBoard(200,200);
		tickTacToeBoard.x = 50;
		tickTacToeBoard.y = 50;

		this.$stage.addChild(tickTacToeBoard);
	}

	/**
	 * Entry point into class. This method will only contain needed class-level checks.
	 */
	function _BallantynoCanvas() {
		/* Check Abstract-ness */
		ClassVehicle.checkAbstract.call(this, _BallantynoCanvas);

		/* Call constructor */
		BallantynoCanvasConstructor.apply(this, arguments);
	}

	/* Return the class, ready for a new ...() */
	return _BallantynoCanvas;
})(Canvas, false);