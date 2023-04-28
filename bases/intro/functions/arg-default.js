"use strict";
(() => {
    const fullName = (firstName, lastname, upper = true) => {
        if (upper) {
            return `${firstName} ${lastname || '---'}`.toLocaleUpperCase();
        }
        else {
            return `${firstName} ${lastname || '---'}`;
        }
    };
    const name = fullName("Steve", "Rogers", false);
    console.log({ name });
})();
