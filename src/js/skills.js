(function () {
  function Skill (name, range) {
    this.name = name
    this.range = range
  }

  Skill.prototype.createSkill = function () {
    console.log(this)
    var element = document.createElement('div')
    if (element) {
      if (this.range !== '' && this.range >= 0 && this.range <= 100) {
        element.classList.add('progress__item')
        element.innerHTML = this.name
        element.style.width = this.range + '%'
        return element
      } else {
        alert('Range should be from 0 to 100')
        return false
      }
    } else {
      return false
    }
  }

  var formSkills = document.querySelector('.skills__form')
  var skillsRank = document.querySelector('.skills__progress')

  if (formSkills) {
    formSkills.addEventListener('submit', function (e) {
      e.preventDefault()
      var skillElement = (new Skill(e.target[0].value, e.target[1].value)).createSkill()
      if (skillElement) {
        skillsRank.appendChild(skillElement)
      }
    })
  }
})()
