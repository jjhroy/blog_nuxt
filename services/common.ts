import { IIpAddressResp } from "~/interface/public";


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
    getVisitorAddress: (ip: string) => useFetch<IIpAddressResp>(
        'http://opendata.baidu.com/api.php',
        {
            params: {
                query: ip,
                resource_id: 6006,
                oe: 'utf8',
            },
            mode: 'no-cors',
            method: 'GET',
        },
    )
}
