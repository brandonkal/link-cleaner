// Code that is shared across normal LinkCleaner and bulk mode

// Function for cleaning links
function cleanLink(
  link,
  youtubeShortenEnabled = false,
  vxTwitterEnabled = false
) {
  try {
    var oldLink = new URL(link)
  } catch (e) {
    // TypeError raised if not identified as URL, try stripping "Page Title"
    if (e instanceof TypeError) {
      var oldLink = new URL(link.split(/"(?:[^\\"]|\\.)*"/)[1].trim())
    }
  }
  console.log('Old link:', oldLink)
  // Fixes for various link shorteners/filters
  if (oldLink.host === 'l.facebook.com' && oldLink.searchParams.has('u')) {
    // Fix for Facebook shared links
    var facebookLink = decodeURI(oldLink.searchParams.get('u'))
    oldLink = new URL(facebookLink)
  } else if (oldLink.host === 'href.li') {
    // Fix for href.li links
    var hrefLink = oldLink.href.split('?')[1]
    var oldLink = new URL(hrefLink)
  }

  let newLink = pureCleaning(oldLink)

  // Shorten YouTube links if enabled
  if (oldLink.host.includes('youtube.com') && youtubeShortenEnabled) {
    newLink.host = 'youtu.be'
    newLink.pathname = '/' + oldLink.searchParams.get('v')
    newLink.searchParams.delete('v')
  }
  // Use vxTwitter if enabled
  if (oldLink.host.includes('twitter.com') && vxTwitterEnabled) {
    newLink.host = 'vxtwitter.com'
  }
  // Save to history
  addToHistory(newLink)
  // Switch to output
  console.log('New link:', newLink)
  return newLink.toString()
}

// Function for adding result to link clean history
function addToHistory(link) {
  var linkArray = []
  // Get current value if available
  if (localStorage.getItem('history')) {
    try {
      linkArray = JSON.parse(localStorage.getItem('history'))
    } catch {
      // Saved storage only has one value so it's not valid JSON
      linkArray.push(localStorage.getItem('history'))
    }
  }
  linkArray.unshift(link)
  // Don't exceed 100 links
  if (linkArray.length > 100) {
    linkArray.splice(-1)
  }
  // Save back to localStorage
  try {
    localStorage.setItem('history', JSON.stringify(linkArray))
  } catch (e) {
    // localStorage might be full, try deleting some items and try again
    linkArray.splice(arr1.length - 10, 10)
    localStorage.setItem('history', JSON.stringify(linkArray))
  }
}

// Save settings automatically to localStorage
document.querySelectorAll('input[type="checkbox"]').forEach(function (el) {
  el.addEventListener('change', function () {
    localStorage.setItem(el.id, el.checked)
    console.log('Saved setting:', el.id, el.checked)
  })
})

// Load settings from localStorage
Object.entries(localStorage).forEach(function (key) {
  // Ignore link history and android app
  if (key[0] === 'history' || key[0] === 'android-app') {
    return true
  }
  // Load setting
  console.log('Loaded setting:', key)
  document.getElementById(key[0]).checked = JSON.parse(key[1])
})
