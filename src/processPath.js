module.exports = path => path
    .split("")
    .map(char => char === "{" ? ":" : (char === "}" ? "" : char))
    .join("");