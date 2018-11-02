import * from 'clipboard'

const Clipboard = () => {
  let linkIcon = document.querySelector('.icon-link')
  let pageURL = document.location.href

  if (!linkIcon) return

  var clipboard = new Clipboard('.icon-link', {
    text: function() {
        return 'clipboard.js is awesome!'
    }
  })

}

export default Clipboard
