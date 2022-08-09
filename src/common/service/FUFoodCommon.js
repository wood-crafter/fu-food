const successIcon = 'success';
const warningIcon = 'warning';
const infoIccon = 'info';
const errorIccon = 'error';
export default {
    successIcon,
    warningIcon,
    infoIccon,
    errorIccon,
    sweetAlert(title, message, icon, callback) {
        return Swal.fire({
            title: title,
            text: message,
            icon: icon
        });
    }
};