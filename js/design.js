const states = [
    {
        //waiting
        onEntry: function () {
            $("#preview-img").hide();
            $("#input").show();
            $("#preview-back").hide();
        }
    },
    {
        //waiting
        onEntry: function () {
            $("#input").hide();
            $("#preview-img").show();
            $("#preview-back").show();
        }
    },

];

function setState(index) {
    states[index].onEntry();
}
