"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./advice.css");
const Advice = ({ advice }) => {
    return (<>
      {advice === null || advice === void 0 ? void 0 : advice.map((x) => {
            return (<div className='card' key={x.id}>
            <p className="text-center">Advice #{x.id}</p>
            <h2 className="text-center">'{x.advice}'</h2>
            <div className="svg-patern text-center">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            </div>
          </div>);
        })}
    </>);
};
exports.default = Advice;
