"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Steve", "Rogers");
    console.log({ name });
})();
