// カルーセル
  $('.carousel').slick({
    autoplay: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  });

// リンクをとworks画像のホバー時にアニメーションをつける
  $('a, .item img').on('mouseover', function() {
    $(this).animate({
      opacity: 0.7,
    },100);
  });

  $('a, .item img').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
    },100);
  });

// ページ内リンクの移りを滑らかにする ???
$('a[href^="#"]').click(function () {
  const speed = 500;
  const href = $(this).attr('href');
  let $target;
  if (href == '#') {
    $target = $('html');
  }
  else {
    $target = $(href);
  }
  const position = $target.offset().top;
  $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
  return false;
});
  
// スクロールしたときにセクションをフェードインさせる ???何が変わった変わらない
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('section').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {   //この式はどういう意味
      $(this).addClass('fade-in');
    }
  });
});

// topボタンの表示・非表示（解答見た）
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });

// works画像をクリック時に拡大　???thisの使い方、ここの意味がわからない
$('.works img').click(function () {
  const imgSrc = $(this).attr('src'); 
  const imgAlt = $(this).attr('alt');
  $('.big-img').attr({
    src: imgSrc,
    alt: imgAlt,
  });
  $('.modal').fadeIn();
});

// ✕で閉じる
$('.close-btn').click(function () {
  $('.modal').fadeOut();
});
