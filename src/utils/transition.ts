export default function trans(
    originStr: string,
    strMap: Record<string, string>
) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(strMap)) {
        originStr = originStr.replaceAll(`:${key}`, value);
    }
    return originStr;
}
