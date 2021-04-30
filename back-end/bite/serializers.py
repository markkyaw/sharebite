from rest_framework import serializers
from bite.models import Section, Item, Modifier
from django.http import Http404


class ModifierSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return Modifier.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.save()
        return instance

    class Meta:
        model = Modifier
        fields = ['id', 'title']


class ItemSerializer(serializers.ModelSerializer):
    # modifiers = ModifierSerializer(many=True)

    def create(self, validated_data):
        return Item.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.price = validated_data.get('price', instance.price)
        print("section", validated_data.get('section', instance.section))
        # try:
        #     instance.section = Section.objects.get(title=validated_data.get('section', instance.section))
        # except Section.DoesNotExist:
        #     raise Http404
        # print("Section", validated_data.get('section', instance.section))
        # print("Modifiers", validated_data.get('modifiers', instance.modifiers))
        # for mod in validated_data.get('modifiers', instance.modifiers):
        #     print("mod", mod)
        instance.save()
        return instance

    class Meta:
        model = Item
        fields = ['id', 'title']


class SectionSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)

    def create(self, validated_data):
        return Section.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance

    class Meta:
        model = Section
        fields = ['id', 'title', 'items']
