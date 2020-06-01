const states = [
    {
        //waiting
        onEntry: function () {
            $("#preview-img").hide();
            $("#drop-img").show();
            $("#preview-back").hide();
            $("#submit-btn").hide();
        }
    },
    {
        //waiting
        onEntry: function () {
            $("#drop-img").hide();
            $("#submit-btn").show();
            $("#preview-img").show();
            $("#preview-back").show();
        }
    },

];

function setState(index) {
    states[index].onEntry();
}
