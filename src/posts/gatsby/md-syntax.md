---
title: "MD formatting "
date: "2019-08-08"
author: "Mika Leinonen"
---

# H1 header 1

## H2 header 1

### H3 header

#### H4 header

##### H5 header

###### H6 header

# H1

## H2

paraghraph is just text with empty line before and after it.

New line is set to end of sentence by adding spaces to the end of line before enter character.  
This is in in a new line.

**Bold text** is set with \*\* characters.

Or with **Bold text** is set with \_\_ characters.

_Italic_ text is set with \* character.

**_ Bold italic _** text is set with \*\*\* characters.

> Block quote

> Several paraghraps in block quote
>
> Second paraghraph

> First paraghraph
>
> > Second paraghraph
>
> Third paraghraph

Normal paraghraph

> ## h2
>
> paraghraph

## Ordered lists

1. First item
2. Second item
3. Third item
4. Fourth item

5. First item
6. Second item

   Text inside the list

7. Third item

   > Block quote inside the list

8. Fourth item

## Second level list

1. First item
1. Second item
1. Third item
   1. intented list
   1. intented list
1. Fourth item

## Unordered lists

- First item
- Second item
- Third item
- Fourth item

## Second level list

- First item
- Second item
- Third item
  - intented list
  - intented list
- Fourth item

---

## Code blocks

Here is HTML code

    <html>
      <head>
        <title>Title</title>

    const i = 1;
    if (i === 1) {
      console.log(i);
    }

---

## Images

Images in the blog:

![grass](./grass.jpg)

---

## Code

Code example:

    .post {
      margin: 1rem 0;

      a {
        background: #f4f4f4;
        color: #000;
        text-decoration: none;
        padding: 1rem;
        display: block;
      }
      a:hover {
        background-color: #e4e4e4;
      }

## Links

Make a [Google search](https://www.google.com)

---

## Links

<https://www.markdownguide.org>

<fake@example.com>

## Format links

I love links like _[dpreview](http://www.dpreview.com)_

## Reference type of links

Favorite photography websites are [dpreview][1], [Fred Miranda][fm], [optical limits] and [Sony alpha rumors].

[1]: https://www.dpreview.com
[fm]: https://www.fredmiranda.com
[optical limits]: https://www.opticallimits.com/
[sony alpha rumors]: https://www.sonyalpharumors.com/

## Image

![Grass](./grass.jpg "Grass title")

## Image with link

<div style="width: 350px">
  <img src="./grass.jpg" alt="grass4"/>
</div>

## Escaping Characters

\* Multiply character and brackets: \[ 1 \] and pound sign \#

1 + 2
\- 2 \* 3 = -3

## Table

| Day     | Meal    | Price |
| ------- | ------- | ----- |
| Monday  | pasta   | \$6   |
| Tuesday | chicken | \$8   |

## Highlited Code

```javascript
var s = "JavaScript syntax highlighting"
alert(s)
if (1) {
  i++
}
```

Normal text

```HTML
<head>
  <div class="heading">
  </div>
</head>
```
