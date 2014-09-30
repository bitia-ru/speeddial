function DialBoxes(el)
{
    this.elements = $(el);

    element = this.elements.clone();

    this.elements.html('');

    var square_width = 200, square_height = 200;
    var count_x = 3, count_y = 3;
    var min_x = ($(window).width() - square_width*count_x)/2, min_y = ($(window).height() - square_height*count_y)/2;
    var x = min_x, y = min_y;

    new_elem = element.clone();
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').children(".dialbox-img").attr("src", "icons/gmail.png");
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').attr('href', "http://mail.google.com");
    new_elem.children(".dialbox").children(".dialbox-descdiv").html("Google Mail");
    new_elem.children(".dialbox").offset({left:x,top:y});

    this.elements.html(this.elements.html() + new_elem.html());
    x += square_width;

    new_elem = element.clone();
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').children(".dialbox-img").attr("src", "icons/yamail.png");
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').attr('href', "http://mail.yandex.ru");
    new_elem.children(".dialbox").children(".dialbox-descdiv").html("Yandex Mail");
    new_elem.children(".dialbox").offset({left:x,top:y});

    this.elements.html(this.elements.html() + new_elem.html());
    x += square_width;

    new_elem = element.clone();
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').children(".dialbox-img").attr("src", "icons/vk.png");
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').attr('href', "http://www.vk.com");
    new_elem.children(".dialbox").children(".dialbox-descdiv").html("Vkontakte");
    new_elem.children(".dialbox").offset({left:x,top:y});

    this.elements.html(this.elements.html() + new_elem.html());

    x = min_x, y += square_height;

    new_elem = element.clone();
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').children(".dialbox-img").attr("src", "icons/amperka.png");
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').attr('href', "http://www.amperka.ru");
    new_elem.children(".dialbox").children(".dialbox-descdiv").html("Amperka");
    new_elem.children(".dialbox").offset({left:x,top:y});

    this.elements.html(this.elements.html() + new_elem.html());
    x += square_width;

    new_elem = element.clone();
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').children(".dialbox-img").attr("src", "icons/amperka.png");
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').attr('href', "http://wiki.amperka.ru");
    new_elem.children(".dialbox").children(".dialbox-descdiv").html("Amperka WiKi");
    new_elem.children(".dialbox").offset({left:x,top:y});

    this.elements.html(this.elements.html() + new_elem.html());
    x += square_width;

    new_elem = element.clone();
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').children(".dialbox-img").attr("src", "icons/trello.png");
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').attr('href', "http://www.trello.com");
    new_elem.children(".dialbox").children(".dialbox-descdiv").html("Trello");
    new_elem.children(".dialbox").offset({left:x,top:y});

    this.elements.html(this.elements.html() + new_elem.html());
    x = min_x, y += square_height;

    new_elem = element.clone();
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').children(".dialbox-img").attr("src", "icons/deskcom.png");
    new_elem.children(".dialbox").children(".dialbox-imgdiv").children('a').attr('href', "http://amperka.desk.com/agent");
    new_elem.children(".dialbox").children(".dialbox-descdiv").html("Amperka.Desk");
    new_elem.children(".dialbox").offset({left:x,top:y});

    this.elements.html(this.elements.html() + new_elem.html());
    x += square_width;
}

var dials = null;

$(window).load(function() {
    dials = new DialBoxes('#dialboxes');
});
