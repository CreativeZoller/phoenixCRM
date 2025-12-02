# Translations

## Backend

Translations in the backend django applications is managed using gettext and PO files.

The follow things are relevant when working with the backend:

### Adding an error message or a text that the user will see in the UI

Any errors or texts that the user will see in the UI should be added to the `django.po` file.
This is done by the adding the following in your code

.py files

```python
from django.utils.translation import gettext as _

translatable_text = _("This is a translatable text")
```

.txt & .html files

```text

{% load i18n %}
{% trans "This is a translatable text" %}
```

Once these are added, run the following command

```bash
$ python manage.py makemessages -a -e html,txt,py --no-obsolete --symlinks
```

This adds the required translations to the po files.

The .po files then are required to be updated.

Then compile the translations

```bash
$ python manage.py compilemessages
```

Then commit the .po files and the .mo files to the repository.

### Adding a new language

To add a new language, a new `django.po` file needs to be created.
Then the following command can be used to add the new language to the project.

```bash
$ python manage.py makemessages -l fr_CA -e html,txt,py --no-obsolete --symlinks
```

The above command creates translations for french in Canada.

Then the following command can be used to compile the translations.

```bash
$ python manage.py compilemessages
```

Once compiled, both the .po and .mo files can be added to the repository.

### Updating a translation to a spcific text that is already present in the application

1. Update the `django.po` file with the new translation for the given language.

1. Compile the translations.

```bash
$ python manage.py compilemessages
```

1. Commit the .po files and the .mo files to the repository.
