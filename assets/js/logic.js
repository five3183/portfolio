const projects = document.querySelectorAll('.project-container')
const overlays = document.querySelectorAll('.overlay')

const hideOverlay = (e) => {
  overlayDiv = e.target.parentNode.childNodes
	overlayDiv.forEach(element => {
		if(element.className === 'overlay visible') {
			element.className = 'overlay invisible'
		}
	})
}

const showOverlay = (e) => {
	projectDiv = e.target.parentNode.childNodes
	projectDiv.forEach(element => {
		if(element.className === 'overlay invisible') {
			element.className = 'overlay visible'
		}
    })
}

projects.forEach(project => {
  project.addEventListener('mouseover', (e) => {
	  showOverlay(e)
  })
})

overlays.forEach(overlay => {
  overlay.addEventListener('mouseout', (e) => {
	setTimeout(() => {hideOverlay(e)}, 5 * 1000)
  })
})