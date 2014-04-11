/**
 * jQuery Labelfy.
 *
 * Converts label to placeholder.
 *
 * 
 * @author Luc Bronsdijk - hello@lucbronsdijk.nl
 * @copyright Copyright (c) 2014 Luc Bronsdijk
 * @licence Licensed under the MIT license
 * @version 1.0
 * @requires jQuery 1.8.x
 * @requires jQuery UI 1.10.x
 */

// define jQuery
$ = jQuery;

(function ($) 
{
    // define methods
    var methods = {

        /**
         * Initialize 
         * 
         * @param  {Object} [selector] Returns 'this' object
         * @param  {String, Object, Bool} [text] Defines input value 
         * @param  {Object} object Returns object with option params 
         * 
         * @return {object} Returns object to DOM
         */
        init: function(selector, text, object)
        {
            // excute for each selector
            return selector.each(function()
            {

                if (!object.fx == false)
                {
                    methods.setEffect(selector, object);
                }   

                // check if text had value or boolean
                object.innerText = (text || false);

                // check if innerText isset
                if (!object.innerText)
                {
                    // define selector id
                    var id = $(selector).attr('id');
                    // find label object text
                    object.innerText = $(selector).parents('form').find("label[for=" + id + "]").hide().text();
                } 
                // if innerText type is String
                else if (typeof object.innerText != 'string')
                {
                    // set innerText from String
                    object.innerText = $(object.innerText).text();
                }

                // removes all newlines, spaces and tabs from value innerText
                object.innerText = $.trim(object.innerText);

                // check option 'force' and selector value
                if (object.force || $(selector).val() == '')
                {
                    // set color and value
                    $(selector).css('color', object.color).val(object.innerText);
                }

                // attach handler to event on blur
                $(selector).bind(object.trigger + ' blur', 
                {
                    obj: object
                }, 
                //call setInput function
                methods.setInput);
            });
        },

        /**
         * Set input value
         * 
         * @param {Object} event Returns current event in Object
         */
        setInput: function(event)
        {
            // set input target (HTML form element)
            var target = $(event.target);
            // value from parent form label
            var value  = $.trim(target.val());

            // compare event types and values
            if (event.type == event.data.obj.trigger && value == event.data.obj.innerText)
            {
                // set value color
                $(target).css('color', '').val('');

                // check option 'comeBack' and return value on blur yes or no
                if (!event.data.obj.comeBack) 
                {
                    // detach handler from event
                    $(target).unbind(event.data.obj.trigger + ' blur', methods.setInput);
                }
            } 
            else if (event.type == 'blur' && value == '' && event.data.obj.comeBack)
            {
                // set color on value
                $(this).css('color', event.data.obj.color).val(event.data.obj.innerText);
            }
        },

        /**
         * Set effect
         * 
         * @param  {Object} [selector] Returns 'this' object
         * @param  {Object} object Returns object with option params 
         */
        setEffect: function(selector, object)
        {
            // hide selector
            selector.hide();

            // show selector with effect
            selector.show(object.fx);
        }
    }

    /**
     * Labelfy
     *
     * @param {String, Object, Bool} [text] Set a value for inputfield. This can be a string, a jQuery element/reference, or a boolean set to false (default = false).
     * @param {Object} [options] Available options:
     *                               'color'    : defines placeholder color
     *                               'fx'       : defines effect (jQuery UI required). Available effects:
     *                                            'blind',
     *                                            'bounce',
     *                                            'drop',
     *                                            'explode',
     *                                            'fold',
     *                                            'highlight',
     *                                            'puff',
     *                                            'pulsate',
     *                                            'scale',
     *                                            'shake',
     *                                            'size',
     *                                            'slide'
     *                               'trigger'  : defines trigger on event and determinates when placeholder needs to be cleared
     *                               'force'    : definite if script needs to be executed, even if input is empty
     *                               'comeBack' : definite if label needs to be shown on blur (and input is empty)
     *
     * @returns {*}
     */
    $.fn.labelfy = function(text, options)
    {
        // define this and put it in selector var
        var selector = this;

        // define settings and extend
        object = $.extend(
            {
                color: '#666',
                fx: false,
                trigger: 'focus',
                force: false,
                comeBack: true
            }
            , options || {});

        // call init method
        methods.init(selector, text, object);
    };
})
($);