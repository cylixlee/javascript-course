function first() {
  console.log(functionScopedVar) // undefined
  if (functionScopedVar === undefined) {
    var functionScopedVar = 'functionScoped'
    console.log(functionScopedVar)
  }
}

function second() {
  // console.log(lexicalScopeVar) // error
  {
    let lexicalScopedVar = 'lexicalScoped'
    console.log(lexicalScopedVar)
  }
  {
    const lexicalScopedConst = 'lexicalScopedConst'
    console.log(lexicalScopedConst)
  }
  // console.log(lexicalScopedConst) // error
}

first()
second()
