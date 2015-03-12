# Random Enough

Find something, grab a given number of them at random and add classes.

## Usage

    jQuery('.foo').randomEnough({
      number: 15,
      excludeClass: "bar",
      includeClass: 'baz'
    });

### `number`

How many random items to find. The default is 5.

### `includeClass`

Items selected at random will be given this class.

### `excludeClass`

Matching items not given the `includeClass` will be given this class.
