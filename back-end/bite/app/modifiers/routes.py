from bite.models import Modifier
from bite.serializers import ModifierSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ModifierList(APIView):
    def get(self, request, format=None):
        modifiers = Modifier.objects.all()
        serializer = ModifierSerializer(modifiers, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ModifierSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class ModifierDetail(APIView):
    def get_object(self, pk):
        try:
            return Modifier.objects.get(pk=pk)
        except Modifier.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        modifier = self.get_object(pk)
        serializer = ModifierSerializer(modifier)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        modifier = self.get_object(pk)
        serializer = ModifierSerializer(modifier, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        modifier = self.get_object(pk)
        modifier.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
