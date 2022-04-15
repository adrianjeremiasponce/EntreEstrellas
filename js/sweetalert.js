(async () => {

    const { value: nombre } = await Swal.fire({
        title: "| Entre Estrellas |",
        text: "¡Hola! Por favor ingresa tu nombre",
        icon: "question",
        backdrop: true,
        input: 'text',
        inputValidator: (value) => {
            if (!value) {
                return '¡Debes escribir tu nombre!'
            }
        }
    });

    if (nombre) {
        Swal.fire({
            title: `Te damos la Bienvenida ${nombre}`,
            position: "bottom",
            toast: true,
            position: "bottom-end"
        })
    }
})()


