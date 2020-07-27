import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
${reset}
body {
    font-family: 'Apple SD Gothic Neo',arial,sans-serif;
    box-sizing:border-box;

}
a {
    text-decoration:none;
}
input {
    border:none;
}
`;
