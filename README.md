# Lemmings

Little pixel walkers that roam any web page. They walk on borders, buttons, images and text, turn at walls, and fall to the bottom of the window. Pick them up, throw them, or resize the window to launch them.

One script, no dependencies. The sprites are pure CSS, with no images.

## Use

On your site:

```html
<script src="https://cdn.jsdelivr.net/gh/MarkBlah/lemmings@main/walker.min.js"></script>
```

From the DevTools console on any page:

```js
document.head.append(Object.assign(document.createElement('script'),{src:'https://cdn.jsdelivr.net/gh/MarkBlah/lemmings@main/walker.min.js'}))
```

Each load adds one walker. `__walker.add()` adds more.
