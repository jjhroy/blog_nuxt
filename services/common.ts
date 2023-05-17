import { IIpAddressResp } from "~/types/common";


export const commonApi = {
    /**
     * 获取外网ip
     * @returns 
     */
    getIpAddress: () => useFetch<string>(
        'https://www.taobao.com/help/getip.php',
        {
            mode: 'no-cors',
            method: 'GET',
        },
    ),
    /**
     * 获取ip物理地址
     * @returns 
     */
    getVisitorAddress: () => useFetch<IIpAddressResp>(
        'http://opendata.baidu.com/api.php',
        {
            params: {
                query: '106.122.221.85',
                resource_id: 6006,
                oe: 'utf8',
            },
            mode: 'no-cors',
            method: 'GET',
        },
    )
}
