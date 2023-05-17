jQuery(document).ready(function () {
  jQuery("#primary-menu a[href='#']").attr("href", "javascript:void(0)");
  jQuery("#site-navigation .menu-toggle").click(function () {
    jQuery("#site-navigation").addClass("toggled");
  });
  jQuery("#site-navigation .menu-close").click(function () {
    jQuery("#site-navigation").removeClass("toggled");
  });
  jQuery("#site-navigation .menu-item-has-children").each(function () {
    jQuery(this).append('<span><i class="fas fa-chevron-right"></i></span>');
  });
  jQuery("#site-navigation .menu-item-has-children").click(function (event) {
    event.stopPropagation();
    if (jQuery(this).hasClass("focus")) {
      jQuery("#site-navigation .menu-item-has-children").removeClass("focus");
    } else {
      jQuery("#site-navigation .menu-item-has-children").removeClass("focus");
      jQuery(this).addClass("focus");
    }
  });

  jQuery("video")
    .mouseenter(function () {
      this.play();
    })
    .mouseleave(function () {
      this.pause();
    });
  jQuery(".video-hover-text a").click(function (e) {
    e.preventDefault();
    jQuery(".single-image video").each(function () {
      jQuery(this).get(0).pause();
      jQuery(this).parent().find(".video-hover-text a").fadeIn();
    });

    var video = jQuery(this).parent().parent().find("video");
    video.get(0).play();
    jQuery(this).fadeOut();
  });
  jQuery(".single-image video").click(function () {
    if (!this.paused) {
      jQuery(this).parent().find(".video-hover-text a").fadeIn();
      this.pause();
    }
  });
});

var dropy = {
  jQuerydropys: null,
  openClass: "open",
  selectClass: "selected",
  init: function () {
    var self = this;

    self.jQuerydropys = jQuery(".dropy");
    self.eventHandler();
  },
  eventHandler: function () {
    var self = this;

    self.jQuerydropys.find(".dropy__title").click(function () {
      //self.jQuerydropys.removeClass(self.openClass);
      jQuery(this).parents(".dropy").toggleClass(self.openClass);
    });

    self.jQuerydropys.find(".dropy__content ul li a").click(function () {
      var jQuerythat = jQuery(this);
      var jQuerydropy = jQuerythat.parents(".dropy");
      var jQueryinput = jQuerydropy.find("input");
      var jQuerytitle = jQuery(this)
        .parents(".dropy")
        .find(".dropy__title span");

      jQuerydropy.find(".dropy__content a").each(function () {
        jQuery(this).removeClass(self.selectClass);
      });

      jQuerytitle.html(jQuerythat.html());
      jQueryinput.val(jQuerythat.attr("data-value")).trigger("change");

      if (jQuerythat.hasClass("dropy__header")) {
        jQuerytitle.removeClass(self.selectClass);
        jQuerytitle.html(jQuerytitle.attr("data-title"));
      } else {
        jQuerytitle.addClass(self.selectClass);
        jQuerythat.addClass(self.selectClass);
      }

      jQuerydropy.removeClass(self.openClass);
    });

    jQuery(document).bind("click", function (e) {
      if (!jQuery(e.target).parents().hasClass("dropy")) {
        self.jQuerydropys.removeClass(self.openClass);
      }
    });
  },
};

jQuery(function () {
  dropy.init();
});

jQuery(".db-phone .wpcf7-tel").keyup(function (e) {
  if (/\D/g.test(this.value)) {
    this.value = this.value.replace(/\D/g, "");
  }
});
