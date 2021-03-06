/**
 * DOMObject
 *  > An Object that encompasses a DOM Element.
 *
 * Created by Andrew on 12/10/14.
 *
 * @requires ClassVehicle
 */
var DOMObject = (function (isAbstract) {
	/* Setup Class Defaults */
	ClassVehicle.setupClass(_DOMObject, isAbstract);

	/**
	 * @constructor
	 *
	 * @param domTag {string} - The tag that will be created and linked to this object
	 */
	function DOMObjectConstructor(domTag) {
		_setup.call(this, domTag);
	}

	/* ----- Public Variables ----- */

	/* ----- Protected Variables ----- */
	/** @type jQuery **/
	_DOMObject.prototype.$me = null;

	/* ----- Public Methods ----- */
	/**
	 * Shows the DOM Element that this DOM Object encases.
	 */
	_DOMObject.prototype.show = function () {
		if (!this._rendered) return;

		this.$me.show();
	};

	/**
	 * Hides the DOM Element that this DOM Object encases.
	 */
	_DOMObject.prototype.hide = function () {
		if (!this._rendered) return;

		this.$me.hide();
	};

	/**
	 * Checks to see if the DOM Element that this DOM Object encases is visible.
	 *
	 * @returns {boolean} - True if it is visible; false if it's not
	 */
	_DOMObject.prototype.isVisible = function () {
		return this.$me.is(':visible');
	};

	/**
	 * Checks to see if this DOM Element has been rendered to the DOM.
	 *
	 * @returns {boolean} - True if it has been; false if it has not yet been rendered to the DOM
	 */
	_DOMObject.prototype.isRendered = function () {
		return this._rendered;
	};

	/* ----- Protected Methods ----- */

	/* ----- Private Variables ----- */
	_DOMObject.prototype._rendered = false;

	/* ----- Private Methods ----- */
	/**
	 * @param domTag {string} - The tag that will be created and linked to this object
	 */
	function _setup(domTag) {
		this.$me = $(domTag);

		$(document.body).append(this.$me);

		this._rendered = true;
	}

	/**
	 * Entry point into class. This method will only contain needed class-level checks.
	 */
	function _DOMObject() {
		/* Check Abstract-ness */
		ClassVehicle.checkAbstract.call(this, _DOMObject);

		/* Call constructor */
		DOMObjectConstructor.apply(this, arguments);
	}

	/* Return the class, ready for a new ...() */
	return _DOMObject;
})(false);