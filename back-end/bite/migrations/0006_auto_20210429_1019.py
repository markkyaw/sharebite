# Generated by Django 3.2 on 2021-04-29 17:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bite', '0005_auto_20210429_1005'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='modifiers',
        ),
        migrations.AddField(
            model_name='modifier',
            name='items',
            field=models.ManyToManyField(blank=True, null=True, to='bite.Item'),
        ),
        migrations.AlterField(
            model_name='item',
            name='section',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='bite.section'),
        ),
    ]
