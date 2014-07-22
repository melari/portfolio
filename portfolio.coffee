@on_ready = (func) ->
  $(document).ready(->
    func.call(window)
  )

@on_ready(->
  $('.title').css('opacity', 1)
)

@section_open = false
@open_section = (selected_section) ->
  return @close_section() if @section_open
  @section_open = true

  selected_button = $("#menu-section-#{selected_section}")
  background  = selected_button.css('background-color')
  color       = selected_button.css('color')

  $('.background-overlay').attr('data-original-background', $('.background-overlay').css('background-color'))
  $('.background-overlay').css('background-color', background)

  for section in ['career', 'projects', 'audio']
    continue if section == selected_section
    $("#menu-section-#{section}").css('width', '0px')
    $("#menu-section-#{section}").css('height', '0px')
    $("#menu-section-#{section}").css('opacity', '0')
  selected_button.css('-webkit-transform', 'translate(23vw, -90px)')
  selected_button.css('width', '31vw')
  selected_button.css('height', '9vw')
  selected_button.css('padding-top', '0.5vw')
  $('.title').css('padding-top', '50px')
  $('.option').css('margin-left', '0px')

  section = $("#section-#{selected_section}")
  section.css('display', 'block')
  section.css('opacity', 1)
  section.css('background-color', background)
  section.css('color', color)

@close_section = ->
  return unless @section_open
  @section_open = false

  $('.background-overlay').css('background-color', $('.background-overlay').attr('data-original-background'))

  for section in ['career', 'projects', 'audio']
    $("#menu-section-#{section}").css('width', '23vw')
    $("#menu-section-#{section}").css('height', '16vw')
    $("#menu-section-#{section}").css('-webkit-transform', '')
    $("#menu-section-#{section}").css('padding-top', '7vw')
    $("#menu-section-#{section}").css('opacity', '1')

    $("#section-#{section}").css("display", "none")
    $("#section-#{section}").css("opacity", "0")
  $('.title').css('padding-top', '100px')
  $('.option').css('margin-left', '2vw')
