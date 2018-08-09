/**
 *****************************************
 * Created by lifx
 * Created on 2018-08-09 17:00:16
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 定义代码
 *****************************************
 */
const code = `
if (module.exports) {
    let locals = module.exports;

    module.exports = {
        __esModule: true,
        default: locals,
        use: require('${__dirname}/styled.js').default(locals)
    };
}
`;


/**
 *****************************************
 * 定义加载器
 *****************************************
 */
module.exports = function loader(content) {
    return content + code;
};
