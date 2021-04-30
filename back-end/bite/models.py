from django.db import models


# Create your models here.
class Section(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)

    def __str__(self):
        return str(self.id)


class Modifier(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)

    def __str__(self):
        return str(self.id)


class Item(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    price = models.IntegerField()
    section = models.ForeignKey(Section, related_name='items', on_delete=models.SET_NULL, blank=True, null=True)
    modifiers = models.ManyToManyField(Modifier, blank=True)

    def __str__(self):
        return str(self.id)
