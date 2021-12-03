## Closures 

### Closures give you access to an outer function scope from an inner function

**Closures are functions that can access values outside of their own curly braces**

Simple example of a closure
```js 
let b = 3;

function Fun(a) {
  return a + b;
}

// This function is a closure as it has access to other data outside of its scope
```

**The inner function has access to the outer function 
but the outer function does not have access to the inner function**

Example 
```js
function makeConverter(rate) {
	function converter(number) {
		return rate * number;
	}

	return converter;
}

gbp_to_eur = makeConverter(1.12)
eur_to_gdp = makeConverter(0.89)

gbp_to_eur(34) // 38.080000000000005
gbp_to_eur(1000) // 1120

eur_to_gdp(200) // 178

// The functions gbp_to_eur and eur_to_gdp are closures.

```

