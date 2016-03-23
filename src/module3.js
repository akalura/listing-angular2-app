import module2 from "./module2"
import module5 from "./module5"

export default () => {
    module2();
    module5();
    console.log("Output from module3");
    return "Output from module3";
}


