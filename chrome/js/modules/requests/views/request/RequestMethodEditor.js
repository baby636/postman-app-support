var RequestMethodEditor = Backbone.View.extend({
    initialize: function() {
        var model = this.model;
        var view = this;

        model.on("startNew", this.onStartNew, this);

        $('#request-method-selector').change(function () {
            var val = $(this).val();
            _.bind(view.setMethod, view)(val);
        });
    },

    onStartNew: function() {
        $('#request-method-selector').val("GET");
    },

    setMethod:function (method) {
        var body = this.model.get("body");

        this.model.set("url", $('#url').val());
        this.model.set("method", method);

        //TODO Why do we need this?
        //TODO Caution! Changed from previous logic
        if (this.model.isMethodWithBody(method)) {
            body.set("dataMode", "params");
        }
        else {
            body.set("dataMode", "");
        }
    }
})