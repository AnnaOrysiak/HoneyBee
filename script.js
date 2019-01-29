const $doc = $(document);

$doc.on("scroll", function () {
  const $nav = $(".header__nav");
  $doc.scrollTop() > 100 ? $nav.addClass("fixed") : $nav.removeClass("fixed");
})

$(".header__item").on("click", function () {
  const goToSection = "." + $(this).attr("data-key");
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top
  }, 500)
})

$(".footer__scroll").on("click", function () {
  $("body, html").animate({
    scrollTop: 0
  }, 1000)
})