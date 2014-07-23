// Generated by CoffeeScript 1.7.1
(function() {
  this.on_ready = function(func) {
    return $(document).ready(function() {
      return func.call(window);
    });
  };

  this.on_ready(function() {
    return $('.title').css('opacity', 1);
  });

  this.section_open = false;

  this.open_section = function(selected_section) {
    var background, color, section, selected_button, _i, _len, _ref;
    if (this.section_open) {
      return this.close_section();
    }
    this.section_open = true;
    selected_button = $("#menu-section-" + selected_section);
    background = selected_button.css('background-color');
    color = selected_button.css('color');
    $('.background-overlay').attr('data-original-background', $('.background-overlay').css('background-color'));
    $('.background-overlay').css('background-color', background);
    _ref = ['career', 'projects', 'audio'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      section = _ref[_i];
      if (section === selected_section) {
        continue;
      }
      $("#menu-section-" + section).css('width', '0px');
      $("#menu-section-" + section).css('height', '0px');
      $("#menu-section-" + section).css('opacity', '0');
    }
    selected_button.css('-webkit-transform', 'translate(10vw, -90px)');
    selected_button.css('width', '31vw');
    selected_button.css('height', '5vw');
    selected_button.css('padding-top', '1.5vw');
    selected_button.css('font-size', '1.5vw');
    $('.title').css('padding-top', '50px');
    $('.option').css('margin-left', '0px');
    section = $("#section-" + selected_section);
    section.css('display', 'block');
    section.css('opacity', 1);
    section.css('background-color', background);
    return section.css('color', color);
  };

  this.close_section = function() {
    var section, _i, _len, _ref;
    if (!this.section_open) {
      return;
    }
    this.section_open = false;
    $('.background-overlay').css('background-color', $('.background-overlay').attr('data-original-background'));
    _ref = ['career', 'projects', 'audio'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      section = _ref[_i];
      $("#menu-section-" + section).css('width', '10vw');
      $("#menu-section-" + section).css('height', '8.5vw');
      $("#menu-section-" + section).css('-webkit-transform', '');
      $("#menu-section-" + section).css('padding-top', '1.5vw');
      $("#menu-section-" + section).css('opacity', '1');
      $("#menu-section-" + section).css('font-size', '2vw');
      $("#section-" + section).css("display", "none");
      $("#section-" + section).css("opacity", "0");
    }
    $('.title').css('padding-top', '100px');
    $('.option').css('margin-left', '10vw');
    $('#menu-section-career').css('margin-left', '0px');
    $('#menu-section-career').css('height', '7vw');
    return $('#menu-section-career').css('padding-top', '3vw');
  };

}).call(this);
