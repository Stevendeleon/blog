---
title: CSS @layer
date: '2024-09-11'
draft: false
tags:
  - CSS
  - Front end
  - Web Development
comments: {}
---

Ever wanted to have more control over the Cascading order of your stylesheets?
This new browser-wide feature makes is easier than ever.

<!--more-->

## Explanation

The **@layer** rule in CSS is a way to organize and manage different stylesheets
into groups called "layers." Each layer is a separate unit, and you can control
the order in which they are applied to your HTML elements.

### Syntax

```css
/* statement at-rules */
@layer layer-name;
@layer layer-name, layer-name, layer-name;

/* block at-rules */
@layer {rules}
@layer layer-name {rules}
```

#### layer-name

- Is the name of the cascade layer

#### rules

- Is the set of CSS rules in the cascade layer

## Demo

<iframe src="https://codepen.io/stevendeleon/embed/ZEdPwoq" id="code-pen-iframe"></iframe>

If you look at the CSS order, despite declaring the non-layered style first it
will still be applied after the layer styles.

> [!note]
>
> For more documentation checkout MDN's resources
>
> ➡ [CSS @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

<style>
  #code-pen-iframe { width: 100%; height: 330px; }
</style>
