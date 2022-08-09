export default {
    isEmpty(value) {
        if (value == null || value.trim().length == 0) {
            return true;
        } else {
            return false;
        }
    }
};