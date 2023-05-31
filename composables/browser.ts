
/**
 * 获取访客设备信息
 * @returns 
 */

export const getDeviceInfo = () => {

    const osMap = {
        ios: 'logos:apple',
        macOS: 'logos:apple',
        android: 'logos:android-icon',
        windows: 'logos:microsoft-icon',
    };

    const browserMap = {
        edge: 'logos:microsoft-edge',
        ie: 'devicon:ie10',
        ie11: 'devicon:ie10',
        firefox: 'logos:firefox',
        safari: 'devicon:safari',
        chrome: 'logos:chrome',
        opera: 'logos:opera'
    }

    /* 版本信息获取 */
    // 各主流浏览器
    const getBrowser = () => {
        const u = navigator.userAgent
        const browserList = [{
            name: 'edge',
            it: u.indexOf('Edge') > -1,
        },
        {
            name: 'ie11',
            it: u.indexOf('Trident') > -1 && u.indexOf('rv:11.0') > -1
        },
        {
            name: 'ie',
            it: u.indexOf('compatible') > -1 && u.indexOf('MSIE') > -1
        },
        {
            name: 'firefox',
            it: u.indexOf('Firefox') > -1
        },
        {
            name: 'safari',
            it: u.indexOf('Safari') > -1 && u.indexOf('Chrome') === -1
        },
        {
            name: 'chrome',
            it: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1
        },
        {
            name: 'opera',
            it: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1
        }]
        for (var i = 0; i < browserList.length; i++) {
            if (browserList[i].it) {
                //@ts-ignore
                return { name: browserList[i].name, icon: browserMap[browserList[i].name] }
            }
        }
        return { name: 'other', icon: '' }
    };
    // 系统区分
    const getOS = () => {
        const u = navigator.userAgent
        if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
            return { name: 'windows', icon: osMap['windows'] }
        } else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
            return { name: 'macOS', icon: osMap['macOS'] }
        } else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
            return { name: 'ios', icon: osMap['ios'] }
        } else if (u.match(/android/i)) {
            return { name: 'android', icon: osMap['android'] }
        } else {
            return { name: 'other', icon: '' }
        }
    };

    return { os: { name: getOS().name, icon: getOS().icon }, browser: getBrowser() }
}

/**
 * 获取访客ip信息
 */

export const getIpAddressInfo = async () => {

    // const ipAddress = ''
    // const visitorAddress = ''

    // try {
    //     await Promise.allSettled([
    //         getIpAddress(),
    //         getVisitorAddress(),
    //     ])
    // } catch (error) {
    //     redirectTo404Page()
    // }
}


export const redirectTo404Page = () => {
    return navigateTo('/404')
}