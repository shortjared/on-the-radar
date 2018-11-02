import ClipboardJS from 'clipboard'

const Clipboard = () => {
  console.log('looogggeeeddd')
  let linkIcon = document.querySelector('.icon-link')
  let pageURL = document.location.href

  if (!linkIcon) return

  clipboardInit()

  linkIcon.addEventListener('click', () =>
    text: function() {
      return 'clipboard.js is awesome!';
    }
  )
}

const clipboardInit = () => {
  let clipboard = new ClipboardJS('.icon-link')

  clipboard.on('success', () => {
    // let d = document.querySelector('.cite-page .btn')
    // d.classList.add('copied')
  })
}

export default Clipboard
