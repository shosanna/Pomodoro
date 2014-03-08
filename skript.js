$(function(){
    $(".new-task-text").focus();

    // Adding new tasks
    $("form").submit(function(e) {
        e.preventDefault();
        var input = $(".new-task-text");
        var li = $("<li>").text(input.val());
        $("ol.tasks").append(li);
        input.val("");

        // Selecting an active task
        li.click(function(){
            $(this).toggleClass("selected");
        });

      });

    // Selecting an active task
    $(".tasks li").click(function(){
        $(this).toggleClass("selected");
    });
});
