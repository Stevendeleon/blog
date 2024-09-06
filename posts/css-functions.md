---
title: (Web) - CSS Functions
date: '2024-09-06'
draft: false
tags:
  - Tech
  - CSS
  - Front end
  - Web Development
  - Software Engineering
comments: {}
---

CSS contains various built-in functions. Unlike programming languages, you do not have the ability to create your 
own CSS function. 

<!--more-->

### Basics

What does it look like?:
```css
selector {
    property: function([argument]? [, argument]!);
}
```

* *`url()`* is a commonly used CSS function used to include files
```css
  selector {
      background-image: url("<path-to-image>.webp")
  }
```
    
### Function Categories

#### Transform
  * Useful for manipulating the appearance of elements in a 2D or 3D space.
#### Math
  * Used for performing mathematical calculations to aid in dynamic and responsive design.
#### Filter
  * Great for applying graphical effects such as contrast, color shifting or burning. These help to enhance or modify
  the appearance of images, backgrounds and more.
#### Color
  * Used to create and manipulate colors dynamically.
#### Image
  * Great for modifying and enhancing the display of images.
#### Counter
  * I find these useful for lists, sections and ordered content in general. 
  You can create custom counters to aid in automatic numbering or ordering of elements.
#### Shape
  * For complex non-rectangular shapes. Most likely used in advanced design and layouts. You can create custom
  clipping paths, exclusions, and more intricate visual effects.
#### Reference
  * Used to reference external resources or elements inside CSS. You can incorporate additional data 
  or styles dynamically
#### Grid
  * For defining and manipulating the layout of grid-based designs. These are quite powerful!
#### Font
  * Used to define and control the rendering of text. Helps to ensure consistency and flexibility
  across different devices and browsers.
#### Easing
  * These are awesome! Use these when you want to define the "timing" and "acceleration" of animations or transitions.
  * You can create smooth natural-looking motion effects by controlling how an animated element
  progresses over time _(start to finish)_
#### Animation
  * Keyframes! Used to define and control animations enabling elements to change styles smoothly
#### Anchor positioning
  * For precisely placing elements within a container or relative to other elements. _(controlling their position)_

### MDN docs
They cover absolutely everything from A-Z

> [!note]
> For a more complete in-depth list, checkout the official MDN docs on CSS functions
>
>➡ [MDN - CSS Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)