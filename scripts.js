$(function () {
  $('#converter').click(function () {
    const milhas = $('#milhas').val()

    if (milhas !== '') {
      const milhas = parseFloat($('#milhas').val())
      const metros = milhas * 1609.34
      $('#metros').val(metros)
    } else {
      alert('Preencha todos os campos')
    }
  })

  $('#limpar').click(function () {
    $('#milhas').val('')
    $('#metros').val('')
    $('#milhas').focus()
  })
})