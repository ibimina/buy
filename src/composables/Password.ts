const showPassword = (e: Event) => {
    const eye = e.target as HTMLImageElement
    const input = eye.previousElementSibling as HTMLInputElement
    if (input.type == "password") {
        input.type = "text"
        eye.src = "/images/icons8-hide-24.png"
    } else {
        input.type = "password"
        eye.src = "/images/eye.svg"
    }
}
export default showPassword