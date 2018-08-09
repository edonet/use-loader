/**
 *****************************************
 * Created by lifx
 * Created on 2018-08-09 17:00:16
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
const utils = require('loader-utils');


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
    let options = {
            ...utils.getOptions(this),
            ...utils.parseQuery(this.resourceQuery || '?')
        };


    // 不启用
    if (options.disabled || options.modules === false || options.global) {
        return content;
    }

    // 添加代码
    return content + code;
};
