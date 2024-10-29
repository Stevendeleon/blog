---
title: Object.groupBy()
date: '2024-09-10'
draft: false
tags:
  - Tech
  - JavaScript
  - Web Development
  - Software Engineering
comments: {}
---

![img.png](../uploads/mdn-baselines/object-group-by.png)

<!--more-->

## Explanation

This new function in JavaScript is a powerful way for grouping elements into an
array based on a specified property or condition. It works by iterating over
each element in the array and creating a new group for elements that share the
same value for the specified property.

## Usage

_(As per MDN Docs)_:

```javascript
Object.groupBy(items, callbackFn);
```

`items` An iterable (such as an Array) whose elements will be grouped.

`callbackFn` A function to execute for each element in the iterable. It should
return a value that can get coerced into a property key (string or symbol)
indicating the group of the current element. The function is called with the
following arguments:

- `element` The current element being processed.

- `index` The index of the current element being processed.

`Return value` A null-prototype object with properties for all groups, each
assigned to an array containing the elements of the associated group.

## Demonstration

Let's use this data below on animals.

```javascript
const animals = [
  { name: "Lion", category: "Mammal", classification: "Carnivore" },
  { name: "Eagle", category: "Bird", classification: "Carnivore" },
  { name: "Elephant", category: "Mammal", classification: "Herbivore" },
  { name: "Frog", category: "Amphibian", classification: "Carnivore" },
  { name: "Shark", category: "Fish", classification: "Carnivore" },
  { name: "Mike Wazowski", classification: "Fictional Monster" },
];
```

Now how can we organize this data by a property or condition and grouping these
by their category?

### Before

- This could be achieved by using `Array.prototype.reduce()`

```javascript
const groupedByCategory = animals.reduce((acc, animal) => {
  const { category } = animal;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(animal);

  return acc;
}, {});
```

### After

- Using the new `Object.groupBy()`

```javascript
const result = Object.groupBy(animals, ({ category }) => category);
```

Both yield the same result:

```json
{
  "Mammal": [
    {
      "name": "Lion",
      "category": "Mammal",
      "classification": "Carnivore"
    },
    {
      "name": "Elephant",
      "category": "Mammal",
      "classification": "Herbivore"
    }
  ],
  "Bird": [
    {
      "name": "Eagle",
      "category": "Bird",
      "classification": "Carnivore"
    }
  ],
  "Amphibian": [
    {
      "name": "Frog",
      "category": "Amphibian",
      "classification": "Carnivore"
    }
  ],
  "Fish": [
    {
      "name": "Shark",
      "category": "Fish",
      "classification": "Carnivore"
    }
  ],
  "undefined": [
    {
      "name": "Mike Wazowski",
      "classification": "Fictional Monster"
    }
  ]
}
```

> [!tip] Bear in mind, sometimes your data will not include the "thing" you are
> looking for.
>
> When that happens it will return a key for `undefined` and associate that data
> to it.

#### Handling the undefined

You can handle this condition by providing a new string to be returned:

```javascript
const result = Object.groupBy(
  animals,
  ({ category }) => category ? category : "other",
);
```

This will yield these results:

```json
{
  "Mammal": [...],
  "Bird": [...],
  "Amphibian": [...],
  "Fish": [...],
  "other": [
    {
      "name": "Mike Wazowski",
      "classification": "Fictional Monster"
    }
  ]
}
```

#### Alternative Syntax

You can abstract the callback function if you'd like:

```javascript
function handleCallBack(item, index) {
  return item.category ? item.category : "other";
}

const result = Object.groupBy(animals, handleCallBack);
```

### Additional Docs

> [!note] For more documentation checkout MDN's resources
>
> ➡
> [Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy>)
