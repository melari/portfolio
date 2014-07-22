@on_ready = (func) ->
  $(document).ready(->
    func.call(window)
  )

@on_ready(->
  $('.title').css('opacity', 1)
)
