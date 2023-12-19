export const theme = () => {
  let addSnow = () => {
    // code goes here
    const random = (min, max) => Math.random() * (max - min) + min
    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight

    let snow = document.createElement('img')

    snow.style.position = 'fixed'
    snow.style.top = '-10px'
    // snow.style.left = random(0, screenWidth) + 'px'
    snow.style.left = random(0, screenWidth) + 'px'
    snow.style.width = random(0, 20) + 'px'
    snow.style.height = snow.style.width
    snow.style.zIndex = '999'
    snow.src = 'https://www.topzone.vn/images/christmas/hf_shimmer_flake20.png'
    snow.style.pointerEvents = 'none'

    const animateSnow = () => {
      // console.log(parseInt())
      snow.style.top = parseInt(snow.style.top) + 2 + 'px'
      snow.style.left = parseInt(snow.style.left) + 1 + 'px'
      if (parseInt(snow.style.top) > screenHeight) {
        snow.style.top = parseInt(0 + 'px')
        snow.style.left = random(0, screenWidth) + 'px'
      }
      window.requestAnimationFrame(animateSnow)
    }
    window.requestAnimationFrame(animateSnow)
    document.body.appendChild(snow)
  }
  for (let i = 0; i < 30; i++) {
    setTimeout(addSnow, i * 100)
  }
}
