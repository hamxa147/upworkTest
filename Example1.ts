const url: string = '/nx/job-post/regular/';

function isURLAbsolute(url: string): boolean {
    let regExRule: RegExp = new RegExp('^(?:[a-z]+:)?//', 'i');
    const isAbsolute: boolean = regExRule.test(url);
    return isAbsolute;
}

console.log("----------", isURLAbsolute(url))