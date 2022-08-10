const successIcon = 'success';
const warningIcon = 'warning';
const infoIcon = 'info';
const errorIcon = 'error';
export default {
    successIcon,
    warningIcon,
    infoIcon,
    errorIcon,
    sweetAlert(title, message, icon, callback) {
        return Swal.fire({
            title: title,
            text: message,
            icon: icon
        });
    }
};
