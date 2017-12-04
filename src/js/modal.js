var Modal = function() {
    var init = function() {
            $(document).ready(function() {
                $(".btn-order").on("click", handler);
                $(".control input").focus(function() {
                    $(this).parent().parent().addClass("focus");
                });
                $(".control input").focusout(function() {
                    $(this).parent().parent().removeClass("focus");
                });
            })
        },

        handler = function() {
            if (!$('.modal-overlay').hasClass('fade') && !$('.modal').hasClass('fade')) {
                $('.modal-overlay').fadeIn(100, "swing").addClass('fade');
                $('.modal').fadeIn(100, "swing").addClass('fade');
            }
            var inputs = $(document.getElementsByClassName("control")).find("input"),
                textarea = $(document.getElementsByClassName("control")).find("textarea"),
                spans = $(document.getElementsByClassName("control")).siblings("span");
            if (textarea.length === 0 || inputs.length === 0) return false;
            textarea[0].value = "";
            for (var i = 0; i < inputs.length; i++) $(inputs[i])[0].value = "";
            for (var i = 0; i < spans.length; i++) $(spans[i]).empty();
            return false
        };

    return {
        init: init
    }
}();