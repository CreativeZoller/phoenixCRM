# Taxonomies

A core part of the metadata management for ingredients is done using taxonomies. Taxonomies are
named collection of terms with relations existing between them and translations available for all
terms in all supported languages of the platform.

Currently the following taxonomies are supported:

-   Ingredient
-   Allergen
-   NotSuitableFor

Each taxonomy has a limited number of values, and have a unique human readable, language-independent identifier.

### Example:

Consider an ingredient `SomeRandomIngredient`, containing the allergen `A` and `B` which is not suitable for a preference `Vegan`.

In this case, the ingredient would be idenfified by a taxonomy id `igfd:ingredeint:somerandomingredeint` contianing allergens
`igdf:allergen:a` and `igdf:allergen:b`, and being not suitable for a preference `igdf:notsuitablefor:vegan`.

All ingredients have a translation defined, hence the ingredient object can be modelled as follows:

```json
{
    "igfdTaxIngredientId": "igfd:ingredeint:somerandomingredeint",
    "igfdTaxAllergenIds": ["igdf:allergen:a", "igdf:allergen:b"],
    "igfdTaxNotSuitableForIds": ["igdf:notsuitablefor:vegan"],
    "defaultLanguage": "en",
    "name": "Some Random Ingredient",
    "translations": {
        "de": {
            "name": "Ein zufälliger Zutat"
        },
        "fr": {
            "name": "Une ingrédient aléatoire"
        },
        "pl": {
            "name": "Zupa losowa"
        },
        "es": {
            "name": "Algo raro"
        }
    },

    "_this is a comment_": "the following fields are mappings that are not part of the taxonomy, but are dynamically added to the object in the BE",
    "allergens": [
        {
            "id": "igdf:allergen:a",
            "name": "A",
            "translations": {
                "de": {
                    "name": "A"
                },
                "fr": {
                    "name": "A"
                },
                "pl": {
                    "name": "A"
                },
                "es": {
                    "name": "A"
                }
            }
        },
        {
            "id": "igdf:allergen:b",
            "name": "B",
            "translations": {
                "de": {
                    "name": "B"
                },
                "fr": {
                    "name": "B"
                },
                "pl": {
                    "name": "B"
                },
                "es": {
                    "name": "B"
                }
            }
        }
    ],

    "notSuitableFors": [
        {
            "id": "igdf:notsuitablefor:vegan",
            "name": "Vegan",
            "translations": {
                "de": {
                    "name": "Vegan"
                },
                "fr": {
                    "name": "Vegan"
                },
                "pl": {
                    "name": "Vegan"
                },
                "es": {
                    "name": "Vegan"
                }
            }
        }
    ]
}
```

When retrieving the data, this model is stripped down to only return the relevant data for a given language.
