/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
    const stack = path
        .split("/")
        .reduce((acc, cur) => {
            if (cur === "" || cur === ".") {
                return acc;
            }
            if (cur === "..") {
                acc.pop();

                return acc;
            }

            acc.push(cur);

            return acc;

        }, []);

    return "/" + stack.join("/");
}
