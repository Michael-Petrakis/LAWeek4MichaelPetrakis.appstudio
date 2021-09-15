let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 
'Marge', 'Sam']

withSal = petNames
withSal.push('Sal')

//withSal = [petNames + (', Sal')]

console.log(withSal)
console.log(`The third pet is name ${withSal[2]}`)

let lengthWithSal = withSal.length

console.log(lengthWithSal)

withSal.pop()

console.log(withSal)