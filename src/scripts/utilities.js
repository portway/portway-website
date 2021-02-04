export const throttle = (action) => {
  let isRunning = false
  return () => {
    if (isRunning) return
    isRunning = true
    window.requestAnimationFrame(() => {
      action()
      isRunning = false
    })
  }
}

// https://stackoverflow.com/a/2117523
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
