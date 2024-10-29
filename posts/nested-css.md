---
title: Nested CSS
date: '2024-09-08'
draft: false
tags:
  - Tech
  - CSS
  - Front end
  - Web Development
  - Software Engineering
comments: {}
---

It's finally here! A much loved feature of CSS preprocessors is now part of the
language itself

<!--more-->

## Explanation

Prior to **CSS Nesting**, you the author/developer were required to explicitly
declare each selector separately from one another.

This new feature in CSS allows you to write selectors in a hierarchical, nested
structure similar to how nesting works in preprocessors like Sass or Less.
Allowing for code to be more readable and concise by letting you nest child
selectors within their parent selectors directly, without needing to repeat the
full selector path.

For example:

### Before

```css
.container {
  color: black;
}

.container .item {
  color: blue;
}
```

### After

```css
.container {
  color: black;

  & .item {
    color: blue;
  }
}
```

## Benefits

#### Improve Readability and Structure

- Nesting allows you to group related styles together, reflecting the structure
  of the HTML directly in your CSS. This improves readability by making the
  relationship between elements more explicit.
- It visually organizes styles in a hierarchical manner, making it easier to
  understand the layout and flow of the design.

#### Reduced Repetition

- With CSS Nesting, you avoid repeating the parent selectors for child elements.
  This reduces the amount of code you need to write and maintain, which can lead
  to fewer errors and easier updates.

#### Scoping

- By nesting styles, you create a clear scope for your CSS rules.

#### Maintenance

- Changes to parent styles can be managed more efficiently. Since related styles
  are grouped together, you can easily locate and modify styles without having
  to search through a long list of selectors.

## Codepen

Here's a great snippet example:

<iframe src="https://codepen.io/web-dot-dev/embed/RwYLRdr" id="code-pen-iframe"></iframe>

### Additional docs

> [!note] For more documentation checkout MDN's resources
>
> ➡ [CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
>
> ➡
> [Using CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)

<style>
    #code-pen-iframe { width: 100%; height: 420px; }
</style>
