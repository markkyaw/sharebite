# Generated by Django 3.2 on 2021-04-29 18:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bite', '0009_rename_modifier_item_modifiers'),
    ]

    operations = [
        migrations.RenameField(
            model_name='modifier',
            old_name='description',
            new_name='title',
        ),
    ]
