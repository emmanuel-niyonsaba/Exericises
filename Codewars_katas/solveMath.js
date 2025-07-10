

// This if for reversing the mathematical equition and stay meaning full

function solve(eq){
  let regEx = /[a-zA-Z0-9]+|[+\-*/]/g
      return eq.match(regEx).reverse().join('')
}