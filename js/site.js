function displayMessage() {
    let msg = document.getElementById('message').value;

    Swal.fire(
        {
            backdrop: false,
            title: 'U-Turn',
            text: msg
        }
    )
    
}