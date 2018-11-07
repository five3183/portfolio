const projects = document.querySelectorAll('.project-container')
const overlays = document.querySelectorAll('.overlay')

const resumeBtn = document.getElementById('resume-btn')
const resume = document.getElementById('resume')
const closeBtn = document.getElementById('close-btn')

projects.forEach(project => {
  project.addEventListener('mouseover', (e) => {
    projectDiv = e.target.parentNode.childNodes
    projectDiv.forEach(element => {
      // console.log(element.nodeType)
      if(element.className === 'overlay invisible') {
        element.className = 'overlay visible'
      }
    })
  })
})

overlays.forEach(overlay => {
  overlay.addEventListener('mouseout', (e) => {
    overlayDiv = e.target.parentNode.childNodes
    overlayDiv.forEach(element => {
      if(element.className === 'overlay visible') {
        element.className = 'overlay invisible'
      }
    })
  })
})

resumeBtn.addEventListener('click', () => {
  if(resume.className === 'invisible') {
    resume.className = 'visible'
  }
})

closeBtn.addEventListener('click', () => {
  resume.className = 'invisible'
})
