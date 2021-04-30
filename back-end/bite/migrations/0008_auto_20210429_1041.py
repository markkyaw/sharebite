# Generated by Django 3.2 on 2021-04-29 17:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bite', '0007_alter_modifier_items'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='modifier',
            name='items',
        ),
        migrations.AddField(
            model_name='item',
            name='modifier',
            field=models.ManyToManyField(blank=True, to='bite.Modifier'),
        ),
        migrations.AlterField(
            model_name='item',
            name='section',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='bite.section'),
        ),
    ]