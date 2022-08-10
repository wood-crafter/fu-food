import FUFoodUtils from "../common/service/FUFoodUtils";
import FUFoodCommon from "../common/service/FUFoodCommon";
import FUFoodConstant from "../common/constant/FUFoodConstant";
import FUFoodMessage from "../common/constant/FUFoodMessage";
import router from "../router/index";

const user = {
    username: "",
    password: ""
};
var isEmptyInfo = false;
export default {
    user,
    isEmptyInfo,
    onSignin (e) {
        if (FUFoodUtils.isEmpty(user.username)) {
            isEmptyInfo = true;
            console.log("Input Username!")
        }
        if (FUFoodUtils.isEmpty(user.password)) {
            isEmptyInfo = true;
            console.log("Input Password!")
        }
        if (isEmptyInfo) return;
        if (user.username === 'duongdd' && user.password === '1') {
            FUFoodCommon.sweetAlert(FUFoodConstant.FU_FOOD_TITLE, FUFoodMessage.LOGIN_SUCCESS, FUFoodCommon.successIcon);
            router.push("/");
        } else {
            FUFoodCommon.sweetAlert(FUFoodConstant.FU_FOOD_TITLE, FUFoodMessage.LOGIN_FAILED, FUFoodCommon.errorIcon);
        }
    }
};
