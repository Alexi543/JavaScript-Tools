import {random} from "../random.js";
import {string} from "../string.js";

let s = string.ascii_letters;
let x = random.shuffle(s);

console.log(x);