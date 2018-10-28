(function () {
  function checkHeightScroll (element) {
    return element.scrollHeight - element.scrollTop === element.clientHeight
  }

  function drawLine () {
    var line = document.querySelector('.education__line')
    var dataBlock = document.querySelector('.education__data')
    line.style.height = dataBlock.scrollHeight - 20 + 'px'
  }

  function showList (config, ref, educationData) {
    var count = 0
    firebase.initializeApp(config)
    var database = firebase.database()
    ref = database.ref(ref)
    return function () {
      ref.orderByKey().startAt('' + count).limitToFirst(5).once('value').then((snapshot) => {
        for (var key in snapshot.val()) {
          var element = (new Entry(snapshot.val()[key])).createItem()
          educationData.appendChild(element)
        }
        drawLine()
        count += 5
      })
    }
  }

  function Entry (item) {
    this.item = item
  }

  Entry.prototype.createItem = function () {
    var entry = document.createElement('div')
    entry.classList.add('entry')
    var content = '<div class="entry__date">' + this.item['date'] + '</div>\n' +
        '                <div class="entry__data">\n' +
        '                    <h3 class="entry__title">' + this.item['title'] + '</h3>\n' +
        '                    <p class="entry__text">' + this.item['someText'] + '</p>\n' +
        '                </div>'
    entry.innerHTML = content
    return entry
  }

  var educationData = document.querySelector('.education__data')
  var config = {
    apiKey: 'AIzaSyCZL34KsWpHnGF2lRaHeXdpSrOhtM2GBZ0',
    authDomain: 'education-4a8d2.firebaseapp.com',
    databaseURL: 'https://education-4a8d2.firebaseio.com',
    projectId: 'education-4a8d2',
    storageBucket: 'education-4a8d2.appspot.com',
    messagingSenderId: '497779358650'
  }

  var show = showList(config, '/education/', educationData)
  show()

  educationData.addEventListener('scroll', function (e) {
    if (checkHeightScroll(educationData)) {
      show()
    }
    var self = this
    this.classList.add('education__data_scroll_show')
    setTimeout(function () {
      self.classList.remove('education__data_scroll_show')
    }, 1000)
  })
})()
