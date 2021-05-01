from bite.models import Section
from bite.serializers import MenuSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class MenuList(APIView):
    def get(self, request, format=None):
        sections = Section.objects.all()
        serializer = MenuSerializer(sections, many=True)
        return Response(serializer.data)


class MenuDetail(APIView):
    def get_object(self, pk):
        try:
            return Section.objects.get(pk=pk)
        except Section.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        section = self.get_object(pk)
        serializer = MenuSerializer(section)
        return Response(serializer.data)
