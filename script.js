let racer = document.getElementById(`racer`)

let left = 0

racer.addEventListener(`click`, moveRacer)

function moveRacer() {
  left = left + 10
  racer.style.left = `${left}px`
}
