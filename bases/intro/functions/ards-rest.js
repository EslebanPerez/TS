"use strict";
(() => {
    const fullName = (firstName, ...restArg) => {
        return `${firstName} ${restArg.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph");
    console.log({ superman });
})();
