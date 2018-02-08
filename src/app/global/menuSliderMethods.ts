declare var $:any;
export let scrollSpeed = 5;

//Random Id Generator
export function makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


/* Horizontaol Menu Start*/

    //Assigning random Id For Every Horizontal Menu
    export function initHorizontal(){
        $(".horizontalMenu").each(function(){
            let id = makeid();
            $(this).attr("id", id);
            // let mainWidth = $(this).width();
            // let arrowWidth = $(this).children('i').outerWidth(true);
            // let calculatedWidth = mainWidth - (arrowWidth*2);
            // $(this).children('.menuContainer').css('width', calculatedWidth);
        });
    }

    //mouseenter on arrow
    export function mouseEnterOnHarrow(){
        var topParentId = $(this).parent('.horizontalMenu')[0].id;
        var leftArrow = $(this).hasClass('pull-left');
        var rightArrow = $(this).hasClass('pull-right');

        var remLength = $("#"+ topParentId +" >.menuContainer>.innerContainer")[0].scrollWidth - $("#"+ topParentId +" >.menuContainer>.innerContainer").width();
        var scrollableLength = remLength - $("#"+ topParentId +" >.menuContainer>.innerContainer").scrollLeft();

        if(rightArrow){
            $("#"+ topParentId +">.menuContainer>.innerContainer").animate({
            scrollLeft: remLength
            }, scrollSpeed * scrollableLength, hArrowVisibilityCheck(topParentId));
        }else if(leftArrow){
        $("#"+ topParentId +">.menuContainer>.innerContainer").animate({
                scrollLeft: 0
            }, scrollSpeed * $("#"+ topParentId +" >.menuContainer>.innerContainer").scrollLeft(), hArrowVisibilityCheck(topParentId));
        }
    }

    //Mouse Leave from Arrow
    export function mouseLeaveFromHarrow() {
        var topParentId = $(this).parent('.horizontalMenu')[0].id;
        $("#"+ topParentId +" >.menuContainer>.innerContainer").stop();
        hArrowVisibilityCheck(topParentId);
    }

    function hArrowVisibilityCheck(parentId){
        var remLength = $("#"+ parentId +" >.menuContainer>.innerContainer")[0].scrollWidth - $("#"+ parentId +" >.menuContainer>.innerContainer").width();
        var scrollableLength = remLength - $("#"+ parentId +" >.menuContainer>.innerContainer").scrollLeft();
        if(scrollableLength <= 3){
            $("#"+ parentId +" > i.pull-right").css('visibility', 'hidden');
        }else{
            $("#"+ parentId +" > i.pull-right").css('visibility', 'visible');
        }

        if( $("#"+ parentId +" >.menuContainer>.innerContainer").scrollLeft() >= 1 ){
            $("#"+ parentId +" > i.pull-left").css('visibility', 'visible');
        }else{
            $("#"+ parentId +" > i.pull-left").css('visibility', 'hidden');
        }
    }

/* Horizontaol Menu End*/


/* Vertical Menu Start */

    //Assigning random Id For Every Vertical Menu
    export function initVertical(){
        $(".verticalMenu").each(function(){
            let id = makeid();
            $(this).attr("id", id);
            // let mainHeight = $(this).height();
            // let arrowHeight = $(this).children('i').outerHeight(true);
            // let calculatedHeight = mainHeight - (arrowHeight*2);
            // $(this).children('.verticalInnerContainer').css('height', calculatedHeight);
        });
    }

    //Mouse Enter On Arrow
    export function mouseEnterOnVarrow(){
        var parentId = $(this).parent('.verticalMenu')[0].id;
        var upArrow = $(this).hasClass('upArrow');
        var downArrow = $(this).hasClass('downArrow');
        let scrollSpeed = 10;
        var verticalInnerContainer = $("#"+parentId+" .verticalInnerContainer");
        var remHeight = verticalInnerContainer[0].scrollHeight - verticalInnerContainer.height();
        var scrollableHeight = remHeight - verticalInnerContainer.scrollTop();
        if(upArrow){
            verticalInnerContainer.animate({
                scrollTop: 0
                }, scrollSpeed * verticalInnerContainer.scrollTop());
        }else if(downArrow){
            verticalInnerContainer.animate({
                scrollTop: remHeight
                }, scrollSpeed * scrollableHeight);
        }
    }


    //Mouse Leave From Arrow
    export function mouseLeaveFromVarrow(){
        var parentId = $(this).parent('.verticalMenu')[0].id;
        var verticalInnerContainer = $("#"+parentId+" .verticalInnerContainer");
        verticalInnerContainer.stop();
    }

/* Vertical Menu End */