# Guidelines

We have formatting guidelines for the following languages:

-   [Python language](#python-language)
-   [Typescript language](#typescript-language)
-   [HTML language](#html-language)
-   [SCSS language](#scss-language)

## General Naming Conventions

Ingredifind typically uses singular nouns rather than plurals for naming. For example:

    .rs-container // SCSS
    createDish() // TypeScript
    update_customer() # Python

but not:

    .rs-containers // SCSS
    createDishes() // TypeScript
    update_customers() # Python

You may find counterexamples, but new classes and methods should use the singular form.

_Special Cases_: In some cases, when we know we are returning multiple elements, it may be appropriate to use the plural form. For example:

```python
get_products() # python
```

is properly names since we know we are getting multiple products.

## Python Language

Python files in the Ingredifind codebase should be formatted using the [Black 22.3](https://black.readthedocs.io/en/stable/). All new
projects should be formatted, while existing projects are gradually being opted-in. If you are working on a project where files have not
been correctly formatted, please make a separate commit to format the file using Black.

To format the project with Black, use the following command:

```bash
$ docker run -v $(pwd):/workdir -w /workdir cytopia/black --line-length 140 backend/.
```

Please follow these formatting guidelines:

-   Python indent is 4 spaces (_Should be done by Black_)
-   Line width is 140 characters (_Should be done by Black_)
-   Note that comments are not formatted, but Black enforces two spaces between code and a comment on the same line, and a space before the
    comment text begins.

## TypeScript Language

TypeScript files in the Ingredifind codebase should be formatted using the [Prettier](https://prettier.io/docs/en/index.html) plugin. All
new projects should be formatted, while existing projects are gradually being opted-in. If you are working on a project where files have not
been correctly formatted, please make a separate commit to format the file using Prettier.

Please follow these formatting guidelines:

-   TypeScript indent is 4 spaces (_Should be done by Prettier_)
-   Line width is 140 characters (_Should be done by Prettier_)

To install Prettier follow the instructions [here](https://prettier.io/docs/en/install.html):

```bash
$ npm install --save-dev --save-exact prettier
```

To format the project with Prettier, use the following command:

```bash
$ cd frontend # make sure you are in the correct directory
$ npx prettier --write .
```

## HTML Language

HTML files in the Ingredifind codebase use Bootstrap and Font Awesome classes, try to use these classes rather than creating new custom
classes.

HTML files in the Ingredifind codebase should be formatted using the [Prettier](https://prettier.io/docs/en/index.html) plugin. All new
projects should be formatted, while existing projects are gradually being opted-in. If you are working on a project where files have not
been correctly formatted, please make a separate commit to format the file using Prettier.

Please follow these formatting guidelines:

-   TypeScript indent is 4 spaces (_Should be done by Prettier_)
-   Line width is 140 characters (_Should be done by Prettier_)

## SCSS Language

SCSS files in the Ingredifind codebase should be formatted using the [Prettier](https://prettier.io/docs/en/index.html) plugin. All new
projects should be formatted, while existing projects are gradually being opted-in. If you are working on a project where files have not
been correctly formatted, please make a separate commit to format the file using Prettier.

Please follow these formatting guidelines:

-   TypeScript indent is 4 spaces (_Should be done by Prettier_)
-   Line width is 140 characters (_Should be done by Prettier_)

In addition, SCSS files in the Ingredifind codebase follow the BEM methodology, it stands for Block, Element, and Modifier.
To learn more about BEM, [click here](). All new projects must follow BEM, while existing projects are gradually being opted-in.

In addition to BEM, please follow these additional guidelines:

-   Nesting must not extend more than 3 levels deep
-   Use REMs for sizes and spacing
-   Use EMs for media queries
-   Elements should not be nested withing another element
-   SCSS classes should not modify Bootstrap classes
-   All colors should reference variable colors from `colors.scss`.

#### Shorthands

Also, we typically use shorthands for block names, as shown in the example above. If you use a shorthand, please specify in the top of the
file the shorthand meaning and abbreviation. For example:

    /*
    ======================
    Restaurant Settings rs
    Model m
    ======================
    */

You may find counterexamples, but new shorthands should follow this style.

#### Color naming

Ingredifind uses `color.scss` to reference colors. When adding a missing color, we typically name the variable after the purpose of the color. For example:

    --subheader: #101010;
    --error: #red;

but not:

    --somewhat-black: #101010;
    --red: #red;

You may find counterexamples, but new variable should follow this style.

_Special case_: If you are using alternating colors, then it is appropriate to include the visual color name. For example

    --subheader-black: #000000;
    --subheader-green: #469428;

If you have any questions with regard to any of the style guidelines, please reach out. We will be happy to assist.
