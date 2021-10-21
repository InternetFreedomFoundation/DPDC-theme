window.razorpayId &&
  (window.donate = function (o) {
    var e = new Promise(function (e, n) {
      new Razorpay({
        key: window.razorpayId,
        amount: 100 * o,
        name: window.razorpayName,
        description: window.razorpayDescription,
        handler: callback || window.onDonate,
      }).open();
    });
    return window.onDonate ? e.then(onDonate) : e;
  }),
  $(function () {
    $('.toggle-menu').click(function (e) {
      return (
        $('.menu').toggleClass('show'),
        $('.close-menu').toggleClass('show'),
        $('.toggle-menu').toggleClass('hide'),
        !1
      );
    }),
      $('.close-menu').click(function (e) {
        return (
          $('.menu').toggleClass('show'),
          $('.close-menu').toggleClass('show'),
          $('.toggle-menu').toggleClass('hide'),
          !1
        );
      }),
      $('input[type=radio]').change(function (e) {
        e.target.checked &&
          $('input[type=radio][name=' + e.target.name + ']').each(function () {
            this !== e.target && $(this).change();
          });
      }),
      $('[data-toggle]')
        .change(function (e) {
          var n = e.target.getAttribute('data-toggle'),
            e = e.target.checked;
          $('.if-' + n)[e ? 'addClass' : 'removeClass']('show');
        })
        .change();
  });
//# sourceMappingURL=common.js.map
