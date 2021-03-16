$(function(){
  // Magnific popup

  // Login modal
  $('.header__login--popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true,
	});
	$(document).on('click', '.modal-lg__head-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

  // Register modal
  $('.header__register--popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.modal-reg__head-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

  // Account popup mobile
  $('.header__account-popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.header__account-popup-close img', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});


  
  // Slider
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000, 
        dots: true,
        speed: 850,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              autoplay: false,
              speed: 400,
            }
          },
        ]
      });

    $('.tarrifs__wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000, 
            dots: true,
            speed: 500,
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,
          }
        },
      ]
    });


  // Calculator
  let result = 0;
  calculate();

  $('.calc__option-btn-inner').on('click', function(){
    $(this).siblings().removeClass('active-coin');
    $(this).addClass('active-coin');
  })

  function calculate() {
    let date = $('.calculator').val();

    let coinPrice = $('.active-coin').attr('coin-price');
    let coinName = $('.active-coin').attr('coin-name');
    let coinPercent = $('.active-coin').attr('coin-percent');

    resultToCount = coinPrice * date;
    result = resultToCount.toFixed(2) + ' ' + coinName;

    $('.calc__result-price').html(result);
    $('.calc__circle-percent').html(coinPercent);

    setTimeout( calculate, 500 );
  }

  // Tarrifs title

  // Download date with attribute while loading page * Start
  let strategistOne = $('#strategist-one').attr('one-year')
  $('#strategist-one').html(strategistOne)

  let engineOne = $('#engine-one').attr('one-year')
  $('#engine-one').html(engineOne)

  let serviceOne = $('#service-one').attr('one-year')
  $('#service-one').html(serviceOne)

  let paymentOne = $('#payment-one').attr('one-year')
  $('#payment-one').html(paymentOne)

  let stockOne = $('#stock-one').attr('one-year')
  $('#stock-one').html(stockOne)

  let profitOne = $('#profit-one').attr('one-year')
  $('#profit-one').html(profitOne)

  let priceOne = $('#price-one').attr('one-year')
  $('#price-one').html(priceOne)



  let strategistTwo = $('#strategist-two').attr('one-year')
  $('#strategist-two').html(strategistTwo)

  let engineTwo = $('#engine-two').attr('one-year')
  $('#engine-two').html(engineTwo)

  let serviceTwo = $('#service-two').attr('one-year')
  $('#service-two').html(serviceTwo)

  let paymentTwo = $('#payment-two').attr('one-year')
  $('#payment-two').html(paymentTwo)

  let stock = $('#stock-two').attr('one-year')
  $('#stock-two').html(stock)

  let profitTwo = $('#profit-two').attr('one-year')
  $('#profit-two').html(profitTwo)

  let priceTwo = $('#price-two').attr('one-year')
  $('#price-two').html(priceTwo)



  let strategistThree = $('#strategist-three').attr('one-year')
  $('#strategist-three').html(strategistThree)

  let engineThree = $('#engine-three').attr('one-year')
  $('#engine-three').html(engineThree)

  let serviceThree = $('#service-three').attr('one-year')
  $('#service-three').html(serviceThree)

  let paymentThree = $('#payment-three').attr('one-year')
  $('#payment-three').html(paymentThree)

  let stockThree = $('#stock-three').attr('one-year')
  $('#stock-three').html(stockThree)

  let profitThree = $('#profit-three').attr('one-year')
  $('#profit-three').html(profitThree)

  let priceThree = $('#price-three').attr('one-year')
  $('#price-three').html(priceThree)
  // Download date with attribute while loading page * End

  // One

  $('.switcher-input.switch-one').on('click', function() {
    if ($(this).is(':checked')){
      let strategist = $('#strategist-one').attr('five-year')
      $('#strategist-one').html(strategist)

      let engine = $('#engine-one').attr('five-year')
      $('#engine-one').html(engine)

      let service = $('#service-one').attr('five-year')
      $('#service-one').html(service)

      let payment = $('#payment-one').attr('five-year')
      $('#payment-one').html(payment)

      let stock = $('#stock-one').attr('five-year')
      $('#stock-one').html(stock)

      let profit = $('#profit-one').attr('five-year')
      $('#profit-one').html(profit)

      let price = $('#price-one').attr('five-year')
      $('#price-one').html(price)
    }
    else {
      let strategist = $('#strategist-one').attr('one-year')
      $('#strategist-one').html(strategist)

      let engine = $('#engine-one').attr('one-year')
      $('#engine-one').html(engine)

      let service = $('#service-one').attr('one-year')
      $('#service-one').html(service)

      let payment = $('#payment-one').attr('one-year')
      $('#payment-one').html(payment)

      let stock = $('#stock-one').attr('one-year')
      $('#stock-one').html(stock)

      let profit = $('#profit-one').attr('one-year')
      $('#profit-one').html(profit)

      let price = $('#price-one').attr('one-year')
      $('#price-one').html(price)
    }
  })

  // Two

  $('.switcher-input.switch-two').on('click', function() {
    if ($(this).is(':checked')){
      let strategist = $('#strategist-two').attr('five-year')
      $('#strategist-two').html(strategist)

      let engine = $('#engine-two').attr('five-year')
      $('#engine-two').html(engine)

      let service = $('#service-two').attr('five-year')
      $('#service-two').html(service)

      let payment = $('#payment-two').attr('five-year')
      $('#payment-two').html(payment)

      let stock = $('#stock-two').attr('five-year')
      $('#stock-two').html(stock)

      let profit = $('#profit-two').attr('five-year')
      $('#profit-two').html(profit)

      let price = $('#price-two').attr('five-year')
      $('#price-two').html(price)
    }
    else {
      let strategist = $('#strategist-two').attr('one-year')
      $('#strategist-two').html(strategist)

      let engine = $('#engine-two').attr('one-year')
      $('#engine-two').html(engine)

      let service = $('#service-two').attr('one-year')
      $('#service-two').html(service)

      let payment = $('#payment-two').attr('one-year')
      $('#payment-two').html(payment)

      let stock = $('#stock-two').attr('one-year')
      $('#stock-two').html(stock)

      let profit = $('#profit-two').attr('one-year')
      $('#profit-two').html(profit)

      let price = $('#price-two').attr('one-year')
      $('#price-two').html(price)
    }

  })


  // Three

  $('.switcher-input.switch-three').on('click', function() {
    if ($(this).is(':checked')){
      let strategist = $('#strategist-three').attr('five-year')
      $('#strategist-three').html(strategist)

      let engine = $('#engine-three').attr('five-year')
      $('#engine-three').html(engine)

      let service = $('#service-three').attr('five-year')
      $('#service-three').html(service)

      let payment = $('#payment-three').attr('five-year')
      $('#payment-three').html(payment)

      let stock = $('#stock-three').attr('five-year')
      $('#stock-three').html(stock)

      let profit = $('#profit-three').attr('five-year')
      $('#profit-three').html(profit)

      let price = $('#price-three').attr('five-year')
      $('#price-three').html(price)
    }
    else {
      let strategist = $('#strategist-three').attr('one-year')
      $('#strategist-three').html(strategist)

      let engine = $('#engine-three').attr('one-year')
      $('#engine-three').html(engine)

      let service = $('#service-three').attr('one-year')
      $('#service-three').html(service)

      let payment = $('#payment-three').attr('one-year')
      $('#payment-three').html(payment)

      let stock = $('#stock-three').attr('one-year')
      $('#stock-three').html(stock)

      let profit = $('#profit-three').attr('one-year')
      $('#profit-three').html(profit)

      let price = $('#price-three').attr('one-year')
      $('#price-three').html(price)
    }
  })

  // =========== Customize option languages start
  
    var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);


  // =========== Customize option languages end

      



  // Tariffs account

  // One tariffs start
  $('.switcher-input.ac-switch-one').on('click', function() {
    if ($(this).is(':checked')){
      let ac_strategist = $('#ac-strategist-one').attr('five-year')
      $('#ac-strategist-one').html(ac_strategist)

      let ac_engine = $('#ac-engine-one').attr('five-year')
      $('#ac-engine-one').html(ac_engine)

      let ac_service = $('#ac-service-one').attr('five-year')
      $('#ac-service-one').html(ac_service)

      let ac_payment = $('#ac-payment-one').attr('five-year')
      $('#ac-payment-one').html(ac_payment)

      let ac_stock = $('#ac-stock-one').attr('five-year')
      $('#ac-stock-one').html(ac_stock)

      let ac_profit = $('#ac-profit-one').attr('five-year')
      $('#ac-profit-one').html(ac_profit)

      let ac_price = $('#ac-price-one').attr('five-year')
      $('#ac-price-one').html(ac_price)
    }
    else {
      let ac_strategist = $('#ac-strategist-one').attr('one-year')
      $('#ac-strategist-one').html(ac_strategist)

      let ac_engine = $('#ac-engine-one').attr('one-year')
      $('#ac-engine-one').html(ac_engine)

      let ac_service = $('#ac-service-one').attr('one-year')
      $('#ac-service-one').html(ac_service)

      let ac_payment = $('#ac-payment-one').attr('one-year')
      $('#ac-payment-one').html(ac_payment)

      let ac_stock = $('#ac-stock-one').attr('one-year')
      $('#ac-stock-one').html(ac_stock)

      let ac_profit = $('#ac-profit-one').attr('one-year')
      $('#ac-profit-one').html(ac_profit)

      let ac_price = $('#ac-price-one').attr('one-year')
      $('#ac-price-one').html(ac_price)
    }
  })
  // One tariffs end

  // Two tariffs start
  $('.switcher-input.ac-switch-two').on('click', function() {
    if ($(this).is(':checked')){
      let ac_strategist = $('#ac-strategist-two').attr('five-year')
      $('#ac-strategist-two').html(ac_strategist)

      let ac_engine = $('#ac-engine-two').attr('five-year')
      $('#ac-engine-two').html(ac_engine)

      let ac_service = $('#ac-service-two').attr('five-year')
      $('#ac-service-two').html(ac_service)

      let ac_payment = $('#ac-payment-two').attr('five-year')
      $('#ac-payment-two').html(ac_payment)

      let ac_stock = $('#ac-stock-two').attr('five-year')
      $('#ac-stock-two').html(ac_stock)

      let ac_profit = $('#ac-profit-two').attr('five-year')
      $('#ac-profit-two').html(ac_profit)

      let ac_price = $('#ac-price-two').attr('five-year')
      $('#ac-price-two').html(ac_price)
    }
    else {
      let ac_strategist = $('#ac-strategist-two').attr('one-year')
      $('#ac-strategist-two').html(ac_strategist)

      let ac_engine = $('#ac-engine-two').attr('one-year')
      $('#ac-engine-two').html(ac_engine)

      let ac_service = $('#ac-service-two').attr('one-year')
      $('#ac-service-two').html(ac_service)

      let ac_payment = $('#ac-payment-two').attr('one-year')
      $('#ac-payment-two').html(ac_payment)

      let ac_stock = $('#ac-stock-two').attr('one-year')
      $('#ac-stock-two').html(ac_stock)

      let ac_profit = $('#ac-profit-two').attr('one-year')
      $('#ac-profit-two').html(ac_profit)

      let ac_price = $('#ac-price-two').attr('one-year')
      $('#ac-price-two').html(ac_price)
    }
  })
  // Two tariffs end

  // Three tariffs start
  $('.switcher-input.ac-switch-three').on('click', function() {
    if ($(this).is(':checked')){
      let ac_strategist = $('#ac-strategist-three').attr('five-year')
      $('#ac-strategist-three').html(ac_strategist)

      let ac_engine = $('#ac-engine-three').attr('five-year')
      $('#ac-engine-three').html(ac_engine)

      let ac_service = $('#ac-service-three').attr('five-year')
      $('#ac-service-three').html(ac_service)

      let ac_payment = $('#ac-payment-three').attr('five-year')
      $('#ac-payment-three').html(ac_payment)

      let ac_stock = $('#ac-stock-three').attr('five-year')
      $('#ac-stock-three').html(ac_stock)

      let ac_profit = $('#ac-profit-three').attr('five-year')
      $('#ac-profit-three').html(ac_profit)

      let ac_price = $('#ac-price-three').attr('five-year')
      $('#ac-price-three').html(ac_price)
    }
    else {
      let ac_strategist = $('#ac-strategist-three').attr('one-year')
      $('#ac-strategist-three').html(ac_strategist)

      let ac_engine = $('#ac-engine-three').attr('one-year')
      $('#ac-engine-three').html(ac_engine)

      let ac_service = $('#ac-service-three').attr('one-year')
      $('#ac-service-three').html(ac_service)

      let ac_payment = $('#ac-payment-three').attr('one-year')
      $('#ac-payment-three').html(ac_payment)

      let ac_stock = $('#ac-stock-three').attr('one-year')
      $('#ac-stock-three').html(ac_stock)

      let ac_profit = $('#ac-profit-three').attr('one-year')
      $('#ac-profit-three').html(ac_profit)

      let ac_price = $('#ac-price-three').attr('one-year')
      $('#ac-price-three').html(ac_price)
    }
  })
  // Three tariffs end

  // Four tariffs start
  $('.switcher-input.ac-switch-four').on('click', function() {
    if ($(this).is(':checked')){
      let ac_strategist = $('#ac-strategist-four').attr('five-year')
      $('#ac-strategist-four').html(ac_strategist)

      let ac_engine = $('#ac-engine-four').attr('five-year')
      $('#ac-engine-four').html(ac_engine)

      let ac_service = $('#ac-service-four').attr('five-year')
      $('#ac-service-four').html(ac_service)

      let ac_payment = $('#ac-payment-four').attr('five-year')
      $('#ac-payment-four').html(ac_payment)

      let ac_stock = $('#ac-stock-four').attr('five-year')
      $('#ac-stock-four').html(ac_stock)

      let ac_profit = $('#ac-profit-four').attr('five-year')
      $('#ac-profit-four').html(ac_profit)

      let ac_price = $('#ac-price-four').attr('five-year')
      $('#ac-price-four').html(ac_price)
    }
    else {
      let ac_strategist = $('#ac-strategist-four').attr('one-year')
      $('#ac-strategist-four').html(ac_strategist)

      let ac_engine = $('#ac-engine-four').attr('one-year')
      $('#ac-engine-four').html(ac_engine)

      let ac_service = $('#ac-service-four').attr('one-year')
      $('#ac-service-four').html(ac_service)

      let ac_payment = $('#ac-payment-four').attr('one-year')
      $('#ac-payment-four').html(ac_payment)

      let ac_stock = $('#ac-stock-four').attr('one-year')
      $('#ac-stock-four').html(ac_stock)

      let ac_profit = $('#ac-profit-four').attr('one-year')
      $('#ac-profit-four').html(ac_profit)

      let ac_price = $('#ac-price-four').attr('one-year')
      $('#ac-price-four').html(ac_price)
    }
  })
  // Four tariffs end

  // Five tariffs start
  $('.switcher-input.ac-switch-five').on('click', function() {
    if ($(this).is(':checked')){
      let ac_strategist = $('#ac-strategist-five').attr('five-year')
      $('#ac-strategist-five').html(ac_strategist)

      let ac_engine = $('#ac-engine-five').attr('five-year')
      $('#ac-engine-five').html(ac_engine)

      let ac_service = $('#ac-service-five').attr('five-year')
      $('#ac-service-five').html(ac_service)

      let ac_payment = $('#ac-payment-five').attr('five-year')
      $('#ac-payment-five').html(ac_payment)

      let ac_stock = $('#ac-stock-five').attr('five-year')
      $('#ac-stock-five').html(ac_stock)

      let ac_profit = $('#ac-profit-five').attr('five-year')
      $('#ac-profit-five').html(ac_profit)

      let ac_price = $('#ac-price-five').attr('five-year')
      $('#ac-price-five').html(ac_price)
    }
    else {
      let ac_strategist = $('#ac-strategist-five').attr('one-year')
      $('#ac-strategist-five').html(ac_strategist)

      let ac_engine = $('#ac-engine-five').attr('one-year')
      $('#ac-engine-five').html(ac_engine)

      let ac_service = $('#ac-service-five').attr('one-year')
      $('#ac-service-five').html(ac_service)

      let ac_payment = $('#ac-payment-five').attr('one-year')
      $('#ac-payment-five').html(ac_payment)

      let ac_stock = $('#ac-stock-five').attr('one-year')
      $('#ac-stock-five').html(ac_stock)

      let ac_profit = $('#ac-profit-five').attr('one-year')
      $('#ac-profit-five').html(ac_profit)

      let ac_price = $('#ac-price-five').attr('one-year')
      $('#ac-price-five').html(ac_price)
    }
  })
  // Five tariffs end

  // Six tariffs start
  $('.switcher-input.ac-switch-six').on('click', function() {
    if ($(this).is(':checked')){
      let ac_strategist = $('#ac-strategist-six').attr('five-year')
      $('#ac-strategist-six').html(ac_strategist)

      let ac_engine = $('#ac-engine-six').attr('five-year')
      $('#ac-engine-six').html(ac_engine)

      let ac_service = $('#ac-service-six').attr('five-year')
      $('#ac-service-six').html(ac_service)

      let ac_payment = $('#ac-payment-six').attr('five-year')
      $('#ac-payment-six').html(ac_payment)

      let ac_stock = $('#ac-stock-six').attr('five-year')
      $('#ac-stock-six').html(ac_stock)

      let ac_profit = $('#ac-profit-six').attr('five-year')
      $('#ac-profit-six').html(ac_profit)

      let ac_price = $('#ac-price-six').attr('five-year')
      $('#ac-price-six').html(ac_price)
    }
    else {
      let ac_strategist = $('#ac-strategist-six').attr('one-year')
      $('#ac-strategist-six').html(ac_strategist)

      let ac_engine = $('#ac-engine-six').attr('one-year')
      $('#ac-engine-six').html(ac_engine)

      let ac_service = $('#ac-service-six').attr('one-year')
      $('#ac-service-six').html(ac_service)

      let ac_payment = $('#ac-payment-six').attr('one-year')
      $('#ac-payment-six').html(ac_payment)

      let ac_stock = $('#ac-stock-six').attr('one-year')
      $('#ac-stock-six').html(ac_stock)

      let ac_profit = $('#ac-profit-six').attr('one-year')
      $('#ac-profit-six').html(ac_profit)

      let ac_price = $('#ac-price-six').attr('one-year')
      $('#ac-price-six').html(ac_price)
    }
  })
  // Six tariffs end

  // Tariffs activate for loading page

  // One
  let ac_strategistOne = $('#ac-strategist-six').attr('one-year')
  $('#ac-strategist-six').html(ac_strategistOne)

  let ac_engineOne = $('#ac-engine-six').attr('one-year')
  $('#ac-engine-six').html(ac_engineOne)

  let ac_serviceOne = $('#ac-service-six').attr('one-year')
  $('#ac-service-six').html(ac_serviceOne)

  let ac_paymentOne = $('#ac-payment-six').attr('one-year')
  $('#ac-payment-six').html(ac_paymentOne)

  let ac_stockOne = $('#ac-stock-six').attr('one-year')
  $('#ac-stock-six').html(ac_stockOne)

  let ac_profitOne = $('#ac-profit-six').attr('one-year')
  $('#ac-profit-six').html(ac_profitOne)

  let ac_priceOne = $('#ac-price-six').attr('one-year')
  $('#ac-price-six').html(ac_priceOne)
  // One end

  // Two
  let ac_strategistTwo = $('#ac-strategist-one').attr('one-year')
      $('#ac-strategist-one').html(ac_strategistTwo)

  let ac_engineTwo = $('#ac-engine-one').attr('one-year')
  $('#ac-engine-one').html(ac_engineTwo)

  let ac_serviceTwo = $('#ac-service-one').attr('one-year')
  $('#ac-service-one').html(ac_serviceTwo)

  let ac_paymentTwo = $('#ac-payment-one').attr('one-year')
  $('#ac-payment-one').html(ac_paymentTwo)

  let ac_stockTwo = $('#ac-stock-one').attr('one-year')
  $('#ac-stock-one').html(ac_stockTwo)

  let ac_profitTwo = $('#ac-profit-one').attr('one-year')
  $('#ac-profit-one').html(ac_profitTwo)

  let ac_priceTwo = $('#ac-price-one').attr('one-year')
  $('#ac-price-one').html(ac_priceTwo)
  // Two end

  // Three

  let ac_strategistThree = $('#ac-strategist-two').attr('one-year')
  $('#ac-strategist-two').html(ac_strategistThree)

  let ac_engineThree = $('#ac-engine-two').attr('one-year')
  $('#ac-engine-two').html(ac_engineThree)

  let ac_serviceThree = $('#ac-service-two').attr('one-year')
  $('#ac-service-two').html(ac_serviceThree)

  let ac_paymentThree = $('#ac-payment-two').attr('one-year')
  $('#ac-payment-two').html(ac_paymentThree)

  let ac_stockThree = $('#ac-stock-two').attr('one-year')
  $('#ac-stock-two').html(ac_stockThree)

  let ac_profitThree = $('#ac-profit-two').attr('one-year')
  $('#ac-profit-two').html(ac_profitThree)

  let ac_priceThree = $('#ac-price-two').attr('one-year')
  $('#ac-price-two').html(ac_priceThree)

  // Three end

  // Four
  let ac_strategistFour = $('#ac-strategist-four').attr('one-year')
  $('#ac-strategist-four').html(ac_strategistFour)

  let ac_engineFour = $('#ac-engine-four').attr('one-year')
  $('#ac-engine-four').html(ac_engineFour)

  let ac_serviceFour = $('#ac-service-four').attr('one-year')
  $('#ac-service-four').html(ac_serviceFour)

  let ac_paymentFour = $('#ac-payment-four').attr('one-year')
  $('#ac-payment-four').html(ac_paymentFour)

  let ac_stockFour = $('#ac-stock-four').attr('one-year')
  $('#ac-stock-four').html(ac_stockFour)

  let ac_profitFour = $('#ac-profit-four').attr('one-year')
  $('#ac-profit-four').html(ac_profitFour)

  let ac_priceFour = $('#ac-price-four').attr('one-year')
  $('#ac-price-four').html(ac_priceFour)
  // Four end

  // Five
  let ac_strategistFive = $('#ac-strategist-three').attr('one-year')
  $('#ac-strategist-three').html(ac_strategistFive)

  let ac_engineFive = $('#ac-engine-three').attr('one-year')
  $('#ac-engine-three').html(ac_engineFive)

  let ac_serviceFive = $('#ac-service-three').attr('one-year')
  $('#ac-service-three').html(ac_serviceFive)

  let ac_paymentFive = $('#ac-payment-three').attr('one-year')
  $('#ac-payment-three').html(ac_paymentFive)

  let ac_stockFive = $('#ac-stock-three').attr('one-year')
  $('#ac-stock-three').html(ac_stockFive)

  let ac_profitFive = $('#ac-profit-three').attr('one-year')
  $('#ac-profit-three').html(ac_profitFive)

  let ac_priceFive = $('#ac-price-three').attr('one-year')
  $('#ac-price-three').html(ac_priceFive)
  // Five end

  // Six
  let ac_strategistSix = $('#ac-strategist-five').attr('one-year')
  $('#ac-strategist-five').html(ac_strategistSix)

  let ac_engineSix = $('#ac-engine-five').attr('one-year')
  $('#ac-engine-five').html(ac_engineSix)

  let ac_serviceSix = $('#ac-service-five').attr('one-year')
  $('#ac-service-five').html(ac_serviceSix)

  let ac_paymentSix = $('#ac-payment-five').attr('one-year')
  $('#ac-payment-five').html(ac_paymentSix)

  let ac_stockSix = $('#ac-stock-five').attr('one-year')
  $('#ac-stock-five').html(ac_stockSix)

  let ac_profitSix = $('#ac-profit-five').attr('one-year')
  $('#ac-profit-five').html(ac_profitSix)

  let ac_priceSix = $('#ac-price-five').attr('one-year')
  $('#ac-price-five').html(ac_priceSix)
  // Six end

  // Tariffs activate for loading page = end



  // Onclick switch languages start
  $('.dropdown-lang').on('click', function(){
    $('.dropdown-lang__content').toggleClass('display-block')
  })
  // Onclick switch languages end

  // Slowly animate to block after onclick
  $('a[href^="#tariffs"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

$('a[href^="#profitability"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});

$('a[href^="#about"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});

$('a[href^="#advantages"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});
	

  
});


