"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Advice_tsx_1 = __importDefault(require("./components/Advice.tsx"));
const react_1 = require("react");
const fetchServices_tsx_1 = require("./services/fetchServices.tsx");
require("./App.css");
function App() {
    const [advice, setAdvice] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, fetchServices_tsx_1.fetchAdvice)().then(result => setAdvice([result.slip]));
    }, []);
    console.log(advice);
    return (<main>
   <Advice_tsx_1.default advice={advice}/>
    </main>);
}
exports.default = App;
