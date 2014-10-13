/**
 * IndexPageNavigation extends PageNavigation
 *  > An Index Page Implementation of the Navigation class.
 *
 * Created by Andrew on 12/10/14.
 *
 * @requires ClassVehicle
 * @requires BallantynoCanvas
 * @extends PageNavigation
 */
var IndexPageNavigation = (function (ParentClass, isAbstract) {
	/* Setup Extend Link and Setup Class Defaults */
	ClassVehicle.setupClassExtend(_IndexPageNavigation, ParentClass, isAbstract);

	/**
	 * @constructor
	 * Extend Constructor:
	 *  - Checks to see if we are abstract
	 *  - Calls parent (this passes scope through)
	 *  - Executes our constructor code
	 */
	function _IndexPageNavigation(mainDivID) {
		/* Check Abstract-ness */
		ClassVehicle.checkAbstract.call(this, _IndexPageNavigation);

		/* Super call */
		ParentClass.call(this, mainDivID); // pass scope down to child class

		/* Our Constructor implementation */
		_setup.call(this);
	}

	/**
	 * @override
	 * Hides the Index Page Navigation.
	 */
	_IndexPageNavigation.prototype.hide = function () {
		_logoContainer.hide();
		ParentClass.prototype.hide.call(this);
	};

	/**
	 * @override
	 * Shows the Index Page Navigation.
	 */
	_IndexPageNavigation.prototype.show = function () {
		ParentClass.prototype.show.call(this);
		_logoContainer.show();
	};

	/* ----- Private Variables ----- */
	var _canvas = null; /** @see BallantynoCanvas **/
	var _logoContainer = null;
	var _options = null;
	var _optionList = null;
	var _autoHideCheckbox = null;

	/* ----- Private Methods ----- */
	function _setup() {
		_logoContainer = this.$me.find('.logoContainer');

		_options = this.$panel.find('.options');
		_optionList = _options.find('.optionItem');

		_configureActionOnClicks.call(this);
		_configureOptionDefaults.call(this);
	}
	function _configureActionOnClicks() {
		// Set up all the clicks to validate against the options
		this.$actions.find('a').not('#clearScreen').on('click', FunctionUtilities.callWithScope(function (e) {
			if (_autoHideCheckbox.prop('checked')) {
				this.hide();
			}
		}, this));

		// Add each individual button click
		this.$actions.find('#clearScreen').on('click', FunctionUtilities.callWithScope(function (e) {
			if (TestMethodAPI.isRendered())
				TestMethodAPI.hide();

			if (_canvas != null && _canvas.isVisible())
				_canvas.hide();
		}, this));
		this.$actions.find('#runTests').on('click', FunctionUtilities.callWithScope(function (e) {
			if (TestMethodAPI.isRendered())
				TestMethodAPI.show();
			else
				HeaderUtilities.include.script('test/classTests/testInit.js');
		}, this));
		this.$actions.find('#showLobby').on('click', FunctionUtilities.callWithScope(function (e) {
			_canvas = new BallantynoCanvas();
		}, this));
	}
	function _configureOptionDefaults() {
		_autoHideCheckbox = _optionList.find('#autoHideCheckbox');
		_autoHideCheckbox.prop('checked', true);
	}

	/* Return the class, ready for a new ...() */
	return _IndexPageNavigation;
})(PageNavigation, false);