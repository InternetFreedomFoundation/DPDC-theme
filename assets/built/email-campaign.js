$(function () {
  var e = encodeURIComponent($('#campaign-email-to').text()) || '',
    t = encodeURIComponent($('#campaign-email-bcc').text()) || '',
    n = encodeURIComponent($('#campaign-email-subject').text()) || '',
    a = encodeURIComponent($('#campaign-email-body').text()) || '',
    o = $('#campaign-next').text() || '/',
    i = 'mailto:' + e + '?subject=' + n + '&bcc=' + t,
    c = i + '&body=' + a,
    m =
      'https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=' +
      e +
      '&bcc=' +
      t +
      '&su=' +
      n,
    l =
      'http://compose.mail.yahoo.com/?To=' + e + '&Subject=' + n + '&Bcc=' + t,
    p =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera\sMini/i.test(
        navigator.userAgent
      ) && !/IEMobile/i.test(navigator.userAgent),
    d = !1,
    u = !1,
    r = $('.campaign-email-panel');
  function g() {
    r.empty(),
      d
        ? (u
            ? r.append(
                $('<p>').html(
                  '<b>Copied the email!</b> Now open your mail app, paste and send!'
                )
              )
            : r.append(
                $('<p>').html(
                  'Copy the email below, open your mail app, paste and send!'
                )
              ),
          r.append([
            $('<button>').html('Gmail').click(b(m)),
            ' ',
            $('<button>').html('Yahoo').click(b(l)),
            ' ',
            $('<button>').html('System Email App').click(b(i)),
          ]))
        : p
        ? r.append([$('<button>').html('Send email').click(b(c))])
        : r.append([$('<button>').html('Start').click(s)]),
      r.append([' ', $('<a>').html('View email').attr('href', '#').click(h)]),
      d && !u && h();
  }
  function b(t) {
    return function (e) {
      window.open(t), (location.href = o), e.preventDefault();
    };
  }
  function s() {
    (d = !0),
      y($('#campaign-email-body')[0]),
      (u = document.execCommand('copy')),
      g();
  }
  function h() {
    $('.campaign-email-manual').show();
  }
  function y(e) {
    var t;
    document.body.createTextRange
      ? ((t = document.body.createTextRange()).moveToElementText(e), t.select())
      : window.getSelection &&
        ((t = document.createRange()).selectNodeContents(e),
        (e = window.getSelection()).removeAllRanges(),
        e.addRange(t));
  }
  $('.campaign-email-manual').hide(),
    $('.campaign-email-field').click(function (e) {
      y(e.target);
    }),
    g();
});
//# sourceMappingURL=email-campaign.js.map
