// Creates a new inline group in the Web Console log.
// groupEnd is used to close the group

console.log('level 1');
    console.group();
        console.log('Level 2');
        console.group();
            console.log('Level 3');
        console.groupEnd();
        console.log('Again level 2');
    console.groupEnd();
console.log('Again level 1');

//  groupCollapsed
// Creates a new inline group in the Web Console. 
// Unlike console.group(), however, the new group is created collapsed. 
// The user will need to use the disclosure button next to it to expand it, revealing the entries created in the group.

console.log("Hello!");
console.groupCollapsed();
console.log("Hello again, this time inside a collapsed group!");