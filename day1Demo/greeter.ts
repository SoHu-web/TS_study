function greeter(person:string) {
// TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。    
    return "Hello," + person
}

let user = "Jane User"
// let user = [0,1,2]
// TypeScript会告诉你使用了非期望个数的参数调用了这个函数。TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。
// 要注意的是尽管有错误，greeter.js文件还是被创建了。 就算你的代码里有错误，你仍然可以使用TypeScript。但在这种情况下，TypeScript会警告你代码可能不会按预期执行。

document.body.innerHTML = greeter(user)

export {}