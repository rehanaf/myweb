// theme toggle light #ffffff || dark #111827
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  document.getElementById('light-icon').classList.remove('hidden')
  document.getElementById('dark-icon').classList.add('hidden')
} else {
  document.documentElement.classList.remove('dark')
  document.getElementById('light-icon').classList.add('hidden')
  document.getElementById('dark-icon').classList.remove('hidden')
}

document.getElementById('ganti-tema').addEventListener('click', (e) => {
  document.getElementById('light-icon').classList.toggle('hidden')
  document.getElementById('dark-icon').classList.toggle('hidden')
  document.documentElement.classList.toggle('dark')
  localStorage.theme = (localStorage.theme == 'light') ? 'dark' : 'light'
})