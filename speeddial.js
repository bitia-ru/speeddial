function DialBoxes(el)
{
    this.elements = $(el);

    element = this.elements.clone();

    this.elements.html('');

    new_elem = element.clone();
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children(".dialbox-img").attr("src", "icons/yamail.png");
    new_elem.children(".dialbox").children(".dialbox-descdiv").html("Yandex Mail");
    new_elem.children(".dialbox").offset({left:0,top:0});

    this.elements.html(this.elements.html() + new_elem.html());
}

var dials = null;

$(window).load(function() {
    dials = new DialBoxes('#dialboxes');
});
