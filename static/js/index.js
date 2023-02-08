{
    const form = document.getElementById("sign-in")
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const values = Object.fromEntries(formData.entries())
        if (!values.username.length || !values.password.length) {
            Swal.fire('', 'qwe')
        }
        else {
            Swal.fire('', 'asd')
        }
    })
}