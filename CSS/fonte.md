# Trabalhando com fontes

Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo

---------------------------------------------------

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

--------------------------------------------------

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* inclui *fallback* font

```css
p {
    font-family: "Times New Roman", Times, serif;
}
```

    - serif
    - sans

--------------------------------------------------

## Font Size

* O tamanho da fonte

```css
p {
    font-size: 18px;
}

```

---------------------------------------------------

## Web Fonts

- fontes do sistema x fontes da web
- como usar fontes para web?

* @font-face
* @import
* link


### Referências

https://www.w3.org/TR/css-fonts-3/
https://css-tricks.com/snippets/css/using-font-face/

## text-decoration

* Aparencia decorativa de um texto
* line: underline | overline | line-through
* podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p {
    text-decoration: underline; /* shorthand */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration


## text-align

* Alinhamento de um texto

```css
p {
    text-align: center; /* left right center justify */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

## text-shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p {
    text-shadow: 1px 1px 1px red,
    2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}

https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

## Shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height, e font-family.

```css
p {
    /* -style, -variant, -weight, -stretch, -size, line-height, e family. */
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```

